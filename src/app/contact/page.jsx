'use client';
import React from 'react';
import Hero from '@/components/contact/Hero';

const contact = () => {


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
    <div className="flex flex-col justify-start items-center w-full bg-[#ffffff]">
      {/* Hero Section */}
      <Hero onContactUs={handleContactUs} />
      
    </div>
  )
};

export default contact;