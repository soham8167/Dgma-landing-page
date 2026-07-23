import React, { useState } from 'react';
import m1 from "../assets/images/media-center/m1.jpg";
import m2 from "../assets/images/media-center/m2.jpg";
import m3 from "../assets/images/media-center/m3.jpg";
import m4 from "../assets/images/media-center/m4.jpg";
import m5 from "../assets/images/media-center/m5.jpg";
import m6 from "../assets/images/media-center/m6.jpg";
import m7 from "../assets/images/media-center/m7.jpg";
import m8 from "../assets/images/media-center/m8.jpg";
import m9 from "../assets/images/media-center/m9.jpg";
import m10 from "../assets/images/media-center/m10.jpg";
import m11 from "../assets/images/media-center/m11.jpg";
import m12 from "../assets/images/media-center/m12.jpg";
import { 
  FiPlay, 
  FiCamera, 
  FiRadio, 
  FiMic, 
  FiGrid, 
  FiVideo 
} from 'react-icons/fi';
import Container from '../common/Container';

const categories = [
  'All',
  'Ship Recycling',
  'Training',
  'Leadership',
  'Innovation',
  'Documentaries',
];

const mediaTypes = [
  { id: 'all', label: 'All', icon: FiGrid },
  { id: 'video', label: 'Video', icon: FiVideo },
  { id: 'photo', label: 'Photo', icon: FiCamera },
  { id: 'drone', label: 'Drone', icon: FiRadio },
  { id: 'interview', label: 'Interview', icon: FiMic },
];

const mediaGridData = [
  // Top-Right Cards
  {
    id: 2,
    type: 'Photo',
    tag: 'Ship Recycling',
    title: 'Ship Breaking Operations',
    duration: '',
    image: m2,
  },
  {
    id: 3,
    type: 'Photo',
    tag: 'Training',
    title: 'Maritime Training – Bridge Simulation',
    duration: '',
    image: m3,
  },
  {
    id: 4,
    type: 'Photo',
    tag: 'Documentaries',
    title: 'Green Ship Recycling Documentary',
    duration: '35 min',
    image: m4,
  },
  {
    id: 5,
    type: 'Drone',
    tag: 'Ship Recycling',
    title: 'Alang Aerial Survey',
    duration: '',
    image: m5,
  },

  // Row 2 Cards
  {
    id: 6,
    type: 'Photo',
    tag: 'Training',
    title: 'Maritime Officer on Duty',
    duration: '',
    image: m6,
  },
  {
    id: 7,
    type: 'Interview',
    tag: 'Leadership',
    title: "India's Maritime Vision – Director General Interview",
    duration: '22 min',
    image: m7,
  },
  {
    id: 8,
    type: 'Photo',
    tag: 'Innovation',
    title: 'Cargo Fleet – Bay of Bengal',
    duration: '',
    image: m8,
  },
  {
    id: 9,
    type: 'Photo',
    tag: 'Innovation',
    title: 'Smart Port Control Room Tour',
    duration: '18 min',
    image: m9,
  },

  // Row 3 Cards
  {
    id: 10,
    type: 'Photo',
    tag: 'Ship Recycling',
    title: 'Industrial Cranes at Dawn',
    duration: '',
    image: m10,
  },
  {
    id: 11,
    type: 'Photo',
    tag: 'Leadership',
    title: 'Women in Maritime',
    duration: '40 min',
    image: m11,
  },
  {
    id: 12,
    type: 'Drone',
    tag: 'Ship Recycling',
    title: 'Kandla Port Aerial',
    duration: '',
    image: m12,
  },
];

const statsData = [
  { id: 1, count: '48', label: 'Videos', icon: FiPlay },
  { id: 2, count: '1,200+', label: 'Photos', icon: FiCamera },
  { id: 3, count: '24', label: 'Drone Footage', icon: FiRadio },
  { id: 4, count: '36', label: 'Interviews', icon: FiMic },
];

