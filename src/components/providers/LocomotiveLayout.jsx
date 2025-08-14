'use client';

import { useEffect, useRef } from 'react';

export default function LocomotiveLayout({ children }) {
  const containerRef = useRef(null);
  const locomotiveScrollRef = useRef(null);

  useEffect(() => {
    let scroll;

    // Dynamically import locomotive-scroll to avoid SSR issues
    const initLocomotiveScroll = async () => {
      try {
        const LocomotiveScroll = (await import('locomotive-scroll')).default;
        
        if (containerRef.current) {
          scroll = new LocomotiveScroll({
            el: containerRef.current,
            smooth: true,
            lerp: 0.075, // Linear Interpolation, 0 = disabled, 1 = instant
            multiplier: 0.9, // Scroll speed multiplier
            class: 'is-reveal',
            smartphone: {
              smooth: true,
            },
            tablet: {
              smooth: true,
              breakpoint: 768,
            },
          });

          // Store reference for cleanup
          locomotiveScrollRef.current = scroll;

          // Update scroll on window resize
          const handleResize = () => {
            if (scroll) {
              scroll.update();
            }
          };

          window.addEventListener('resize', handleResize);

          // Cleanup resize listener
          return () => {
            window.removeEventListener('resize', handleResize);
          };
        }
      } catch (error) {
        console.error('Failed to initialize Locomotive Scroll:', error);
      }
    };

    initLocomotiveScroll();

    // Cleanup function - destroy scroll instance on unmount or route change
    return () => {
      if (locomotiveScrollRef.current) {
        locomotiveScrollRef.current.destroy();
        locomotiveScrollRef.current = null;
      }
    };
  }, []);

  // Method to manually update scroll (useful for dynamic content)
  const updateScroll = () => {
    if (locomotiveScrollRef.current) {
      locomotiveScrollRef.current.update();
    }
  };

  // Method to scroll to specific element
  const scrollTo = (target, options = {}) => {
    if (locomotiveScrollRef.current) {
      locomotiveScrollRef.current.scrollTo(target, options);
    }
  };

  return (
    <main 
      data-scroll-container 
      ref={containerRef} 
      className="relative min-h-screen w-full"
    >
      {children}
    </main>
  );
}