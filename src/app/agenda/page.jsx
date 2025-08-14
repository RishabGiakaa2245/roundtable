'use client';
import React, { useState } from 'react';
import Banner from '@/components/ui/Banner';
import Button from '@/components/ui/Button';
import Hero from '@/components/agenda/Hero';
import MainContent from '@/components/agenda/MainContent';
const ConferenceSchedulePage = () => {

  return (
    <div className="flex flex-col justify-start items-center gap-[27px] sm:gap-[40px] md:gap-[54px] w-full bg-[#ffffff]">
      {/* Hero Section */}
      <Hero />
      {/* Main Content Stack */}
      <MainContent />
      {/* Banner */}
      <Banner />
    </div>
  );
};
export default ConferenceSchedulePage;