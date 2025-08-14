'use client';
import React from 'react';
import Image from 'next/image';
import Button from '@/components/ui/Button';
import DatePicker from '@/components/ui/DatePicker';
import Hero from '@/components/roundtables/Hero';
import Cards from '@/components/roundtables/Cards';

const Roundtables = () => {
  const handleSelectOne = () => {
    if (typeof window !== 'undefined' && window.lenisScroll) {
      const cardsSection = document.getElementById('cards-section');
      if (cardsSection) {
        window.lenisScroll(cardsSection, {
          duration: 1.2,
          easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t))
        });
      }
    }
  };

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

  const handleRequestInvite = () => {
    console.log('Request to invite clicked');
  };
  
  const handleDateChange = (date) => {
    console.log('Date changed:', date);
  };


  return (
    <div className="flex flex-col justify-start items-center w-full bg-[#ffffff]">
      {/* Hero Section */}
      <Hero onSelectOne={handleSelectOne} onContactUs={handleContactUs} />

      {/* Event Cards Section */}
      <div id="cards-section">
        <Cards />
      </div>
    </div>
        
    
  );
};

export default Roundtables;