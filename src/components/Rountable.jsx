import React from 'react';
import Image from 'next/image';
import Button from './ui/Button';

// Add these Tailwind custom utilities to your global CSS or component
const customStyles = `
  .line-clamp-3 {
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
`;

// Sample data - replace with your actual data source
const roundtableData = [
  {
    id: 1,
    title: "Building India's Sustainable Digital Financial Ecosystem 2030",
    time: '10:00 PM',
    location: 'xyz city, India',
    date: '9 Sept. 2025',
    image: '/images/img_rectangle_160911.png',
    timeIcon: '/images/img_search.svg',
    locationIcon: '/images/img_frame_white_a700.svg',
    dateIcon: '/images/img_frame_white_a700_18x18.svg',
  },
  {
    id: 2,
    title: 'Future of FinTech Innovation in Asia',
    time: '2:00 PM',
    location: 'Mumbai, India',
    date: '15 Sept. 2025',
    image: '/images/img_rectangle_160911.png',
    timeIcon: '/images/img_search.svg',
    locationIcon: '/images/img_frame_white_a700.svg',
    dateIcon: '/images/img_frame_white_a700_18x18.svg',
  },
  {
    id: 3,
    title: 'Digital Banking Transformation Summit',
    time: '11:00 AM',
    location: 'Delhi, India',
    date: '20 Sept. 2025',
    image: '/images/img_rectangle_160911.png',
    timeIcon: '/images/img_search.svg',
    locationIcon: '/images/img_frame_white_a700.svg',
    dateIcon: '/images/img_frame_white_a700_18x18.svg',
  },
  {
    id: 4,
    title: 'Blockchain & Cryptocurrency Regulations',
    time: '4:00 PM',
    location: 'Bangalore, India',
    date: '25 Sept. 2025',
    image: '/images/img_rectangle_160911.png',
    timeIcon: '/images/img_search.svg',
    locationIcon: '/images/img_frame_white_a700.svg',
    dateIcon: '/images/img_frame_white_a700_18x18.svg',
  },
  {
    id: 5,
    title: 'AI in Financial Services',
    time: '1:00 PM',
    location: 'Hyderabad, India',
    date: '30 Sept. 2025',
    image: '/images/img_rectangle_160911.png',
    timeIcon: '/images/img_search.svg',
    locationIcon: '/images/img_frame_white_a700.svg',
    dateIcon: '/images/img_frame_white_a700_18x18.svg',
  },
  {
    id: 6,
    title: 'Green Finance & ESG Investment',
    time: '3:00 PM',
    location: 'Pune, India',
    date: '5 Oct. 2025',
    image: '/images/img_rectangle_160911.png',
    timeIcon: '/images/img_search.svg',
    locationIcon: '/images/img_frame_white_a700.svg',
    dateIcon: '/images/img_frame_white_a700_18x18.svg',
  },
];

// Reusable RoundtableCard component
const RoundtableCard = ({ roundtable }) => {
  const { title, time, location, date, image, timeIcon, locationIcon, dateIcon } = roundtable;

  return (
    <div className="flex flex-col justify-start items-center w-full h-full">
      <div className="relative w-full aspect-[412/280] mb-4">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover rounded-[10px] md:rounded-[20px]"
        />
      </div>
      <div className="flex flex-col justify-between w-full shadow-[0px_4px_25px_#888888ff] bg-[linear-gradient(90deg,#0575e6_0%,#5336f8_50%,#00f260_100%)] rounded-[10px] md:rounded-[20px] p-[6px] md:p-[12px] -mt-[30px] md:-mt-[40px] relative z-10 flex-1">
        <div className="flex flex-col w-full shadow-[0px_4px_100px_#888888ff] bg-[#ffffff33] border border-[#ffffff] rounded-[10px] md:rounded-[20px] p-[15px] md:p-[20px] h-full">
          <div className="flex flex-col gap-[8px] md:gap-[12px] justify-between h-full">
            <h3 className="text-[24px] md:text-[24px] lg:text-[26px] font-lufga font-medium leading-[26px] md:leading-[26px] lg:leading-[27px] text-left text-[#ffffff] line-clamp-3 min-h-[60px] md:min-h-[72px]">
              {title}
            </h3>
            <div className="flex flex-col gap-[8px] md:gap-[12px] justify-center items-start flex-1">
              <div className="flex justify-start items-center gap-[6px] md:gap-[8px] w-full">
                <InfoItem icon={timeIcon} text={time} alt="Time Icon" />
                <InfoItem icon={locationIcon} text={location} alt="Location Icon" /> 
                <InfoItem icon={dateIcon} text={date} alt="Date Icon" />
              </div>
              <Button variant="secondary" size="md" className="w-1/2">
                Request for Invite
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Reusable InfoItem component for time, location, date
const InfoItem = ({ icon, text, alt }) => (
  <div className="flex flex-row gap-[4px] md:gap-[6px] justify-start items-center w-fit">
    <Image
      src={icon}
      alt={alt}
      width={12}
      height={12}
      className="w-[12px] h-[12px] md:w-[16px] md:h-[16px] flex-shrink-0"
    />
    <p className="text-[10px] md:text-[12px] font-lufga font-medium leading-[12px] md:leading-[16px] text-left text-[#ffffff] truncate">
      {text}
    </p>
  </div>
);

const Roundtable = ({ data = roundtableData }) => {
  return (
    <section className="w-full px-4 sm:px-6 lg:px-8 mt-[39px] md:mt-[78px]">
      <div className="w-full max-w-[1440px] mx-auto">
        {/* Section Header */}
        <div className="text-center mb-[30px] md:mb-[60px]">
          <p className="text-[16px] md:text-[20px] font-lufga font-bold leading-[21px] md:leading-[27px] text-center uppercase text-[#0575e6]">
Giakaa Capital Roundtables          </p>
          <h2 className="text-[32px] md:text-[64px] font-lufga font-medium leading-[42px] md:leading-[84px] text-center text-[#22242e] mt-[6px] md:mt-[8px]">
India’s Digital Finance Tracks          </h2>
        </div>

        {/* Roundtable Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[20px] md:gap-[30px] lg:gap-[40px] px-[20px] md:px-[40px] lg:px-[78px]">
          {data.map((roundtable) => (
            <div
              key={roundtable.id}
              className="h-full min-h-[400px] md:min-h-[450px] lg:min-h-[500px]"
            >
              <RoundtableCard roundtable={roundtable} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Roundtable;
