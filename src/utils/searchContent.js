import {
  FiAward,
  FiBookOpen,
  FiGrid,
  FiMapPin,
  FiSearch,
  FiShield,
  FiVideo,
} from "react-icons/fi";
import facilityData from "../data/facilityData";
import { stories as storyItems } from "../data/storyData";

const pageEntries = [
  {
    id: "page-ship-recycling",
    title: "Ship Recycling",
    category: "Page",
    description:
      "Explore India’s certified ship recycling ecosystem, facilities and policy resources.",
    keywords: ["ship recycling", "recycling", "facilities", "alang"],
    route: "/ship-recycling",
    iconKey: "map-pin",
  },
  {
    id: "page-shipbuilding",
    title: "Shipbuilding",
    category: "Page",
    description:
      "Discover India’s shipbuilding partners, capabilities and sector developments.",
    keywords: ["shipbuilding", "partners", "yards", "industry"],
    route: "/shipbuilding",
    iconKey: "ship",
  },
  {
    id: "page-training",
    title: "Maritime Training",
    category: "Page",
    description:
      "Find maritime training institutes, STCW programmes and professional development resources.",
    keywords: ["maritime training", "training", "stcw", "courses"],
    route: "/training",
    iconKey: "award",
  },
  {
    id: "page-leadership",
    title: "Maritime Leadership",
    category: "Page",
    description:
      "Access leadership resources, thought leadership and sector insights.",
    keywords: ["leadership", "thought leadership", "maritime", "series"],
    route: "/leadership",
    iconKey: "award",
  },
  {
    id: "page-knowledge",
    title: "Knowledge Hub",
    category: "Page",
    description:
      "Search handbooks, reports, guidelines and knowledge resources.",
    keywords: ["knowledge hub", "handbooks", "guidelines", "publications"],
    route: "/knowledge-hub",
    iconKey: "book-open",
  },
  {
    id: "page-media",
    title: "Media Centre",
    category: "Page",
    description: "Browse media coverage, documentaries and multimedia stories.",
    keywords: ["media centre", "documentary", "videos", "stories"],
    route: "/media-centre",
    iconKey: "video",
  },
  {
    id: "page-stories",
    title: "Stories",
    category: "Page",
    description:
      "Explore featured stories, innovation and leadership narratives.",
    keywords: ["stories", "feature", "innovation", "leadership"],
    route: "/stories",
    iconKey: "grid",
  },
  {
    id: "page-map",
    title: "India Map",
    category: "Page",
    description:
      "View maritime infrastructure across India’s coastline and major hubs.",
    keywords: ["india map", "coastline", "ports", "locations"],
    route: "/india-map",
    iconKey: "map-pin",
  },
  {
    id: "page-search",
    title: "Universal Search",
    category: "Page",
    description:
      "Search facilities, institutes, publications, videos and more from one place.",
    keywords: ["search", "universal search", "everything"],
    route: "/search",
    iconKey: "search",
  },
  {
    id: "location-kerala",
    title: "Kerala",
    category: "Location",
    description:
      "Maritime training and coastal logistics hubs in Kerala, including educational and port-related opportunities.",
    keywords: ["kerala", "coastal", "maritime", "training"],
    route: "/india-map",
    iconKey: "map-pin",
  },
];

const getStoryDescription = (story) => {
  const base = story.category ? `${story.category} story` : "Featured story";
  return `${base} featuring ${story.title}.`;
};

export const buildSearchableItems = () => {
  const facilityItems = facilityData.map((item) => ({
    id: `facility-${item.id}`,
    title: item.name,
    category: "Facility",
    description: `${item.type} facility in ${item.location}. Rated ${item.grade} and certified for ${item.certifications.join(", ")}.`,
    location: item.location,
    keywords: [
      ...item.certifications,
      item.type,
      item.grade,
      "ship recycling",
      "recycling",
    ],
    tags: ["ship recycling", "facility", "recycling"],
    route: "/ship-recycling",
    iconKey: "map-pin",
    source: "facility",
  }));

  const storyItemsSearch = storyItems.map((item) => ({
    id: `story-${item.id}`,
    title: item.title,
    category: item.category,
    description: getStoryDescription(item),
    location: "India",
    keywords: [
      item.category,
      "maritime",
      "story",
      item.year,
      ...(item.series || []),
    ],
    tags: ["story", "media", item.category],
    route: "/stories",
    iconKey: "grid",
    source: "story",
  }));

  const pageItems = pageEntries.map((item) => ({
    ...item,
    title: item.title,
    category: item.category,
    description: item.description,
    keywords: item.keywords,
    tags: [item.category.toLowerCase(), "page"],
    route: item.route,
    iconKey: item.iconKey,
    source: "page",
  }));

  return [...facilityItems, ...storyItemsSearch, ...pageItems];
};

export const popularSearchTerms = [
  "Ship Recycling",
  "Shipbuilding",
  "Maritime Training",
  "Kerala",
  "Alang",
  "STCW",
  "Leadership",
  "Knowledge Hub",
];