const MediaCentre = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [activeMediaType, setActiveMediaType] = useState('all');

  return (
    <section className="w-full bg-[#181615] text-white min-h-[1600px] font-sans pt-12 pb-20">
      
      {/* 1. HEADER SECTION  */}
      <Container>
        <div className="max-w-365 mx-auto px-4 md:px-20 mb-8">
          <span className="text-[#EFE9DE] font-bold text-xs tracking-[0.25em] uppercase block mb-2">
            VISUAL ARCHIVE
          </span>
          <h1 className="text-4xl sm:text-5xl font-serif font-normal text-white tracking-tight mb-3">
            Media Centre
          </h1>
          <p className="text-sm sm:text-base text-gray-400 max-w-145 leading-relaxed font-normal">
            Explore India's maritime story through documentary films, drone footage, photography, and exclusive interviews.
          </p>
        </div>
      </Container>

      {/*  2. DUAL FILTER TOOLBAR  */}
      <div className="w-full  py-3 mb-10 bg-[#181615]">
        <Container>
          <div className="max-w-365 mx-auto px-4 md:px-22 flex flex-col lg:flex-row lg:items-center justify-start gap-4">
            
            {/* Left Category Tabs */}
            <div className="flex items-center gap-2 overflow-x-auto scrollbar-none py-1">
              {categories.map((cat) => {
                const isActive = activeCategory === cat;
                return (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all duration-200 cursor-pointer whitespace-nowrap ${
                      isActive
                        ? 'bg-white text-black shadow-xs'
                        : 'text-gray-400 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    {cat}
                  </button>
                );
              })}
            </div>

            {/* Right Media Type Icons Filter */}
            <div className="flex items-center gap-1.5 overflow-x-auto scrollbar-none border-t lg:border-t-0 lg:border-l border-gray-800/80 pt-2 lg:pt-0 lg:pl-3">
              {mediaTypes.map((media) => {
                const Icon = media.icon;
                const isActive = activeMediaType === media.id;
                return (
                  <button
                    key={media.id}
                    onClick={() => setActiveMediaType(media.id)}
                    className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-200 cursor-pointer whitespace-nowrap ${
                      isActive
                        ? 'bg-white/10 text-white border border-white/20'
                        : 'text-gray-400 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    <Icon className="w-3.5 h-3.5" />
                    <span>{media.label}</span>
                  </button>
                );
              })}
            </div>

          </div>
        </Container>
      </div>

      {/* 3. MEDIA GRID SECTION */}
      <Container>
        <div className="max-w-365 mx-auto px-4 md:px-20">
          
          {/* Layout Container */}
          <div className="space-y-6 mb-16">
            
            {/* Top Row: Hero Featured Video (608px x 460px) + 4 Small Cards (296px x 222px) */}
            <div className="flex flex-col lg:flex-row gap-6">
              
              {/* Feature Big Card (608px x 460px) */}
              <div className="w-full lg:w-152 h-115 bg-[#24211F] rounded-[14px] overflow-hidden relative group cursor-pointer border border-white/5 shadow-xl shrink-0">
                {/* Image Placeholder / Video Stream */}
               <div className="absolute inset-0 transition-transform duration-700 group-hover:scale-105">
                    <img
                        src={m1}
                        alt="Inside Alang: The Last Voyage"
                        className="w-full h-full object-cover"
                    />
                    </div>

                {/* Dark Gradient Overlay */}
                <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/30 to-black/20" />

                {/* Top Overlay Badges */}
                <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10">
                  <span className="px-3 py-1 rounded-full bg-black/50 backdrop-blur-md text-white text-[10px] font-medium border border-white/10">
                    Video
                  </span>
                  <span className="px-3 py-1 rounded-full bg-white/90 text-black text-[10px] font-bold">
                    Ship Recycling
                  </span>
                </div>

                {/* Center Play Button Icon */}
                <div className="absolute inset-0 flex items-center justify-center z-10">
                  <div className="w-14 h-14 rounded-full bg-white/20 backdrop-blur-md border border-white/40 flex items-center justify-center text-white group-hover:scale-110 group-hover:bg-white/30 transition-all duration-300">
                    <FiPlay className="w-6 h-6 fill-white ml-1" />
                  </div>
                </div>

                {/* Bottom Overlay Info */}
                <div className="absolute bottom-5 left-5 right-5 z-10">
                  <h3 className="text-xl sm:text-2xl font-serif font-bold text-white mb-1 leading-snug">
                    Inside Alang: The Last Voyage
                  </h3>
                  <p className="text-xs text-gray-400 font-mono">
                    48 min
                  </p>
                </div>
              </div>

              {/* Top Right Grid (4 Cards: 2x2 layout, 296px x 222px each) */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 flex-1">
                {mediaGridData.slice(0, 4).map((item) => (
                  <div
                    key={item.id}
                    className="w-full sm:w-74 h-55.5 bg-[#24211F] rounded-[14px] overflow-hidden relative group cursor-pointer border border-white/5 shadow-md mx-auto"
                  >
                    {/* Background Placeholder */}
                    <div className="absolute inset-0 bg-[#2E2A27] transition-transform duration-500 group-hover:scale-105">
                      {item.image && (
                        <img
                          src={item.image}
                          alt={item.title}
                          className="w-full h-full object-cover"
                        />
                      )}
                    </div>

                    <div className="absolute inset-0 bg-linear-to-t from-black/85 via-black/20 to-black/20" />

                    {/* Top Badges */}
                    <div className="absolute top-3 left-3 right-3 flex items-center justify-between z-10">
                      <span className="px-2.5 py-0.5 rounded-full bg-black/50 backdrop-blur-md text-white text-[9px] font-medium border border-white/10">
                        {item.type}
                      </span>
                      <span className="px-2.5 py-0.5 rounded-full bg-white/90 text-black text-[9px] font-bold">
                        {item.tag}
                      </span>
                    </div>

                    {/* Play icon overlay if video */}
                    {(item.type === 'Video' || item.type === 'Interview') && (
                      <div className="absolute inset-0 flex items-center justify-center z-10">
                        <div className="w-9 h-9 rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center text-white group-hover:scale-110 transition-all duration-300">
                          <FiPlay className="w-4 h-4 fill-white ml-0.5" />
                        </div>
                      </div>
                    )}

                    {/* Bottom Info */}
                    <div className="absolute bottom-3.5 left-3.5 right-3.5 z-10">
                      <h4 className="text-xs font-serif font-bold text-white line-clamp-2 leading-snug">
                        {item.title}
                      </h4>
                      {item.duration && (
                        <p className="text-[10px] text-gray-400 font-mono mt-0.5">
                          {item.duration}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

            </div>

            {/* Bottom Grid Rows (8 Cards in 4-column layout, 296px x 222px each) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 justify-items-center">
              {mediaGridData.slice(4).map((item) => (
                <div
                  key={item.id}
                  className="w-74 h-55.5 bg-[#24211F] rounded-[14px] overflow-hidden relative group cursor-pointer border border-white/5 shadow-md"
                >
                  <div className="absolute inset-0 bg-[#2E2A27] transition-transform duration-500 group-hover:scale-105">
                    {item.image && (
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover"
                      />
                    )}
                  </div>

                  <div className="absolute inset-0 bg-linear-to-t from-black/85 via-black/20 to-black/20" />

                  {/* Top Badges */}
                  <div className="absolute top-3 left-3 right-3 flex items-center justify-between z-10">
                    <span className="px-2.5 py-0.5 rounded-full bg-black/50 backdrop-blur-md text-white text-[9px] font-medium border border-white/10">
                      {item.type}
                    </span>
                    <span className="px-2.5 py-0.5 rounded-full bg-white/90 text-black text-[9px] font-bold">
                      {item.tag}
                    </span>
                  </div>

                  {/* Play icon overlay */}
                  {(item.type === 'Video' || item.type === 'Interview') && (
                    <div className="absolute inset-0 flex items-center justify-center z-10">
                      <div className="w-9 h-9 rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center text-white group-hover:scale-110 transition-all duration-300">
                        <FiPlay className="w-4 h-4 fill-white ml-0.5" />
                      </div>
                    </div>
                  )}

                  {/* Bottom Title */}
                  <div className="absolute bottom-3.5 left-3.5 right-3.5 z-10">
                    <h4 className="text-xs font-serif font-bold text-white line-clamp-2 leading-snug">
                      {item.title}
                    </h4>
                    {item.duration && (
                      <p className="text-[10px] text-gray-400 font-mono mt-0.5">
                        {item.duration}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>

          </div>

          {/* 4. LAST SECTION (1232px x 146px STATS ROW)  */}
          <div className="w-full max-w-308 mx-auto min-h-36.5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 items-center">
            {statsData.map((stat) => {
              const Icon = stat.icon;
              return (
                <div
                  key={stat.id}
                  className="w-full lg:w-72.5 h-36.5 bg-[#221F1D] border border-white/10 rounded-[14px] p-6 flex flex-col items-center justify-center text-center shadow-md transition-colors hover:border-white/20"
                >
                  <Icon className="w-5 h-5 text-gray-300 mb-2 stroke-[1.8]" />
                  <span className="text-2xl font-serif font-bold text-white tracking-tight">
                    {stat.count}
                  </span>
                  <span className="text-xs text-gray-400 font-normal mt-0.5">
                    {stat.label}
                  </span>
                </div>
              );
            })}
          </div>

        </div>
      </Container>
    </section>
  );
};

export default MediaCentre;