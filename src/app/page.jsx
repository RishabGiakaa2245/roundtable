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
    <div data-scroll-section className="flex flex-col justify-start items-center w-full bg-[#ffffff]">
      <Hero />
      {/* Statistics and Unite Section */}
      <div data-scroll data-scroll-speed="0.4">
        <Statistics />
      </div>
      {/* Tracks at Roundtable Section */} 
      <div data-scroll data-scroll-speed="0.4">
        <TracksAtRountable />
      </div>
      {/* Select Roundtable Section */}
      <div data-scroll data-scroll-speed="0.4">
        <Rountable />
      </div>
      {/* Event Highlights Section */}
      <div data-scroll data-scroll-speed="0.4">
        <EventHighlights />
      </div>
      {/* Past Event Highlights Section */}
      <div data-scroll data-scroll-speed="0.4">
        <PostEventHighlights />
      </div>
      {/* Visionary Leaders Section */}
      <div data-scroll data-scroll-speed="0.4">
        <Visionary />
      </div>
      {/* Global Companies Section */}
      <div data-scroll data-scroll-speed="0.4">
        <GlobalCompanies />
      </div>
      {/* Fresh Stories Section */}
      <div data-scroll data-scroll-speed="0.4">
        <FreshStories />
      </div>
      {/* Footer */}
      <Footer />
    </div>
  );
};
export default HomePage;
