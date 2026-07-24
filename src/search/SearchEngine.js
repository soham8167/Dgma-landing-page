import { rankResult, fuzzyMatch } from "./SearchAlgorithms";
import { getSearchableText, normalizeQuery } from "./SearchUtils";
import { getSearchIndex } from "./SearchIndex";

const truncateText = (value = "", maxLength = 140) => {
  const normalized = String(value ?? "").trim();
  if (!normalized) {
    return "";
  }

  if (normalized.length <= maxLength) {
    return normalized;
  }

  return `${normalized.slice(0, maxLength).trimEnd()}…`;
};

const getMatchMetadata = (item, query) => {
  const normalizedQuery = normalizeQuery(query);
  const fields = [
    { label: "title", value: item.title },
    { label: "subtitle", value: item.subtitle },
    { label: "description", value: item.description },
    { label: "location", value: item.location },
    { label: "category", value: item.category },
    {
      label: "capabilities",
      value: item.capabilities || item.cardData?.capabilities,
    },
    { label: "keywords", value: item.keywords?.join(" ") },
    { label: "tags", value: item.tags?.join(" ") },
    { label: "metadata", value: item.metadata?.join(" ") },
  ];

  const matchedField = fields.find((field) => {
    const normalizedField = normalizeQuery(field.value);
    return normalizedField && normalizedField.includes(normalizedQuery);
  });

  if (!matchedField) {
    return {
      matchField: "content",
      matchPreview: truncateText(
        item.description || item.subtitle || item.title,
      ),
    };
  }

  return {
    matchField: matchedField.label,
    matchPreview: truncateText(matchedField.value),
  };
};

const pickPrimaryType = (results, query) => {
  const normalizedQuery = normalizeQuery(query);

  if (!normalizedQuery) {
    return null;
  }

  const directTypeMatches = results.filter((item) => {
    const title = normalizeQuery(item.title);
    const subtitle = normalizeQuery(item.subtitle);
    return title === normalizedQuery || subtitle === normalizedQuery;
  });

  if (directTypeMatches.length) {
    return directTypeMatches[0].type;
  }

  const titleMatches = results.filter((item) => {
    const title = normalizeQuery(item.title);
    return title.startsWith(normalizedQuery) || title.includes(normalizedQuery);
  });

  if (titleMatches.length) {
    return titleMatches[0].type;
  }

  return null;
};

export const searchGlobalIndex = (query = "", options = {}) => {
  const normalizedQuery = normalizeQuery(query);
  const sourceItems = options.items || getSearchIndex();

  if (!normalizedQuery) {
    return [];
  }

  const scoredResults = sourceItems
    .map((item) => {
      const text = getSearchableText(item);
      const basicMatch = text.toLowerCase().includes(normalizedQuery);
      const fuzzy = fuzzyMatch(item, normalizedQuery);
      const score = rankResult(item, normalizedQuery);
      const matched = basicMatch || fuzzy || score > 0;

      if (!matched) {
        return null;
      }

      const matchData = getMatchMetadata(item, normalizedQuery);

      return {
        ...item,
        score: score * (item.searchWeight || 1),
        matchedText: item.title,
        matchField: matchData.matchField,
        matchPreview: matchData.matchPreview,
      };
    })
    .filter(Boolean)
    .sort(
      (left, right) =>
        right.score - left.score || left.title.localeCompare(right.title),
    );

  const primaryType = pickPrimaryType(scoredResults, normalizedQuery);
  const filteredResults = primaryType
    ? scoredResults.filter((item) => item.type === primaryType)
    : scoredResults;

  return filteredResults.slice(0, options.limit || 20);
};

export const buildSearchIndexFromContent = (content = []) => {
  return content.map((item) => ({
    ...item,
    searchWeight: item.searchWeight || 1,
  }));
};
