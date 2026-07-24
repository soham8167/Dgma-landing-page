import React, { useMemo, useState } from "react";
import {
  FiSearch,
  FiMapPin,
  FiAward,
  FiBookOpen,
  FiVideo,
  FiShield,
  FiFileText,
  FiBell,
  FiGrid,
} from "react-icons/fi";
import SearchBar from "../components/search/SearchBar";
import SearchResults from "../components/search/SearchResults";
import { useGlobalSearch } from "../search/SearchProvider";
import { popularSearchTerms } from "../utils/searchContent";

const suggestionTags = [
  [
    "Ship recycling Gujarat",
    "STCW courses",
    "Alang facilities",
    "ETO training",
    "IMU Chennai",
  ],
  ["Hong Kong Convention", "GP Rating institutes", "Maritime handbook 2024"],
];

const categoryTabs = [
  { id: "all", label: "All", icon: FiSearch },
  { id: "facilities", label: "Facilities", icon: FiMapPin },
  { id: "institutes", label: "Institutes", icon: FiAward },
  { id: "publications", label: "Publications", icon: FiBookOpen },
  { id: "videos", label: "Videos", icon: FiVideo },
  { id: "certifications", label: "Certifications", icon: FiShield },
  { id: "acts", label: "Acts & Rules", icon: FiFileText },
  { id: "circulars", label: "Circulars", icon: FiBell },
  { id: "news", label: "News", icon: FiGrid },
];

