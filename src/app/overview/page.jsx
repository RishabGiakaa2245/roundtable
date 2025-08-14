'use client';
import React, { useState } from 'react';

import Button from '@/components/ui/Button';
import Banner from '@/components/ui/Banner';
const page = () => {
  const [loading, setLoading] = useState(false);
  const handleRequestInvite = async () => {
    setLoading(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    setLoading(false);
    alert('Invitation request sent successfully!');
  };
  const agendaItems = [
    {
      id: 1,
      time: "4:30 - 4:40 PM",
      title: "Registration & Networking High Tea",
      icon: "/images/img_frame_1707482401.svg"
    },
    {
      id: 2,
      time: "4:40 - 4:50 PM", 
      title: "Opening Remarks by Giakaa Capital",
      icon: "/images/img_frame_1707482402.svg"
    },
    {
      id: 3,
      time: "4:30 - 4:40 PM",
      title: "Partner Introduction",
      icon: "/images/img_frame_1707482403.svg"
    },
    {
      id: 4,
      time: "4:30 - 4:40 PM",
      title: "Discussion Points",
      icon: "/images/img_frame_1707482404.svg"
    },
    {
      id: 5,
      time: "4:30 - 4:40 PM",
      title: "Group Photo & Thankyou Note",
      icon: "/images/img_frame_1707482405.svg"
    },
    {
      id: 6,
      time: "4:30 - 4:40 PM",
      title: "Networking & Refreshments",
      icon: "/images/img_frame_1707482406.svg"
    }
  ];
  const keyTopics = [
    "What are the main barriers to digital payment adoption in rural and semi-urban India?",
    "How can vernacular language and offline features improve access to digital payments?",
    "What role do agents and local businesses play in expanding financial inclusion beyond metros?",
    "How should regulations evolve to boost trust, security, and innovation in Bharat's payment ecosystem?",
    "How can AI and interoperable systems help build scalable, user-friendly payment solutions for underserved areas?",
    "How can banks, fintechs, and government collaborate to deliver inclusive financial services across Bharat?"
  ];
  return (
    <div className="flex flex-col justify-start items-center w-full bg-[#f9f8f6]">
      {/* Hero Section */}
      <section className="w-full relative">
        <div 
          className="w-full h-[320px] sm:h-[480px] md:h-[640px] bg-cover bg-center relative"
          style={{
            backgroundImage: `url('/images/img_bg_gradient_2.png'), url('/images/img_image1_1.png'), url('/images/img_vector_60.png')`
          }}
        >
          <div className="absolute inset-0 bg-[linear-gradient(276deg,#0049c6_0%,_#ccf3ff_100%)] opacity-80"></div>
          <div className="relative z-10 w-full h-full">
            <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 h-full">
              <div className="pt-[93px] pr-[28px] pb-[93px] pl-[28px] sm:pt-[140px] sm:pr-[42px] sm:pb-[140px] sm:pl-[42px] md:pt-[186px] md:pr-[56px] md:pb-[186px] md:pl-[56px] h-full flex items-end">
                <div className="mt-[40px] mr-[12px] ml-[12px] sm:mt-[60px] sm:mr-[18px] sm:ml-[18px] md:mt-[80px] md:mr-[24px] md:ml-[24px] flex flex-col gap-[3px] sm:gap-[4px] md:gap-[6px] justify-start items-start w-full">
                  <p className="text-[8px] sm:text-[12px] md:text-[16px] font-lufga font-bold leading-[10px] sm:leading-[15px] md:leading-[21px] text-left uppercase text-[#ffffff] w-auto">
                    2025 Agenda
                  </p>
                  <h1 className="text-[24px] sm:text-[36px] md:text-[48px] font-lufga font-normal leading-[31px] sm:leading-[46px] md:leading-[62px] text-left text-[#ffffff] w-full sm:w-[60%] md:w-[46%]">
                    Your Agenda: Networking, Discussions & More
                  </h1>
                  <div className="flex flex-col sm:flex-row justify-start items-start sm:items-center w-full gap-2 sm:gap-0">
                    <p className="text-[8px] sm:text-[12px] md:text-[16px] font-lufga font-normal leading-[10px] sm:leading-[15px] md:leading-[21px] text-left text-[#ffffff] w-auto">
                      7-9 October 2025
                    </p>
                    <p className="text-[8px] sm:text-[12px] md:text-[16px] font-lufga font-normal leading-[10px] sm:leading-[15px] md:leading-[21px] text-left text-[#ffffff] w-auto ml-0 sm:ml-[4px] md:ml-[8px]">
                      XYZ Conferenss Hall, India
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Main Content */}
      <section className="w-full">
        <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mt-[60px] mr-[40px] ml-[40px] sm:mt-[90px] sm:mr-[60px] sm:ml-[60px] md:mt-[120px] md:mr-[80px] md:ml-[80px] flex flex-col lg:flex-row gap-[10px] sm:gap-[15px] md:gap-[20px] justify-start items-start w-full">
            {/* Left Column */}
            <div className="w-full lg:w-[60%] flex flex-col gap-[10px] sm:gap-[15px] md:gap-[20px] justify-start items-center">
              {/* Overview Section */}
              <div className="w-full flex flex-row justify-start items-start shadow-[0px_0px_15px_#18afff33] border-[1px] border-solid border-[#18afff] rounded-[10px] sm:rounded-[15px] md:rounded-[20px] bg-[#eff9ff] pt-[16px] pr-[16px] pb-[16px] pl-[16px] sm:pt-[24px] sm:pr-[24px] sm:pb-[24px] sm:pl-[24px] md:pt-[32px] md:pr-[32px] md:pb-[32px] md:pl-[32px]">
                <div className="mb-[10px] sm:mb-[15px] md:mb-[20px] flex flex-col gap-[4px] sm:gap-[6px] md:gap-[8px] justify-start items-center w-full">
                  <div className="flex flex-row justify-start items-center w-full">
                    <div className="w-[2px] sm:w-[3px] md:w-[4px] h-[24px] sm:h-[36px] md:h-[48px] bg-[#0575e6] rounded-[1px] sm:rounded-[1.5px] md:rounded-[2px]"></div>
                    <h2 className="ml-[4px] sm:ml-[6px] md:ml-[8px] text-[24px] sm:text-[36px] md:text-[48px] font-lufga font-medium leading-[31px] sm:leading-[47px] md:leading-[63px] text-left text-[#000000] w-auto">
                      Overview
                    </h2>
                  </div>
                  <div className="text-[8px] sm:text-[12px] md:text-[16px] font-lufga font-normal leading-[10px] sm:leading-[15px] md:leading-[20px] text-left text-[#22242e] w-full">
                    <span>India is on the verge of a </span>
                    <span className="font-semibold">digital financial revolution</span>
                    <span>, charting a course toward a more inclusive, resilient, and environmentally conscious economy</span>
                    <span className="font-semibold"> by 2030</span>
                    <span>. Through </span>
                    <span className="font-semibold">cutting-edge technologies</span>
                    <span> and </span>
                    <span className="font-semibold">responsible innovation</span>
                    <span>, we are unlocking new opportunities for seamless access, financial empowerment, and sustainable growth.</span>
                    <br /><br />
                    <span className="font-semibold">Collaboration among policymakers</span>
                    <span>, industry leaders, and innovators is shaping a robust ecosystem built on trust, security, and green practices. Together, we're building a </span>
                    <span className="font-semibold">digital financial landscape that not only drives progress but also ensures a brighter, more sustainable future for every Indian.</span>
                  </div>
                </div>
              </div>
              {/* Key Topics Section */}
              <div className="w-full flex flex-row justify-start items-start shadow-[0px_0px_15px_#18afff33] border-[1px] border-solid border-[#ffb11b] rounded-[10px] sm:rounded-[15px] md:rounded-[20px] bg-[#fff6e6] pt-[18px] pr-[16px] pb-[18px] pl-[16px] sm:pt-[27px] sm:pr-[24px] sm:pb-[27px] sm:pl-[24px] md:pt-[36px] md:pr-[32px] md:pb-[36px] md:pl-[32px]">
                <div className="mb-[25px] sm:mb-[37px] md:mb-[50px] flex flex-col gap-[10px] sm:gap-[15px] md:gap-[20px] justify-start items-center w-full">
                  <div className="flex flex-row justify-start items-start w-full">
                    <div className="w-[2px] sm:w-[3px] md:w-[4px] h-[24px] sm:h-[36px] md:h-[48px] bg-[#ffb11b] rounded-[1px] sm:rounded-[1.5px] md:rounded-[2px]"></div>
                    <h2 className="ml-[4px] sm:ml-[6px] md:ml-[8px] text-[24px] sm:text-[36px] md:text-[48px] font-lufga font-medium leading-[31px] sm:leading-[47px] md:leading-[63px] text-left text-[#000000] w-auto self-center">
                      Key topics
                    </h2>
                  </div>
                  {keyTopics?.map((topic, index) => (
                    <div key={index} className="ml-[2px] sm:ml-[3px] md:ml-[4px] flex flex-row gap-[4px] sm:gap-[6px] md:gap-[8px] justify-start items-start w-full">
                      <img 
                        src="/images/img_frame_yellow_800.svg" 
                        className="w-[16px] h-[16px] sm:w-[24px] sm:h-[24px] md:w-[32px] md:h-[32px]" 
                        alt="Topic icon" 
                      />
                      <p className="text-[8px] sm:text-[12px] md:text-[16px] font-lufga font-medium leading-[10px] sm:leading-[15px] md:leading-[20px] text-left text-[#22242e] self-center w-[94%]">
                        {topic}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            {/* Right Column */}
            <div className="w-full lg:w-[40%] flex flex-col gap-[13px] sm:gap-[19px] md:gap-[26px] justify-start items-center">
              {/* Agenda Section */}
              <div className="w-full flex flex-col justify-start items-center shadow-[0px_0px_15px_#18afff33] border-[1px] border-solid border-[#5336f8] rounded-[10px] sm:rounded-[15px] md:rounded-[20px] bg-[#f0eeff] pt-[16px] pr-[16px] pb-[16px] pl-[16px] sm:pt-[24px] sm:pr-[24px] sm:pb-[24px] sm:pl-[24px] md:pt-[32px] md:pr-[32px] md:pb-[32px] md:pl-[32px]">
                <div className="mr-[2px] sm:mr-[3px] md:mr-[4px] mb-[13px] sm:mb-[19px] md:mb-[26px] flex flex-col gap-[16px] sm:gap-[24px] md:gap-[32px] justify-start items-center w-full">
                  <div className="flex flex-row justify-start items-center w-full">
                    <div className="w-[2px] sm:w-[3px] md:w-[4px] h-[24px] sm:h-[36px] md:h-[48px] bg-[#5336f8] rounded-[1px] sm:rounded-[1.5px] md:rounded-[2px]"></div>
                    <h2 className="ml-[4px] sm:ml-[6px] md:ml-[8px] text-[24px] sm:text-[36px] md:text-[48px] font-lufga font-medium leading-[31px] sm:leading-[47px] md:leading-[63px] text-left text-[#000000] w-auto">
                      Agenda
                    </h2>
                  </div>
                  <div className="flex flex-col gap-[18px] sm:gap-[27px] md:gap-[36px] w-full">
                    {agendaItems?.map((item) => (
                      <div key={item?.id} className="flex flex-row gap-[6px] sm:gap-[9px] md:gap-[12px] justify-center items-center w-full">
                        <div className="w-auto bg-[#5336f8] rounded-[2px] sm:rounded-[3px] md:rounded-[5px] pt-[6px] pr-[6px] pb-[6px] pl-[6px] sm:pt-[9px] sm:pr-[9px] sm:pb-[9px] sm:pl-[9px] md:pt-[12px] md:pr-[12px] md:pb-[12px] md:pl-[12px]">
                          <img 
                            src={item?.icon} 
                            className="w-[30px] h-[30px] sm:w-[45px] sm:h-[45px] md:w-[60px] md:h-[60px]" 
                            alt="Agenda icon" 
                          />
                        </div>
                        <div className="flex-1 flex flex-col gap-[1px] sm:gap-[1.5px] md:gap-[2px] justify-start items-start">
                          <p className="text-[8px] sm:text-[12px] md:text-[16px] font-lufga font-medium leading-[10px] sm:leading-[15px] md:leading-[21px] text-left text-[#22242e] w-auto">
                            {item?.time}
                          </p>
                          <p className="text-[10px] sm:text-[15px] md:text-[20px] font-lufga font-medium leading-[13px] sm:leading-[20px] md:leading-[27px] text-left bg-[linear-gradient(134deg,#5336f8_0%,_#0575e6_100%)] bg-clip-text text-transparent w-auto">
                            {item?.title}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              {/* Invitation Section */}
              <div className="w-full flex flex-row justify-start items-center shadow-[0px_0px_15px_#18afff33] border-[1px] border-solid border-[#ff5b5b] rounded-[10px] sm:rounded-[15px] md:rounded-[20px] bg-[#ff5b5b] pt-[12px] pr-[12px] pb-[12px] pl-[12px] sm:pt-[18px] sm:pr-[18px] sm:pb-[18px] sm:pl-[18px] md:pt-[24px] md:pr-[24px] md:pb-[24px] md:pl-[24px]">
                <div className="mr-[3px] ml-[3px] sm:mr-[4px] sm:ml-[4px] md:mr-[6px] md:ml-[6px] flex flex-col gap-[16px] sm:gap-[24px] md:gap-[32px] justify-start items-start w-full">
                  <h3 className="text-[16px] sm:text-[24px] md:text-[32px] font-lufga font-medium leading-[21px] sm:leading-[31px] md:leading-[42px] text-left text-[#ffffff] w-auto">
                    Secure Your Invitation Today
                  </h3>
                  <Button
                    onClick={handleRequestInvite}
                    loading={loading}
                    className="w-auto bg-[#ffffff] text-[#000000] hover:bg-gray-100 font-bold rounded-[12px] sm:rounded-[18px] md:rounded-[24px] pt-[6px] pr-[12px] pb-[6px] pl-[12px] sm:pt-[9px] sm:pr-[18px] sm:pb-[9px] sm:pl-[18px] md:pt-[12px] md:pr-[24px] md:pb-[12px] md:pl-[24px] text-[8px] sm:text-[12px] md:text-[16px] leading-[10px] sm:leading-[15px] md:leading-[21px]"
                  >
                    Request to invite
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Decorative Elements */}
      <section className="w-full mt-[37px] sm:mt-[55px] md:mt-[74px] overflow-x-auto">
        <div className="relative w-[761px] sm:w-[1141px] md:w-[1522px] h-[288px] sm:h-[432px] md:h-[576px]">
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="flex flex-col justify-start items-start w-full h-full">
              <img 
                src="/images/img_group_1707480459.png" 
                className="w-[26px] h-[53px] sm:w-[39px] sm:h-[79px] md:w-[52px] md:h-[106px]" 
                alt="Decorative element" 
              />
            </div>
          </div>
          <div className="absolute top-[95px] sm:top-[142px] md:top-[191px] right-[72px] sm:right-[108px] md:right-[144px] flex flex-col justify-start items-center w-[63px] sm:w-[94px] md:w-[126px]">
            <div className="pt-[6px] pr-[6px] pb-[6px] pl-[6px] sm:pt-[9px] sm:pr-[9px] sm:pb-[9px] sm:pl-[9px] md:pt-[12px] md:pr-[12px] md:pb-[12px] md:pl-[12px] border-[3px] sm:border-[4px] md:border-[6px] border-solid border-[#ffffff] rounded-[31px] sm:rounded-[46px] md:rounded-[62px] mr-[9px] sm:mr-[13px] md:mr-[18px] mb-[9px] sm:mb-[13px] md:mb-[18px]">
              <div className="flex flex-col justify-start items-center w-full border-[3px] sm:border-[4px] md:border-[6px] border-solid border-[#ffffff] rounded-[21px] sm:rounded-[31px] md:rounded-[42px] pt-[4px] pr-[4px] pb-[4px] pl-[4px] sm:pt-[6px] sm:pr-[6px] sm:pb-[6px] sm:pl-[6px] md:pt-[8px] md:pr-[8px] md:pb-[8px] md:pl-[8px]">
                <div className="w-[27px] h-[27px] sm:w-[40px] sm:h-[40px] md:w-[54px] md:h-[54px] border-[3px] sm:border-[4px] md:border-[6px] border-solid border-[#ffffff] rounded-[13px] sm:rounded-[19px] md:rounded-[26px]"></div>
              </div>
            </div>
          </div>
          <div className="absolute top-[77px] sm:top-[115px] md:top-[154px] right-[90px] sm:right-[135px] md:right-[180px] w-[81px] h-[81px] sm:w-[121px] sm:h-[121px] md:w-[162px] md:h-[162px] border-[3px] sm:border-[4px] md:border-[6px] border-solid border-[#ffffff] rounded-[40px] sm:rounded-[60px] md:rounded-[80px]"></div>
        </div>
      </section>
      {/* Footer */}
      <Banner />
    </div>
  );
};
export default page;