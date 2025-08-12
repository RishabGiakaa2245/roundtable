'use client';
import React from 'react';
import Image from 'next/image';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import Button from '@/components/ui/Button';
import VideoHero from '@/components/ui/VideoHerobackground';
import TracksAtRountable from '@/components/TracksAtRountable';
import Rountable from '@/components/Rountable';
import EventHighlights from '@/components/EventHighlights';
import Hero from '@/components/Hero';
import Statistics from '@/components/Statistics';
import PostEventHighlights from '@/components/PostEventHighlights';
import Visionary from '@/components/Visionary';
import GlobalCompanies from '@/components/GlobalCompanies';
import FreshStories from '@/components/FreshStories';
const HomePage = () => {
  return (
    <div className="flex flex-col justify-start items-center w-full bg-[#ffffff]">
      <Hero />
      {/* Statistics and Unite Section */}
      <Statistics />
      {/* Tracks at Roundtable Section */} 
      <TracksAtRountable />
      {/* Select Roundtable Section */}
      <Rountable />
      {/* Event Highlights Section */}
      <EventHighlights />
      {/* Past Event Highlights Section */}
      <PostEventHighlights />
      {/* Visionary Leaders Section */}
      <Visionary />
      {/* Global Companies Section */}
      <GlobalCompanies />
      {/* Fresh Stories Section */}
      <FreshStories />
      {/* Footer */}
      <Footer />
    </div>
  );
};
export default HomePage;
