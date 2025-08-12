import React from 'react'
import Button from './ui/Button'
import VideoHerobackground from './ui/VideoHerobackground'
import VideoHero from './ui/VideoHero'
import Header from './common/Header'
import Image from 'next/image'

const Hero = () => {
  return (
    <>
        {/* Hero Section with Background */}
      <section data-scroll-section data-scroll-speed="0.2"  className="relative w-full h-[85vh] sm:h-[80vh] overflow-hidden">
        {/* Video Background */}
          <VideoHerobackground />


        <div className="absolute inset-0 w-full h-full z-10">
          {/* Header */}
          <Header />
          {/* Left Side Images */}
          <div  className="absolute left-[0] md:left-[80px] top-[13%] sm:top-0  w-[100vw] sm:w-[210px] h-[155px] sm:h-[80vh] overflow-hidden z-20">
            <div className="animate-scroll-right sm:animate-scroll-up flex flex-row sm:flex-col gap-[12px] md:gap-[24px] justify-start items-center">
              <Image
                src="/images/img_rectangle_160866.png"
                alt="Event Image 1"
                width={210}
                height={240}
                className="w-auto h-[120px] sm:w-full sm:h-auto rounded-[10px] md:rounded-[20px]"
              />
              <Image
                src="/images/img_rectangle_160867.png"
                alt="Event Image 2"
                width={210}
                height={140}
                className="w-auto h-[120px] sm:w-full sm:h-auto rounded-[10px] md:rounded-[20px]"
              />
              <Image
                src="/images/img_rectangle_160864.png"
                alt="Event Image 3"
                width={210}
                height={212}
                className="w-auto h-[120px] sm:w-full sm:h-auto rounded-[10px] md:rounded-[20px]"
              />
              <Image
                src="/images/img_rectangle_160866.png"
                alt="Event Image 1"
                width={210}
                height={240}
                className="w-auto h-[120px] sm:w-full sm:h-auto rounded-[10px] md:rounded-[20px]"
              />
              <Image
                src="/images/img_rectangle_160867.png"
                alt="Event Image 2"
                width={210}
                height={140}
                className="w-auto h-[120px] sm:w-full sm:h-auto rounded-[10px] md:rounded-[20px]"
              />
              <Image
                src="/images/img_rectangle_160864.png"
                alt="Event Image 3"
                width={210}
                height={212}
                className="w-auto h-[120px] sm:w-full sm:h-auto rounded-[10px] md:rounded-[20px]"
              />
            </div>
          </div>
          {/* Right Side Images */}
          <div className="absolute right-[0] md:right-[80px] bottom-0 sm:top-0  w-[100vw] sm:w-[105px] md:w-[210px] h-[155px] sm:h-[85vh] md:h-[80vh] overflow-hidden z-20">
            <div className="animate-scroll-left sm:animate-scroll-down flex flex-row sm:flex-col gap-[12px] md:gap-[24px] justify-start items-center">
              <Image
                src="/images/img_rectangle_160947.png"
                alt="Event Image 4"
                width={210}
                height={220}
                className="w-auto h-[120px] sm:w-full sm:h-auto rounded-[10px] md:rounded-[20px]"
              />
              <Image
                src="/images/img_rectangle_160866.png"
                alt="Event Image 5"
                width={210}
                height={220}
                className="w-auto h-[120px] sm:w-full sm:h-auto rounded-[10px] md:rounded-[20px]"
              />
              <Image
                src="/images/img_rectangle_160947.png"
                alt="Event Image 4"
                width={210}
                height={220}
                className="w-auto h-[120px] sm:w-full sm:h-auto rounded-[10px] md:rounded-[20px]"
              />
              <Image
                src="/images/img_rectangle_160866.png"
                alt="Event Image 5"
                width={210}
                height={220}
                className="w-auto h-[120px] sm:w-full sm:h-auto rounded-[10px] md:rounded-[20px]"
              />
              <Image
                src="/images/img_rectangle_160947.png"
                alt="Event Image 4"
                width={210}
                height={220}
                className="w-auto h-[120px] sm:w-full sm:h-auto rounded-[10px] md:rounded-[20px]"
              />
              <Image
                src="/images/img_rectangle_160866.png"
                alt="Event Image 5"
                width={210}
                height={220}
                className="w-auto h-[120px] sm:w-full sm:h-auto rounded-[10px] md:rounded-[20px]"
              />
            </div>
          </div>
          {/* Center Content */}
          <div className="relative inset-0 flex flex-col justify-center items-center pt-[73%] sm:pt-[11%] px-4 sm:px-6 lg:px-8">
            <div className="absolute top-[40%] sm:top-[10%] flex flex-col justify-start items-center w-full max-w-[720px] z-2">
              {/* Date and Location */}
              <div data-scroll data-scroll-speed="1" className="flex flex-row gap-[6px] md:gap-[12px] justify-center items-center">
                <p className="text-[14px] md:text-[18px] font-lufga font-semibold leading-[18px] md:leading-[24px] text-center text-[#ffffff] drop-shadow-lg">
                  7-9 October 2025
                </p>
                <p className="text-[15px] md:text-[19px] font-lufga font-normal leading-[19px] md:leading-[25px] text-center text-[#ffffff] drop-shadow-lg">
                  |
                </p>
                <p className="text-[14px] md:text-[18px] font-lufga font-semibold leading-[18px] md:leading-[24px] text-center text-[#ffffff] drop-shadow-lg">
Trident Hotel, BKC, Mumbai                </p>
              </div>
              {/* Main Title */}
              <h1 data-scroll data-scroll-speed="1" className="text-[24px] md:text-[36px] font-lufga font-medium leading-[28px] md:leading-[40px] text-center text-[#ffffff] max-w-[800px] drop-shadow-lg">
                The Giakaa Capital Fintech Leadership Roundtable Series
              </h1>
              {/* CTA Button */}
              <Button data-scroll data-scroll-speed="1"
                variant="primary"
                className="rounded-[25px] px-[12px] md:px-[24px] py-[6px] md:py-[12px] text-[12px] md:text-[16px] font-lufga font-bold leading-[16px] md:leading-[21px] mt-[17px] z-10"
              >
                Explore More
              </Button>
            </div>
            {/* Hero Video */}
            <div data-scroll data-scroll-speed="1" className="w-[376px] md:w-[800px] z-0">
              <VideoHero />
            </div>
          </div>
          {/* top Gradient Overlay - Desktop only */}
          <div className="hidden sm:block absolute top-0 w-full h-[20px] md:h-[40px] bg-[linear-gradient(180deg,#ffffff_0%,#ffffff00_100%)] z-50"></div>
          {/* Bottom Gradient Overlay - Desktop only */}
          <div className="hidden sm:block absolute bottom-0 w-full h-[20px] md:h-[40px] bg-[linear-gradient(0deg,#ffffff_0%,#ffffff00_100%)] z-50"></div>

          {/* Left Gradient Overlay - Mobile only */}
          <div className="block sm:hidden absolute left-0 top-0 w-[20px] h-full bg-[linear-gradient(90deg,#ffffff_0%,#ffffff00_100%)] z-50"></div>
          {/* Right Gradient Overlay - Mobile only */}
          <div className="block sm:hidden absolute right-0 top-0 w-[20px] h-full bg-[linear-gradient(270deg,#ffffff_0%,#ffffff00_100%)] z-50"></div>
        </div>
      </section>
      {/* Organized By Section */}
      <section data-scroll-section data-scroll-speed="0.2" className="w-full px-4 sm:px-6 lg:px-8 mt-[20px] md:mt-[30px]">
        <div className="w-full max-w-[1440px] mx-auto">
          <div className="flex flex-row justify-center items-start w-full max-w-[490px] mx-auto">
            {/* Organized By */}
            <div className="flex flex-col gap-[6px] md:gap-[12px] justify-center items-center w-[50%]">
              <div className="flex flex-row gap-[4px] md:gap-[8px] justify-center items-center w-full">
                <div className="w-[30px] md:w-[60px] h-[1px] bg-[#c9c9c9] "></div>
                <p className="text-[10px] md:text-[12px] font-lufga font-bold leading-[13px] md:leading-[16px] text-center uppercase text-[#000000] self-center">
                  Organised By
                </p>
                <div className="w-[30px] md:w-[60px] h-[1px] bg-[#c9c9c9] "></div>
              </div>
              <div className="w-[110px] md:w-[220px]">
                <Image
                  src="/images/img_primary_without_bg.png"
                  alt="Organizer Logo"
                  width={220}
                  height={36}
                  className="w-full h-auto"
                />
              </div>
            </div>
            {/* Powered By */}
            <div className="flex flex-col gap-[6px] md:gap-[12px] justify-start items-center w-[50%] self-center">
              <div className="flex flex-row justify-center items-center w-full">
                <div className="w-[30px] md:w-[60px] h-[1px] bg-[#c9c9c9]"></div>
                <p className="text-[10px] md:text-[12px] font-lufga font-bold leading-[13px] md:leading-[16px] text-center uppercase text-[#000000] self-center mx-2">
                  Powered By
                </p>
                <div className="w-[30px] md:w-[60px] h-[1px] bg-[#c9c9c9]"></div>
              </div>
              <div className="flex flex-row justify-center items-center w-full mr-[8px] md:mr-[16px] ml-[8px] md:ml-[16px]">
                <div className="bg-[#000000] rounded-[4px] md:rounded-[8px] p-[6px] md:p-[12px]">
                  <Image
                    src="/images/img_logo_mark.png"
                    alt="Partner Logo"
                    width={28}
                    height={28}
                    className="w-[28px] h-[28px] md:w-[30px] md:h-[30px]"
                  />
                </div>
                <div className="w-[32px] md:w-[64px] ml-[5px] md:ml-[10px]">
                  <Image
                    src="/images/img_group_3.svg"
                    alt="Partner Logo"
                    width={64}
                    height={20}
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Hero 