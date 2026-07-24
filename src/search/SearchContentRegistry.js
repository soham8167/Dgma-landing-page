import { registerSearchItem } from "./SearchIndex";
import facilityData from "../data/facilityData";
import { stories as storyItems } from "../data/storyData";
import Shipbuilding from "../pages/Shipbuilding";
import Shipping from "../components/Shipping";
import MaritimeLeadership from "../pages/MaritimeLeadership";
import KnowledgeHub from "../pages/KnowledgeHub";
import MaritimeTraining from "../pages/MaritimeTraining";
import MediaCentre from "../pages/MediaCentre";
import IndiaMap from "../pages/IndiaMap";
import StoryHub from "../pages/StoryHub";
import ShipyardCard from "../components/ShipyardCard";
import { shipyardsData } from "../common/Shipbuilding/SecondSection";

const normalizeList = (items = []) => items.filter(Boolean);
let hasRegisteredSiteContent = false;

export const registerSiteContent = () => {
  if (hasRegisteredSiteContent) {
    return;
  }

  hasRegisteredSiteContent = true;
  const sections = [
    {
      id: "page-home",
      type: "page",
      page: "Home",
      title: "Home",
      subtitle: "DG Shipping maritime knowledge portal",
      description:
        "Landing page for India’s maritime knowledge ecosystem, featuring ship recycling, shipbuilding, training, leadership and more.",
      keywords: ["home", "maritime", "knowledge", "portal"],
      tags: ["home", "landing"],
      url: "/",
      searchWeight: 4,
    },
    {
      id: "page-ship-recycling",
      type: "page",
      page: "Ship Recycling",
      title: "Ship Recycling",
      subtitle: "Directory of certified facilities",
      description:
        "Browse India’s ship recycling ecosystem, facilities, certifications, and routes to the directory.",
      keywords: [
        "ship recycling",
        "recycling",
        "facilities",
        "alang",
        "gujarat",
      ],
      tags: ["directory", "facility"],
      url: "/ship-recycling",
      component: Shipping,
      searchWeight: 4,
    },
    {
      id: "page-shipbuilding",
      type: "page",
      page: "Shipbuilding",
      title: "Shipbuilding",
      subtitle: "Partners of India",
      description:
        "Explore shipyards, capabilities, offshore, naval and commercial vessel builders across India.",
      keywords: ["shipbuilding", "shipyard", "offshore", "naval", "vessel"],
      tags: ["shipyard", "industry"],
      url: "/shipbuilding",
      component: Shipbuilding,
      searchWeight: 4,
    },
    {
      id: "page-training",
      type: "page",
      page: "Maritime Training",
      title: "Maritime Training Institute",
      subtitle: "Training institutes and STCW courses",
      description:
        "Find maritime training institutes, STCW and professional development resources.",
      keywords: [
        "training institute",
        "maritime training",
        "stcw",
        "courses",
        "imu",
      ],
      tags: ["training", "institute"],
      url: "/training",
      component: MaritimeTraining,
      searchWeight: 4,
    },
    {
      id: "page-leadership",
      type: "page",
      page: "Maritime Leadership",
      title: "Maritime Leadership",
      subtitle: "Thought leadership and vision",
      description:
        "Access leadership content, thought leadership, policy discussions and maritime insights.",
      keywords: ["leadership", "thought leadership", "maritime"],
      tags: ["leadership", "insights"],
      url: "/leadership",
      component: MaritimeLeadership,
      searchWeight: 4,
    },
    {
      id: "page-knowledge",
      type: "page",
      page: "Knowledge Hub",
      title: "Knowledge Hub",
      subtitle: "Publications and resources",
      description:
        "Search handbooks, reports, guidelines and knowledge resources.",
      keywords: ["knowledge hub", "handbook", "report", "guidelines"],
      tags: ["knowledge", "publications"],
      url: "/knowledge-hub",
      component: KnowledgeHub,
      searchWeight: 4,
    },
    {
      id: "page-media",
      type: "page",
      page: "Media Centre",
      title: "Media Centre",
      subtitle: "Stories and multimedia",
      description:
        "Browse media coverage, documentaries and multimedia stories.",
      keywords: ["media centre", "documentary", "videos", "stories"],
      tags: ["media", "stories"],
      url: "/media-centre",
      searchWeight: 4,
    },
    {
      id: "page-stories",
      type: "page",
      page: "Stories",
      title: "Stories",
      subtitle: "Narratives and features",
      description:
        "Explore featured stories on innovation, leadership and maritime future.",
      keywords: ["stories", "feature", "innovation", "leadership"],
      tags: ["stories", "media"],
      url: "/stories",
      component: StoryHub,
      searchWeight: 4,
    },
    {
      id: "page-map",
      type: "page",
      page: "India Map",
      title: "India Map",
      subtitle: "Coastline infrastructure",
      description:
        "View infrastructure, locations and maritime nodes across India’s coastline.",
      keywords: [
        "india map",
        "coastline",
        "ports",
        "locations",
        "kerala",
        "cochin",
      ],
      tags: ["map", "location"],
      url: "/india-map",
      component: IndiaMap,
      searchWeight: 4,
    },
    {
      id: "page-search",
      type: "page",
      page: "Universal Search",
      title: "Universal Search",
      subtitle: "Search everything",
      description:
        "Search pages, sections, cards and content from across the website.",
      keywords: ["search", "universal search", "everything"],
      tags: ["search", "global"],
      url: "/search",
      searchWeight: 4,
    },
    {
      id: "section-shipbuilding-partners",
      type: "section",
      page: "Shipbuilding",
      section: "Shipbuilding Partners",
      title: "Shipbuilding Partners",
      subtitle: "Industry ecosystem",
      description:
        "Section highlighting shipbuilding partners, capability clusters, and public-private collaboration.",
      keywords: ["shipbuilding partners", "industry", "ecosystem"],
      tags: ["section", "shipbuilding"],
      url: "/shipbuilding",
      scrollId: "shipbuilding-partners",
      searchWeight: 3,
    },
    {
      id: "section-maritime-leadership",
      type: "section",
      page: "Maritime Leadership",
      section: "Leadership",
      title: "Leadership",
      subtitle: "Maritime leadership section",
      description:
        "Section focused on leadership, vision and thought leadership across the maritime domain.",
      keywords: ["leadership", "vision"],
      tags: ["section", "leadership"],
      url: "/leadership",
      scrollId: "leadership",
      searchWeight: 3,
    },
    {
      id: "location-kerala",
      type: "location",
      page: "India Map",
      section: "Kerala",
      title: "Kerala",
      subtitle: "Kerala maritime hubs",
      description:
        "Location-based maritime opportunities and nodes across Kerala.",
      keywords: ["kerala", "cochin", "maritime", "training", "coastal"],
      tags: ["location", "kerala"],
      location: "Kerala",
      url: "/india-map",
      scrollId: "kerala",
      searchWeight: 3,
    },
    {
      id: "tag-iso-9001",
      type: "tag",
      page: "Shipbuilding",
      section: "Certification",
      title: "ISO 9001",
      subtitle: "Quality standard",
      description:
        "Items and shipyards tagged with ISO 9001 quality assurance standards.",
      keywords: ["iso 9001", "quality", "standard", "certification"],
      tags: ["iso 9001", "certification"],
      category: "Certification",
      url: "/shipbuilding",
      scrollId: "iso-9001",
      searchWeight: 2,
    },
    {
      id: "tag-offshore",
      type: "tag",
      page: "Shipbuilding",
      section: "Capability",
      title: "Offshore",
      subtitle: "Capability",
      description:
        "Shipbuilding capabilities related to offshore work and specialized vessels.",
      keywords: ["offshore", "capability", "specialized", "vessel"],
      tags: ["capability", "offshore"],
      category: "Capability",
      url: "/shipbuilding",
      scrollId: "offshore",
      searchWeight: 2,
    },
  ];

  normalizeList(sections).forEach((item) => registerSearchItem(item));

  facilityData.forEach((facility) => {
    registerSearchItem({
      id: `card-facility-${facility.id}`,
      type: "card",
      page: "Ship Recycling",
      section: "Facility",
      title: facility.name,
      subtitle: facility.location,
      description: `${facility.type} facility with ${facility.certifications.join(", ")}.`,
      keywords: [facility.type, facility.location, ...facility.certifications],
      tags: [facility.type, ...facility.certifications],
      location: facility.location,
      category: "Facility",
      url: "/ship-recycling",
      image: facility.image,
      metadata: [facility.grade, facility.capacity],
      searchWeight: 3,
    });
  });

  shipyardsData.forEach((shipyard) => {
    registerSearchItem({
      id: `card-shipyard-${shipyard.id}`,
      type: "card",
      page: "Shipbuilding",
      section: "Shipyard",
      title: shipyard.name,
      subtitle: shipyard.location,
      description: `${shipyard.capabilities}. Annual capacity ${shipyard.capacity}.`,
      keywords: [
        shipyard.name,
        shipyard.location,
        shipyard.capabilities,
        ...shipyard.tags,
      ],
      tags: shipyard.tags,
      location: shipyard.location,
      category: "Shipyard",
      url: "/shipbuilding",
      capabilities: shipyard.capabilities,
      component: ShipyardCard,
      cardData: shipyard,
      searchWeight: 4,
    });
  });

  storyItems.forEach((story) => {
    registerSearchItem({
      id: `card-story-${story.id}`,
      type: "card",
      page: "Stories",
      section: story.category,
      title: story.title,
      subtitle: story.category,
      description: `${story.category} story featuring ${story.title}.`,
      keywords: [story.category, ...(story.series || []), story.year],
      tags: [story.category, ...(story.series || [])],
      location: "India",
      category: story.category,
      url: "/stories",
      image: story.image,
      metadata: [story.duration, story.year],
      searchWeight: 3,
    });
  });

  facilityData.forEach((facility) => {
    const locationWords = facility.location
      .split(",")
      .map((part) => part.trim());
    locationWords.forEach((word, index) => {
      if (word) {
        registerSearchItem({
          id: `card-location-${facility.id}-${index}`,
          type: "location",
          page: "Ship Recycling",
          section: word,
          title: word,
          subtitle: facility.location,
          description: `${facility.name} is located in ${facility.location}.`,
          keywords: [word, facility.location],
          tags: [word],
          location: facility.location,
          url: "/ship-recycling",
          searchWeight: 2,
        });
      }
    });
  });
};
