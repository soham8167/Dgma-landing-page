import React from 'react';
import Container from '../Container';
import { FiArchive, FiUsers, FiBook, FiAward } from 'react-icons/fi';

const pillarsData = [
  {
    id: 1,
    title: 'Preserve',
    description: 'Documenting legacies for future generations',
    icon: FiArchive,
  },
  {
    id: 2,
    title: 'Inspire',
    description: "Motivating today's and tomorrow's leaders",
    icon: FiUsers,
  },
  {
    id: 3,
    title: 'Inform',
    description: 'Enriching knowledge for policy and industry',
    icon: FiBook,
  },
  {
    id: 4,
    title: 'Celebrate',
    description: 'Honouring contributions and achievements',
    icon: FiAward,
  },
];

const SecondSection = () => {
  return (
    <section className="w-full bg-[#F9F8F5] border-b border-gray-200/80 rounded-t-[30px] pt-6 pb-6 px-4 md:px-20 font-sans text-gray-900 shadow-xs">
      <Container className="h-full flex items-center">
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0 min-h-50 items-center">
          {pillarsData.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={item.id}
                className={`flex flex-col items-center text-center px-4 py-2 relative ${
                  index !== pillarsData.length - 1
                    ? 'lg:border-r lg:border-gray-300/50'
                    : ''
                }`}
              >
                {/* Circular Icon Container */}
                <div className="w-12 h-12 rounded-full bg-white shadow-xs border border-gray-100 flex items-center justify-center text-[#D6AF36] mb-3.5 transition-transform duration-300 hover:scale-105">
                  <Icon className="w-5 h-5 stroke-[1.8]" />
                </div>

                {/* Title */}
                <h3 className="text-xl font-serif font-bold text-gray-900 mb-1.5 tracking-tight">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-xs sm:text-sm text-gray-500 leading-relaxed max-w-50 font-normal">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
};

export default SecondSection;