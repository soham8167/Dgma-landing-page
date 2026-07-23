import React from 'react';

const FirstSection = () => {
  return (
    <section className="w-full max-w-[1562px] min-h-64 bg-[#EFECE6] text-[#1A1A1A] font-sans pt-14 pb-14 px-6 md:px-40 mx-auto flex items-center justify-start border-b border-[#E2DDCF]">
      <div className="max-w-365 w-full mx-auto">
        {/* Category Subtitle */}
        <span className="text-[#655843] font-bold text-[11px] sm:text-xs tracking-[0.2em] uppercase block mb-2 font-mono">
          INTERACTIVE
        </span>

        {/* Main Title */}
        <h1 className="text-4xl sm:text-5xl lg:text-[52px] font-serif font-bold text-[#111111] leading-tight mb-3">
          India Map
        </h1>

        {/* Description Text */}
        <p className="text-xs sm:text-sm text-[#555048] max-w-135 leading-relaxed font-normal">
          Explore India's 7,500 km coastline — ship recycling yards, training institutes, shipyards, and major ports.
        </p>
      </div>
    </section>
  );
};

export default FirstSection;