import React from 'react';
import f1 from "../../assets/images/f1.png";
import Container from '../Container';
import { FiEye, FiMessageSquare, FiGlobe, FiArrowRight, FiChevronDown } from 'react-icons/fi';

const FourthSection = () => {
  return (
    <section className="bg-[#E3D7C5] w-full min-h-143.5 py-14 font-sans text-gray-900">
      <Container>
        <div className="max-w-362.5 mx-auto px-4 flex flex-col lg:flex-row items-center justify-center gap-6">
          
          {/* ================= CARD 1: SME FORM CARD (713px x 462px) ================= */}
          <div className="w-full lg:w-178.25 h-115.5 bg-[#0A192F] rounded-xl p-8 flex flex-col justify-between text-white shadow-md">
            
            {/* Form Header */}
            <div className="space-y-1.5">
              <span className="text-[#D6AF36] font-bold text-[10px] tracking-[0.25em] uppercase block">
                SHARE YOUR EXPERTISE
              </span>
              <h2 className="text-2xl sm:text-3xl font-serif font-normal tracking-tight text-white">
                Become a Subject Matter Expert
              </h2>
              <p className="text-gray-400 text-xs font-normal leading-relaxed">
                Contribute articles, research or interviews and help document India's maritime future.
              </p>
            </div>

            {/* Form Inputs Container */}
            <form onSubmit={(e) => e.preventDefault()} className="space-y-3.5 pt-1">
              {/* Full Name */}
              <div className="space-y-1">
                <label className="text-[11px] font-serif  text-gray-300 block">
                  Full Name
                </label>
                <input
                  type="text"
                  placeholder="e.g. Captain Sandeep Sharma"
                  className="w-full bg-[#112240] border border-gray-700/60 focus:border-[#D6AF36] rounded-md px-3.5 py-2 text-xs text-white placeholder-gray-500 outline-none transition-colors"
                />
              </div>

              {/* Email Address */}
              <div className="space-y-1">
                <label className="text-[11px] font-serif  text-gray-300 block">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="e.g. sandeep@maritime.gov.in"
                  className="w-full bg-[#112240] border border-gray-700/60 focus:border-[#D6AF36] rounded-md px-3.5 py-2 text-xs text-white placeholder-gray-500 outline-none transition-colors"
                />
              </div>

              {/* Phone Number & Area of Expertise Grid */}
              <div className="grid grid-cols-2 gap-3">
                <div className="space-y-1">
                  <label className="text-[11px] font-serif  text-gray-300 block">
                    Phone Number
                  </label>
                  <input
                    type="text"
                    placeholder="+91 98765 43210"
                    className="w-full bg-[#112240] border border-gray-700/60 focus:border-[#D6AF36] rounded-md px-3.5 py-2 text-xs text-white placeholder-gray-500 outline-none transition-colors"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-[11px] font-serif  text-gray-300 block">
                    Area of Expertise
                  </label>
                  <div className="relative">
                    <select className="w-full bg-[#112240] border border-gray-700/60 focus:border-[#D6AF36] rounded-md px-3.5 py-2 text-xs text-gray-400 outline-none appearance-none cursor-pointer">
                      <option value="">Select Specialty</option>
                      <option value="shipbuilding">Shipbuilding</option>
                      <option value="navigation">Navigation</option>
                      <option value="port-ops">Port Operations</option>
                    </select>
                    <FiChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 w-3.5 h-3.5 pointer-events-none" />
                  </div>
                </div>
              </div>

              {/* Submit CTA */}
              <button
                type="submit"
                className="w-full bg-[#916723] hover:bg-[#7e581c] text-white font-semibold text-xs py-2.5 rounded-md flex items-center justify-center gap-2 transition-colors duration-200 mt-2 cursor-pointer"
              >
                <span>Submit Your Interest</span>
                <FiArrowRight className="w-3.5 h-3.5" />
              </button>
            </form>

          </div>


          {/* ================= CARD 2: SPONSORSHIP CARD (713px x 462px) ================= */}
          <div className="w-full lg:w-178.25 h-115.5 bg-[#F7F4EE] rounded-xl flex overflow-hidden shadow-md">
            
            {/* Content Div (473px x 462px) */}
            <div className="w-full sm:w-118.25 h-115.5 p-8 flex flex-col justify-between text-gray-900">
              
              {/* Header */}
              <div className="space-y-1.5">
                <span className="text-[#A17C38] font-bold text-[10px] tracking-[0.25em] uppercase block">
                  PARTNER WITH US
                </span>
                <h2 className="text-2xl sm:text-3xl font-serif font-normal tracking-tight text-[#1A202C]">
                  Sponsorship Opportunities
                </h2>
                <p className="text-gray-600 text-xs font-normal leading-relaxed">
                  Showcase your organisation and support this national knowledge initiative.
                </p>
              </div>

              {/* Feature Points List */}
              <div className="space-y-3.5 py-1">
                {/* Point 1 */}
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 rounded-full bg-white border border-[#E2D8C7] flex items-center justify-center text-[#D6AF36] shrink-0 mt-0.5 shadow-2xs">
                    <FiEye className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs font-serif font-bold text-gray-900">
                      Brand Visibility
                    </h4>
                    <p className="text-[11px] text-gray-500 leading-tight">
                      Across digital & print platforms
                    </p>
                  </div>
                </div>

                {/* Point 2 */}
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 rounded-full bg-white border border-[#E2D8C7] flex items-center justify-center text-[#D6AF36] shrink-0 mt-0.5 shadow-2xs">
                    <FiMessageSquare className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs font-serif font-bold text-gray-900">
                      Thought Leadership
                    </h4>
                    <p className="text-[11px] text-gray-500 leading-tight">
                      Be positioned as a maritime leader
                    </p>
                  </div>
                </div>

                {/* Point 3 */}
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 rounded-full bg-white border border-[#E2D8C7] flex items-center justify-center text-[#D6AF36] shrink-0 mt-0.5 shadow-2xs">
                    <FiGlobe className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs font-serif font-bold text-gray-900">
                      Nation Building
                    </h4>
                    <p className="text-[11px] text-gray-500 leading-tight">
                      Contribute to preserving maritime legacy
                    </p>
                  </div>
                </div>
              </div>

              {/* View Sponsorship Tiers CTA */}
              <button className="w-full bg-[#0A192F] hover:bg-[#112240] text-white font-semibold text-xs py-2.5 rounded-md flex items-center justify-center gap-2 transition-colors duration-200 cursor-pointer">
                <span>View Sponsorship Tiers</span>
                <FiArrowRight className="w-3.5 h-3.5" />
              </button>

            </div>

            {/* Image Div (240px x 462px) */}
            <div className="hidden sm:block w-60 h-115.5 bg-gray-400 overflow-hidden relative shrink-0">
              <img
                src={f1}
                alt="Sponsorship Lighthouse"
                className="w-full h-full object-cover rounded-r-xl"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                }}
              />
              {/* Fallback styling when image path is empty */}
              <div className="w-full h-full bg-[#2A3B50] flex items-center justify-center text-center p-4 text-xs text-gray-300 font-medium leading-relaxed">
                [ Lighthouse Image Placeholder ]
              </div>
            </div>

          </div>

        </div>
      </Container>
    </section>
  );
};

export default FourthSection;