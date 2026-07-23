import React, { useState } from 'react';
import Container from '../Container';
import { 
  FiEye, 
  FiDownload, 
  FiBookOpen, 
  FiShare2 
} from 'react-icons/fi';

const categories = [
  'All',
  'Handbooks',
  'Coffee Table Books',
  'Research Reports',
  'Industry Publications',
  'Case Studies',
  'Video Library',
];

const publicationsData = [
  {
    id: 1,
    category: 'HANDBOOKS',
    title: 'India Ship Recycling Handbook 2024',
    year: '2024',
    pages: '284 pages',
    downloads: '12,400 downloads',
    bgColor: 'bg-[#2B4C7E]', // Dark Blue
    accentColor: '#2B4C7E',
    buttonColor: 'bg-[#2B4C7E] hover:bg-[#1f385c]',
    pageCountText: '284pp',
  },
  {
    id: 2,
    category: 'COFFEE TABLE BOOKS',
    title: 'Maritime India Coffee Table Book',
    year: '2023',
    pages: '180 pages',
    downloads: '8,900 downloads',
    bgColor: 'bg-[#C5A038]', // Gold/Yellow
    accentColor: '#C5A038',
    buttonColor: 'bg-[#C5A038] hover:bg-[#a8862d]',
    pageCountText: '180pp',
  },
  {
    id: 3,
    category: 'RESEARCH REPORTS',
    title: 'Ship Recycling Industry Report 2023',
    year: '2023',
    pages: '120 pages',
    downloads: '15,200 downloads',
    bgColor: 'bg-[#218396]', // Teal
    accentColor: '#218396',
    buttonColor: 'bg-[#218396] hover:bg-[#186675]',
    pageCountText: '120pp',
  },
  {
    id: 4,
    category: 'INDUSTRY PUBLICATIONS',
    title: 'Green Ship Recycling Guidelines',
    year: '2024',
    pages: '96 pages',
    downloads: '9,800 downloads',
    bgColor: 'bg-[#237845]', // Green
    accentColor: '#237845',
    buttonColor: 'bg-[#237845] hover:bg-[#1a5b34]',
    pageCountText: '96pp',
  },
  {
    id: 5,
    category: 'COFFEE TABLE BOOKS',
    title: 'Alang: A Visual Journey',
    year: '2022',
    pages: '220 pages',
    downloads: '6,700 downloads',
    bgColor: 'bg-[#8349E5]', // Purple
    accentColor: '#8349E5',
    buttonColor: 'bg-[#8349E5] hover:bg-[#6a38bc]',
    pageCountText: '220pp',
  },
  {
    id: 6,
    category: 'CASE STUDIES',
    title: 'STCW Training Case Studies',
    year: '2024',
    pages: '158 pages',
    downloads: '11,300 downloads',
    bgColor: 'bg-[#E33838]', // Red
    accentColor: '#E33838',
    buttonColor: 'bg-[#E33838] hover:bg-[#b82a2a]',
    pageCountText: '158pp',
  },
];

