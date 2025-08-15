'use client';
import React, { useEffect } from 'react';
import Image from 'next/image';
import Button from '../ui/Button';
import { motion } from 'framer-motion';
import { useRouter, usePathname } from 'next/navigation';

const Footer = () => {
  const router = useRouter();
  const pathname = usePathname();

  const navigateToSection = (sectionId) => {
    // If we're not on the home page, first navigate to home
    if (pathname !== '/') {
      // Store the section ID in sessionStorage
      sessionStorage.setItem('scrollToSection', sectionId);
      router.push('/');
    } else {
      // If we're already on the home page, just scroll to the section
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  // Check for stored section ID when component mounts
  useEffect(() => {
    if (pathname === '/') {
      console.log("start");
      const sectionId = sessionStorage.getItem('scrollToSection');
      console.log(sectionId);
      if (sectionId) {
        // Clear the stored section ID
        sessionStorage.removeItem('scrollToSection');
        // Add a small delay to ensure the page has loaded
        setTimeout(() => {
          const section = document.getElementById(sectionId);
          if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
          }
        }, 500);
      }
    }
  }, [pathname]);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const fadeInUpVariants = {
    hidden: {
      opacity: 0,
      y: 30,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  const contactCardVariants = {
    hidden: {
      opacity: 0,
      x: -50,
      scale: 0.95,
    },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        duration: 0.7,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  const contactItemVariants = {
    hidden: {
      opacity: 0,
      x: 30,
    },
    visible: (index) => ({
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        delay: index * 0.1,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    }),
  };

  const floatingVariants = {
    animate: {
      y: [-5, 5, -5],
      rotate: [-2, 2, -2],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: 'easeInOut',
      },
    },
  };

  const scaleOnHover = {
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.3,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  const linkHoverVariants = {
    hover: {
      x: 5,
      color: '#ffffff',
      transition: {
        duration: 0.2,
        ease: 'easeOut',
      },
    },
  };

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const socialHoverVariants = {
    hover: {
      scale: 1.1,
      rotate: 5,
      backgroundColor: '#374151',
      transition: {
        duration: 0.2,
        ease: 'easeOut',
      },
    },
    tap: {
      scale: 0.95,
      transition: {
        duration: 0.1,
      },
    },
  };

  return (
    <motion.div
      id="footer-section"
      className="relative z-10 box-border w-full"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={containerVariants}
    >
      {/* Contact Section */}
      <motion.div
        className="w-[90%] mt-[60px] mx-auto lg:mt-[80px]"
        variants={fadeInUpVariants}
        data-scroll
        data-scroll-speed="0.1"
      >
        <motion.div
          className="bg-[#1D1D2B] rounded-[24px] p-[40px] lg:p-[60px] flex flex-col lg:flex-row items-center gap-28 relative overflow-hidden"
          whileHover={{
            boxShadow: '0px 20px 60px rgba(0, 0, 0, 0.3)',
            transition: { duration: 0.3 },
          }}
        >
          {/* Left Content */}
          <motion.div className="z-10" variants={contactCardVariants}>
            <motion.p
              className="text-[14px] lg:text-[16px] font-lufga font-bold text-[#ffffff] mb-[12px] uppercase tracking-wider"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              CONTACT
            </motion.p>
            <motion.h3
              className="text-[32px] lg:text-[48px] font-lufga font-semibold text-[#ffffff] leading-[40px] lg:leading-[56px] mb-[40px] lg:mb-[60px] max-w-[500px]"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              Reach Out - We're Ready to Connect
            </motion.h3>
          </motion.div>

          {/* Right Content - Contact Info */}
          <motion.div className="flex flex-col gap-[16px] z-10" variants={containerVariants}>
            {[
              { icon: 'M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z', text: 'Omika Dubey' },
              {
                icon: 'M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z',
                text: '12345 67890',
              },
              {
                icon: 'M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884zM18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z',
                text: 'Omika@gmail.com',
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                className="flex items-center gap-[12px] min-w-[300px]"
                variants={contactItemVariants}
                custom={index}
                whileHover={{
                  x: 10,
                  transition: { duration: 0.3 },
                }}
              >
                <motion.div
                  className="w-[48px] h-[48px] bg-white rounded-[12px] flex items-center justify-center"
                  whileHover={{
                    rotate: 360,
                    transition: { duration: 0.6 },
                  }}
                >
                  <svg
                    className="w-[24px] h-[24px] text-[#1D1D2B]"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path fillRule="evenodd" d={item.icon} clipRule="evenodd" />
                  </svg>
                </motion.div>
                <motion.div
                  className="flex-1 bg-white/20 border backdrop-blur-md px-[20px] py-[12px] rounded-[12px]"
                  whileHover={{
                    backgroundColor: 'rgba(255, 255, 255, 0.3)',
                    backdropFilter: 'blur(20px)',
                    transition: { duration: 0.3 },
                  }}
                >
                  <span className="text-[16px] font-lufga font-medium text-[#ffffff]">
                    {item.text}
                  </span>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>

          {/* Right Image */}
          <motion.div
            className="absolute right-0 bottom-0 z-1"
            variants={floatingVariants}
            animate="animate"
          >
            <Image
              src="/images/2151876479 1.png"
              alt="Contact illustration"
              width={300}
              height={300}
              className="object-contain"
            />
          </motion.div>

          {/* Arrow SVG */}
          <motion.div
            className="absolute top-[10px] left-[500px] z-20 hidden lg:block"
            initial={{ opacity: 0, rotate: -45, scale: 0.5 }}
            whileInView={{ opacity: 1, rotate: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.6, ease: 'backOut' }}
            viewport={{ once: true }}
          >
            <Image
              src="/images/Vector.svg"
              alt="Arrow"
              width={100}
              height={60}
              className="w-[60px] lg:w-[120px] h-[40px] lg:h-[100px]"
            />
          </motion.div>
        </motion.div>
      </motion.div>

      <motion.div
        className="w-full bg-[#22242E] rounded-t-[20px] md:rounded-t-[40px] pt-[39px] md:pt-[78px] pb-[39px] md:pb-[78px] mt-[70px]"
        variants={fadeInUpVariants}
        data-scroll
        data-scroll-speed="0.05"
      >
        <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="flex flex-col gap-[31px] md:gap-[62px] justify-start items-center w-full max-w-[1300px] mx-auto"
            variants={containerVariants}
          >
            {/* Top Section */}
            <motion.div
              className="flex flex-col lg:flex-row justify-between items-center w-full gap-8 lg:gap-0"
              variants={fadeInUpVariants}
            >
              {/* Left Column - Logo and Date */}
              <motion.div
                className="flex flex-col gap-[11px] md:gap-[22px] justify-start items-center w-full lg:w-[42%]"
                variants={scaleOnHover}
                whileHover="hover"
                data-scroll
                data-scroll-speed="0.1"
              >
                <div className="w-full max-w-[268px] md:max-w-[536px]">
                  <Image
                    src="/images/img_primary_without_bg_white_a700.png"
                    alt="Giakaa Capital Logo"
                    width={536}
                    height={88}
                    className="w-full h-auto"
                  />
                </div>
                <motion.p
                  className="text-[14px] md:text-[18px] font-lufga font-medium leading-[18px] md:leading-[24px] text-center text-[#ffffff]"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  7 to 9 October 2025 | XYZ Hall, India
                </motion.p>
              </motion.div>

              {/* Right Section - Navigation Links */}
              <motion.div
                className="flex flex-col sm:flex-row justify-between items-start w-full lg:w-[48%] gap-8 sm:gap-4"
                variants={containerVariants}
              >
                {/* Navigation Columns */}
                {[
                  [
                    { text: 'Speaker', href: '/speakers' },
                    { text: 'Roundtables', href: '/roundtables' },
                    { text: 'Agenda', href: '/agenda' },
                    { text: 'Partner', onClick: () => navigateToSection('partner-section') },
                  ],
                  [
                    {
                      text: 'Past Glimpse',
                      onClick: () => navigateToSection('past-glimpse-section'),
                    },
                    { text: 'About', onClick: () => navigateToSection('statistics-section') },
                    { text: 'Contact', href: '/contact' },
                    { text: 'Media', onClick: () => navigateToSection('partner-section') },
                  ],
                  [
                    { text: 'Topics', onClick: () => navigateToSection('Tracks-section') },
                    { text: 'News', onClick: () => navigateToSection('news-section') },
                    { text: 'Highlights', onClick: () => navigateToSection('highlights-section') },
                  ],
                ].map((column, columnIndex) => (
                  <motion.div
                    key={columnIndex}
                    className="flex flex-col gap-[5px] md:gap-[10px] justify-start items-start w-full sm:w-auto"
                    variants={fadeInUpVariants}
                    custom={columnIndex}
                  >
                    {column.map((item, index) =>
                      item.href ? (
                        <motion.a
                          key={index}
                          href={item.href}
                          className="text-[14px] md:text-[18px] font-lufga font-medium leading-[18px] md:leading-[24px] text-left text-footer-1 hover:text-white transition-colors cursor-pointer"
                          variants={linkHoverVariants}
                          whileHover="hover"
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.5, delay: index * 0.1 }}
                          viewport={{ once: true }}
                        >
                          {item.text}
                        </motion.a>
                      ) : (
                        <motion.button
                          key={index}
                          onClick={item.onClick}
                          className="text-[14px] md:text-[18px] font-lufga font-medium leading-[18px] md:leading-[24px] text-left text-footer-1 hover:text-white transition-colors cursor-pointer"
                          variants={linkHoverVariants}
                          whileHover="hover"
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.5, delay: index * 0.1 }}
                          viewport={{ once: true }}
                        >
                          {item.text}
                        </motion.button>
                      )
                    )}
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            {/* Middle Section */}
            <motion.div
              className="flex flex-col lg:flex-row justify-between items-center w-full gap-8 lg:gap-0"
              variants={fadeInUpVariants}
            >
              {/* Left Side - Organized By */}
              <motion.div
                className="flex flex-col sm:flex-row justify-between items-start w-full lg:w-[45%] gap-6 sm:gap-4"
                variants={containerVariants}
              >
                {/* Organized By */}
                <motion.div
                  className="flex flex-col gap-[12px] md:gap-[24px] justify-start items-center w-full sm:w-[50%]"
                  variants={scaleOnHover}
                  whileHover="hover"
                >
                  <div className="flex flex-row gap-[3px] md:gap-[6px] justify-center items-end w-full">
                    <motion.div
                      className="w-[41px] md:w-[82px] h-[1px] bg-global-5 mb-[3px] md:mb-[6px]"
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      transition={{ duration: 0.8, delay: 0.2 }}
                      viewport={{ once: true }}
                    />
                    <p className="text-[10px] md:text-[12px] font-lufga font-semibold leading-[13px] md:leading-[16px] text-center uppercase text-[#ffffff] self-center">
                      Organised By
                    </p>
                    <motion.div
                      className="w-[41px] md:w-[82px] h-[1px] bg-global-5 mb-[3px] md:mb-[6px]"
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      transition={{ duration: 0.8, delay: 0.4 }}
                      viewport={{ once: true }}
                    />
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
                </motion.div>

                {/* Powered By */}
                <motion.div
                  className="flex flex-col gap-[10px] md:gap-[20px] justify-start items-center w-full sm:w-[50%] self-center"
                  variants={scaleOnHover}
                  whileHover="hover"
                >
                  <div className="flex flex-row gap-[4px] md:gap-[8px] justify-center items-end w-full">
                    <motion.div
                      className="w-[20px] md:w-[40px] h-[1px] bg-global-5 mb-[3px] md:mb-[6px]"
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      transition={{ duration: 0.6, delay: 0.3 }}
                      viewport={{ once: true }}
                    />
                    <p className="text-[10px] md:text-[12px] font-lufga font-semibold leading-[13px] md:leading-[16px] text-center uppercase text-[#ffffff] self-center">
                      Powered By
                    </p>
                    <motion.div
                      className="w-[20px] md:w-[40px] h-[1px] bg-global-5 mb-[3px] md:mb-[6px]"
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      transition={{ duration: 0.6, delay: 0.5 }}
                      viewport={{ once: true }}
                    />
                  </div>
                  <div className="flex flex-row gap-[6px] md:gap-[12px] justify-center items-center">
                    <motion.div
                      className="bg-[#000000] rounded-[4px] md:rounded-[8px] p-[6px] md:p-[12px]"
                      whileHover={{ rotate: 5, scale: 1.1 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Image
                        src="/images/img_logo_mark.png"
                        alt="Partner Logo"
                        width={32}
                        height={32}
                        className="w-[22px] h-[22px] md:w-[30px] md:h-[30px]"
                      />
                    </motion.div>
                    <motion.div
                      className="w-[37px] md:w-[74px]"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Image
                        src="/images/img_group_3_white_a700.svg"
                        alt="Partner Logo"
                        width={74}
                        height={24}
                        className="w-full h-auto"
                      />
                    </motion.div>
                  </div>
                </motion.div>
              </motion.div>

              {/* Right Side - Newsletter */}
              <motion.div
                className="flex flex-col gap-[10px] md:gap-[20px] justify-start items-start w-full lg:w-[48%]"
                variants={fadeInUpVariants}
                data-scroll
                data-scroll-speed="0.15"
              >
                <motion.p
                  className="text-[18px] md:text-[24px] font-lufga font-medium leading-[24px] md:leading-[32px] text-left text-footer-1"
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  Subscribe Our Newsletter for more Updates
                </motion.p>
                <motion.div
                  className="flex flex-col sm:flex-row justify-between items-center w-full bg-[#ffffff] rounded-[14px] md:rounded-[28px] mr-[5px] md:mr-[10px] p-2"
                  whileHover={{
                    boxShadow: '0px 10px 30px rgba(0, 0, 0, 0.2)',
                    scale: 1.02,
                    transition: { duration: 0.3 },
                  }}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  <input
                    type="email"
                    placeholder="Enter Email"
                    className="text-[14px] md:text-[18px] font-lufga font-normal leading-[18px] md:leading-[24px] text-left text-[#22242e] placeholder-black bg-transparent border-none outline-none flex-1 px-4 py-2 w-full sm:w-auto"
                  />
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full sm:w-auto"
                  >
                    <Button
                      variant="primary"
                      className="rounded-[12px] md:rounded-[24px] px-[12px] md:px-[24px] py-[6px] md:py-[12px] text-[12px] md:text-[16px] font-lufga font-bold leading-[16px] md:leading-[21px] mt-2 sm:mt-0 w-[100%] sm:w-auto"
                    >
                      Subscribe Now
                    </Button>
                  </motion.div>
                </motion.div>
              </motion.div>
            </motion.div>

            {/* Bottom Section */}
            <motion.div
              className="flex flex-col gap-[7px] md:gap-[14px] justify-start items-center w-full"
              variants={fadeInUpVariants}
            >
              <motion.div
                className="w-full h-[1px] bg-global-5"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                transition={{ duration: 1, delay: 0.2 }}
                viewport={{ once: true }}
              />
              <motion.div
                className="flex flex-col lg:flex-row justify-between items-center w-full gap-4 lg:gap-0"
                variants={containerVariants}
              >
                {/* Copyright */}
                <motion.p
                  className="text-[12px] md:text-[14px] font-lufga font-normal leading-[16px] md:leading-[19px] uppercase text-[#ffffff] text-center lg:text-left"
                  variants={fadeInUpVariants}
                >
                  © Copyrights Roundtable 2025. All rights reserved.
                </motion.p>

                {/* Links */}
                <motion.div
                  className="flex flex-row gap-[12px] md:gap-[24px] justify-center items-center"
                  variants={containerVariants}
                >
                  {['Terms & Conditions', 'Privacy Policy'].map((link, index) => (
                    <motion.a
                      key={index}
                      href="#"
                      className="text-[12px] md:text-[14px] font-lufga font-normal leading-[16px] md:leading-[19px] text-left uppercase text-[#ffffff] hover:text-gray-300 transition-colors"
                      variants={linkHoverVariants}
                      whileHover="hover"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      {link}
                    </motion.a>
                  ))}
                </motion.div>

                {/* Social Icons */}
                <motion.div
                  className="flex flex-row gap-[10px] md:gap-[20px] justify-center items-center"
                  variants={containerVariants}
                >
                  {[
                    '/images/img_frame_1707482311.svg',
                    '/images/img_frame_1707482312.svg',
                    '/images/img_frame_1707482313.svg',
                    '/images/img_frame_1707482314.svg',
                  ].map((src, index) => (
                    <motion.button
                      key={index}
                      className="bg-[#000000] rounded-[5px] md:rounded-[10px] p-[4px] md:p-[8px] hover:bg-gray-800 transition-colors"
                      variants={socialHoverVariants}
                      whileHover="hover"
                      whileTap="tap"
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{
                        duration: 0.4,
                        delay: index * 0.1,
                        type: 'spring',
                        stiffness: 200,
                      }}
                      viewport={{ once: true }}
                    >
                      <Image
                        src={src}
                        alt="Social Icon"
                        width={26}
                        height={26}
                        className="w-[21px] h-[21px] md:w-[26px] md:h-[26px]"
                      />
                    </motion.button>
                  ))}
                </motion.div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Footer;
