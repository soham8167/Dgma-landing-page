import React from 'react';
import Container from '../Container';
import { FiArrowRight } from 'react-icons/fi';
import l1 from "../../assets/images/leader/l1.png";
import l2 from "../../assets/images/leader/l2.png";
import l3 from "../../assets/images/leader/l3.png";
import l4 from "../../assets/images/leader/l4.png";
import l5 from "../../assets/images/leader/l5.png";

const visionariesData = [
  {
    id: 1,
    name: 'Shri T. K. Mehta',
    designation: 'Former Chairman,',
    organization: 'Jawaharlal Nehru Port Trust',
    years: '1972 – 2008',
    image: l1, // Add image path here
  },
  {
    id: 2,
    name: 'Dr. G. Madhavan Nair',
    designation: 'Former Chairman,',
    organization: 'Shipping Corporation of India',
    years: '1983 – 2012',
    image: l2, // Add image path here
  },
  {
    id: 3,
    name: 'Shri Arun Duggal',
    designation: 'Former Chairman,',
    organization: 'DGS Advisory Committee',
    years: '1991 – 2016',
    image: l3, // Add image path here
  },
  {
    id: 4,
    name: 'Ms. Anuradha M. Chenoy',
    designation: 'Former Managing Director,',
    organization: 'Shipping Corporation of India',
    years: '2004 – 2017',
    image: l4, // Add image path here
  },
  {
    id: 5,
    name: 'Vice Admiral Shekhar Sinha',
    designation: 'Former Navy Chief &',
    organization: 'Maritime Strategist',
    years: '2005 – 2018',
    image: l5, // Add image path here
  },
];

const ThirdSection = () => {
  return (
    <section className="bg-[#E3D7C5] w-full min-h-150.75 py-14 font-sans text-gray-900">
      <Container>
        <div className="max-w-365 mx-auto px-4">
          
          {/* Header Section */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4">
            <div>
              <span className="text-[#A17C38] font-bold text-xs tracking-[0.2em] uppercase block mb-1">
                FEATURED LEADERS
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-[40px] font-serif font-normal text-[#1A202C] tracking-tight">
                Meet the Visionaries
              </h2>
            </div>

            <a
              href="#"
              className="flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#8B6528] hover:text-[#5B4219] transition-colors pb-1 shrink-0"
            >
              <span>View All Leaders</span>
              <FiArrowRight className="w-4 h-4" />
            </a>
          </div>

          {/* 5-Card Carousel/Grid with 28px gaps */}
          <div className="flex flex-wrap lg:flex-nowrap justify-center lg:justify-between gap-7">
            {visionariesData.map((leader) => (
              <div
                key={leader.id}
                className="w-[270.8px] h-97.5 bg-[#E3D7C5] rounded-lg border border-[#D5C6B1] overflow-hidden flex flex-col justify-between shadow-xs hover:shadow-md transition-all duration-300 group cursor-pointer"
              >
                {/* Image Wrapper ($270.8px x $220px) */}
                <div className="w-[270.8px] h-55 bg-gray-400 overflow-hidden relative shrink-0">
                  {leader.image ? (
                    <img
                      src={leader.image}
                      alt={leader.name}
                      className="w-full h-full object-cover rounded-t-[7px] transition-transform duration-500 group-hover:scale-105"
                    />
                  ) : (
                    <div className="w-full h-full bg-[#333C4A] flex items-center justify-center text-xs text-gray-300 font-medium">
                      [ Image Placeholder ]
                    </div>
                  )}
                </div>

                {/* Text Content */}
                <div className="p-3.5 flex-1 flex flex-col justify-between">
                  <div>
                    {/* Name */}
                    <h3 className="text-[15px] font-serif font-bold text-[#8B6528] leading-tight mb-1 truncate">
                      {leader.name}
                    </h3>

                    {/* Designation & Organization */}
                    <div className="text-[11px] text-gray-700 leading-snug font-medium">
                      <p>{leader.designation}</p>
                      <p className="truncate">{leader.organization}</p>
                    </div>
                  </div>

                  {/* Service Years & View Profile Action */}
                  <div className="space-y-1 pt-1">
                    <p className="text-[11px] text-[#A17C38] font-semibold">
                      {leader.years}
                    </p>

                    <div className="flex items-center gap-1 text-[11px] font-semibold text-[#8B6528] group-hover:text-[#5B4219] transition-colors">
                      <span>View Profile</span>
                      <FiArrowRight className="w-3 h-3 transition-transform group-hover:translate-x-1" />
                    </div>
                  </div>
                </div>

              </div>
            ))}
          </div>

        </div>
      </Container>
    </section>
  );
};

export default ThirdSection;