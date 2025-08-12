import React from 'react';
import Image from 'next/image';
import Button from './ui/Button';

const FreshStories = () => {
  // Stories data array - can be moved to props or external data source
  const stories = [
    {
      id: 1,
      imageUrl: '/images/img_rectangle_160945.png',
      title: 'Over 10,000 Jobs Lost as Automation Reshapes the',
      date: 'July 15',
      link: '#',
    },
    {
      id: 2,
      imageUrl: '/images/img_rectangle_160945.png',
      title: 'Over 10,000 Jobs Lost as Automation Reshapes the',
      date: 'July 15',
      link: '#',
    },
    {
      id: 3,
      imageUrl: '/images/img_rectangle_160945.png',
      title: 'Over 10,000 Jobs Lost as Automation Reshapes the',
      date: 'July 15',
      link: '#',
    },
  ];

  return (
    <section className="w-full px-8 mt-[96px]">
      <div className="w-full max-w-[1440px] mx-auto">
        {/* Section Header */}
        <div className="text-center mb-[40px]">
          <p className="text-[16px] lg:text-[20px] font-lufga font-bold leading-[21px] lg:leading-[27px] text-center uppercase text-[#0575e6]">
            News Feed
          </p>
          <h2 className="text-[32px] lg:text-[64px] font-lufga font-normal leading-[42px] lg:leading-[84px] text-center text-[#000000] mt-[16px] lg:mt-[32px]">
            Stay Updated by Fresh Stories
          </h2>
        </div>

        {/* Stories Grid */}
        <div className="flex flex-col lg:flex-row gap-[20px] w-full justify-center items-center">
          {stories.map((story, index) => (
            <div
              key={story.id} // Using unique story ID as key
              className="flex w-full lg:w-[420px] flex-col items-center justify-start"
            >
              <Image
                src={story.imageUrl}
                alt={story.title}
                width={210}
                height={120}
                className="h-[240px] w-full object-cover rounded-[20px]"
              />
              <div className="-mt-[22px] flex w-full h-[184px] flex-row items-start justify-start bg-[linear-gradient(90deg,#0575e6_0%,#5336f8_50%,#00f260_100%)] px-[16px] py-0 shadow-[0px_4px_25px_#888888ff] rounded-[20px]">
                <div className="-mt-[16px] w-full h-full border border-[#ffffff] backdrop-blur-md bg-white/20 p-[22px] shadow-[0px_4px_100px_#888888ff] rounded-[20px]">
                  <div className="flex w-full h-full flex-col items-start justify-between gap-[12px] mt-[6px]">
                    <div className="flex flex-col gap-[2px] justify-start items-start w-full">
                      <h3 className="text-[18px] lg:text-[24px] font-lufga font-semibold leading-[23px] lg:leading-[31px] text-left text-[#ffffff] w-full">
                        {story.title}
                      </h3>
                      <p className="text-[14px] lg:text-[16px] font-lufga font-medium leading-[18px] lg:leading-[21px] text-left text-[#ffffff]">
                        {story.date}
                      </p>
                    </div>
                    <a
                      href={story.link}
                      className="text-[14px] lg:text-[16px] font-lufga font-bold leading-[18px] lg:leading-[21px] text-center underline text-[#ffdf01] hover:text-[#ffb11b] transition-colors"
                    >
                      Read More
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Contact Section */}
        <div className="w-full mt-[60px] lg:mt-[80px]">
          <div className="bg-[#1D1D2B] rounded-[24px] p-[40px] lg:p-[60px] flex flex-col lg:flex-row items-center gap-28 relative overflow-hidden">
            {/* Left Content */}
            <div className=" z-10">
              <p className="text-[14px] lg:text-[16px] font-lufga font-bold text-[#ffffff] mb-[12px] uppercase tracking-wider">
                CONTACT
              </p>
              <h3 className="text-[32px] lg:text-[48px] font-lufga font-semibold text-[#ffffff] leading-[40px] lg:leading-[56px] mb-[40px] lg:mb-[60px] max-w-[500px]">
                Reach Out - We're Ready to Connect
              </h3>
            </div>

            {/* Right Content - Contact Info */}
            <div className="flex flex-col gap-[16px] z-10">
              <div className="flex items-center gap-[12px] min-w-[300px]">
                <div className="w-[48px] h-[48px] bg-white rounded-[12px] flex items-center justify-center">
                  <svg
                    className="w-[24px] h-[24px] text-[#1D1D2B]"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div className="flex-1 bg-white/20 border backdrop-blur-md px-[20px] py-[12px] rounded-[12px]">
                  <span className="text-[16px] font-lufga font-medium text-[#ffffff]">
                    Omika Dubey
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-[12px] min-w-[300px]">
                <div className="w-[48px] h-[48px] bg-white rounded-[12px] flex items-center justify-center">
                  <svg
                    className="w-[24px] h-[24px] text-[#1D1D2B]"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                </div>
                <div className="flex-1 bg-white/20 border backdrop-blur-md px-[20px] py-[12px] rounded-[12px]">
                  <span className="text-[16px] font-lufga font-medium text-[#ffffff]">
                    12345 67890
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-[12px] min-w-[300px]">
                <div className="w-[48px] h-[48px] bg-white rounded-[12px] flex items-center justify-center">
                  <svg
                    className="w-[24px] h-[24px] text-[#1D1D2B]"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                </div>
                <div className="flex-1 bg-white/20 border backdrop-blur-md px-[20px] py-[12px] rounded-[12px]">
                  <span className="text-[16px] font-lufga font-medium text-[#ffffff]">
                    Omika@gmail.com
                  </span>
                </div>
              </div>
            </div>

            {/* Right Image */}
            <div className="absolute right-0 bottom-0 z-1">
              <Image
                src="/images/2151876479 1.png"
                alt="Contact illustration"
                width={300}
                height={300}
                className="object-contain"
              />
            </div>

            {/* Arrow SVG */}
            <div className="absolute top-[10px] left-[500px] z-20 hidden lg:block">
              <Image
                src="/images/Vector.svg"
                alt="Arrow"
                width={100}
                height={60}
                className="w-[60px] lg:w-[120px] h-[40px] lg:h-[100px]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FreshStories;