const LastSection = () => {
  const [activeTab, setActiveTab] = useState('All');

  const filteredData = activeTab === 'All' 
    ? publicationsData 
    : publicationsData.filter(item => item.category.toLowerCase() === activeTab.toLowerCase());

  return (
    <section className="w-full bg-[#EDE5D8] min-h-359.5 font-sans text-gray-900 pb-20">
      
      {/* ================= 1. FILTER TABS BAR (Full width with inner standard padding) ================= */}
      <div className="w-full min-h-19.25 py-2.5 border-b border-gray-300/60 flex items-center mb-8">
        <Container>
          <div className="max-w-365 mx-auto px-4 md:px-20">
            <div className="flex items-center gap-2 overflow-x-auto scrollbar-none py-1">
              {categories.map((cat) => {
                const isActive = activeTab === cat;
                return (
                  <button
                    key={cat}
                    onClick={() => setActiveTab(cat)}
                    className={`px-4 py-2 rounded-full text-xs font-medium transition-all duration-200 cursor-pointer whitespace-nowrap ${
                      isActive
                        ? 'bg-black text-white shadow-xs'
                        : 'text-gray-700 hover:text-black hover:bg-black/5'
                    }`}
                  >
                    {cat}
                  </button>
                );
              })}
            </div>
          </div>
        </Container>
      </div>

      {/*  2. MAIN CONTENT */}
      <Container>
        <div className="max-w-365 mx-auto px-4 md:px-20">
          
          {/* Section Header */}
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#1A202C]">
              All Publications
            </h2>
            <span className="text-xs font-serif text-gray-500 italic">
              {filteredData.length} publications
            </span>
          </div>

          {/* ================= 3. CARDS GRID (290px x 495.5px) ================= */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-8 justify-items-center lg:justify-items-start mb-16">
            {filteredData.map((item) => (
              <div
                key={item.id}
                className="w-72.5 h-[495.5px] bg-[#F7F4EE] rounded-[14px] border border-[#E2D8C7] overflow-hidden flex flex-col justify-between p-4 shadow-2xs hover:shadow-md transition-all duration-300 group"
              >
                {/* Book Cover Image Container */}
                <div className="w-full h-52.5 bg-[#EFE9DF] rounded-lg flex items-center justify-center p-3 relative overflow-hidden shrink-0">
                  {/* 3D Book Graphic */}
                  <div
                    className={`w-32.5 h-42.5 ${item.bgColor} rounded-r-md rounded-l-xs shadow-xl flex flex-col justify-between p-3 text-white text-center relative transition-transform duration-300 group-hover:scale-105`}
                    style={{
                      boxShadow: '-6px 6px 12px rgba(0,0,0,0.25), inset 4px 0 6px rgba(255,255,255,0.15)',
                    }}
                  >
                    <div className="space-y-1">
                      <p className="text-[10px] font-bold leading-tight uppercase opacity-90 line-clamp-3 font-serif">
                        {item.title}
                      </p>
                    </div>

                    <span className="text-[9px] opacity-75 font-mono text-left">
                      {item.pageCountText}
                    </span>
                  </div>
                </div>

                {/* Book Info Body */}
                <div className="flex-1 flex flex-col justify-between pt-3">
                  <div className="space-y-1">
                    {/* Category */}
                    <span
                      className="text-[10px] font-bold tracking-wider uppercase block"
                      style={{ color: item.accentColor }}
                    >
                      {item.category}
                    </span>

                    {/* Title */}
                    <h3 className="text-sm font-serif font-bold text-[#1A202C] leading-snug line-clamp-2">
                      {item.title}
                    </h3>

                    {/* Metadata */}
                    <p className="text-[11px] text-gray-500 pt-0.5">
                      {item.year} · {item.pages}
                    </p>

                    {/* Download count */}
                    <div className="flex items-center gap-1 text-[11px] text-gray-500 pt-0.5">
                      <FiDownload className="w-3 h-3 text-gray-400" />
                      <span>{item.downloads}</span>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="space-y-2 pt-3 border-t border-gray-200/60 mt-2">
                    {/* Primary Buttons */}
                    <div className="grid grid-cols-2 gap-2">
                      <button className="w-full py-1.5 px-2 bg-white hover:bg-gray-100 border border-gray-300/80 rounded-md text-[11px] font-semibold text-gray-700 flex items-center justify-center gap-1 transition-colors cursor-pointer">
                        <FiEye className="w-3 h-3" />
                        <span>Preview</span>
                      </button>

                      <button className={`w-full py-1.5 px-2 ${item.buttonColor} text-white rounded-md text-[11px] font-semibold flex items-center justify-center gap-1 transition-colors cursor-pointer`}>
                        <FiDownload className="w-3 h-3" />
                        <span>Download</span>
                      </button>
                    </div>

                    {/* Secondary Actions */}
                    <div className="grid grid-cols-2 gap-2 text-gray-600 text-[11px]">
                      <button className="flex items-center justify-center gap-1.5 hover:text-black py-1 cursor-pointer transition-colors">
                        <FiBookOpen className="w-3 h-3 text-gray-400" />
                        <span>Flipbook</span>
                      </button>

                      <button className="flex items-center justify-center gap-1.5 hover:text-black py-1 cursor-pointer transition-colors">
                        <FiShare2 className="w-3 h-3 text-gray-400" />
                        <span>Share</span>
                      </button>
                    </div>
                  </div>
                </div>

              </div>
            ))}
          </div>

          {/* 4. DOWNLOAD BANNER  */}
          <div className="w-full max-w-308 mx-auto min-h-56 bg-[#161616] rounded-2xl p-10 flex flex-col items-center justify-center text-center text-white shadow-xl">
            <h2 className="text-2xl sm:text-3xl font-serif font-normal tracking-tight mb-2">
              Download the Complete Digital Library
            </h2>

            <p className="text-xs sm:text-sm text-gray-400 max-w-md font-normal mb-6">
              Get all publications in one package — updated quarterly.
            </p>

            <button className="bg-[#D6AF36] hover:bg-[#c29e2f] text-[#0A192F] font-bold text-xs py-3 px-6 rounded-md flex items-center justify-center gap-2 transition-colors cursor-pointer shadow-md">
              <FiDownload className="w-4 h-4 stroke-[2.5]" />
              <span>Knowledge hub</span>
            </button>
          </div>

        </div>
      </Container>
    </section>
  );
};

export default LastSection;