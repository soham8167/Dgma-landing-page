import { Anchor, MapPin, Star } from "lucide-react";

const ShipyardCard = ({
  name,
  location,
  rating,
  capabilities,
  capacity,
  tags = [],
  image,
}) => {
  return (
    <div className="w-full max-w-[320px] h-[400px] bg-[#E8F0EC]/80 backdrop-blur-xs rounded-xl border border-[#C2D8CE] shadow-2xs hover:shadow-md transition-all duration-300 flex flex-col justify-between overflow-hidden group cursor-pointer">
      <div className="w-full h-40 bg-[#22332F] relative overflow-hidden shrink-0">
        {image ? (
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-tr from-[#1B2E2A] via-[#2A423C] to-[#3B5A52]" />
        )}

        <div className="absolute top-3 left-3 w-7 h-7 bg-black/60 backdrop-blur-md rounded-md border border-white/20 flex items-center justify-center text-white">
          <Anchor className="w-3.5 h-3.5" />
        </div>
      </div>

      <div className="p-4 flex-1 flex flex-col justify-between">
        <div>
          <div className="flex items-start justify-between gap-2 mb-1">
            <h3 className="text-sm font-serif font-bold text-[#11211D] leading-tight line-clamp-2 group-hover:text-[#0C5A48] transition-colors">
              {name}
            </h3>
            <div className="flex items-center gap-1 text-[11px] font-bold text-[#2A453E] shrink-0 pt-0.5">
              <Star className="w-3 h-3 text-[#D6AF36] fill-[#D6AF36]" />
              <span>{rating}</span>
            </div>
          </div>

          <div className="flex items-center gap-1 text-[11px] text-[#55736B] mb-3">
            <MapPin className="w-3 h-3 text-[#55736B] shrink-0" />
            <span className="truncate">{location}</span>
          </div>

          <div className="mb-2">
            <p className="text-[9px] uppercase font-mono font-semibold tracking-wider text-[#6B8B82]">
              CAPABILITIES
            </p>
            <p className="text-[11px] font-medium text-[#1E332E] line-clamp-1">
              {capabilities}
            </p>
          </div>

          <div className="mb-3">
            <p className="text-[9px] uppercase font-mono font-semibold tracking-wider text-[#6B8B82]">
              ANNUAL CAPACITY
            </p>
            <p className="text-[11px] font-bold text-[#0C5A48]">{capacity}</p>
          </div>
        </div>

        <div>
          <div className="flex flex-wrap gap-1 mb-3">
            {tags.map((tag, idx) => (
              <span
                key={`${tag}-${idx}`}
                className="px-2 py-0.5 bg-[#D0E2DA] border border-[#B4D0C4] rounded-md text-[9px] font-medium text-[#10B981]"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="pt-2 border-t border-[#C8DBD2] flex items-center justify-center">
            <span className="text-xs font-bold text-[#0C5A48] group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
              View Profile &rarr;
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShipyardCard;
