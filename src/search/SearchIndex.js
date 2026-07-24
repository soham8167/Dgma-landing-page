const SEARCHABLE_INDEX = [];

export const registerSearchItem = (item) => {
  SEARCHABLE_INDEX.push({
    ...item,
    id: item.id,
    type: item.type || "page",
    page: item.page || "Home",
    section: item.section || "",
    title: item.title || "",
    subtitle: item.subtitle || "",
    description: item.description || "",
    keywords: item.keywords || [],
    tags: item.tags || [],
    location: item.location || "",
    category: item.category || "",
    url: item.url || "/",
    scrollId: item.scrollId || "",
    image: item.image || "",
    metadata: item.metadata || [],
    searchWeight: item.searchWeight || 1,
  });

  return SEARCHABLE_INDEX[SEARCHABLE_INDEX.length - 1];
};

export const getSearchIndex = () => SEARCHABLE_INDEX;

export const resetSearchIndex = () => {
  SEARCHABLE_INDEX.length = 0;
};
