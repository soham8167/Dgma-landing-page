export const highlightText = (text = "", query = "") => {
  const safeText = String(text ?? "");
  const safeQuery = String(query ?? "").trim();

  if (!safeQuery || !safeText) {
    return safeText;
  }

  const escapedQuery = safeQuery.replace(/[.*+?^${}()|[\\]\\]/g, "\\$&");
  const regex = new RegExp(`(${escapedQuery})`, "ig");
  const parts = safeText.split(regex).filter(Boolean);

  return parts.map((part, index) => (
    <span
      key={`${part}-${index}`}
      className={
        part.toLowerCase() === safeQuery.toLowerCase()
          ? "text-[#C1440E] font-semibold"
          : ""
      }
    >
      {part}
    </span>
  ));
};
