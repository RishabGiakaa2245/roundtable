'use client';
import React, { useState } from 'react';
import Banner from '@/components/ui/Banner';
import Button from '@/components/ui/Button';
import Hero from '@/components/agenda/Hero';
import MainContent from '@/components/agenda/MainContent';
const ConferenceSchedulePage = () => {

  const handleContactUs = () => {
    if (typeof window !== 'undefined' && window.lenisScroll) {
      const footer = document.getElementById('footer-section');
      if (footer) {
        window.lenisScroll(footer, {
          duration: 1.2,
          easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t))
        });
      }
    }
  };

  return (
    <div className="flex flex-col justify-start items-center gap-[27px] sm:gap-[40px] md:gap-[54px] w-full bg-[#ffffff]">
      {/* Hero Section */}
      <Hero onContactUs={handleContactUs} />
      {/* Main Content Stack */}

        <MainContent />
      {/* Banner */}
      <Banner />
    </div>
  );
};
export default ConferenceSchedulePage;