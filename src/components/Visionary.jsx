import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Button from './ui/Button';

// Data for the speakers. You can easily add, remove, or modify speakers here.
const speakersData = [
  {
    name: 'B. Shanker Jaiswal',
    title: 'Joint CP, Technology & Project Implementation and Licensing in Delhi Police',
    imageUrl: '/images/Rectangle 160878-1.png',
  },
  {
    name: 'Arvind Kumar',
    title: 'Director General, Software Technology Parks of India (STPI)',
    imageUrl: '/images/img.png',
  },
  {
    name: 'Ashima Batra IRS',
    title: 'Additional Director, Financial Intelligence Unit India',
    imageUrl: '/images/img-1.png',
  },
  {
    name: 'Suresh Khadakbhavi',
    title: 'CEO, Digi Yatra Foundation',
    imageUrl: '/images/img-2.png',
  },
  {
    name: 'Sandeep',
    title: 'Founder, Impact',
    imageUrl: '/images/Rectangle 1051.png',
  },
  {
    name: 'Golok Kumar Simli',
    title: 'Principal Advisor & CTO Passport Seva Programme, Ministry of External Affairs, Government of India',
    imageUrl: '/images/img-3.png',
  },
  {
    name: 'Dr. Satya N Gupta',
    title: 'NGNguru, Chairman - Blockchain For Productivity Forum (BPF)',
    imageUrl: '/images/KMM_5236.png',
  },
  {
    name: 'Nitin Mishra',
    title: 'Chief Technology Officer, Open Network for Digital Commerce (ONDC)',
    imageUrl: '/images/Rectangle 160878.png',
  },
];

const Visionary = () => {
  const [numVisibleSpeakers, setNumVisibleSpeakers] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // Adjust breakpoint as needed
    };

    handleResize(); // Set initial value
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (isMobile) {
      setNumVisibleSpeakers(4);
    } else {
      setNumVisibleSpeakers(8);
    }
  }, [isMobile]);

  const handleLoadMore = () => {
    if (isMobile) {
      setNumVisibleSpeakers(prev => prev + 2);
    } else {
      setNumVisibleSpeakers(prev => prev + 4);
    }
  };

  return (
    <>
      {/* Visionary Leaders Section */}
      <section className="w-full px-4 mt-[58px] sm:px-6 md:mt-[116px] lg:px-8">
        <div className="mx-auto w-full max-w-[1440px]">
          {/* Section Header */}
          <div className="mb-[22px] text-center md:mb-[44px]">
            <p className="text-center font-lufga text-[16px] font-bold uppercase leading-[21px] text-[#0575e6] md:text-[20px] md:leading-[27px]">
              Past Speakers
            </p>
            <h2 className="mt-[6px] text-center font-lufga text-[32px] font-normal leading-[42px] text-[#000000] md:mt-[8px] md:text-[64px] md:leading-[84px]">
              Meet Our Visionary Leaders
            </h2>
          </div>

          {/* Speakers Grid - Mapped from speakersData array */}
          <div className="grid w-full grid-cols-1 gap-[13px] sm:grid-cols-2 md:gap-[26px] lg:grid-cols-4">
            {speakersData.slice(0, numVisibleSpeakers).map((speaker, index) => (
              <div
                key={index} // It's important to provide a unique key for each item in a list
                className="flex w-full flex-col items-center justify-start"
              >
                <Image
                  src={speaker.imageUrl}
                  alt={speaker.name}
                  width={150}
                  height={160}
                  className="h-[70%] w-full  object-cover rounded-[20px]"
                />
                <div className="-mt-[46px] flex w-full h-[30%] flex-row items-start justify-start  bg-[linear-gradient(90deg,#0575e6_0%,#5336f8_50%,#00f260_100%)] p-[10px] py-0 shadow-[0px_4px_25px_#888888ff] rounded-[20px]">
                  <div className="-mt-[10px] w-full h-full  border border-[#ffffff] backdrop-blur-md bg-white/20  p-[12px] shadow-[0px_4px_100px_#888888ff] rounded-[20px]">
                    <div className="flex w-full h-fit flex-col items-start justify-start gap-[10px]">
                      <h3 className="text-left font-lufga font-medium  text-[#ffffff] text-[24px] leading-[32px]">
                        {speaker.name}
                      </h3>
                      <p className="w-full text-left font-lufga font-normal text-[#ffffff] text-[14px] leading-[18px]">
                        {speaker.title}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Load More Button */}
          {numVisibleSpeakers < speakersData.length && (
            <div className="mt-[27px] text-center md:mt-[54px]">
              <Button
                variant="primary"
                className="rounded-[12px] px-[12px] py-[6px] font-lufga text-[12px] font-bold leading-[16px] md:rounded-[24px] md:px-[24px] md:py-[12px] md:text-[16px] md:leading-[21px]"
                onClick={handleLoadMore}
              >
                Load More
              </Button>
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default Visionary;

