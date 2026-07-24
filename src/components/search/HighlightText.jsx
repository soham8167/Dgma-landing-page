import React from "react";
import { buildHighlightedSegments } from "../../utils/searchHighlight";

const HighlightText = React.memo(({ text = "", query = "" }) => {
  const segments = buildHighlightedSegments(text, query);

  return (
    <span>
      {segments.map((segment, index) => (
        <span
          key={`${segment.text}-${index}`}
          className={segment.isMatch ? "text-[#C1440E] font-semibold" : ""}
        >
          {segment.text}
        </span>
      ))}
    </span>
  );
});

export default HighlightText;
