import React, { useState } from "react";
import indiaMap from "../../assets/images/indiaMap.png";
import { FiExternalLink } from "react-icons/fi";

const filterCategories = [
  { id: "all", label: "All (9)" },
  { id: "recycling", label: "Ship Recycling", color: "bg-[#D6AF36]" },
  { id: "building", label: "Ship Building", color: "bg-[#2B4C7E]" },
  {
    id: "training",
    label: "Maritime Training Institute",
    color: "bg-[#218396]",
  },
];

const locationsData = [
  {
    id: 1,
    name: "Alang Ship Recycling Hub",
    location: "Alang, Gujarat",
    category: "recycling",
    dotColor: "bg-[#D6AF36]",
    dotBg: "bg-[#F9F5EB]",
    coords: "21.23° N, 72.18° E",
    top: "54%",
    left: "14%",
  },
  {
    id: 2,
    name: "Kandla Port Trust",
    location: "Kandla, Gujarat",
    category: "building",
    dotColor: "bg-[#2B4C7E]",
    dotBg: "bg-[#EDF2F9]",
    coords: "23.01° N, 70.21° E",
    top: "48%",
    left: "11%",
  },
  {
    id: 3,
    name: "Mumbai Port",
    location: "Mumbai, Maharashtra",
    category: "building",
    dotColor: "bg-[#2B4C7E]",
    dotBg: "bg-[#EDF2F9]",
    coords: "18.94° N, 72.85° E",
    top: "62%",
    left: "18%",
  },
  {
    id: 4,
    name: "T.S. Chanakya Academy",
    location: "Navi Mumbai, Maharashtra",
    category: "training",
    dotColor: "bg-[#218396]",
    dotBg: "bg-[#EBF6F8]",
    coords: "19.03° N, 73.02° E",
    top: "63.5%",
    left: "19.5%",
  },
  {
    id: 5,
    name: "Mormugao Port",
    location: "Goa",
    category: "building",
    dotColor: "bg-[#2B4C7E]",
    dotBg: "bg-[#EDF2F9]",
    coords: "15.41° N, 73.80° E",
    top: "72%",
    left: "20%",
  },
  {
    id: 6,
    name: "Kerala Maritime Academy",
    location: "Kochi, Kerala",
    category: "training",
    dotColor: "bg-[#218396]",
    dotBg: "bg-[#EBF6F8]",
    coords: "9.93° N, 76.26° E",
    top: "84%",
    left: "24%",
  },
  {
    id: 7,
    name: "IMU Chennai Campus",
    location: "Chennai, Tamil Nadu",
    category: "training",
    dotColor: "bg-[#218396]",
    dotBg: "bg-[#EBF6F8]",
    coords: "12.98° N, 80.24° E",
    top: "80%",
    left: "31%",
  },
  {
    id: 8,
    name: "Visakhapatnam Shipyard",
    location: "Visakhapatnam, Andhra Pradesh",
    category: "building",
    dotColor: "bg-[#2B4C7E]",
    dotBg: "bg-[#EDF2F9]",
    coords: "17.68° N, 83.21° E",
    top: "65%",
    left: "38%",
  },
  {
    id: 9,
    name: "Kolkata Dock System",
    location: "Kolkata, West Bengal",
    category: "building",
    dotColor: "bg-[#2B4C7E]",
    dotBg: "bg-[#EDF2F9]",
    coords: "22.54° N, 88.32° E",
    top: "49%",
    left: "48%",
  },
];

