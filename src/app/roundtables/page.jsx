'use client';
import React from 'react';
import Image from 'next/image';
import Button from '@/components/ui/Button';
import DatePicker from '@/components/ui/DatePicker';
import Hero from '@/components/roundtables/Hero';
import Cards from '@/components/roundtables/Cards';

const Roundtables = () => {
  const handleSelectOne = () => {
    console.log('Select One clicked');
  };
  const handleContactUs = () => {
    console.log('Contact Us clicked');
  };
  const handleRequestInvite = () => {
    console.log('Request to invite clicked');
  };
  const handleDateChange = (date) => {
    console.log('Date changed:', date);
  };

  const eventCards = [
    {
      id: 1,
      timeColor: '#0575e6',
      bgColor: '#b9dbff',
      borderColor: '#0575e6',
      textColor: '#0575e6',
      timeIcon: '/images/img_frame.svg',
      locationIcon: '/images/img_frame_blue_700.svg',
      dateIcon: '/images/img_frame_blue_700_20x20.svg'
    },
    {
      id: 2,
      timeColor: '#5336f8',
      bgColor: '#d5ceff',
      borderColor: '#5336f8',
      textColor: '#5336f8',
      timeIcon: '/images/img_frame_deep_purple_a400.svg',
      locationIcon: '/images/img_frame_deep_purple_a400_20x20.svg',
      dateIcon: '/images/img_frame_20x20.svg'
    },
    {
      id: 3,
      timeColor: '#ff5b5b',
      bgColor: '#ffc4c4',
      borderColor: '#ff5b5b',
      textColor: '#ff5b5b',
      timeIcon: '/images/img_frame_red_a200.svg',
      locationIcon: '/images/img_frame_red_a200_20x20.svg',
      dateIcon: '/images/img_frame_1.svg'
    },
    {
      id: 4,
      timeColor: '#ff7d1b',
      bgColor: '#ffe2cb',
      borderColor: '#ff7d1b',
      textColor: '#ff7d1b',
      timeIcon: '/images/img_frame_yellow_900.svg',
      locationIcon: '/images/img_frame_yellow_900_20x20.svg',
      dateIcon: '/images/img_frame_2.svg'
    },
    {
      id: 5,
      timeColor: '#18afff',
      bgColor: '#cfeeff',
      borderColor: '#18afff',
      textColor: '#18afff',
      timeIcon: '/images/img_frame_light_blue_400.svg',
      locationIcon: '/images/img_frame_light_blue_400_20x20.svg',
      dateIcon: '/images/img_frame_3.svg'
    },
    {
      id: 6,
      timeColor: '#00ca00',
      bgColor: '#cdffe1',
      borderColor: '#00ca00',
      textColor: '#00ca00',
      timeIcon: '/images/img_frame_green_a700.svg',
      locationIcon: '/images/img_frame_green_a700_20x20.svg',
      dateIcon: '/images/img_frame_4.svg'
    }
  ];

  return (
    <div className="flex flex-col justify-start items-center w-full bg-[#ffffff]">
      {/* Hero Section */}
      <Hero />

        {/* Event Cards Section */}
        <Cards/>
        
    </div>
    
  );
};

export default Roundtables;