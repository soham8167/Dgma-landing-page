import React from 'react';
import i1 from "../../assets/images/show-institute/i1.jpg";
import i2 from "../../assets/images/show-institute/i2.jpg";
import i3 from "../../assets/images/show-institute/i3.jpg";
import i4 from "../../assets/images/show-institute/i4.jpg";

import { FiMapPin, FiUsers, FiBookOpen, FiArrowRight } from 'react-icons/fi';
import Container from '../Container';

const institutesData = [
  {
    id: 1,
    name: 'T.S. Chanakya Maritime Academy',
    location: 'Navi Mumbai, Maharashtra',
    estYear: '1969',
    badges: ['DG Shipping', 'IMO'],
    placementRate: '95%',
    students: '1,800 students',
    coursesCount: '4 courses',
    tags: ['Deck Cadet', 'Engine Cadet', 'GP Rating', 'ETO'],
    image: i1, // Add your image source here
  },
  {
    id: 2,
    name: 'Indian Maritime University - Chennai',
    location: 'Chennai, Tamil Nadu',
    estYear: '2008',
    badges: ['DG Shipping', 'IMO'],
    placementRate: '92%',
    students: '3,200 students',
    coursesCount: '4 courses',
    tags: ['Deck Cadet', 'Marine Engineering', 'Port Management', 'STCW'],
    image: i2, // Add your image source here
  },
  {
    id: 3,
    name: 'Kerala Maritime Academy',
    location: 'Kochi, Kerala',
    estYear: '1998',
    badges: ['DG Shipping', 'MCI'],
    placementRate: '88%',
    students: '1,200 students',
    coursesCount: '4 courses',
    tags: ['GP Rating', 'Deck Cadet', 'STCW', 'Simulator Courses'],
    image: i3, // Add your image source here
  },
  {
    id: 4,
    name: 'Tolani Maritime Institute',
    location: 'Pune, Maharashtra',
    estYear: '2001',
    badges: ['DG Shipping', 'IMO'],
    placementRate: '97%',
    students: '950 students',
    coursesCount: '4 courses',
    tags: ['Deck Cadet', 'Engine Cadet', 'ETO', 'Simulator'],
    image: i4, // Add your image source here
  },
];

const filterPills = ['DG Shipping', 'IMO', 'UGC'];

const ShowInstitutes = () => {
  return (
    <section className="bg-[#F9F7F4] py-10 w-full min-h-[671.5px] font-sans text-gray-900">
      <Container>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Top Bar: Count & Filter Pills */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-8 gap-4">
            <p className="text-sm font-medium text-gray-600">
              Showing <span className="font-bold text-gray-900">4</span> institutes
            </p>
            <div className="flex items-center space-x-2">
              {filterPills.map((filter, index) => (
                <button
                  key={index}
                  className="px-4 py-1.5 rounded-full text-xs font-semibold bg-white text-gray-600 border border-gray-200 hover:border-gray-400 hover:text-gray-900 transition-colors shadow-2xs"
                >
                  {filter}
                </button>
              ))}
            </div>
          </div>

          {/* 4-Card Grid Container */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 justify-items-center">
            {institutesData.map((inst) => (
              <div
                key={inst.id}
                className="w-72.5 h-[529.5px] bg-[#FAF8F5] rounded-[14px] border border-gray-200/80 shadow-xs hover:shadow-md transition-shadow duration-300 flex flex-col justify-between overflow-hidden p-px"
              >
                {/* Image Section ($288px x $208px) */}
                <div className="relative w-[288px] h-52 mx-auto overflow-hidden rounded-t-[13px] bg-gray-300">
                  {inst.image ? (
                    <>
                    <img
                      src={inst.image}
                      alt={inst.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/24"></div>
                    </>
                  ) : (
                    <div className="w-full h-full bg-linear-to-br from-gray-700 to-gray-900 flex items-center justify-center text-gray-400 text-xs font-medium">
                      [ Image Placeholder ]
                    </div>
                  )}

                  {/* Est. Year Badge */}
                  <span className="absolute top-3 right-3 bg-white/90 backdrop-blur-xs text-gray-900 font-bold text-[10px] px-2.5 py-1 rounded-md shadow-2xs">
                    Est. {inst.estYear}
                  </span>

                  {/* Category Badges (Bottom Left over Image) */}
                  <div className="absolute bottom-3 left-3 flex items-center space-x-1.5">
                    {inst.badges.map((badge, idx) => (
                      <span
                        key={idx}
                        className="bg-[#D6AF36] text-[#0A284D] font-bold text-[10px] px-2 py-0.5 rounded-sm uppercase tracking-tight"
                      >
                        {badge}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Content Details */}
                <div className="p-3.5 flex-1 flex flex-col justify-between space-y-2">
                  
                  {/* Title & Location */}
                  <div>
                    <h3 className="text-sm font-serif font-bold text-gray-900 leading-snug line-clamp-2 h-10">
                      {inst.name}
                    </h3>
                    <p className="text-[11px] text-gray-500 flex items-center gap-1 mt-1 font-medium">
                      <FiMapPin className="w-3 h-3 text-gray-400 shrink-0" />
                      <span className="truncate">{inst.location}</span>
                    </p>
                  </div>

                  {/* Placement Rate Progress Bar */}
                  <div className="space-y-1">
                    <div className="flex justify-between items-center text-[10px] uppercase font-bold text-gray-400 tracking-wider">
                      <span>PLACEMENT RATE</span>
                      <span className="text-gray-900 font-bold">{inst.placementRate}</span>
                    </div>
                    <div className="w-full bg-gray-200 h-1.5 rounded-full overflow-hidden">
                      <div
                        className="bg-[#D6AF36] h-full rounded-full"
                        style={{ width: inst.placementRate }}
                      />
                    </div>
                  </div>

                  {/* Students & Courses Info */}
                  <div className="flex items-center justify-between text-[11px] text-gray-600 font-medium border-t border-gray-100 pt-1.5">
                    <span className="flex items-center gap-1">
                      <FiUsers className="w-3 h-3 text-gray-400" />
                      {inst.students}
                    </span>
                    <span className="flex items-center gap-1">
                      <FiBookOpen className="w-3 h-3 text-gray-400" />
                      {inst.coursesCount}
                    </span>
                  </div>

                  {/* Course Tags */}
                  <div className="flex flex-wrap gap-1 max-h-11.5 overflow-hidden">
                    {inst.tags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="bg-[#EBF3FC] text-[#1447E6] text-[10px] font-semibold px-2 py-0.5 rounded-md"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Action CTA Button */}
                  <button className="w-full bg-[#0B1E36] hover:bg-[#132c4e] text-white text-xs font-semibold py-2.5 rounded-lg flex items-center justify-center gap-2 transition-colors duration-200 mt-1">
                    <span>View Profile</span>
                    <FiArrowRight className="w-3.5 h-3.5" />
                  </button>

                </div>

              </div>
            ))}
          </div>

        </div>
      </Container>
    </section>
  );
};

export default ShowInstitutes;