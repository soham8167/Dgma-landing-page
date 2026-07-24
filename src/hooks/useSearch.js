import { useCallback, useEffect, useMemo, useState } from "react";
import {
  searchItems,
  getClosestMatches,
  normalizeQuery,
} from "../utils/searchEngine";
import { addRecentSearch, getRecentSearches } from "../utils/recentSearch";

export const useSearch = ({
  items = [],
  debounceMs = 300,
  maxSuggestions = 8,
  onSelect,
} = {}) => {
  const [query, setQuery] = useState("");
  const [debouncedQuery, setDebouncedQuery] = useState("");
  const [activeIndex, setActiveIndex] = useState(-1);
  const [recentSearches, setRecentSearches] = useState(getRecentSearches);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setDebouncedQuery(query.trim());
    }, debounceMs);

    return () => window.clearTimeout(timer);
  }, [query, debounceMs]);

  const normalizedQuery = useMemo(
    () => normalizeQuery(debouncedQuery),
    [debouncedQuery],
  );

  const results = useMemo(
    () => searchItems(items, normalizedQuery),
    [items, normalizedQuery],
  );
  const suggestions = useMemo(
    () => results.slice(0, maxSuggestions),
    [maxSuggestions, results],
  );
  const didYouMean = useMemo(
    () => getClosestMatches(items, normalizedQuery, 4),
    [items, normalizedQuery],
  );

  const clearQuery = useCallback(() => {
    setQuery("");
    setActiveIndex(-1);
  }, []);

  const saveCurrentSearch = useCallback(
    (value = query) => {
      const nextSearches = addRecentSearch(value);
      setRecentSearches(nextSearches);
      return nextSearches;
    },
    [query],
  );

  const selectSuggestion = useCallback(
    (item) => {
      if (!item) {
        return;
      }

      const nextValue = item.title || item.label || item.name || "";
      saveCurrentSearch(nextValue);
      setQuery(nextValue);
      onSelect?.(item);
    },
    [onSelect, saveCurrentSearch],
  );

  const handleKeyDown = useCallback(
    (event) => {
      if (!normalizedQuery) {
        if (event.key === "Escape") {
          clearQuery();
        }
        return;
      }

      if (event.key === "ArrowDown") {
        event.preventDefault();
        setActiveIndex((currentIndex) =>
          currentIndex < suggestions.length - 1 ? currentIndex + 1 : 0,
        );
      }

      if (event.key === "ArrowUp") {
        event.preventDefault();
        setActiveIndex((currentIndex) =>
          currentIndex > 0 ? currentIndex - 1 : suggestions.length - 1,
        );
      }

      if (event.key === "Enter") {
        event.preventDefault();
        const highlightedItem = suggestions[activeIndex] || suggestions[0];
        if (highlightedItem) {
          selectSuggestion(highlightedItem);
        }
      }

      if (event.key === "Escape") {
        event.preventDefault();
        clearQuery();
      }
    },
    [activeIndex, clearQuery, normalizedQuery, selectSuggestion, suggestions],
  );

  useEffect(() => {
    if (!normalizedQuery) {
      setActiveIndex(-1);
      return;
    }

    if (activeIndex >= suggestions.length) {
      setActiveIndex(suggestions.length - 1);
    }
  }, [activeIndex, normalizedQuery, suggestions.length]);

  return {
    query,
    setQuery,
    debouncedQuery: normalizedQuery,
    results,
    suggestions,
    recentSearches,
    didYouMean,
    activeIndex,
    setActiveIndex,
    clearQuery,
    saveCurrentSearch,
    selectSuggestion,
    handleKeyDown,
  };
};
