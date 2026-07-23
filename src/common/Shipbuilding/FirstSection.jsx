import React from 'react';
import { FiSearch, FiSliders } from 'react-icons/fi';
import indiaMap from '../../assets/images/Shipbuilding/f1-bg.png';

const FirstSection = () => {
  return (
    <section className="w-full max-w-[1562px] h-140.25 relative mx-auto overflow-hidden text-white font-sans flex items-center">
      {/* Background Image Container */}
      <div className="absolute inset-0 z-0">
        <img
          src={indiaMap}
          alt="Shipbuilding Background"
          className="w-full h-full object-cover object-center"
        />
        {/* Dark Overlay Gradient for text readability */}
        <div className="absolute inset-0 bg-linear-to-r from-black/80 via-black/60 to-black/40" />
      </div>

      {/* Content Layer */}
      <div className="relative z-10 w-full max-w-365 mx-auto px-6 md:px-20">
        {/* Category Tag */}
        <div className="flex items-center gap-1 text-[#D6E9E2] text-xs font-bold tracking-[0.2em] uppercase mb-3 font-mono">
          <span>DIRECTORY</span>
          <span>&rarr;</span>
        </div>

        {/* Hero Title */}
        <h1 className="text-4xl sm:text-5xl lg:text-[52px] font-serif font-normal text-white leading-tight mb-4 tracking-tight">
          Shipbuilding Partners of India
        </h1>

        {/* Subtitle / Description */}
        <p className="text-gray-300 text-sm sm:text-base max-w-155 font-normal leading-relaxed mb-8">
          Discover India's leading shipyards and shipbuilders powering global trade with innovation, quality and resilience.
        </p>

        {/* Search & Filter Controls Container */}
        <div className="flex flex-col sm:flex-row items-center gap-3 max-w-170">
          {/* Search Input Box */}
          <div className="relative w-full sm:w-120">
            <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search by name, location or capability..."
              className="w-full h-12 bg-black/40 backdrop-blur-md border border-white/20 rounded-lg pl-11 pr-4 text-sm text-white placeholder-gray-400 focus:outline-none focus:border-[#D6AF36] transition-all"
            />
          </div>

          {/* Filters Button with Gold Accent */}
          <button className="w-full sm:w-auto h-12 px-6 bg-black/40 backdrop-blur-md border border-[#D6AF36]/70 rounded-lg flex items-center justify-center gap-2 text-sm font-medium text-[#D6AF36] hover:bg-[#D6AF36]/10 transition-all cursor-pointer shrink-0">
            <FiSliders className="w-4 h-4 text-[#D6AF36]" />
            <span>Filters</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default FirstSection;