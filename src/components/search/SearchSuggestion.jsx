import React from "react";
import { FiArrowRight, FiClock, FiSearch } from "react-icons/fi";
import HighlightText from "./HighlightText";

const SearchSuggestion = React.memo(({ item, query, isActive, onSelect }) => {
  return (
    <button
      type="button"
      onMouseDown={(event) => {
        event.preventDefault();
        onSelect(item);
      }}
      className={`w-full flex items-center justify-between rounded-xl border px-3 py-2.5 text-left transition-all ${
        isActive
          ? "border-[#B5A882] bg-[#F4EFE6]"
          : "border-transparent bg-white/80 hover:border-[#D8D2C4] hover:bg-[#F7F4EC]"
      }`}
    >
      <span className="flex items-center gap-2 min-w-0">
        {item.iconKey ? (
          <FiSearch className="w-4 h-4 text-[#887F6E] shrink-0" />
        ) : (
          <FiClock className="w-4 h-4 text-[#887F6E] shrink-0" />
        )}
        <span className="min-w-0">
          <span className="block text-sm font-medium text-[#1F2A37] truncate">
            <HighlightText
              text={item.title || item.name || item.label || ""}
              query={query}
            />
          </span>
          <span className="block text-xs text-[#6B7280] truncate">
            {item.category || item.type || "Search result"}
          </span>
        </span>
      </span>
      <FiArrowRight className="w-4 h-4 text-[#887F6E] shrink-0" />
    </button>
  );
});

export default SearchSuggestion;
