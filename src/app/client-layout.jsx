'use client';

import LenisProvider from '@/components/providers/LenisProvider';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';

export default function RootClientLayout({ children }) {
  return (
    <LenisProvider>
      <div className="relative">
        <Header />
        <div className="flex flex-col min-h-screen">
          <main className="flex-grow">
            {children}
          </main>
          <div>
            
            <Footer />
          </div>
        </div>
      </div>
      <script
        type="module"
        src="https://static.rocket.new/rocket-web.js?_cfg=https%3A%2F%2Frishabsa3431back.builtwithrocket.new&_be=https%3A%2F%2Fapplication.rocket.new&_v=0.1.6"
      />
    </LenisProvider>
  );
}
