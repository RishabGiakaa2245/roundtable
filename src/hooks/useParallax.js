'use client';

import { useEffect } from 'react';

export const useParallax = (ref, speed = 1) => {
  useEffect(() => {
    if (!ref.current || typeof window === 'undefined') return;

    const handleScroll = () => {
      if (!window.lenis) return;
      
      const scrollValue = window.lenis.scroll;
      const translateY = scrollValue * speed;
      
      ref.current.style.transform = `translate3d(0, ${translateY}px, 0)`;
    };

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [ref, speed]);
};
