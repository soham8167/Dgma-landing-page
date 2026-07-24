const normalizeText = (value = "") =>
  String(value ?? "")
    .trim()
    .toLowerCase();

const escapeRegExp = (value = "") =>
  value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

export const buildHighlightedSegments = (text = "", query = "") => {
  const safeText = String(text ?? "");
  const safeQuery = String(query ?? "").trim();

  if (!safeQuery || !safeText) {
    return [{ text: safeText, isMatch: false }];
  }

  const regex = new RegExp(`(${escapeRegExp(safeQuery)})`, "ig");
  const parts = safeText.split(regex).filter(Boolean);

  return parts.map((part) => ({
    text: part,
    isMatch: normalizeText(part) === normalizeText(safeQuery),
  }));
};
