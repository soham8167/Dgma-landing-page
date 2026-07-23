import { useState } from 'react';
import Container from '../common/Container';
import { FiSearch, FiChevronDown, FiMenu, FiX } from "react-icons/fi";
import headerImg1 from "../assets/images/header-img1.png";
import headerImg2 from "../assets/images/header-img2.png";
import headerImg3 from "../assets/images/header-img3.png";

const menuItems = [
  { label: 'Ship Recycling', hasDropdown: true },
  { label: 'Shipbuilding', hasDropdown: true },
  { label: 'Maritime Training Institute', hasDropdown: true },
  { label: 'Maritime Leadership', hasDropdown: true },
  { label: 'Knowledge Hub', hasDropdown: false },
  { label: 'Media Centre', hasDropdown: false },
  { label: 'Stories', hasDropdown: false },
  { label: 'India Map', hasDropdown: false },
];

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-[#0A284D] w-full text-white shadow-md font-sans">
      <Container>
        {/* Top Header Row - Concentrated center alignment like reference */}
        <div className="relative flex items-center justify-center py-4">
          
          {/* Left Logos (Positioned towards center-left) */}
          <div className="flex items-center space-x-3 mr-8 sm:mr-16 md:mr-24">
            <img
              src={headerImg1}
              alt="Government of India"
              className="h-10 md:h-12 w-auto object-contain brightness-0 invert"
            />
            <img
              src={headerImg2}
              alt="DG Shipping"
              className="h-11 md:h-14 w-auto object-contain"
            />
          </div>

          {/* Center Titles */}
          <div className="text-center hidden sm:block">
            <h1 className="text-base md:text-xl font-normal tracking-wide text-white leading-tight">
              Directorate General of Shipping
            </h1>
            <p className="text-xs md:text-sm text-gray-200 mt-0.5">
              Ministry of Ports, Shipping and Waterways
            </p>
            <p className="text-xs md:text-sm text-gray-200">
              Government of India
            </p>
          </div>

          {/* Right Logos (Positioned towards center-right) */}
          <div className="flex items-center space-x-3 ml-8 sm:ml-16 md:ml-24">
            <img
              src={headerImg3}
              alt="Azadi Ka Amrit Mahotsav & Swachh Bharat"
              className="h-9 md:h-11 w-auto object-contain brightness-0 invert"
            />
          </div>
        </div>

        {/* Navigation Row */}
        <div className="flex items-center justify-center py-3 relative">
          
          {/* Desktop Menu */}
          <nav className="hidden lg:flex items-center space-x-6 lg:space-x-8 text-xs lg:text-sm font-normal">
            {menuItems.map((item, index) => (
              <a
                key={index}
                href="#"
                className="flex items-center gap-1.5 text-gray-200 hover:text-[#D6AF36] transition-colors duration-200 whitespace-nowrap"
              >
                <span>{item.label}</span>
                {item.hasDropdown && <FiChevronDown className="w-3 h-3 text-gray-300" />}
              </a>
            ))}
          </nav>

          {/* Right Actions - Absolute to right edge on desktop */}
          <div className="hidden lg:flex items-center space-x-5 absolute right-0">
            <button
              aria-label="Search"
              className="text-gray-200 hover:text-[#D6AF36] transition-colors duration-200"
            >
              <FiSearch className="w-4 h-4" />
            </button>
            <button className="bg-[#D6AF36] hover:bg-[#c29e2e] text-[#0A284D] font-bold px-4 py-2 rounded-md text-xs tracking-wide transition-colors duration-200">
              AI Assistant
            </button>
          </div>

          {/* Mobile Hamburger Controls */}
          <div className="flex lg:hidden items-center justify-between w-full px-2">
            <span className="sm:hidden text-xs font-semibold tracking-wider text-gray-200 uppercase">
              DG Shipping
            </span>
            <div className="flex items-center space-x-4 ml-auto">
              <button
                aria-label="Search"
                className="text-gray-200 hover:text-[#D6AF36]"
              >
                <FiSearch className="w-5 h-5" />
              </button>
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-label="Toggle Menu"
                className="text-gray-200 hover:text-white p-1"
              >
                {isMobileMenuOpen ? <FiX className="w-6 h-6" /> : <FiMenu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {isMobileMenuOpen && (
          <nav className="lg:hidden border-t border-white/10 py-2 flex flex-col space-y-3 px-2">
            {menuItems.map((item, index) => (
              <a
                key={index}
                href="#"
                className="flex items-center justify-between text-[#FFFFFFCC] hover:text-[#D6AF36] text-sm py-1"
              >
                <span>{item.label}</span>
                {item.hasDropdown && <FiChevronDown className="w-4 h-4 text-gray-400" />}
              </a>
            ))}
            <div className="pt-3 border-t border-white/10 flex justify-start">
              <button className="w-full bg-[#D6AF36] hover:bg-[#c29e2e] text-[#0A284D] font-bold py-2.5 rounded-md text-xs tracking-wide transition-colors duration-200">
                AI Assistant
              </button>
            </div>
          </nav>
        )}
      </Container>
    </header>
  );
};

export default Header;