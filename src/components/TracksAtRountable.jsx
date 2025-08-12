import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';

const TracksAtRountable = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const scrollContainerRef = useRef(null);
  const totalSlides = 3;

const trackData = [
  // Grid 1
  [
    [
      {
        icon: '/images/Vector.png',
        title: 'Smart Capital',
        description:
          'What PE, family offices, and institutions are thinking, how they differ, and why.',
      },
      {
        icon: '/images/Vector-1.png',
        title: 'RegTech & AI',
        description:
          'Turn DDP and KYC norms into an edge with predictable models and audit-ready data.',
      },
    ],
    [
      {
        icon: '/images/Vector-2.png',
        title: 'Fintech 2030',
        description:
          'Align DPI, consumer protection, DPRM, and new frameworks with resilient business models.',
      },
      {
        icon: '/images/Vector-11.png',
        title: 'Cashflow Credit',
        description:
          'Use OCEN, AA data, and ONDC to underwrite and collect profitably at scale.',
      },
    ],
  ],
  // Grid 2
  [
    [
      {
        icon: '/images/Vector-3.png',
        title: 'Inclusive Insurance',
        description:
          'Micro-agents, embedded distribution, and digital claims for the next 500 million.',
      },
      {
        icon: '/images/Vector-5.png',
        title: 'Global UPI',
        description:
          'Link corridors, expand RuPay, and export Indian fintech with compliant operations.',
      },
    ],
    [
      {
        icon: '/images/Vector-6.png',
        title: 'UPI Security',
        description:
          'Detect frauds and deepfakes with device integrity, tokenization, and real-time fraud controls.',
      },
      {
        icon: '/images/Vector-7.png',
        title: 'Embedded Finance',
        description:
          'Move beyond MRs, PaaS, interchange, credit on UPI, and SaaS-led monetization.',
      },
    ],
  ],
  // Grid 3
  [
    [
      {
        icon: '/images/Vector-8.png',
        title: '2025 Valuations',
        description:
          'Razor growth versus profitability, cost of capital, secondaries, and realisable exits.',
      },
      {
        icon: '/images/Vector-9.png',
        title: 'Bank–Fintech Partnerships',
        description:
          'Co-create FIDC, API, and playbooks that share risk and engineer compliance.',
      },
    ],
    [
      {
        icon: '/images/Vector-10.png',
        title: 'Reaching Bharat',
        description:
          'Scale digital payments beyond metros with offline, vernacular, low-cost, and sustainable economics.',
      },
      {
        icon: '/images/Vector-4.png',
        title: 'India Stack',
        description:
          'Mandate AA, OCEN, eKYC, and credit on UPI with developer-first infrastructure.',
      },
    ],
  ],
];


  // Check if screen is mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Track data based on the provided image
  

  // Auto-scroll functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides);
    }, 4000); // Change slide every 4 seconds

    return () => clearInterval(interval);
  }, [totalSlides]);

  const goToPrevious = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const goToNext = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const TrackCard = ({ track }) => (
    <div className="flex flex-row justify-start items-start w-full min-h-[120px] md:h-[200px] bg-[#ffffff33] border-2 border-[#ffffff] rounded-[10px] md:rounded-[20px] px-[11px] md:px-[22px] py-[11px] md:py-[22px]">
      <div className="flex flex-col gap-[4px] md:gap-[8px] justify-start items-start w-full h-full">
        <Image
          src={track.icon}
          alt="Track Icon"
          width={42}
          height={42}
          className="w-[21px] h-auto md:w-[42px]  flex-shrink-0"
        />
        <h3 className="text-[14px] md:text-[18px] font-lufga font-semibold leading-[18px] md:leading-[32px] text-left text-[#ffffff] flex-shrink-0">
          {track.title}
        </h3>
        <p className="text-[10px] md:text-[14px] font-lufga font-extralight leading-[12px] md:leading-[18px] text-left text-[#ffffff] w-full flex-1">
          {track.description}
        </p>
      </div>
    </div>
  );

  return (
    <>
      <section className="w-[100vw] bg-[linear-gradient(-90deg,#0575e6_0%,#5336f8_50%,#00f260_100%)] px-4 sm:px-6 lg:px-8 mt-[43px] md:mt-[86px] -mt-[26px] md:-mt-[52px] relative overflow-hidden">
        <div className="w-full max-w-[1440px] mx-auto">
          <div className="flex flex-col justify-start items-start w-full">
            {/* Decorative Element */}
            <div className="flex flex-col lg:flex-row justify-start w-full px-[12px] md:px-[24px]">
              {/* Left Side - Technology Image */}
              <div className="w-full lg:w-[44%] mr-[12px] md:mr-[24px] mt-[28px] md:mt-[56px]">
                <div
                  className="w-full h-[333px] md:h-[666px] bg-contain bg-bottom bg-no-repeat rounded-[14px] md:rounded-[28px] mt-[7px] md:mt-[14px]"
                  style={{ backgroundImage: "url('/images/Group 1984077514.png')" }}
                >
                  <Image
                    src="/images/img_technology_inte.png"
                    alt="Technology Integration"
                    width={542}
                    height={666}
                    className="w-[100%] h-auto rounded-[14px] md:rounded-[28px] mt-[7px] md:mt-[14px]"
                  />
                </div>
              </div>

              {/* Right Side - Content */}
              <div className="flex flex-col justify-start items-start w-full lg:w-[47%] mt-8 mb-8 lg:mt-[75px] lg:mb-8">
                <p className="text-[16px] md:text-[20px] font-lufga font-bold pl-5 leading-[21px] md:leading-[27px] text-left uppercase text-[#ffffff]">
                  Events Topics
                </p>
                <h2 className="text-[32px] md:text-[64px] font-lufga font-medium pl-5 leading-[42px] md:leading-[84px] text-left text-[#ffffff] ">
                  Tracks at Roundtable
                </h2>

                {/* Scrollable Track Cards Container - FIXED */}
                <div className="w-full overflow-hidden mt-[20px] md:mt-[40px]">
                  <div
                    ref={scrollContainerRef}
                    className="flex transition-transform duration-500 ease-in-out"
                    style={{
                      width: `${totalSlides * 100}%`,
                      transform: `translateX(-${currentSlide * (100 / totalSlides)}%)`,
                    }}
                  >
                    {trackData.map((grid, gridIndex) => (
                      <div
                        key={gridIndex}
                        className="flex flex-col gap-[15px] md:gap-[30px] px-2 md:px-4 shrink-0"
                        style={{ width: `${100 / totalSlides}%` }}
                      >
                        {/* Mobile: Stack all cards vertically, Desktop: Keep 2 columns */}
                        <div className="flex flex-col md:flex-row gap-[15px] md:gap-[30px] w-full">
                          {grid.map((column, columnIndex) => (
                            <div
                              key={columnIndex}
                              className="flex flex-col gap-[15px] md:gap-[30px] justify-start items-center w-full"
                            >
                              {column.map((track, trackIndex) => (
                                <TrackCard key={trackIndex} track={track} />
                              ))}
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Progress Indicators */}
                <div className="flex flex-row items-center w-full mt-[23px] md:mt-[46px] mr-[4px] md:mr-[8px]">
                  <div className="flex flex-row justify-start items-center w-[70%]">
                    {Array.from({ length: totalSlides }).map((_, index) => (
                      <div
                        key={index}
                        className={`h-[4px] rounded-[2px] md:rounded-[4px] ${
                          index === 0 ? '' : 'ml-[3px] md:ml-[6px]'
                        } ${
                          index === currentSlide
                            ? 'w-[70px] md:w-[140px] bg-[#ffffff]'
                            : 'w-[20px] md:w-[40px] bg-[#ffffff8e]'
                        } transition-all duration-300 ease-in-out`}
                      ></div>
                    ))}
                  </div>

                  <div className="flex flex-row justify-end gap-4 items-center w-[30%] mr-[9%]">
                    <button
                      onClick={goToPrevious}
                      className="bg-[#ffffff] rounded-[6px] md:rounded-[12px] p-[4px] md:p-[8px] self-center hover:bg-[#f0f0f0] transition-colors duration-200"
                    >
                      <Image
                        src="/images/img_arrow_right.svg"
                        alt="Arrow Left"
                        width={12}
                        height={12}
                        className="w-[12px] rotate-180 h-[12px] md:w-[24px] md:h-[24px]"
                      />
                    </button>
                    <button
                      onClick={goToNext}
                      className="bg-[#ffffff] rounded-[6px] md:rounded-[12px] p-[4px] md:p-[8px] self-center hover:bg-[#f0f0f0] transition-colors duration-200"
                    >
                      <Image
                        src="/images/img_arrow_right.svg"
                        alt="Arrow Right"
                        width={12}
                        height={12}
                        className="w-[12px] h-[12px] md:w-[24px] md:h-[24px]"
                      />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Decorative Elements Bottom */}
        <div className="absolute top-0 left-0 transform -translate-x-1/2 -translate-y-1/2">
          <Image
            src="/images/giakaa_capital_events_platform.png"
            alt="Decorative Element"
            width={37}
            height={37}
            className="w-[37px] h-[37px] md:w-[74px] md:h-[74px]"
          />
        </div>
        <div className="absolute bottom-[-18px] md:bottom-[-36px] left-1/2 lg:left-[35%] transform -translate-x-1/2">
          <Image
            src="/images/giakaa_capital_events_platform.png"
            alt="Decorative Element"
            width={37}
            height={37}
            className="w-[37px] h-[37px] md:w-[74px] md:h-[74px]"
          />
        </div>
      </section>
    </>
  );
};

export default TracksAtRountable;