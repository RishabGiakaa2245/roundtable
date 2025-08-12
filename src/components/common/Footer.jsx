'use client';
import React from 'react';
import Image from 'next/image';
import Button from '../ui/Button';

const Footer = () => {
  return (
    <footer className="w-full bg-footer-1 rounded-t-[20px] md:rounded-t-[40px] pt-[39px] md:pt-[78px] pb-[39px] md:pb-[78px] mt-[208px]">
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-[31px] md:gap-[62px] justify-start items-center w-full max-w-[1300px] mx-auto">
          
          {/* Top Section */}
          <div className="flex flex-col lg:flex-row justify-between items-center w-full gap-8 lg:gap-0">
            {/* Left Column - Logo and Date */}
            <div className="flex flex-col gap-[11px] md:gap-[22px] justify-start items-center w-full lg:w-[42%]">
              <div className="w-full max-w-[268px] md:max-w-[536px]">
                <Image
                  src="/images/img_primary_without_bg_white_a700.png"
                  alt="Giakaa Capital Logo"
                  width={536}
                  height={88}
                  className="w-full h-auto"
                />
              </div>
              <p className="text-[14px] md:text-[18px] font-lufga font-medium leading-[18px] md:leading-[24px] text-center text-[#ffffff]">
                7 to 9 October 2025 | XYZ Hall, India
              </p>
            </div>

            {/* Right Section - Navigation Links */}
            <div className="flex flex-col sm:flex-row justify-between items-start w-full lg:w-[48%] gap-8 sm:gap-4">
              {/* First Column */}
              <div className="flex flex-col gap-[5px] md:gap-[10px] justify-start items-start w-full sm:w-auto">
                <p className="text-[14px] md:text-[18px] font-lufga font-medium leading-[18px] md:leading-[24px] text-left text-footer-1 hover:text-white transition-colors cursor-pointer">Speaker</p>
                <p className="text-[14px] md:text-[18px] font-lufga font-medium leading-[18px] md:leading-[24px] text-left text-footer-1 hover:text-white transition-colors cursor-pointer">Roundtables</p>
                <p className="text-[14px] md:text-[18px] font-lufga font-medium leading-[18px] md:leading-[24px] text-left text-footer-1 hover:text-white transition-colors cursor-pointer">Agenda</p>
                <p className="text-[14px] md:text-[18px] font-lufga font-medium leading-[18px] md:leading-[24px] text-left text-footer-1 hover:text-white transition-colors cursor-pointer">Partner</p>
              </div>

              {/* Second Column */}
              <div className="flex flex-col gap-[5px] md:gap-[10px] justify-start items-start w-full sm:w-auto">
                <p className="text-[14px] md:text-[18px] font-lufga font-medium leading-[18px] md:leading-[24px] text-left text-footer-1 hover:text-white transition-colors cursor-pointer">Past Glimpse</p>
                <p className="text-[14px] md:text-[18px] font-lufga font-medium leading-[18px] md:leading-[24px] text-left text-footer-1 hover:text-white transition-colors cursor-pointer">About</p>
                <p className="text-[14px] md:text-[18px] font-lufga font-medium leading-[18px] md:leading-[24px] text-left text-footer-1 hover:text-white transition-colors cursor-pointer">Contact</p>
                <p className="text-[14px] md:text-[18px] font-lufga font-medium leading-[18px] md:leading-[24px] text-left text-footer-1 hover:text-white transition-colors cursor-pointer">Media</p>
              </div>

              {/* Third Column */}
              <div className="flex flex-col gap-[5px] md:gap-[10px] justify-start items-start w-full sm:w-[18%]">
                <p className="text-[14px] md:text-[18px] font-lufga font-medium leading-[18px] md:leading-[24px] text-left text-footer-1 hover:text-white transition-colors cursor-pointer">Topics</p>
                <p className="text-[14px] md:text-[18px] font-lufga font-medium leading-[18px] md:leading-[24px] text-left text-footer-1 hover:text-white transition-colors cursor-pointer">News</p>
                <p className="text-[14px] md:text-[18px] font-lufga font-medium leading-[18px] md:leading-[24px] text-left text-footer-1 hover:text-white transition-colors cursor-pointer">Highlights</p>
              </div>
            </div>
          </div>

          {/* Middle Section */}
          <div className="flex flex-col lg:flex-row justify-between items-center w-full gap-8 lg:gap-0">
            {/* Left Side - Organized By */}
            <div className="flex flex-col sm:flex-row justify-between items-start w-full lg:w-[45%] gap-6 sm:gap-4">
              {/* Organized By */}
              <div className="flex flex-col gap-[12px] md:gap-[24px] justify-start items-center w-full sm:w-[50%]">
                <div className="flex flex-row gap-[3px] md:gap-[6px] justify-center items-end w-full">
                  <div className="w-[41px] md:w-[82px] h-[1px] bg-global-5 mb-[3px] md:mb-[6px]"></div>
                  <p className="text-[10px] md:text-[12px] font-lufga font-semibold leading-[13px] md:leading-[16px] text-center uppercase text-[#ffffff] self-center">Organised By</p>
                  <div className="w-[41px] md:w-[82px] h-[1px] bg-global-5 mb-[3px] md:mb-[6px]"></div>
                </div>
                <div className="w-full max-w-[134px] md:max-w-[268px]">
                  <Image
                    src="/images/img_primary_without_bg_white_a700.png"
                    alt="Organizer Logo"
                    width={268}
                    height={44}
                    className="w-full h-auto"
                  />
                </div>
              </div>

              {/* Powered By */}
              <div className="flex flex-col gap-[10px] md:gap-[20px] justify-start items-center w-full sm:w-[50%] self-center">
                <div className="flex flex-row gap-[4px] md:gap-[8px] justify-center items-end w-full">
                  <div className="w-[20px] md:w-[40px] h-[1px] bg-global-5 mb-[3px] md:mb-[6px]"></div>
                  <p className="text-[10px] md:text-[12px] font-lufga font-semibold leading-[13px] md:leading-[16px] text-center uppercase text-[#ffffff] self-center">Powered By</p>
                  <div className="w-[20px] md:w-[40px] h-[1px] bg-global-5 mb-[3px] md:mb-[6px]"></div>
                </div>
                <div className="flex flex-row gap-[6px] md:gap-[12px] justify-center items-center">
                  <div className="bg-[#000000] rounded-[4px] md:rounded-[8px] p-[6px] md:p-[12px]">
                    <Image
                      src="/images/img_logo_mark.png"
                      alt="Partner Logo"
                      width={32}
                      height={32}
                      className="w-[22px] h-[22px] md:w-[30px] md:h-[30px]"
                    />
                  </div>
                  <div className="w-[37px] md:w-[74px]">
                    <Image
                      src="/images/img_group_3_white_a700.svg"
                      alt="Partner Logo"
                      width={74}
                      height={24}
                      className="w-full h-auto"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - Newsletter */}
            <div className="flex flex-col gap-[10px] md:gap-[20px] justify-start items-start w-full lg:w-[48%]">
              <p className="text-[18px] md:text-[24px] font-lufga font-medium leading-[24px] md:leading-[32px] text-left text-footer-1">
                Subscribe Our Newsletter for more Updates
              </p>
              <div className="flex flex-col sm:flex-row justify-between items-center w-full bg-[#ffffff] rounded-[14px] md:rounded-[28px] mr-[5px] md:mr-[10px] p-2">
                <input
                  type="email"
                  placeholder="Enter Email"
                  className="text-[14px] md:text-[18px] font-lufga font-normal leading-[18px] md:leading-[24px] text-left text-[#22242e] placeholder-black bg-transparent border-none outline-none flex-1 px-4 py-2 w-full sm:w-auto"
                />
                <Button
                  variant="primary"
                  className="rounded-[12px] md:rounded-[24px] px-[12px] md:px-[24px] py-[6px] md:py-[12px] text-[12px] md:text-[16px] font-lufga font-bold leading-[16px] md:leading-[21px] mt-2 sm:mt-0 w-full sm:w-auto"
                >
                  Subscribe Now
                </Button>
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="flex flex-col gap-[7px] md:gap-[14px] justify-start items-center w-full">
            <div className="w-full h-[1px] bg-global-5"></div>
            <div className="flex flex-col lg:flex-row justify-between items-center w-full gap-4 lg:gap-0">
              {/* Copyright */}
              <p className="text-[12px] md:text-[14px] font-lufga font-normal leading-[16px] md:leading-[19px] text-left uppercase text-[#ffffff] text-center lg:text-left">
                © Copyrights Roundtable 2025. All rights reserved.
              </p>

              {/* Links */}
              <div className="flex flex-row gap-[12px] md:gap-[24px] justify-center items-center">
                <a href="#" className="text-[12px] md:text-[14px] font-lufga font-normal leading-[16px] md:leading-[19px] text-left uppercase text-[#ffffff] hover:text-gray-300 transition-colors">
                  Terms & Conditions
                </a>
                <a href="#" className="text-[12px] md:text-[14px] font-lufga font-normal leading-[16px] md:leading-[19px] text-left uppercase text-[#ffffff] hover:text-gray-300 transition-colors">
                  Privacy Policy
                </a>
              </div>

              {/* Social Icons */}
              <div className="flex flex-row gap-[10px] md:gap-[20px] justify-center items-center">
                <button className="bg-[#000000] rounded-[5px] md:rounded-[10px] p-[4px] md:p-[8px] hover:bg-gray-800 transition-colors">
                  <Image
                    src="/images/img_frame_1707482311.svg"
                    alt="Social Icon"
                    width={26}
                    height={26}
                    className="w-[21px] h-[21px] md:w-[26px] md:h-[26px]"
                  />
                </button>
                <button className="bg-[#000000] rounded-[5px] md:rounded-[10px] p-[4px] md:p-[8px] hover:bg-gray-800 transition-colors">
                  <Image
                    src="/images/img_frame_1707482312.svg"
                    alt="Social Icon"
                    width={26}
                    height={26}
                    className="w-[21px] h-[21px] md:w-[26px] md:h-[26px]"
                  />
                </button>
                <button className="bg-[#000000] rounded-[5px] md:rounded-[10px] p-[4px] md:p-[8px] hover:bg-gray-800 transition-colors">
                  <Image
                    src="/images/img_frame_1707482313.svg"
                    alt="Social Icon"
                    width={26}
                    height={26}
                    className="w-[21px] h-[21px] md:w-[26px] md:h-[26px]"
                  />
                </button>
                <button className="bg-[#000000] rounded-[5px] md:rounded-[10px] p-[4px] md:p-[8px] hover:bg-gray-800 transition-colors">
                  <Image
                    src="/images/img_frame_1707482314.svg"
                    alt="Social Icon"
                    width={26}
                    height={26}
                    className="w-[21px] h-[21px] md:w-[26px] md:h-[26px]"
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;