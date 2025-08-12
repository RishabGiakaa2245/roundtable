import React from 'react'
import Image from 'next/image'
import Button from './ui/Button'

const Statistics = () => {
  return (
    <>
        <section className="w-full px-4 sm:px-6 lg:px-8 mt-[60px] md:mt-[120px]">
      <div className="w-full max-w-[1440px] mx-auto">
        {/* Main Grid Container - 4 columns, 5 rows on desktop */}
        <div className="grid grid-cols-3 grid-rows-7 sm:grid-rows-5 md:grid-cols-4 row-start-1 md:grid-rows-5 gap-[10px] md:gap-[20px] max-h-[780px]">
          
          {/* Statistics Bar - Full width, spans all 4 columns */}
          <div className="col-span-3 md:col-span-3 row-span-1 bg-[linear-gradient(129deg,#0575e6_0%,#00f260_50%,#5336f8_100%)] rounded-[10px] md:rounded-[20px] px-[14px] md:px-[28px] py-[14px] md:py-[28px]">
            <div className="flex flex-row px- justify-center items-center w-full">
              {/* Expert Voices */}
              <div className="flex flex-row justify-start items-center w-full sm:w-[22%] ">
                <p className="text-[22px] md:text-[64px] font-bold leading-[42px] md:leading-[84px] text-center uppercase text-[#ffffff]">
                  70+
                </p>
                <p className="text-[12px] md:text-[16px] font-semibold leading-[15px] md:leading-[20px] text-left text-[#ffffff] ml-[6px] md:ml-[12px] w-[32%]">
                  Expert Voices
                </p>
              </div>
              {/* Disruptive Ideas */}
              <div className="flex flex-row gap-[6px] md:gap-[12px] justify-center items-center w-full sm:w-auto px-[25px] md:px-[50px] ">
                <p className="text-[22px] md:text-[64px] font-bold leading-[42px] md:leading-[84px] text-center uppercase text-[#ffffff]">
                  12
                </p>
                <p className="text-[12px] md:text-[16px] font-semibold leading-[15px] md:leading-[20px] text-left text-[#ffffff] w-[32%]">
                  Disruptive Ideas
                </p>
              </div>
              {/* Intensive Hours */}
              <div className="flex flex-row gap-[6px] md:gap-[12px] justify-center items-center w-full sm:w-auto px-[25px] md:px-[50px] ">
                <p className="text-[22px] md:text-[64px] font-bold leading-[42px] md:leading-[84px] text-center uppercase text-[#ffffff]">
                  12
                </p>
                <p className="text-[12px] md:text-[16px] font-semibold leading-[15px] md:leading-[20px] text-left text-[#ffffff] w-[32%]">
                  Intensive Hours
                </p>
              </div>
            </div>
          </div>

          {/* Unite Transform Card - Spans 2 columns, 4 rows */}
          <div className="col-span-2 md:col-span-2 row-span-4 row-start-2 relative bg-[linear-gradient(135deg,#0575e6_0%,#18afff_100%)] rounded-[10px] md:rounded-[20px] overflow-hidden">
            <div className="absolute bottom-[16px] md:bottom-[32px] left-[18px] md:left-[36px] z-10">
              <button className="bg-[#ffffff] text-[#000000] rounded-[11px] md:rounded-[22px] px-[12px] md:px-[24px] py-[5px] md:py-[10px] text-[12px] md:text-[16px] font-bold leading-[16px] md:leading-[21px]">
                Explore
              </button>
            </div>
            <div className="absolute top-[18px] md:top-[36px] pl-[18px] md:pl-[36px] flex flex-col justify-start items-start w-[80%]">
              <div className=" w-full text-[24px] md:text-[48px] font-medium leading-[31px] md:leading-[62px] text-left uppercase text-[#ffffff]">
                <span className="font-medium block">Unite</span>
                <span className="font-[100] block italic">Inspire</span>
                <span className="font-medium block border-b-[1px] border-white pb-6">Transform</span>
              </div>
              <div className="flex flex-row justify-start items-start w-full -mt-[43px] md:-mt-[86px]">
                
                <p className="text-[12px] md:text-[16px] font-normal leading-[15px] md:leading-[20px] text-left text-[#ffffff] sm:w-[45%] mt-[63px] md:mt-[126px] z-20">
                  Our event is dedicated to driving bold conversations that shape the future of innovation.
                </p>
                
              </div>
            </div>
            <div className="absolute bottom-0 right-0 w-[186px] md:w-[412px] ml-[-24px] md:ml-[-48px] self-center">
                  <Image
                    src="/images/33034375 3.png"
                    alt="Hero Background"
                    width={372}
                    height={462}
                    className="w-full h-auto rounded-[10px] md:rounded-[20px]"
                  />
                </div>
          </div>

          {/* Join Us Card - Spans 1 column, 2 rows */}
          <div className="col-span-1  md:col-span-1 row-span-4 row-start-2 flex flex-col gap-[2px] md:gap-[4px] justify-start items-center w-full bg-[#000000] rounded-[10px] md:rounded-[20px] p-4 md:p-0 overflow-hidden">
            <p className="text-[8px] md:text-[16px] font-normal leading-[10px] md:leading-[20px] text-left text-[#ffb11b] w-[100%] sm:w-[80%] mt-[16px] md:mt-[32px]">
              <span className="font-bold">Join us</span>
              <span className="font-light text-white">
                {' '}
                as we create connections, share insights, and empower the next era of progress.
              </span>
              <div className="w-[33px] md:w-[66px] h-[1px] bg-[#ffb11b] mb-[2px] md:mb-[4px] self-start my-[12px] md:my-[24px]"></div>
            </p>
            <div className="relative w-full h-[80%] ">
              <Image
                src="/images/img_rectangle_160872.png"
                alt="Event Image"
                width={320}
                height={480}
                className="w-full h-full object-cover rounded-b-[10px] md:rounded-b-[20px]"
              />
              <div className="absolute top-0 left-0 w-full h-[27px] md:h-[54px] bg-[linear-gradient(180deg,#000000_0%,#00000000_100%)] flex flex-row justify-start items-center px-[12px] md:px-[24px] py-[12px] md:py-[24px]">
                
              </div>
            </div>
          </div>

          {/* Right Side Meeting Images */}
          <div className=" col-span-1 row-span-2 col-start-1 sm:col-start-4 row-start-6 sm:row-start-1">
            <Image
              src="/images/userFlow.png"
              alt="Meeting Room 1"
              width={320}
              height={280}
              className="w-full h-full object-cover rounded-[10px] md:rounded-[20px]"
            />
          </div>
          
          <div className=" col-span-1 row-span-2 col-start-2 sm:col-start-4 row-start-6 sm:row-start-3">
            <Image
              src="/images/Rectangle 160871.png"
              alt="Meeting Room 2"
              width={320}
              height={260}
              className="w-full h-full object-cover rounded-[10px] md:rounded-[20px]"
            />
          </div>
          
          <div className=" col-span-1 row-span-2 sm:row-span-1 col-start-3 sm:col-start-4 row-start-6 sm:row-start-5">
            <Image
              src="/images/img_rectangle_160947.png"
              alt="Meeting Room 3"
              width={320}
              height={180}
              className="w-full h-full object-cover rounded-[10px] md:rounded-[20px]"
            />
          </div>

        </div>
      </div>
    </section>
    </>
  )
}

export default Statistics