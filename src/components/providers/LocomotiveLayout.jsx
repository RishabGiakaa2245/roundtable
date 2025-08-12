'use client';

import { useRef } from 'react';
import { LocomotiveScrollProvider } from 'react-locomotive-scroll';
import 'locomotive-scroll/dist/locomotive-scroll.css';

export default function LocomotiveLayout({ children }) {
  const containerRef = useRef(null);

  return (
    <LocomotiveScrollProvider
      options={{
        smooth: true,
        lerp: 0.075, // Linear Interpolation, 0 = disabled, 1 = instant (lower numbers = smoother)
        multiplier: 0.9, // Scroll speed multiplier
        class: 'is-reveal',
        smartphone: {
          smooth: true,
        },
        tablet: {
          smooth: true,
          breakpoint: 768,
        },
      }}
      watch={[]} // Locomotive scroll instance will watch for these changes
      containerRef={containerRef}
    >
      <main data-scroll-container ref={containerRef} className="relative min-h-screen w-full">
        {children}
      </main>
    </LocomotiveScrollProvider>
  );
}
