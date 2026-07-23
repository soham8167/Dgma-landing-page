import React from 'react';
import Container from '../Container';
import p1 from "../../assets/images/our-knowledge/p1.png";
import p2 from "../../assets/images/our-knowledge/p2.png";
import p3 from "../../assets/images/our-knowledge/p3.png";
import p4 from "../../assets/images/our-knowledge/p4.png";
import { FiRefreshCw, FiAnchor, FiBriefcase, FiCompass, FiArrowRight } from 'react-icons/fi';

const knowledgeSeries = [
  {
    id: 1,
    title: 'Ship Recycling',
    description: 'Directory of certified ship recycling facilities in India.',
    icon: FiRefreshCw,
    image: p1, // Add image path here
  },
  {
    id: 2,
    title: 'Shipbuilding',
    description: "Insights into India's shipbuilding ecosystem and capabilities.",
    icon: FiAnchor,
    image: p2, // Add image path here
  },
  {
    id: 3,
    title: 'Maritime Training Institutes',
    description: 'Directory of maritime training institutes across India.',
    icon: FiBriefcase,
    image: p3, // Add image path here
  },
  {
    id: 4,
    title: 'Maritime Leadership Series',
    description: "Honouring the leaders who shaped India's maritime journey.",
    icon: FiCompass,
    image: p4, // Add image path here
  },
];

const FifthSection = () => {
  return (
    <section className="bg-[#E3D7C5] w-full min-h-135.25 py-14 font-sans text-gray-900">
      <Container>
        <div className="max-w-365 mx-auto px-4">
          
          {/* Header Section */}
          <div className="text-center max-w-2xl mx-auto mb-10 space-y-1.5">
            <span className="text-[#A17C38] font-bold text-xs tracking-[0.25em] uppercase block">
              OUR MARITIME PUBLICATIONS
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-[40px] font-serif font-normal text-[#1A202C] tracking-tight">
              Explore Our Knowledge Series
            </h2>
          </div>

          {/* 4-Card Grid with 28px Gap */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7 justify-items-center">
            {knowledgeSeries.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.id}
                  className="w-[344.5px] h-84 bg-white rounded-lg border border-gray-200/80 overflow-hidden flex flex-col justify-between shadow-xs hover:shadow-md transition-all duration-300 group cursor-pointer"
                >
                  {/* Top Image Box with Icon Overlay */}
                  <div className="relative w-full h-45 bg-gray-300 overflow-hidden shrink-0">
                    {item.image ? (
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    ) : (
                      <div className="w-full h-full bg-[#1A2D42] flex items-center justify-center text-xs text-gray-300 font-medium">
                        [ Image Placeholder ]
                      </div>
                    )}

                    {/* Circular Icon Badge */}
                    <div className="absolute bottom-3 left-4 w-9 h-9 rounded-full bg-[#0A192F] border border-[#D6AF36]/50 flex items-center justify-center text-[#D6AF36] shadow-sm">
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>

                  {/* Card Content (White Body) */}
                  <div className="p-4 flex-1 flex flex-col justify-between bg-white">
                    <div className="space-y-1.5">
                      <h3 className="text-base font-serif font-bold text-[#1A202C] group-hover:text-[#8B6528] transition-colors leading-snug">
                        {item.title}
                      </h3>
                      <p className="text-xs text-gray-500 leading-relaxed font-normal line-clamp-2">
                        {item.description}
                      </p>
                    </div>

                    {/* Action CTA Link */}
                    <div className="flex items-center gap-1.5 text-xs font-semibold text-[#8B6528] group-hover:text-[#5B4219] transition-colors pt-2">
                      <span>Explore</span>
                      <FiArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                    </div>
                  </div>

                </div>
              );
            })}
          </div>

        </div>
      </Container>
    </section>
  );
};

export default FifthSection;