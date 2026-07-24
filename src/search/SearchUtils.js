export const normalizeQuery = (value = "") =>
  String(value ?? "")
    .trim()
    .toLowerCase();

export const getSearchableText = (item = {}) => {
  return [
    item.title,
    item.subtitle,
    item.description,
    item.location,
    item.category,
    item.section,
    item.page,
    item.capabilities,
    item.cardData?.capabilities,
    item.keywords?.join(" "),
    item.tags?.join(" "),
    item.cardData?.tags?.join(" "),
    item.metadata?.join(" "),
    item.cardData?.location,
  ]
    .filter(Boolean)
    .join(" ");
};

export const buildPopularQueries = () => [
  "shipbuilding",
  "ship recycling",
  "leadership",
  "kerala",
  "cochin",
  "ISO 9001",
  "offshore",
  "training institute",
  "stories",
];
