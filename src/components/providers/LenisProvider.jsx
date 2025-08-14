'use client';

import { useEffect, useRef } from 'react';
import Lenis from '@studio-freight/lenis';
import { usePathname } from 'next/navigation';

export default function LenisProvider({ children }) {
  const lenisRef = useRef();
  const pathname = usePathname();

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
      mouseMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
      infinite: false,
    });

    lenisRef.current = lenis;

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Handle route changes
    if (pathname) {
      lenis.scrollTo(0, { immediate: true });
    }

    return () => {
      lenis.destroy();
      lenisRef.current = null;
    };
  }, [pathname]);

  // Add method to update lenis (useful for dynamic content)
  const updateLenis = () => {
    if (lenisRef.current) {
      lenisRef.current.resize();
    }
  };

  // Method to scroll to a specific element
  const scrollTo = (target, options = {}) => {
    if (lenisRef.current) {
      lenisRef.current.scrollTo(target, options);
    }
  };

  // Expose lenis instance to window for external access if needed
  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.lenis = lenisRef.current;
      window.lenisScroll = scrollTo;
      window.updateLenis = updateLenis;
    }
  }, []);

  return (
    <main className="relative min-h-screen w-full">
      {children}
    </main>
  );
}