const SecondSection = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const [hoveredId, setHoveredId] = useState(null);

  const filteredLocations =
    activeFilter === "all"
      ? locationsData
      : locationsData.filter((loc) => loc.category === activeFilter);

  return (
    <section className="w-full bg-[#EFECE6] py-10 text-[#1A202C] font-sans">
      <div className="max-w-[1562px] mx-auto px-4 md:px-12 lg:px-20 flex flex-col lg:flex-row gap-8 justify-between items-start">
        
        {/* LEFT SECTION - MAP & FILTERS */}
        <div className="w-full lg:w-202.5 flex flex-col gap-4 shrink-0">
          
          {/* Category Filter Chips */}
          <div className="w-full h-9 flex items-center gap-3 overflow-x-auto scrollbar-none pb-1">
            {filterCategories.map((cat) => {
              const isActive = activeFilter === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveFilter(cat.id)}
                  className={`h-9 px-4 rounded-full text-xs font-medium flex items-center gap-2 transition-all cursor-pointer whitespace-nowrap ${
                    isActive
                      ? "bg-black text-white shadow-xs"
                      : "bg-white text-gray-700 hover:bg-gray-100 border border-gray-200"
                  }`}
                >
                  {cat.color && (
                    <span className={`w-2 h-2 rounded-full ${cat.color}`} />
                  )}
                  <span>{cat.label}</span>
                </button>
              );
            })}
          </div>

          {/* Interactive Map Canvas */}
          <div className="w-full h-162.5 bg-[#0B1E3D]/10 rounded-2xl border border-gray-300 relative overflow-hidden p-6 shadow-xs">
            <img
              src={indiaMap}
              alt="India Maritime Map"
              className="w-full h-full object-contain rounded-2xl opacity-90 select-none"
            />

            {/* Dynamic Map Pins */}
            <div className="absolute inset-0 pointer-events-none">
              {filteredLocations.map((pin) => {
                const isHovered = hoveredId === pin.id;
                return (
                  <div
                    key={pin.id}
                    onMouseEnter={() => setHoveredId(pin.id)}
                    onMouseLeave={() => setHoveredId(null)}
                    className="absolute flex items-center gap-2 group cursor-pointer pointer-events-auto transition-transform hover:z-30"
                    style={{ top: pin.top, left: pin.left }}
                  >
                    <span className="relative flex h-3.5 w-3.5">
                      <span
                        className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${pin.dotColor}`}
                      />
                      <span
                        className={`relative inline-flex rounded-full h-3.5 w-3.5 ${pin.dotColor} border-2 border-white shadow-xs`}
                      />
                    </span>

                    {/* Tooltip Card on Hover */}
                    <div
                      className={`bg-white/95 backdrop-blur-xs px-2.5 py-1.5 rounded-md border border-gray-200 shadow-md text-[10px] transition-all duration-200 ${
                        isHovered ? "scale-105 border-gray-400" : "opacity-85"
                      }`}
                    >
                      <p className="font-bold text-gray-900 leading-tight">
                        {pin.name}
                      </p>
                      <p className="text-[8px] text-gray-500 font-mono">
                        {pin.coords}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Map Scale Legend */}
            <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-md border border-gray-200 text-[10px] font-mono text-gray-600 z-20 shadow-xs">
              <p className="font-semibold text-[9px] uppercase tracking-wider text-gray-500">
                SCALE 1 : 12,000,000
              </p>
              <div className="flex items-center gap-2 mt-1">
                <div className="w-12 h-1 bg-gray-800 rounded-xs" />
                <span>0 - 500 km</span>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT SECTION - LOCATION CARDS */}
        <div className="w-full lg:w-97.5 h-173.75 flex flex-col shrink-0">
          <h2 className="text-xl font-serif font-bold text-gray-900 mb-4">
            Maritime Locations
          </h2>

          {/* Cards Scrollable List */}
          <div className="flex-1 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 pr-1 space-y-3">
            {filteredLocations.map((item) => {
              const isHovered = hoveredId === item.id;
              return (
                <div
                  key={item.id}
                  onMouseEnter={() => setHoveredId(item.id)}
                  onMouseLeave={() => setHoveredId(null)}
                  className={`w-full bg-white rounded-xl p-3.5 border transition-all flex items-center justify-between group cursor-pointer ${
                    isHovered
                      ? "border-gray-400 shadow-md translate-x-0.5"
                      : "border-gray-200/80 shadow-2xs hover:shadow-sm"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    {/* Category Dot */}
                    <div
                      className={`w-9 h-9 rounded-full ${item.dotBg} flex items-center justify-center shrink-0`}
                    >
                      <span
                        className={`w-3 h-3 rounded-full ${item.dotColor}`}
                      />
                    </div>

                    <div>
                      <h3 className="text-xs font-serif font-bold text-gray-900 group-hover:text-blue-900 transition-colors">
                        {item.name}
                      </h3>
                      <p className="text-[11px] text-gray-500">
                        {item.location}
                      </p>
                    </div>
                  </div>

                  <FiExternalLink className="w-3.5 h-3.5 text-gray-400 group-hover:text-gray-700 transition-colors shrink-0 ml-2" />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SecondSection;