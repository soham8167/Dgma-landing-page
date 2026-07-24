import React, { useEffect, useRef } from "react";
import { FiArrowRight, FiSearch, FiX } from "react-icons/fi";

const SearchBar = React.memo(
  ({ value, onChange, onClear, onKeyDown, onSubmit, placeholder }) => {
    const inputRef = useRef(null);

    useEffect(() => {
      inputRef.current?.focus();
    }, []);

    return (
      <div className="w-full max-w-160 relative">
        <div className="relative flex items-center bg-[#E5E1D8]/80 border border-[#D5CFB2]/80 rounded-full p-2 shadow-2xs focus-within:border-[#B5A882] transition-all">
          <FiSearch className="w-5 h-5 text-[#887F6E] ml-3 shrink-0" />
          <input
            ref={inputRef}
            type="text"
            value={value}
            onChange={(event) => onChange(event.target.value)}
            onKeyDown={onKeyDown}
            placeholder={placeholder}
            className="w-full bg-transparent border-none outline-none px-3 text-sm text-[#222222] placeholder-[#887F6E] font-normal"
            aria-label="Universal search"
          />
          {value ? (
            <button
              type="button"
              onClick={onClear}
              className="mr-2 rounded-full p-1 text-[#887F6E] hover:bg-white/70"
              aria-label="Clear search"
            >
              <FiX className="w-4 h-4" />
            </button>
          ) : null}
          <button
            type="button"
            onClick={onSubmit}
            className="w-9 h-9 bg-white rounded-full flex items-center justify-center text-[#333333] hover:bg-[#FAF9F6] shadow-xs transition-all cursor-pointer shrink-0"
          >
            <FiArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    );
  },
);

export default SearchBar;
