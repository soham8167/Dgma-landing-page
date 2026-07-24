const normalizeText = (value = "") =>
  String(value ?? "")
    .trim()
    .toLowerCase();

const tokenize = (value = "") =>
  normalizeText(value).split(/\s+/).filter(Boolean);

const getTextValue = (value) => {
  if (Array.isArray(value)) {
    return value.join(" ");
  }

  return String(value ?? "");
};

export const searchItems = (items = [], query = "") => {
  const normalizedQuery = normalizeText(query);

  if (!normalizedQuery) {
    return [];
  }

  const terms = tokenize(normalizedQuery);

  return items
    .map((item) => {
      const title = item.title || item.name || item.heading || item.label || "";
      const description = getTextValue(item.description || "");
      const category = getTextValue(item.category || item.type || "");
      const location = getTextValue(item.location || "");
      const keywords = getTextValue(item.keywords || "");
      const tags = getTextValue(item.tags || "");
      const combinedText = [
        title,
        description,
        category,
        location,
        keywords,
        tags,
        item.searchText || "",
      ].join(" ");
      const normalizedCombined = normalizeText(combinedText);
      const normalizedTitle = normalizeText(title);
      const normalizedDescription = normalizeText(description);
      const normalizedCategory = normalizeText(category);
      const normalizedLocation = normalizeText(location);
      const normalizedKeywords = normalizeText(keywords);
      const normalizedTags = normalizeText(tags);

      if (!terms.every((term) => normalizedCombined.includes(term))) {
        return null;
      }

      let score = 0;
      let matchedField = "title";
      let matchedText = title;

      if (normalizedTitle === normalizedQuery) {
        score += 1000;
        matchedField = "title";
      } else if (normalizedTitle.startsWith(normalizedQuery)) {
        score += 900;
        matchedField = "title";
      } else if (normalizedTitle.includes(normalizedQuery)) {
        score += 700;
        matchedField = "title";
      }

      if (normalizedDescription.includes(normalizedQuery)) {
        score += 280;
        matchedField = "description";
        matchedText = description;
      } else if (terms[0] && normalizedDescription.includes(terms[0])) {
        score += 170;
        matchedField = "description";
        matchedText = description;
      }

      if (normalizedCategory.includes(normalizedQuery)) {
        score += 220;
        matchedField = "category";
        matchedText = category;
      }

      if (normalizedLocation.includes(normalizedQuery)) {
        score += 180;
        matchedField = "location";
        matchedText = location;
      }

      if (normalizedKeywords.includes(normalizedQuery)) {
        score += 160;
        matchedField = "keywords";
        matchedText = keywords;
      }

      if (normalizedTags.includes(normalizedQuery)) {
        score += 140;
        matchedField = "tags";
        matchedText = tags;
      }

      score +=
        terms.filter((term) => normalizedCombined.includes(term)).length * 40;

      return {
        ...item,
        title,
        description,
        category,
        location,
        matchedField,
        matchedText,
        score,
      };
    })
    .filter(Boolean)
    .sort(
      (left, right) =>
        right.score - left.score || left.title.localeCompare(right.title),
    );
};

const calculateSimilarity = (text, query) => {
  const normalizedText = normalizeText(text);
  const normalizedQuery = normalizeText(query);

  if (!normalizedText || !normalizedQuery) {
    return 0;
  }

  let score = 0;
  const queryTerms = tokenize(normalizedQuery);
  const textTerms = tokenize(normalizedText);

  if (normalizedText.includes(normalizedQuery)) {
    score += 40;
  }

  if (normalizedText.startsWith(normalizedQuery)) {
    score += 20;
  }

  score +=
    queryTerms.filter((term) => normalizedText.includes(term)).length * 10;
  score += queryTerms.filter((term) => textTerms.includes(term)).length * 4;

  return score;
};

export const getClosestMatches = (items = [], query = "", maxResults = 4) => {
  const normalizedQuery = normalizeText(query);

  if (!normalizedQuery) {
    return [];
  }

  return items
    .map((item) => ({
      ...item,
      similarity: calculateSimilarity(
        [item.title, item.description, item.category, item.location].join(" "),
        normalizedQuery,
      ),
    }))
    .sort((left, right) => right.similarity - left.similarity)
    .slice(0, maxResults);
};

export const normalizeQuery = normalizeText;
