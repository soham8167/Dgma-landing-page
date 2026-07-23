import Container from "../common/Container";

const heroButtons = [
  { label: 'Ship Recycling', isPrimary: true },
  { label: 'Shipbuilding', isPrimary: false },
  { label: 'Maritime Training Institutes', isPrimary: false },
  { label: 'Maritime Leadership Series', isPrimary: false },
];

const Hero = () => {
  return (
    <section className="relative min-h-[calc(100vh-140px)] flex items-center bg-cover bg-center text-white py-16 md:py-24 bg-[url('/hero-placeholder.jpg')]">
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-[#0A284D]/75 mix-blend-multiply" />

      <Container className="relative z-10">
        <div className="max-w-3xl space-y-6">
          {/* Label */}
          <div className="flex items-center space-x-2">
            <span className="w-6 h-[2px] bg-[#D6AF36]" />
            <span className="text-[#D6AF36] font-semibold text-xs md:text-sm tracking-wider uppercase">
              WELCOME TO DG SHIPPING
            </span>
          </div>

          {/* Heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-normal leading-tight tracking-tight">
            Powering India's <br />
            <span className="text-[#D6AF36] italic font-normal">Maritime Future</span>
          </h1>

          {/* Description */}
          <p className="text-gray-200 text-sm sm:text-base md:text-lg leading-relaxed max-w-2xl">
            Driving growth. Enabling trade. Sustaining oceans for generations. Formulating robust maritime policies and safety parameters for our merchant fleet.
          </p>

          {/* Action Buttons */}
          <div className="pt-4 flex flex-wrap gap-3">
            {heroButtons.map((btn, index) => (
              <button
                key={index}
                className={`px-5 py-2.5 rounded-md text-xs sm:text-sm font-medium transition-all duration-200 ${
                  btn.isPrimary
                    ? 'bg-[#D6AF36] text-[#0A284D] hover:bg-[#c29e2e] font-semibold'
                    : 'bg-transparent text-white border border-white/40 hover:border-white hover:bg-white/10'
                }`}
              >
                {btn.label}
              </button>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Hero;