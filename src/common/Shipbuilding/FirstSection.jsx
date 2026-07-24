import React from 'react';
import { FiSearch, FiRotateCcw } from 'react-icons/fi';
import indiaMap from '../../assets/images/Shipbuilding/f1-bg.png';

const FirstSection = ({
  searchQuery,
  setSearchQuery,
  selectedState = 'all',
  setSelectedState,
  selectedType = 'all',
  setSelectedType,
  onResetFilters,
}) => {
  const handleReset = () => {
    if (onResetFilters) {
      onResetFilters();
    } else {
      if (setSearchQuery) setSearchQuery('');
      if (setSelectedState) setSelectedState('all');
      if (setSelectedType) setSelectedType('all');
    }
  };

  return (
    <section className="w-full max-w-[1562px] min-h-[380px] relative mx-auto overflow-hidden text-white font-sans flex items-center py-12">
      {/* Background Image Container */}
      <div className="absolute inset-0 z-0">
        <img
          src={indiaMap}
          alt="Shipbuilding Background"
          className="w-full h-full object-cover object-center"
        />
        {/* Dark Overlay Gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/70 to-black/50" />
      </div>

      {/* Content Layer */}
      <div className="relative z-10 w-full max-w-365 mx-auto px-6 md:px-20">
        {/* Category Tag */}
        <div className="flex items-center gap-1 text-[#D6E9E2] text-xs font-bold tracking-[0.2em] uppercase mb-3 font-mono">
          <span>DIRECTORY</span>
        </div>

        {/* Hero Title */}
        <h1 className="text-4xl sm:text-5xl lg:text-[52px] font-serif font-normal text-white leading-tight mb-4 tracking-tight">
          Shipbuilding Partners of India
        </h1>

        {/* Subtitle / Description */}
        <p className="text-gray-300 text-sm sm:text-base max-w-155 font-normal leading-relaxed mb-8">
          Discover India's leading shipyards and shipbuilders powering global trade with innovation, quality and resilience.
        </p>

        {/* Search & Filter Controls Box */}
        <div className="flex flex-col gap-3 max-w-[700px]">
          {/* Search Input Box + Reset Button */}
          <div className="flex flex-col sm:flex-row items-center gap-3 w-full">
            <div className="relative w-full flex-1">
              <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery && setSearchQuery(e.target.value)}
                placeholder="Search by name, location or capacity..."
                aria-label="Search shipyards"
                className="w-full h-12 bg-black/50 backdrop-blur-md border border-white/20 rounded-lg pl-11 pr-4 text-sm text-white placeholder-gray-400 focus:outline-none focus:border-[#D6AF36] transition-all"
              />
            </div>

            {/* Reset Filters Button */}
            <button
              type="button"
              onClick={handleReset}
              className="w-full sm:w-auto h-12 px-5 bg-black/50 backdrop-blur-md border border-white/20 rounded-lg flex items-center justify-center gap-2 text-sm font-medium text-gray-200 hover:text-white hover:border-[#D6AF36]/70 transition-all cursor-pointer shrink-0"
            >
              <FiRotateCcw className="w-4 h-4 text-gray-300" />
              <span>Reset Filters</span>
            </button>
          </div>

          {/* Filter Dropdowns */}
          <div className="flex flex-wrap items-center gap-3 pt-1">
            <span className="text-xs font-semibold text-gray-300 mr-1 uppercase font-mono tracking-wider">
              Filter by:
            </span>

            {/* State Filter Dropdown */}
            <select
              value={selectedState}
              onChange={(e) => setSelectedState && setSelectedState(e.target.value)}
              aria-label="Filter by state"
              className="h-9 px-3 bg-black/60 backdrop-blur-md border border-white/20 rounded-md text-xs font-medium text-gray-200 focus:outline-none focus:border-[#D6AF36] transition-all cursor-pointer"
            >
              <option value="all" className="bg-[#111] text-white">All States</option>
              <option value="Kerala" className="bg-[#111] text-white">Kerala</option>
              <option value="Maharashtra" className="bg-[#111] text-white">Maharashtra</option>
              <option value="West Bengal" className="bg-[#111] text-white">West Bengal</option>
              <option value="Tamil Nadu" className="bg-[#111] text-white">Tamil Nadu</option>
              <option value="Andhra Pradesh" className="bg-[#111] text-white">Andhra Pradesh</option>
              <option value="Goa" className="bg-[#111] text-white">Goa</option>
              <option value="Gujarat" className="bg-[#111] text-white">Gujarat</option>
            </select>

            {/* Category / Type Filter Dropdown */}
            <select
              value={selectedType}
              onChange={(e) => setSelectedType && setSelectedType(e.target.value)}
              aria-label="Filter by category"
              className="h-9 px-3 bg-black/60 backdrop-blur-md border border-white/20 rounded-md text-xs font-medium text-gray-200 focus:outline-none focus:border-[#D6AF36] transition-all cursor-pointer"
            >
              <option value="all" className="bg-[#111] text-white">All Categories</option>
              <option value="Commercial & Defense" className="bg-[#111] text-white">Commercial &amp; Defense</option>
              <option value="Defense Sector" className="bg-[#111] text-white">Defense Sector</option>
              <option value="Commercial Shipyard" className="bg-[#111] text-white">Commercial Shipyard</option>
              <option value="Ship Repair & Heavy" className="bg-[#111] text-white">Ship Repair &amp; Heavy</option>
            </select>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FirstSection;