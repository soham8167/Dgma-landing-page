import React from 'react';
import bgimg from "../../assets/images/MaritimeLeadership-bg.png";
import { FiArrowRight } from 'react-icons/fi';
import Container from '../Container';

const FirstSection = () => {
  return (
    <section
      className="relative w-full h-137 bg-cover bg-center font-sans text-white overflow-hidden flex items-center p-14"
      style={{ backgroundImage: `url(${bgimg})` }}
    >
      {/* Dark Sunset Overlay */}
      <div className="absolute inset-0 bg-[#0B121E]/75 backdrop-brightness-75" />

      {/* Main Content Container */}
      <Container className="relative z-10 w-full">
        <div className="max-w-195 space-y-6">
          
          {/* Tag Category */}
          <span className="text-[#D6AF36] font-bold text-xs tracking-[0.25em] uppercase block">
            MARITIME LEADERSHIP SERIES
          </span>

          {/* Heading with Highlighted Golden Text */}
          <h1 className="text-4xl sm:text-5xl md:text-[52px] font-serif font-normal leading-[1.15] text-white tracking-tight">
            The Leaders Who{' '}
            <span className="text-[#D6AF36]">Shaped India's</span>{' '}
            Maritime Future
          </h1>

          {/* Subtitle Description */}
          <p className="text-gray-300 text-sm sm:text-base leading-relaxed font-normal max-w-170">
            Honouring the vision, leadership and legacy of India's most distinguished maritime pioneers who charted courses of growth, modernization, and sovereign strength.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            {/* Primary Golden CTA */}
            <button className="bg-[#D6AF36] hover:bg-[#c29e2e] text-[#0B1E36] font-bold px-6 py-3 rounded-lg text-sm flex items-center gap-2 transition-colors duration-200 shadow-md cursor-pointer">
              <span>Explore Leaders</span>
              <FiArrowRight className="w-4 h-4" />
            </button>

            {/* Secondary Outline CTA */}
            <button className="bg-black/30 hover:bg-black/50 border border-white/40 hover:border-white text-white font-medium px-6 py-3 rounded-lg text-sm flex items-center gap-2 transition-all duration-200 cursor-pointer backdrop-blur-xs">
              <span>Become a Contributor</span>
              <FiArrowRight className="w-4 h-4" />
            </button>
          </div>

        </div>
      </Container>
    </section>
  );
};

export default FirstSection;