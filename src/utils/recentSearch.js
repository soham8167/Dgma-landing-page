const STORAGE_KEY = "dgma-recent-searches";

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

export const saveRecentSearches = (items = []) => {
  if (typeof window === "undefined") {
    return;
  }

  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
  } catch {
    // Ignore storage errors in non-critical search history flow.
  }
};

export const addRecentSearch = (value = "") => {
  const cleanedValue = String(value ?? "").trim();

  if (!cleanedValue) {
    return [];
  }

  const nextItems = [
    cleanedValue,
    ...getRecentSearches().filter(
      (item) => item.toLowerCase() !== cleanedValue.toLowerCase(),
    ),
  ].slice(0, 10);
  saveRecentSearches(nextItems);

  return nextItems;
};

export const clearRecentSearches = () => {
  if (typeof window === "undefined") {
    return;
  }

  window.localStorage.removeItem(STORAGE_KEY);
};
