import React, { useState } from "react";
import s1 from "../../assets/images/Shipbuilding/s1.png";
import s2 from "../../assets/images/Shipbuilding/s2.png";
import s3 from "../../assets/images/Shipbuilding/s3.png";
import s4 from "../../assets/images/Shipbuilding/s4.png";
import s5 from "../../assets/images/Shipbuilding/s5.png";
import s6 from "../../assets/images/Shipbuilding/s6.png";
import s7 from "../../assets/images/Shipbuilding/s7.png";
import s8 from "../../assets/images/Shipbuilding/s8.png";
import s9 from "../../assets/images/Shipbuilding/s9.png";
import s10 from "../../assets/images/Shipbuilding/s10.png";
import s11 from "../../assets/images/Shipbuilding/s11.png";
import s12 from "../../assets/images/Shipbuilding/s12.png";
import {
  FiMapPin,
  FiStar,
  FiMap,
  FiGrid,
  FiList,
  FiAnchor,
  FiBriefcase,
} from  "react-icons/fi";

export const shipyardsData = [
  {
    id: 1,
    name: "Cochin Shipyard Limited",
    location: "Kochi, Kerala",
    rating: "4.6",
    capabilities: "Commercial Vessels / Offshore / Naval",
    capacity: "1.50 Million DWT",
    tags: ["ISO 9001", "ISO 14001", "OHSAS 18001"],
    image: s1,
  },
  {
    id: 2,
    name: "Mazagon Dock Shipbuilders Limited",
    location: "Mumbai, Maharashtra",
    rating: "4.7",
    capabilities: "Naval Ships / Submarines / Commercial",
    capacity: "1.30 Million DWT",
    tags: ["ISO 9001", "ISO 14001", "OHSAS 18001"],
    image: s2,
  },
  {
    id: 3,
    name: "Garden Reach Shipbuilders",
    location: "Kolkata, West Bengal",
    rating: "4.5",
    capabilities: "Naval Ships / Offshore / Repairs",
    capacity: "0.80 Million DWT",
    tags: ["ISO 9001", "ISO 14001"],
    image: s3,
  },
  {
    id: 4,
    name: "Larsen & Toubro Shipbuilding Limited",
    location: "Hazira, Gujarat",
    rating: "4.6",
    capabilities: "Offshore / Subsea / Specialized Vessels",
    capacity: "1.20 Million DWT",
    tags: ["ISO 9001", "ISO 14001", "OHSAS 18001"],
    image: s4,
  },
  {
    id: 5,
    name: "Hindustan Shipyard Limited",
    location: "Visakhapatnam, Andhra Pradesh",
    rating: "4.3",
    capabilities: "Commercial / Naval / Offshore",
    capacity: "0.75 Million DWT",
    tags: ["ISO 9001", "ISO 14001"],
    image: s5,
  },
  {
    id: 6,
    name: "ABG Shipyard Limited",
    location: "Dahej, Gujarat",
    rating: "4.2",
    capabilities: "Offshore Vessels / Commercial / Repairs",
    capacity: "0.75 Million DWT",
    tags: ["ISO 9001", "ISO 14001", "OHSAS 18001"],
    image: s6,
  },
  {
    id: 7,
    name: "Swan Defence and Heavy Industries",
    location: "Mumbai, Maharashtra",
    rating: "4.4",
    capabilities: "Naval Ships / Defence Vessels",
    capacity: "0.40 Million DWT",
    tags: ["ISO 9001", "ISO 14001"],
    image: s7,
  },
  {
    id: 8,
    name: "Reliance Naval and Engineering Limited",
    location: "Mumbai, Maharashtra",
    rating: "4.1",
    capabilities: "Defence Ships / Offshore",
    capacity: "0.35 Million DWT",
    tags: ["ISO 9001", "ISO 14001"],
    image: s8,
  },
  {
    id: 9,
    name: "Titagarh Wagons Limited",
    location: "Kolkata, West Bengal",
    rating: "4.0",
    capabilities: "Inland Vessels / Cargo Ships",
    capacity: "0.30 Million DWT",
    tags: ["ISO 9001"],
    image: s9,
  },
  {
    id: 10,
    name: "Suryadipta Projects Private Limited",
    location: "Thane, Maharashtra",
    rating: "4.0",
    capabilities: "Barges / Offshore Structures / Specialized",
    capacity: "0.25 Million DWT",
    tags: ["ISO 9001", "ISO 14001"],
    image: s10,
  },
  {
    id: 11,
    name: "Bharat Heavy Electricals Limited",
    location: "Ranchi, Jharkhand",
    rating: "3.9",
    capabilities: "Inland Vessels / Floating Structures",
    capacity: "0.20 Million DWT",
    tags: ["ISO 9001", "ISO 14001"],
    image: s11,
  },
  {
    id: 12,
    name: "Sika Interplant Systems Limited",
    location: "Kolkata, West Bengal",
    rating: "3.9",
    capabilities: "Offshore Platforms / Modular Structures",
    capacity: "0.20 Million DWT",
    tags: ["ISO 9001", "ISO 14001"],
    image: s12,
  },
];

