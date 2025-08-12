'use client';

import LocomotiveLayout from '@/components/providers/LocomotiveLayout';

export default function RootClientLayout({ children }) {
  return (
    <LocomotiveLayout>
      {children}
      <script
        type="module"
        src="https://static.rocket.new/rocket-web.js?_cfg=https%3A%2F%2Frishabsa3431back.builtwithrocket.new&_be=https%3A%2F%2Fapplication.rocket.new&_v=0.1.6"
      />
    </LocomotiveLayout>
  );
}
