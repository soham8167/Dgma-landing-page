import React, { useState } from 'react';
import { 
  FiSearch, 
  FiArrowRight, 
  FiMapPin, 
  FiAward, 
  FiBookOpen, 
  FiVideo, 
  FiShield, 
  FiFileText, 
  FiBell, 
  FiGrid 
} from 'react-icons/fi';

const suggestionTags = [
  ['Ship recycling Gujarat', 'STCW courses', 'Alang facilities', 'ETO training', 'IMU Chennai'],
  ['Hong Kong Convention', 'GP Rating institutes', 'Maritime handbook 2024']
];

const categoryTabs = [
  { id: 'all', label: 'All', icon: FiSearch },
  { id: 'facilities', label: 'Facilities', icon: FiMapPin },
  { id: 'institutes', label: 'Institutes', icon: FiAward },
  { id: 'publications', label: 'Publications', icon: FiBookOpen },
  { id: 'videos', label: 'Videos', icon: FiVideo },
  { id: 'certifications', label: 'Certifications', icon: FiShield },
  { id: 'acts', label: 'Acts & Rules', icon: FiFileText },
  { id: 'circulars', label: 'Circulars', icon: FiBell },
  { id: 'news', label: 'News', icon: FiGrid },
];

const UniversalSearch = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeTab, setActiveTab] = useState('all');

  const handleTagClick = (tag) => {
    setSearchQuery(tag);
  };

  return (
    <section className="w-full max-w-[1562px] min-h-[900px] bg-[#EFECE6] text-[#1A1A1A] font-sans mx-auto flex flex-col justify-between">
      
      {/* ================= TOP HERO & SEARCH SECTION ================= */}
      <div className="pt-[72px] pb-[40px] px-4 md:px-[80px] flex flex-col items-center text-center">
        
        {/* Category Label */}
        <span className="text-[#655843] font-mono font-bold text-[11px] tracking-[0.25em] uppercase mb-3">
          UNIVERSAL SEARCH
        </span>

        {/* Main Title */}
        <h1 className="text-4xl sm:text-5xl lg:text-[56px] font-serif font-bold text-[#111111] leading-tight mb-3">
          Search Everything
        </h1>

        {/* Subtitle */}
        <p className="text-xs sm:text-sm text-[#555048] max-w-[600px] leading-relaxed mb-8">
          Facilities, institutes, publications, videos, certifications, regulations, circulars — all in one place.
        </p>

        {/* Search Input Bar (Width: 640px) */}
        <div className="w-full max-w-[640px] relative mb-6">
          <div className="relative flex items-center bg-[#E5E1D8]/80 border border-[#D5CFB2]/80 rounded-full p-2 shadow-2xs focus-within:border-[#B5A882] transition-all">
            <FiSearch className="w-5 h-5 text-[#887F6E] ml-3 shrink-0" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder='Try "ship recycling Gujarat" or "ETO courses"...'
              className="w-full bg-transparent border-none outline-none px-3 text-sm text-[#222222] placeholder-[#887F6E] font-normal"
            />
            <button className="w-9 h-9 bg-white rounded-full flex items-center justify-center text-[#333333] hover:bg-[#FAF9F6] shadow-xs transition-all cursor-pointer shrink-0">
              <FiArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Quick Suggestion Tags */}
        <div className="flex flex-col items-center gap-2 mb-4">
          {suggestionTags.map((row, rowIdx) => (
            <div key={rowIdx} className="flex flex-wrap items-center justify-center gap-2">
              {row.map((tag, tagIdx) => (
                <button
                  key={tagIdx}
                  onClick={() => handleTagClick(tag)}
                  className="px-3.5 py-1 bg-[#E4E0D6]/60 hover:bg-[#DED9CC] border border-[#D8D2C4] rounded-full text-[12px] font-serif text-[#4A453B] transition-all cursor-pointer whitespace-nowrap"
                >
                  {tag}
                </button>
              ))}
            </div>
          ))}
        </div>

      </div>

      {/* ================= MIDDLE NAVIGATION BAR ================= */}
      <div className="w-full border-t border-[#E2DDCF] bg-[#EFECE6] py-3 px-4 md:px-[80px]">
        <div className="max-w-[1460px] mx-auto flex items-center justify-center gap-1.5 overflow-x-auto scrollbar-none">
          {categoryTabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-medium transition-all cursor-pointer whitespace-nowrap ${
                  isActive
                    ? 'bg-[#181818] text-white shadow-xs'
                    : 'text-[#555048] hover:text-[#111111] hover:bg-[#E4E0D6]/50'
                }`}
              >
                <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-white' : 'text-[#655843]'}`} />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* ================= LOWER CONTENT / EMPTY STATE ================= */}
      <div className="flex-1 min-h-[380px] bg-[#EFECE6] flex flex-col items-center justify-center text-center p-8 border-t border-[#E8E4D9]">
        
        {/* Subtle Watermark Search Icon */}
        <div className="w-16 h-16 rounded-full bg-[#E5E1D8]/50 flex items-center justify-center mb-4 text-[#B8AE99]">
          <FiSearch className="w-8 h-8 stroke-[1.5]" />
        </div>

        {/* Empty State Header */}
        <h2 className="text-xl sm:text-2xl font-serif font-bold text-[#1F2A37] mb-2">
          Search India's Maritime Knowledge Base
        </h2>

        {/* Empty State Description */}
        <p className="text-xs sm:text-sm text-[#6B7280] max-w-[480px] leading-relaxed">
          From ship recycling facilities to STCW certifications, maritime regulations to training institutes — everything is searchable.
        </p>

      </div>

    </section>
  );
};

export default UniversalSearch;