const SecondSection = ({
  searchQuery = "",
  selectedState = "all",
  selectedType = "all",
}) => {
  const [viewMode, setViewMode] = useState("grid");

  // Combined Search & Multi-Filter Logic
  const filteredShipyards = shipyardsData.filter((item) => {
    // 1. Text Search Filter
    const query = searchQuery.toLowerCase().trim();
    if (query) {
      const matchesSearch =
        item.name.toLowerCase().includes(query) ||
        item.location.toLowerCase().includes(query) ||
        item.capabilities.toLowerCase().includes(query) ||
        item.capacity.toLowerCase().includes(query);

      if (!matchesSearch) return false;
    }

    // 2. State Filter
    if (selectedState !== "all") {
      const isStateMatch = item.location
        .toLowerCase()
        .includes(selectedState.toLowerCase());
      if (!isStateMatch) return false;
    }

    // 3. Category / Type Filter
    if (selectedType !== "all") {
      const caps = item.capabilities.toLowerCase();

      if (selectedType === "Commercial & Defense") {
        if (
          !caps.includes("commercial") ||
          (!caps.includes("naval") && !caps.includes("defence"))
        )
          return false;
      } else if (selectedType === "Defense Sector") {
        if (!caps.includes("naval") && !caps.includes("defence")) return false;
      } else if (selectedType === "Commercial Shipyard") {
        if (!caps.includes("commercial")) return false;
      } else if (selectedType === "Ship Repair & Heavy") {
        if (!caps.includes("repair") && !caps.includes("offshore"))
          return false;
      }
    }

    return true;
  });

  return (
    <section className="w-full bg-[#D8E5DF] text-[#1B2A26] font-sans py-8 md:py-12 lg:py-16 px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 mx-auto flex flex-col justify-between min-h-screen">
      <div className="w-full max-w-384 mx-auto">
        {/* TOOLBAR / RESULTS HEADER */}
        <div className="w-full flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6 md:mb-8">
          <p className="text-sm font-medium text-[#425B54]">
            Showing{" "}
            <span className="font-bold text-[#1B2A26]">
              {filteredShipyards.length}
            </span>{" "}
            results
          </p>

          <div className="flex items-center gap-2">
            {/* Map View Toggle Button */}
            <button className="flex items-center gap-2 px-3 py-1.5 bg-[#C9DDD5] hover:bg-[#BCD3CA] border border-[#A8C8BC] rounded-lg text-xs font-semibold text-[#1B2A26] transition-all cursor-pointer">
              <FiMap className="w-3.5 h-3.5" />
              <span>Map View</span>
            </button>

            {/* Grid / List View Controls */}
            <div className="flex items-center bg-[#C9DDD5] border border-[#A8C8BC] rounded-lg p-0.5">
              <button
                onClick={() => setViewMode("grid")}
                className={`p-1.5 rounded-md transition-all cursor-pointer ${
                  viewMode === "grid"
                    ? "bg-white text-[#1B2A26] shadow-xs"
                    : "text-[#527068] hover:text-[#1B2A26]"
                }`}
                title="Grid View"
              >
                <FiGrid className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={() => setViewMode("list")}
                className={`p-1.5 rounded-md transition-all cursor-pointer ${
                  viewMode === "list"
                    ? "bg-white text-[#1B2A26] shadow-xs"
                    : "text-[#527068] hover:text-[#1B2A26]"
                }`}
                title="List View"
              >
                <FiList className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>

        {/* SHIPYARDS DISPLAY */}
        {filteredShipyards.length > 0 ? (
          viewMode === "grid" ? (
            /* GRID VIEW: 1 col on mobile, 2 on tablet, 3 on laptop, 4 on full desktop */
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 mb-12">
              {filteredShipyards.map((item) => (
                <div
                  key={item.id}
                  className="w-full h-102.5 bg-[#E8F0EC]/80 backdrop-blur-xs rounded-xl border border-[#C2D8CE] shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between overflow-hidden group cursor-pointer"
                >
                  {/* Card Image Banner */}
                  <div className="w-full h-40 bg-[#22332F] relative overflow-hidden shrink-0">
                    {item.image ? (
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    ) : (
                      <div className="w-full h-full bg-linear-to-tr from-[#1B2E2A] via-[#2A423C] to-[#3B5A52]" />
                    )}

                    {/* Top Left Icon Overlay Badge */}
                    <div className="absolute top-3 left-3 w-7 h-7 bg-black/60 backdrop-blur-md rounded-md border border-white/20 flex items-center justify-center text-white">
                      <FiAnchor className="w-3.5 h-3.5" />
                    </div>
                  </div>

                  {/* Card Main Body Content */}
                  <div className="p-4 flex-1 flex flex-col justify-between">
                    <div>
                      {/* Title & Rating Row */}
                      <div className="flex items-start justify-between gap-2 mb-1">
                        <h3 className="text-sm font-serif font-bold text-[#11211D] leading-tight line-clamp-2 group-hover:text-[#0C5A48] transition-colors">
                          {item.name}
                        </h3>
                        <div className="flex items-center gap-1 text-[11px] font-bold text-[#2A453E] shrink-0 pt-0.5">
                          <FiStar className="w-3 h-3 text-[#D6AF36] fill-[#D6AF36]" />
                          <span>{item.rating}</span>
                        </div>
                      </div>

                      {/* Location */}
                      <div className="flex items-center gap-1 text-[11px] text-[#55736B] mb-3">
                        <FiMapPin className="w-3 h-3 text-[#55736B] shrink-0" />
                        <span className="truncate">{item.location}</span>
                      </div>

                      {/* Capabilities */}
                      <div className="mb-2">
                        <p className="text-[9px] uppercase font-mono font-semibold tracking-wider text-[#6B8B82]">
                          CAPABILITIES
                        </p>
                        <p className="text-[11px] font-medium text-[#1E332E] line-clamp-1">
                          {item.capabilities}
                        </p>
                      </div>

                      {/* Annual Capacity */}
                      <div className="mb-3">
                        <p className="text-[9px] uppercase font-mono font-semibold tracking-wider text-[#6B8B82]">
                          ANNUAL CAPACITY
                        </p>
                        <p className="text-[11px] font-bold text-[#0C5A48]">
                          {item.capacity}
                        </p>
                      </div>
                    </div>

                    {/* Tags & View Profile Link Footer */}
                    <div>
                      <div className="flex flex-wrap gap-1 mb-3">
                        {item.tags.map((tag, idx) => (
                          <span
                            key={idx}
                            className="px-2 py-0.5 bg-[#D0E2DA] border border-[#B4D0C4] rounded-md text-[9px] font-medium text-[#10B981]"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      <div className="pt-2 border-t border-[#C8DBD2] flex items-center justify-center">
                        <span className="text-xs font-bold text-[#0C5A48] group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                          View Profile &rarr;
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            /* LIST VIEW MODE */
            <div className="flex flex-col gap-4 mb-12">
              {filteredShipyards.map((item) => (
                <div
                  key={item.id}
                  className="w-full bg-[#E8F0EC]/80 backdrop-blur-xs rounded-xl border border-[#C2D8CE] p-4 shadow-xs hover:shadow-md transition-all duration-300 flex flex-col md:flex-row items-center justify-between gap-4 group cursor-pointer"
                >
                  <div className="flex flex-col sm:flex-row items-center gap-4 w-full md:w-auto">
                    <div className="w-full sm:w-32 h-24 bg-[#22332F] rounded-lg overflow-hidden shrink-0 relative">
                      {item.image ? (
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      ) : (
                        <div className="w-full h-full bg-linear-to-tr from-[#1B2E2A] via-[#2A423C] to-[#3B5A52]" />
                      )}
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="text-base font-serif font-bold text-[#11211D] group-hover:text-[#0C5A48] transition-colors">
                          {item.name}
                        </h3>
                        <div className="flex items-center gap-1 text-xs font-bold text-[#2A453E]">
                          <FiStar className="w-3 h-3 text-[#D6AF36] fill-[#D6AF36]" />
                          <span>{item.rating}</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-1 text-xs text-[#55736B] mb-2">
                        <FiMapPin className="w-3.5 h-3.5 text-[#55736B]" />
                        <span>{item.location}</span>
                      </div>
                      <p className="text-xs text-[#1E332E]">
                        <span className="font-semibold text-[#6B8B82]">Caps:</span>{" "}
                        {item.capabilities}
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row md:flex-col lg:flex-row items-start sm:items-center gap-4 w-full md:w-auto justify-between border-t md:border-t-0 pt-3 md:pt-0 border-[#C8DBD2]">
                    <div className="text-left md:text-right">
                      <p className="text-[10px] uppercase font-mono font-semibold text-[#6B8B82]">
                        CAPACITY
                      </p>
                      <p className="text-xs font-bold text-[#0C5A48]">
                        {item.capacity}
                      </p>
                    </div>
                    <span className="text-xs font-bold text-[#0C5A48] group-hover:translate-x-1 transition-transform whitespace-nowrap">
                      View Profile &rarr;
                    </span>
                  </div>
                </div>
              ))}
            </div>
          )
        ) : (
          <div className="w-full py-16 text-center mb-12">
            <p className="text-[#425B54] text-base font-medium">
              No shipyards found matching your filter criteria.
            </p>
          </div>
        )}

        {/* BOTTOM CALLOUT BANNER */}
        <div className="w-full bg-[#0C5A48] text-white rounded-2xl p-6 sm:p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="flex flex-col sm:flex-row items-center sm:items-start md:items-center text-center sm:text-left gap-4 sm:gap-5">
            <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-white/10 border border-white/20 flex items-center justify-center shrink-0">
              <FiBriefcase className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
            </div>
            <div>
              <h2 className="text-lg sm:text-xl md:text-2xl font-serif font-bold tracking-tight text-white mb-1">
                Partner with India's Shipbuilding Ecosystem
              </h2>
              <p className="text-xs sm:text-sm text-emerald-100/80 font-normal max-w-2xl">
                Collaborate, build and grow with world-class infrastructure,
                skilled talent and a commitment to global excellence.
              </p>
            </div>
          </div>

          <button className="w-full sm:w-auto h-11 sm:h-12 px-6 bg-[#043328] hover:bg-[#02241C] border border-white/20 rounded-lg flex items-center justify-center text-xs font-bold text-white transition-all cursor-pointer whitespace-nowrap shrink-0 shadow-md">
            Become a Partner &rarr;
          </button>
        </div>
      </div>
    </section>
  );
};

export default SecondSection;