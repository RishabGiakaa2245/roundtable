import React from "react";
import Image from "next/image";

const CompanyCard = ({ imgSrc }) => (
  <div className="flex flex-row justify-center items-center shadow-[0px_0px_15px_#18afff3f] bg-white border border-[#00000019] rounded-[10px] md:rounded-[20px] py-[11px] md:py-[22px] min-w-[120px]">
    <Image
      src={imgSrc}
      alt="Logo"
      width={80}
      height={40}
      className="w-[80px] h-auto object-contain"
    />
  </div>
);

const GlobalCompanies = () => {
  // Object-based arrays for partners and media partners
  const partnersRow1 = [
    { img: "/images/sia 1.png" },
    { img: "/images/sia 1.png" },
    { img: "/images/sia 1.png" },
    { img: "/images/sia 1.png" },
    { img: "/images/sia 1.png" },
    { img: "/images/sia 1.png" },
    { img: "/images/sia 1.png" },
  ];

  const partnersRow2 = [
    { img: "/images/sia 1.png" },
    { img: "/images/sia 1.png" },
    { img: "/images/sia 1.png" },
    { img: "/images/sia 1.png" },
    { img: "/images/sia 1.png" },
    { img: "/images/sia 1.png" },
    { img: "/images/sia 1.png" },
  ];

  const mediaRow = [
    { img: "/images/sia 1.png" },
    { img: "/images/sia 1.png" },
    { img: "/images/sia 1.png" },
    { img: "/images/sia 1.png" },
    { img: "/images/sia 1.png" },
    { img: "/images/sia 1.png" },
  ];

  return (
    <section className="w-full bg-[linear-gradient(90deg,#0575e6_0%,#5336f8_50%,#00f260_100%)] px-4 sm:px-6 lg:px-8 py-[33px] md:py-[66px] mt-[60px] md:mt-[120px]">
      <div className="w-full max-w-[1440px] mx-auto">
        
        {/* Past Partners Heading */}
        <p className="text-[16px] md:text-[20px] font-lufga font-bold text-center uppercase text-white">
          Past Partners
        </p>
        <h2 className="text-[32px] md:text-[64px] font-lufga font-normal text-center text-white mt-[16px] md:mt-[32px] w-full sm:w-[54%] mx-auto">
          Global Companies Attending our Events
        </h2>

        {/* Partners Rows */}
        <div className="mt-[30px] md:mt-[60px] flex flex-col gap-[24px] md:gap-[48px]">
          <div className="overflow-hidden">
            <div className="flex gap-[25px] md:gap-[50px] animate-scroll-left">
              {[...partnersRow1, ...partnersRow1].map((item, i) => (
                <CompanyCard key={`p1-${i}`} imgSrc={item.img} />
              ))}
            </div>
          </div>
          <div className="overflow-hidden">
            <div className="flex gap-[25px] md:gap-[50px] animate-scroll-right">
              {[...partnersRow2, ...partnersRow2].map((item, i) => (
                <CompanyCard key={`p2-${i}`} imgSrc={item.img} />
              ))}
            </div>
          </div>
        </div>

        {/* Past Media Partners Heading */}
        <p className="text-[16px] md:text-[20px] font-lufga font-bold text-center uppercase text-white mt-[50px]">
          Past Media Partners
        </p>

        {/* Media Partners Row */}
        <div className="mt-[24px] overflow-hidden">
          <div className="flex gap-[25px] md:gap-[50px] animate-scroll-left">
            {[...mediaRow, ...mediaRow].map((item, i) => (
              <CompanyCard key={`m-${i}`} imgSrc={item.img} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default GlobalCompanies;
