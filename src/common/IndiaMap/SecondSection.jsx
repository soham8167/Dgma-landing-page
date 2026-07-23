import React, { useState } from "react";
import indiaMap from "../../assets/images/indiaMap.png";
import { FiExternalLink, FiCompass } from "react-icons/fi";

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
    dotColor: "bg-[#C5A038]",
    dotBg: "bg-[#F9F5EB]",
  },
  {
    id: 2,
    name: "Kandla Port Trust",
    location: "Kandla, Gujarat",
    category: "building",
    dotColor: "bg-[#2B4C7E]",
    dotBg: "bg-[#EDF2F9]",
  },
  {
    id: 3,
    name: "Mumbai Port",
    location: "Mumbai, Maharashtra",
    category: "building",
    dotColor: "bg-[#2B4C7E]",
    dotBg: "bg-[#EDF2F9]",
  },
  {
    id: 4,
    name: "T.S. Chanakya Academy",
    location: "Navi Mumbai, Maharashtra",
    category: "training",
    dotColor: "bg-[#218396]",
    dotBg: "bg-[#EBF6F8]",
  },
  {
    id: 5,
    name: "Mormugao Port",
    location: "Goa",
    category: "building",
    dotColor: "bg-[#2B4C7E]",
    dotBg: "bg-[#EDF2F9]",
  },
  {
    id: 6,
    name: "Kerala Maritime Academy",
    location: "Kochi, Kerala",
    category: "training",
    dotColor: "bg-[#218396]",
    dotBg: "bg-[#EBF6F8]",
  },
  {
    id: 7,
    name: "IMU Chennai Campus",
    location: "Chennai, Tamil Nadu",
    category: "training",
    dotColor: "bg-[#218396]",
    dotBg: "bg-[#EBF6F8]",
  },
  {
    id: 8,
    name: "Visakhapatnam Shipyard",
    location: "Visakhapatnam, Andhra Pradesh",
    category: "building",
    dotColor: "bg-[#E33838]",
    dotBg: "bg-[#FDF0F0]",
  },
  {
    id: 9,
    name: "Kolkata Dock System",
    location: "Kolkata, West Bengal",
    category: "building",
    dotColor: "bg-[#2B4C7E]",
    dotBg: "bg-[#EDF2F9]",
  },
];

const mapPins = [
  { name: "Delhi", coords: "28.61° N, 77.20° E", top: "30%", left: "26%" },
  { name: "Kolkata", coords: "22.57° N, 88.36° E", top: "48%", left: "42%" },
  { name: "Mumbai", coords: "19.07° N, 72.87° E", top: "62%", left: "19%" },
  { name: "Hyderabad", coords: "17.38° N, 78.48° E", top: "69%", left: "28%" },
  { name: "Bangalore", coords: "12.97° N, 77.59° E", top: "78%", left: "21%" },
  { name: "Chennai", coords: "13.08° N, 80.27° E", top: "80%", left: "30%" },
];

const SecondSection = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  const filteredLocations =
    activeFilter === "all"
      ? locationsData
      : locationsData.filter((loc) => loc.category === activeFilter);

  return (
    <section className="w-full bg-[#EFECE6] py-8 text-[#1A202C] font-sans">
      <div className="max-w-[1562px] min-h-[852.8px] mx-auto px-4 md:px-30 flex flex-col lg:flex-row gap-8 justify-between items-start">
        {/*  LEFT SECTION (810.65px)  */}
        <div className="w-full lg:w-[810.65px] flex flex-col gap-4 shrink-0">
          {/* Filter Bar (Height: 36px, Gap: 12px) */}
          <div className="w-full h-9 flex items-center gap-3 overflow-x-auto scrollbar-none">
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

          {/* Map Container (811px x 736px) */}
          <div className="w-full h-184 bg-[#0B1E3D2E] rounded-2xl border border-[#CBD5E1] relative overflow-hidden flex flex-col justify-between p-6 shadow-sm">
            <img
              src={indiaMap}
              alt="India Map"
              className="w-full h-full object-cover rounded-2xl opacity-90"
            />
            {/* Top Bar inside Map */}
            <div className="flex items-center justify-between z-10">
              <div />
            </div>

            {/* Simulated Map Canvas with Pin Overlay */}
            <div className="absolute inset-0 z-0 flex items-center justify-center p-8">
              {/* Map Outline Graphic Placeholder */}
              <div className="w-full h-full relative opacity-90">
                {/* Pins */}
                {mapPins.map((pin, idx) => (
                  <div
                    key={idx}
                    className="absolute flex items-center gap-2 group cursor-pointer"
                    style={{ top: pin.top, left: pin.left }}
                  >
                    <span className="relative flex h-3 w-3">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75" />
                      <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500 border-2 border-white" />
                    </span>

                    <div className="bg-white/90 backdrop-blur-xs px-2.5 py-1 rounded-md border border-gray-200 shadow-md text-[10px] font-sans">
                      <p className="font-bold text-gray-900 leading-tight">
                        {pin.name}
                      </p>
                      <p className="text-[8px] text-gray-500 font-mono">
                        {pin.coords}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Map Legend / Scale Indicator */}
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

        {/* RIGHT SECTION (389.34px)  */}
        <div className="w-full lg:w-[389.34px] h-[772.8px] flex flex-col justify-between shrink-0">
          <h2 className="text-xl font-serif font-bold text-gray-900 mb-5">
            Maritime Locations
          </h2>

          {/* Cards Scrollable Container */}
          <div className="flex-1 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 pr-1 space-y-3">
            {filteredLocations.map((item) => (
              <div
                key={item.id}
                className="w-full bg-white rounded-xl p-3.5 border border-gray-200/80 shadow-2xs hover:shadow-md transition-all flex items-center justify-between group cursor-pointer"
              >
                <div className="flex items-center gap-3">
                  {/* Category Indicator Badge */}
                  <div
                    className={`w-9 h-9 rounded-full ${item.dotBg} flex items-center justify-center shrink-0`}
                  >
                    <span className={`w-3 h-3 rounded-full ${item.dotColor}`} />
                  </div>

                  <div>
                    <h3 className="text-xs font-serif font-bold text-gray-900 group-hover:text-blue-900 transition-colors">
                      {item.name}
                    </h3>
                    <p className="text-[11px] text-gray-500">{item.location}</p>
                  </div>
                </div>

                {/* External Link Icon */}
                <FiExternalLink className="w-3.5 h-3.5 text-gray-400 group-hover:text-gray-700 transition-colors shrink-0 ml-2" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SecondSection;