const UniversalSearch = () => {
  const [activeTab, setActiveTab] = useState("all");
  const {
    query,
    setQuery,
    debouncedQuery,
    results,
    suggestions,
    recentSearches,
    activeIndex,
    clearQuery,
    recordSearch,
    selectResult,
    handleKeyDown,
  } = useGlobalSearch();

  const handleTagClick = (tag) => {
    setQuery(tag);
    recordSearch(tag);
  };

  const handleSubmit = () => {
    if (query.trim()) {
      recordSearch(query);
    }
  };

  const visibleResults = useMemo(() => {
    if (!debouncedQuery) {
      return [];
    }

    if (activeTab === "all") {
      return results;
    }

    const scopeMap = {
      facilities: ["card", "location"],
      institutes: ["page", "section"],
      publications: ["page"],
      videos: ["card"],
      certifications: ["tag", "card"],
      acts: ["page"],
      circulars: ["page"],
      news: ["card"],
    };

    return results.filter((item) => scopeMap[activeTab]?.includes(item.type));
  }, [activeTab, debouncedQuery, results]);

  const hasQuery = Boolean(debouncedQuery);
  const showNoResults = hasQuery && !visibleResults.length;

  return (
    <section className="w-full max-w-[1562px] min-h-225 bg-[#EFECE6] text-[#1A1A1A] font-sans mx-auto flex flex-col justify-between">
      <div className="pt-18 pb-10 px-4 md:px-20 flex flex-col items-center text-center">
        <span className="text-[#655843] font-mono font-bold text-[11px] tracking-[0.25em] uppercase mb-3">
          UNIVERSAL SEARCH
        </span>

        <h1 className="text-4xl sm:text-5xl lg:text-[56px] font-serif font-bold text-[#111111] leading-tight mb-3">
          Search Everything
        </h1>

        <p className="text-xs sm:text-sm text-[#555048] max-w-150 leading-relaxed mb-8">
          Facilities, institutes, publications, videos, certifications,
          regulations, circulars — all in one place.
        </p>

        <div className="w-full max-w-160 relative mb-6">
          <SearchBar
            value={query}
            onChange={setQuery}
            onClear={clearQuery}
            onKeyDown={handleKeyDown}
            onSubmit={handleSubmit}
            placeholder='Try "ship recycling Gujarat" or "ETO courses"...'
          />
        </div>

        <div className="flex flex-col items-center gap-2 mb-4">
          {suggestionTags.map((row, rowIdx) => (
            <div
              key={rowIdx}
              className="flex flex-wrap items-center justify-center gap-2"
            >
              {row.map((tag, tagIdx) => (
                <button
                  key={tagIdx}
                  onClick={() => handleTagClick(tag)}
                  className="px-3.5 py-1 bg-[#E4E0D6]/60 hover:bg-[#DED9CC] border border-[#D8D2C4] rounded-full text-[12px] font-serif text-[#4A453B] transition-all cursor-pointer whitespace-nowrap"
                >
                  {tag}
                </button>
              ))}
            </div>
          ))}
        </div>
      </div>

      <div className="w-full border-t border-[#E2DDCF] bg-[#EFECE6] py-3 px-4 md:px-20">
        <div className="max-w-365 mx-auto flex items-center justify-center gap-1.5 overflow-x-auto scrollbar-none">
          {categoryTabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-medium transition-all cursor-pointer whitespace-nowrap ${
                  isActive
                    ? "bg-[#181818] text-white shadow-xs"
                    : "text-[#555048] hover:text-[#111111] hover:bg-[#E4E0D6]/50"
                }`}
              >
                <Icon
                  className={`w-3.5 h-3.5 ${isActive ? "text-white" : "text-[#655843]"}`}
                />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      <div className="flex-1 min-h-95 bg-[#EFECE6] border-t border-[#E8E4D9] p-4 md:p-8">
        <div className="mx-auto flex w-full max-w-245 flex-col gap-4">
          {hasQuery ? (
            <>
              <div className="flex items-center justify-between rounded-2xl border border-[#E2DDCF] bg-[#F8F4EB] px-4 py-3 shadow-sm">
                <div>
                  <p className="text-sm font-semibold text-[#111111]">
                    Showing {visibleResults.length} result
                    {visibleResults.length === 1 ? "" : "s"}
                  </p>
                  <p className="text-xs text-[#6B7280]">
                    Ranked for title, phrase, description and keyword relevance.
                  </p>
                </div>
                <span className="rounded-full bg-white px-3 py-1 text-xs font-medium text-[#655843]">
                  {debouncedQuery}
                </span>
              </div>

              {showNoResults ? (
                <div className="w-full space-y-4">
                  <SearchResults
                    results={[]}
                    query={debouncedQuery}
                    emptyMessage="No results found"
                  />
                </div>
              ) : (
                <SearchResults
                  results={visibleResults}
                  query={debouncedQuery}
                  emptyMessage="No results found"
                />
              )}
            </>
          ) : (
            <div className="grid gap-4 md:grid-cols-2">
              <div className="rounded-2xl border border-[#E2DDCF] bg-[#F8F4EB] p-5 text-left shadow-sm">
                <h3 className="text-base font-semibold text-[#111111]">
                  Recent searches
                </h3>
                <p className="mt-1 text-sm text-[#6B7280]">
                  Pick up where you left off with your last searches.
                </p>
                {recentSearches.length ? (
                  <div className="mt-4 flex flex-wrap gap-2">
                    {recentSearches.map((item) => (
                      <button
                        key={item}
                        type="button"
                        onClick={() => {
                          setQuery(item);
                          recordSearch(item);
                        }}
                        className="rounded-full border border-[#D8D2C4] bg-white px-3 py-1.5 text-sm text-[#4A453B] transition-all hover:bg-[#EEE7D8]"
                      >
                        {item}
                      </button>
                    ))}
                  </div>
                ) : (
                  <p className="mt-4 text-sm text-[#6B7280]">
                    Your recent searches will appear here.
                  </p>
                )}
              </div>
              <div className="rounded-2xl border border-[#E2DDCF] bg-white/90 p-5 text-left shadow-sm">
                <h3 className="text-base font-semibold text-[#111111]">
                  Popular searches
                </h3>
                <p className="mt-1 text-sm text-[#6B7280]">
                  Popular topics across the maritime knowledge base.
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {popularSearchTerms.map((item) => (
                    <button
                      key={item}
                      type="button"
                      onClick={() => handleTagClick(item)}
                      className="rounded-full border border-[#D8D2C4] bg-[#F8F4EB] px-3 py-1.5 text-sm text-[#4A453B] transition-all hover:bg-[#EEE7D8]"
                    >
                      {item}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default UniversalSearch;
