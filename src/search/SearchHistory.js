const STORAGE_KEY = "dgma-global-search-history";

export const getRecentSearches = () => {
  if (typeof window === "undefined") {
    return [];
  }

  try {
    const value = window.localStorage.getItem(STORAGE_KEY);
    return value ? JSON.parse(value) : [];
  } catch {
    return [];
  }
};

export const saveRecentSearch = (value = "") => {
  const cleaned = String(value ?? "").trim();
  if (!cleaned) {
    return [];
  }

  const next = [
    cleaned,
    ...getRecentSearches().filter(
      (item) => item.toLowerCase() !== cleaned.toLowerCase(),
    ),
  ].slice(0, 10);

  if (typeof window !== "undefined") {
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
    } catch {
      // ignore storage errors
    }
  }

  return next;
};
