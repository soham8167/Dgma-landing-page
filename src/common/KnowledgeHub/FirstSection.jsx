import React from 'react';
import Container from '../Container';
import { FiBookOpen, FiFileText, FiVideo } from 'react-icons/fi';

const FirstSection = () => {
  return (
    <section className="bg-[#EFE9DE] w-full min-h-90 flex items-center relative overflow-hidden font-sans text-gray-900 border-b border-gray-300/40">
      {/* Subtle Grid Background Pattern Overlay */}
      <div 
        className="absolute inset-0 opacity-[0.18] pointer-events-none"/>

      <Container className="relative z-10">
        <div className="max-w-365 mx-auto px-4 md:px-20">
          
          {/* Tagline */}
          <span className="text-[#A17C38] font-bold text-xs tracking-[0.25em] uppercase block mb-2">
            DIGITAL LIBRARY
          </span>

          {/* Section Main Title */}
          <h1 className="text-4xl sm:text-5xl md:text-[52px] font-serif font-normal text-[#1A202C] tracking-tight leading-tight mb-4">
            Knowledge Hub
          </h1>

          {/* Subtitle Description */}
          <p className="text-sm sm:text-base text-gray-600 max-w-155 leading-relaxed font-normal mb-8">
            India's maritime digital library — handbooks, coffee table books, research reports, case studies, and more.
          </p>

          {/* Feature Badges / Metadata Footer */}
          <div className="flex flex-wrap items-center gap-6 sm:gap-8 pt-1 text-xs font-medium text-gray-600">
            {/* Stat 1 */}
            <div className="flex items-center gap-2">
              <FiBookOpen className="w-4 h-4 text-[#D6AF36]" />
              <span>500+ Resources</span>
            </div>

            {/* Stat 2 */}
            <div className="flex items-center gap-2">
              <FiFileText className="w-4 h-4 text-[#D6AF36]" />
              <span>12 Categories</span>
            </div>

            {/* Stat 3 */}
            <div className="flex items-center gap-2">
              <FiVideo className="w-4 h-4 text-[#D6AF36]" />
              <span>Video Library</span>
            </div>
          </div>

        </div>
      </Container>
    </section>
  );
};

export default FirstSection;