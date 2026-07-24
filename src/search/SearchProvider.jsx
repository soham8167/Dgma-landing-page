import React, {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from "react";
import { searchGlobalIndex } from "./SearchEngine";
import { buildPopularQueries } from "./SearchUtils";
import { getRecentSearches, saveRecentSearch } from "./SearchHistory";
import { navigateToResult } from "./SearchNavigator";

const SearchContext = createContext(null);

export const SearchProvider = ({ children, items = [] }) => {
  const [query, setQuery] = useState("");
  const [debouncedQuery, setDebouncedQuery] = useState("");
  const [recentSearches, setRecentSearches] = useState(getRecentSearches);
  const [activeIndex, setActiveIndex] = useState(-1);

  const results = useMemo(
    () => searchGlobalIndex(debouncedQuery, { items, limit: 20 }),
    [debouncedQuery, items],
  );
  const suggestions = useMemo(() => results.slice(0, 10), [results]);

  const updateQuery = useCallback((value) => {
    setQuery(value);
    const timer = window.setTimeout(() => setDebouncedQuery(value.trim()), 300);
    return () => window.clearTimeout(timer);
  }, []);

  const clearQuery = useCallback(() => {
    setQuery("");
    setDebouncedQuery("");
    setActiveIndex(-1);
  }, []);

  const recordSearch = useCallback((value) => {
    const nextSearches = saveRecentSearch(value);
    setRecentSearches(nextSearches);
    return nextSearches;
  }, []);

  const selectResult = useCallback(
    (item) => {
      if (!item) {
        return;
      }

      recordSearch(item.title);
      navigateToResult(item);
      setQuery(item.title);
      setDebouncedQuery(item.title);
    },
    [recordSearch],
  );

  const handleKeyDown = useCallback(
    (event) => {
      if (!debouncedQuery) {
        return;
      }

      if (event.key === "ArrowDown") {
        event.preventDefault();
        setActiveIndex((current) =>
          current < suggestions.length - 1 ? current + 1 : 0,
        );
      }

      if (event.key === "ArrowUp") {
        event.preventDefault();
        setActiveIndex((current) =>
          current > 0 ? current - 1 : suggestions.length - 1,
        );
      }

      if (event.key === "Enter") {
        event.preventDefault();
        const selected = suggestions[activeIndex] || suggestions[0];
        if (selected) {
          selectResult(selected);
        }
      }

      if (event.key === "Escape") {
        event.preventDefault();
        clearQuery();
      }
    },
    [activeIndex, clearQuery, debouncedQuery, selectResult, suggestions],
  );

  const value = useMemo(
    () => ({
      query,
      setQuery: updateQuery,
      debouncedQuery,
      results,
      suggestions,
      recentSearches,
      activeIndex,
      setActiveIndex,
      clearQuery,
      recordSearch,
      selectResult,
      handleKeyDown,
      popularSearches: buildPopularQueries(),
    }),
    [
      activeIndex,
      clearQuery,
      debouncedQuery,
      query,
      recentSearches,
      recordSearch,
      results,
      selectResult,
      suggestions,
      updateQuery,
    ],
  );

  return (
    <SearchContext.Provider value={value}>{children}</SearchContext.Provider>
  );
};

export const useGlobalSearch = () => {
  const context = useContext(SearchContext);
  if (!context) {
    throw new Error("useGlobalSearch must be used within SearchProvider");
  }

  return context;
};
