import mtibg from "../../assets/images/Maritime-Training.jpg";
import Container from "../Container";

const Mti = () => {
  return (
    <section
      className="relative w-full h-99 bg-cover bg-center font-sans text-white overflow-hidden flex items-center"
      style={{ backgroundImage: `url(${mtibg})` }}
    >
      {/* Dark Overlay matching Figma contrast */}
      <div className="absolute inset-0 bg-black/80" />

      {/* Main Content Container (Max width 1280px, height 236px) */}
      <Container className="relative z-10 px-4 sm:px-8">
        <div className="max-w-7xl h-59 mx-auto flex flex-col justify-center space-y-4 mr-10">
          
          {/* Top Tag */}
          <span className="text-[#FFFFFF99] font-semibold text-xs md:text-sm tracking-[0.25em] uppercase block">
            DIRECTORY
          </span>

          {/* Heading */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-normal text-[#FFFFFFB2] tracking-tight">
            Maritime Training Institute
          </h2>

          {/* Description */}
          <p className="text-[#FFFFFFB2] text-sm sm:text-base max-w-xl leading-relaxed font-normal">
            Discover 200+ DG Shipping approved training institutes shaping India's next generation of maritime professionals.
          </p>

          {/* Search Input Box */}
          <div className="pt-2">
            <input
              type="text"
              placeholder="Search institutes..."
              className="w-full max-w-107.5 px-5 py-3 rounded-xl bg-white text-gray-800 placeholder-gray-400 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-[#D6AF36] shadow-md transition-all"
            />
          </div>

        </div>
      </Container>
    </section>
  );
};

export default Mti;