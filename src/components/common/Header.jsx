'use client';
import React, { useState } from 'react';
import Image from 'next/image';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full overflow-hidden z-50 ">
      <div className="w-full max-w-[1440px] flex justify-center mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row justify-center items-start w-full lg:w-[74%] mt-[10px] md:mt-[20px]">
          {/* Main Header Row */}
          <div className="flex flex-row justify-between items-center w-full lg:w-[72%] bg-[#ffffff] rounded-[14px] md:rounded-[28px] px-[20px] md:px-[40px] py-[6px] md:py-[12px] shadow-[0_0_80px_rgba(0,0,0,0.10)]">
            {/* Logo */}
            <div className="w-[120px] md:w-[194px]">
              <Image
                src="/images/img_primary_without_bg.png"
                alt="Giakaa Capital Logo"
                width={194}
                height={32}
                className="w-full h-auto"
              />
            </div>

            {/* Hamburger Menu (Mobile) */}
            <button 
              className="block lg:hidden p-2" 
              aria-label="Open menu"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>

            {/* Navigation Menu */}
            <nav className={`${menuOpen ? 'block' : 'hidden'} lg:block absolute lg:relative top-full lg:top-auto left-0 lg:left-auto w-full lg:w-auto bg-white lg:bg-transparent shadow-lg lg:shadow-none z-50 lg:z-auto`}>
              <div className="flex flex-col lg:flex-row gap-[12px] lg:gap-[24px] justify-center items-center p-4 lg:p-0">
                <button 
                  role="menuitem"
                  className="text-[12px] md:text-[14px] font-poppins font-medium leading-[16px] md:leading-[21px] text-center text-[#000000] hover:text-[#0575e6] transition-colors w-full lg:w-auto py-2 lg:py-0"
                >
                  Agenda
                </button>
                <button 
                  role="menuitem"
                  className="text-[12px] md:text-[14px] font-poppins font-medium leading-[16px] md:leading-[21px] text-center text-[#000000] hover:text-[#0575e6] transition-colors w-full lg:w-auto py-2 lg:py-0"
                >
                  Speakers
                </button>
                <button 
                  role="menuitem"
                  className="text-[12px] md:text-[14px] font-poppins font-medium leading-[16px] md:leading-[21px] text-center text-[#000000] hover:text-[#0575e6] transition-colors w-full lg:w-auto py-2 lg:py-0"
                >
                  Roundtables
                </button>
                <button 
                  role="menuitem"
                  className="text-[12px] md:text-[14px] font-poppins font-medium leading-[16px] md:leading-[21px] text-center text-[#000000] hover:text-[#0575e6] transition-colors w-full lg:w-auto py-2 lg:py-0"
                >
                  Contact
                </button>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;