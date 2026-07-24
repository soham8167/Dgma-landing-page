const normalize = (value = "") =>
  String(value ?? "")
    .trim()
    .toLowerCase();

const tokenize = (value = "") => normalize(value).split(/\s+/).filter(Boolean);

const buildPhrases = (value = "") => {
  const normalized = normalize(value);
  return normalized
    ? [normalized, ...normalized.split(/\s+/).filter(Boolean)]
    : [];
};

const levenshtein = (a = "", b = "") => {
  const left = a.toLowerCase();
  const right = b.toLowerCase();
  const matrix = Array.from({ length: left.length + 1 }, () =>
    Array(right.length + 1).fill(0),
  );

  for (let i = 0; i <= left.length; i += 1) matrix[i][0] = i;
  for (let j = 0; j <= right.length; j += 1) matrix[0][j] = j;

  for (let i = 1; i <= left.length; i += 1) {
    for (let j = 1; j <= right.length; j += 1) {
      if (left[i - 1] === right[j - 1]) {
        matrix[i][j] = matrix[i - 1][j - 1];
      } else {
        matrix[i][j] =
          1 +
          Math.min(matrix[i - 1][j], matrix[i][j - 1], matrix[i - 1][j - 1]);
      }
    }
  }

  return matrix[left.length][right.length];
};

export const rankResult = (item, query) => {
  const normalizedQuery = normalize(query);
  const haystack = [
    item.title,
    item.subtitle,
    item.description,
    item.location,
    item.category,
    item.capabilities,
    item.cardData?.capabilities,
    item.keywords?.join(" "),
    item.tags?.join(" "),
    item.cardData?.tags?.join(" "),
    item.metadata?.join(" "),
  ].join(" ");
  const normalizedHaystack = normalize(haystack);
  const queryTerms = tokenize(normalizedQuery);

  if (!normalizedQuery) {
    return 0;
  }

  let score = 0;
  const title = normalize(item.title);
  const subtitle = normalize(item.subtitle);
  const description = normalize(item.description);
  const keywords = normalize(item.keywords?.join(" "));
  const tags = normalize(item.tags?.join(" "));

  if (title === normalizedQuery) score += 1000;
  else if (title.startsWith(normalizedQuery)) score += 900;
  else if (title.includes(normalizedQuery)) score += 700;

  if (subtitle.startsWith(normalizedQuery)) score += 250;
  else if (subtitle.includes(normalizedQuery)) score += 180;

  if (description.includes(normalizedQuery)) score += 220;

  if (keywords.includes(normalizedQuery)) score += 200;
  if (tags.includes(normalizedQuery)) score += 180;

  if (normalize(item.location).includes(normalizedQuery)) score += 160;

  if (normalize(item.category).includes(normalizedQuery)) score += 140;

  score +=
    queryTerms.filter((term) => normalizedHaystack.includes(term)).length * 50;

  const phrases = buildPhrases(normalizedQuery);
  score +=
    phrases.filter((phrase) => normalizedHaystack.includes(phrase)).length * 20;

  const distance = levenshtein(
    normalizedQuery,
    title.slice(0, normalizedQuery.length),
  );
  if (distance <= 2 && normalizedQuery.length > 3) score += 60;

  return score;
};

export const fuzzyMatch = (item, query) => {
  const normalizedQuery = normalize(query);
  const haystack = normalize(
    [item.title, item.subtitle, item.description, item.location].join(" "),
  );
  if (!normalizedQuery || !haystack) return false;

  const words = normalizedQuery.split(/\s+/);
  const matches = words.every(
    (word) => haystack.includes(word) || levenshtein(word, haystack) <= 2,
  );
  return matches;
};

export const buildSuggestionText = (item) => {
  if (item.type === "page") return `Open ${item.title}`;
  if (item.type === "section") return `Go to ${item.title}`;
  if (item.type === "card") return `Open ${item.title}`;
  return item.title;
};
