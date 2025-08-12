import React from 'react';
import Image from 'next/image';

// Move static data outside component to prevent re-creation on each render
const HIGHLIGHTS_DATA = [
  {
    id: 1,
    icon: "/images/img_frame_blue_700.svg",
    title: "Six Roundtables",
    description: "Inclusion, Valuations, India Stack, Partnerships, Fintech 2030, and Allocators in focused sessions.",
    alt: "Six Roundtables Icon"
  },
  {
    id: 2,
    icon: "/images/img_frame_blue_700_180x180.svg",
    title: "Invite-Only",
    description: "Decision-makers only: founders, bank/ NBFC leaders, PE, family offices, and institutions.",
    alt: "Invite-Only Icon"
  },
  {
    id: 3,
    icon: "/images/img_frame_180x180.svg",
    title: "Limited Seats",
    description: "Moderated, high-signal conversations — no panels, no pitches, no fluff.",
    alt: "Limited Seats Icon"
  },
  {
    id: 4,
    icon: "/images/img_frame_1.svg",
    title: "Chatham House",
    description: "Off-the-record candor to share real metrics, misses, and playbooks.",
    alt: "Chatham House Icon"
  },
  {
    id: 5,
    icon: "/images/img_frame_blue_700.svg",
    title: "Dual Moderation",
    description: "Operator + investor co-leads for on-stage and off-stage opportunities.",
    alt: "Dual Moderation Icon"
  },
  {
    id: 6,
    icon: "/images/img_frame_blue_700_180x180.svg",
    title: "Data Pre-Reads",
    description: "Glukas briefs, benchmarks, and context to prime productive debates.",
    alt: "Data Pre-Reads Icon"
  },
  {
    id: 7,
    icon: "/images/img_frame_180x180.svg",
    title: "Curated 1:1s",
    description: "Bank-fintech collaboration and capital connections arranged around your goals.",
    alt: "Curated 1:1s Icon"
  },
  {
    id: 8,
    icon: "/images/img_frame_1.svg",
    title: "Actionable Outcomes",
    description: "Post-event summary, warm intros (opt-out), and follow-up workstreams.",
    alt: "Actionable Outcomes Icon"
  }
];



// Memoized highlight card component to prevent unnecessary re-renders
const HighlightCard = React.memo(({ highlight }) => (
  <div className="flex flex-col gap-[15px] md:gap-[30px] justify-start items-center w-full max-w-[280px] group hover:transform hover:scale-105 transition-all duration-300">
    <div className="w-[90px] h-[90px] md:w-[180px] md:h-[180px] flex justify-center items-start">
      <Image
        src={highlight.icon}
        alt={highlight.alt}
        width={180}
        height={180}
        className="w-full h-full object-contain group-hover:rotate-3 transition-transform duration-300"
        loading="lazy"
        sizes="(max-width: 768px) 90px, 180px"
      />
    </div>
    <div className="flex flex-col gap-[8px] md:gap-[12px] justify-start items-center sm:items-start w-full text-center sm:text-left">
      <h3 className="text-[18px] md:text-[24px] font-lufga font-bold leading-[24px] md:leading-[32px] text-[#000000]">
        {highlight.title}
      </h3>
      <p className="text-[12px] md:text-[14px] font-lufga font-normal leading-[16px] md:leading-[20px] text-[#666666] max-w-[240px]">
        {highlight.description}
      </p>
    </div>
  </div>
));

HighlightCard.displayName = 'HighlightCard';

// Main component with optimizations
const EventHighlights = React.memo(() => {
  return (
    <section className="w-full px-4 sm:px-6 lg:px-8 mt-[58px] md:mt-[116px]">
      <div className="w-full max-w-[1440px] mx-auto">
        {/* Section Header */}
        <header className="text-center mb-[30px] md:mb-[60px]">
          <p className="text-[16px] md:text-[20px] font-lufga font-bold leading-[21px] md:leading-[27px] text-center uppercase text-[#0575e6]">
            Highlights
          </p>
          <h2 className="text-[32px] md:text-[64px] font-lufga font-medium leading-[42px] md:leading-[84px] text-center text-[#22242e] mt-[6px] md:mt-[8px]">
            Event Highlights & Connections
          </h2>
        </header>

        {/* Highlights Grid */}
        <div className="max-w-[1200px] mx-auto px-[20px] md:px-[40px]">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-[20px] md:gap-x-[40px] gap-y-[40px] md:gap-y-[60px] justify-items-center">
            {HIGHLIGHTS_DATA.map((highlight) => (
              <HighlightCard key={highlight.id} highlight={highlight} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
});

EventHighlights.displayName = 'EventHighlights';

export default EventHighlights;