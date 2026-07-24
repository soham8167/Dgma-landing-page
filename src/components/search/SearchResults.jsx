import React from "react";
import { Link } from "react-router-dom";
import { FiArrowRight, FiMapPin, FiSearch, FiTag } from "react-icons/fi";
import ShipyardCard from "../ShipyardCard";

const escapeRegExp = (value = "") =>
  String(value).replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

const highlightText = (text = "", query = "") => {
  if (!text || !query) {
    return text;
  }

  const terms = String(query).trim().split(/\s+/).filter(Boolean);

  if (!terms.length) {
    return text;
  }

  const pattern = new RegExp(`(${terms.map(escapeRegExp).join("|")})`, "ig");
  const parts = String(text).split(pattern);

  return parts.map((part, index) => {
    const matched = terms.some(
      (term) => part.toLowerCase() === term.toLowerCase(),
    );

    if (!matched) {
      return <span key={`${part}-${index}`}>{part}</span>;
    }

    return (
      <mark
        key={`${part}-${index}`}
        className="rounded bg-[#F8E9A3] px-0.5 text-[#111111]"
      >
        {part}
      </mark>
    );
  });
};

const SearchResults = React.memo(
  ({ results = [], emptyMessage = "No results found" }) => {
    if (!results.length) {
      return (
        <div className="w-full rounded-2xl border border-[#E2DDCF] bg-[#F8F4EB] p-6 text-left shadow-sm">
          <div className="flex items-center gap-2 text-[#C1440E] mb-2">
            <FiSearch className="w-4 h-4" />
            <h3 className="text-sm font-semibold">{emptyMessage}</h3>
          </div>
          <p className="text-sm text-[#6B7280]">
            No matching page, section or card was found.
          </p>
        </div>
      );
    }

    const renderContent = (item) => {
      if (item.component === ShipyardCard) {
        return <ShipyardCard {...(item.cardData || {})} />;
      }

      const targetUrl = item.scrollId
        ? `${item.url || "/"}#${item.scrollId}`
        : item.url || "/";
      const badges = [item.page, item.section, item.category].filter(Boolean);
      const metaItems = [item.location, item.subtitle].filter(Boolean);

      return (
        <div className="w-full rounded-2xl border border-[#E2DDCF] bg-white/90 p-4 shadow-sm transition-all hover:border-[#C9BFA0] hover:shadow-md">
          <div className="flex flex-wrap items-center gap-2 mb-3">
            <span className="rounded-full bg-[#F3ECDD] px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#655843]">
              {item.type || "result"}
            </span>
            {badges.map((badge) => (
              <span
                key={`${item.id}-${badge}`}
                className="rounded-full border border-[#D8D2C4] bg-[#F8F4EB] px-2.5 py-1 text-[10px] font-medium text-[#4A453B]"
              >
                {badge}
              </span>
            ))}
          </div>

          <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
            <div className="flex-1">
              <h3 className="text-base font-semibold text-[#111111]">
                {item.title}
              </h3>
              {item.subtitle ? (
                <p className="mt-1 text-sm text-[#655843]">{item.subtitle}</p>
              ) : null}
              {item.matchPreview ? (
                <p className="mt-2 text-sm leading-6 text-[#555048]">
                  <span className="mr-2 rounded-full bg-[#F3ECDD] px-2 py-0.5 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#655843]">
                    {item.matchField || "match"}
                  </span>
                  {highlightText(item.matchPreview, item.matchedText || "")}
                </p>
              ) : null}

              {item.description && !item.matchPreview ? (
                <p className="mt-2 text-sm leading-6 text-[#555048]">
                  {item.description}
                </p>
              ) : null}

              <div className="mt-3 flex flex-wrap items-center gap-3 text-xs text-[#6B7280]">
                {metaItems.map((meta) => (
                  <span
                    key={`${item.id}-${meta}`}
                    className="inline-flex items-center gap-1"
                  >
                    <FiMapPin className="h-3.5 w-3.5" />
                    {meta}
                  </span>
                ))}
                {item.keywords?.length ? (
                  <span className="inline-flex items-center gap-1">
                    <FiTag className="h-3.5 w-3.5" />
                    {item.keywords.slice(0, 3).join(", ")}
                  </span>
                ) : null}
              </div>
            </div>

            <Link
              to={targetUrl}
              className="inline-flex items-center gap-2 self-start rounded-full border border-[#D8D2C4] bg-[#F8F4EB] px-3 py-2 text-sm font-medium text-[#4A453B] transition-all hover:bg-[#EEE7D8]"
            >
              Open result
              <FiArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      );
    };

    return (
      <div className="w-full space-y-4">
        {results.map((item) => (
          <div key={item.id} className="w-full overflow-hidden">
            {renderContent(item)}
          </div>
        ))}
      </div>
    );
  },
);

export default SearchResults;
