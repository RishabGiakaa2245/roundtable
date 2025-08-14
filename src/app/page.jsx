'use client';
import React from 'react';
import Image from 'next/image';
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
// import { useRef } from 'react';
// import { useParallax } from '@/hooks/useParallax';

const HomePage = () => {
  // const statisticsRef = useRef(null);
  // const tracksRef = useRef(null);
  // const roundtableRef = useRef(null);
  // const eventHighlightsRef = useRef(null);
  // const postEventRef = useRef(null);
  // const visionaryRef = useRef(null);
  // const companiesRef = useRef(null);
  // const storiesRef = useRef(null);

  // useParallax(statisticsRef, 0.2);
  // useParallax(tracksRef, 0.04);
  // useParallax(roundtableRef, 0.04);
  // useParallax(eventHighlightsRef, 0.04);
  // useParallax(postEventRef, 0.04);
  // useParallax(visionaryRef, 0.04);
  // useParallax(companiesRef, 0.04);
  // useParallax(storiesRef, 0.04);

  const handleExploreMoreHero = () => {
    if (typeof window !== 'undefined' && window.lenisScroll) {
      const statistics = document.getElementById('statistics-section');
      if (statistics) {
        window.lenisScroll(statistics, {
          duration: 1.2,
          easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        });
      }
    }
  };
  const handleExploreMoreStat = () => {
    if (typeof window !== 'undefined' && window.lenisScroll) {
      const statistics = document.getElementById('Tracks-section');
      if (statistics) {
        window.lenisScroll(statistics, {
          duration: 1.2,
          easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        });
      }
    }
  };

  return (
    // <div className="flex flex-col justify-start items-center w-full bg-[#ffffff]">
    //   <Hero />
    //   <div ref={statisticsRef}>
    //     <Statistics />
    //   </div>
    //   <div ref={tracksRef}>
    //     <TracksAtRountable />
    //   </div>
    //   <div ref={roundtableRef}>
    //     <Rountable />
    //   </div>
    //   <div ref={eventHighlightsRef}>
    //     <EventHighlights />
    //   </div>
    //   <div ref={postEventRef}>
    //     <PostEventHighlights />
    //   </div>
    //   <div ref={visionaryRef}>
    //     <Visionary />
    //   </div>
    //   <div ref={companiesRef}>
    //     <GlobalCompanies />
    //   </div>
    //   <div ref={storiesRef}>
    //     <FreshStories />
    //   </div>
    // </div>

    <div className="flex flex-col justify-start items-center w-full bg-[#ffffff]">
      <Hero onExploreMore={handleExploreMoreHero} />
      {/* statistics */}
      <div id="statistics-section" >
        <Statistics onExploreMore={handleExploreMoreStat}/>
      </div>
      {/* Tracks at Roundtable Section */}
      <div id="Tracks-section" >
        <TracksAtRountable />
      </div>
      {/* Select Roundtable Section */}
      <Rountable />
      {/* Event Highlights Section */}
      <div id="highlights-section">
        <EventHighlights />
      </div>
      {/* Past Event Highlights Section */}
        <PostEventHighlights />
      
      {/* Visionary Leaders Section */}
      <Visionary />
      {/* Global Companies and Partners Section */}
      <div id="partner-section">
        <GlobalCompanies />
      </div>
      {/* Fresh Stories Section */}
      <div id="news-section">
        <FreshStories />
      </div>
      {/* Footer */}
    </div>
  );
};
export default HomePage;
