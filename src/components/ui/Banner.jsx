import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

const Banner = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.3
      }
    }
  };

  const sectionVariants = {
    hidden: { 
      opacity: 0, 
      y: 60,
      scale: 0.95
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  const logoVariants = {
    hidden: { 
      opacity: 0, 
      x: -50,
      rotate: -5
    },
    visible: {
      opacity: 1,
      x: 0,
      rotate: 0,
      transition: {
        duration: 0.7,
        ease: "easeOut"
      }
    }
  };

  const vectorVariants = {
    hidden: { 
      opacity: 0, 
      scale: 0,
      rotate: 180
    },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: {
        duration: 0.6,
        delay: 0.2,
        ease: "backOut"
      }
    }
  };

  const textVariants = {
    hidden: { 
      opacity: 0, 
      x: 30,
      blur: 10
    },
    visible: {
      opacity: 1,
      x: 0,
      blur: 0,
      transition: {
        duration: 0.6,
        delay: 0.3,
        ease: "easeOut"
      }
    }
  };

  const decorativeVariants = {
    hidden: { 
      opacity: 0, 
      scale: 0,
      rotate: 180
    },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: {
        duration: 1,
        delay: 0.8,
        ease: "backOut"
      }
    }
  };

  // Hover animations
  const logoHover = {
    scale: 1.05,
    rotate: 2,
    transition: {
      duration: 0.3,
      ease: "easeInOut"
    }
  };

  const vectorHover = {
    scale: 1.2,
    rotate: 360,
    transition: {
      duration: 0.5,
      ease: "easeInOut"
    }
  };

  const textHover = {
    x: 10,
    transition: {
      duration: 0.3,
      ease: "easeOut"
    }
  };

  return (
    <>
      <motion.div 
        className="relative w-full bg-[linear-gradient(90deg,#0575e6_0%,#5336f8_50%,#00f260_100%)]"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        data-scroll
        data-scroll-speed="0.5"
      >
        <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="pt-[28px] pr-[28px] pb-[28px] pl-[28px] sm:pt-[42px] sm:pr-[42px] sm:pb-[42px] sm:pl-[42px] md:pt-[56px] md:pr-[56px] md:pb-[56px] md:pl-[56px]">
            <motion.div 
              className="flex flex-col justify-start items-end gap-[32px] sm:gap-[48px] md:gap-[64px] w-full"
              variants={containerVariants}
            >
              {/* Giakaa Capital Section */}
              <motion.div 
                className="flex flex-col sm:flex-row justify-end items-center w-full gap-4 sm:gap-0"
                variants={sectionVariants}
                whileHover={{ scale: 1.02 }}
                data-scroll
                data-scroll-speed="0.8"
              >
                <motion.div 
                  className="w-full sm:w-[45%] flex justify-center sm:justify-end"
                  variants={logoVariants}
                  whileHover={logoHover}
                >
                  <Link href="https://www.giakaacapital.com/" target="_blank" rel="noopener noreferrer">
                    <img
                      src="/images/agenda/img_group_1984077505.svg"
                      className="w-[200px] h-[60px] xs:w-[230px] xs:h-[70px] sm:w-[300px] sm:h-[90px] md:w-[345px] md:h-[105px] lg:w-[460px] lg:h-[140px] object-contain cursor-pointer hover:opacity-80 transition-opacity"
                      alt="Giakaa Capital Logo"
                    />
                  </Link>
                </motion.div>

                <motion.div 
                  className="w-full sm:w-[5%] h-auto flex justify-center mx-2 sm:mx-4 sm:justify-start"
                  variants={vectorVariants}
                  whileHover={vectorHover}
                >
                  <img
                    src="/images/agenda/img_vector.svg"
                    className="w-[25px] h-[8px] xs:w-[33px] xs:h-[10px] sm:w-[40px] sm:h-[12px] md:w-[49px] md:h-[15px] lg:w-[66px] lg:h-[20px] object-contain cursor-pointer"
                    alt="Vector"
                  />
                </motion.div>

                <motion.div 
                  className="w-full sm:w-1/2 flex-1 flex flex-col gap-[4px] sm:gap-[6px] md:gap-[8px] justify-start items-center md:items-start text-center sm:text-left px-2 sm:px-0"
                  variants={textVariants}
                  whileHover={textHover}
                  data-scroll
                  data-scroll-speed="1.2"
                >
                  <motion.h3 
                    className="text-[14px] xs:text-[16px] sm:text-[20px] md:text-[24px] lg:text-[32px] font-lufga font-semibold leading-[18px] xs:leading-[21px] sm:leading-[26px] md:leading-[31px] lg:leading-[42px] text-[#ffffff] w-auto"
                    whileHover={{ 
                      scale: 1.05,
                      textShadow: "0px 0px 20px rgba(255,255,255,0.8)",
                      transition: { duration: 0.3 }
                    }}
                  >
                    About Giakaa capital
                  </motion.h3>
                  <motion.p 
                    className="text-[10px] xs:text-[11px] sm:text-[12px] md:text-[14px] lg:text-[16px] font-lufga font-normal leading-[12px] xs:leading-[14px] sm:leading-[16px] md:leading-[18px] lg:leading-[20px] text-[#ffffff] w-full"
                    whileHover={{ 
                      opacity: 0.9,
                      transition: { duration: 0.3 }
                    }}
                  >
                    At Giakaa Capital, our vision is to pioneer the future of digital public
                    infrastructure through strategic investments in Blockchain technology. We are
                    committed to advancing solutions that pave the way for mass adoption,
                    contributing to a sustainable future aligned with the Sustainable Development
                    Goals (SDGs).
                  </motion.p>
                </motion.div>
              </motion.div>

              {/* bepay Section */}
              <motion.div 
                className="flex flex-col sm:flex-row justify-end items-center w-full gap-4 sm:gap-0"
                variants={sectionVariants}
                whileHover={{ scale: 1.02 }}
                data-scroll
                data-scroll-speed="1"
              >
                <motion.div 
                  className="w-full sm:w-[45%] flex justify-center sm:justify-end"
                  variants={logoVariants}
                  whileHover={logoHover}
                >
                  <Link href="https://bepay.money/" target="_blank" rel="noopener noreferrer">
                    <img
                      src="/images/agenda/img_group_1984077506.svg"
                      className="w-[160px] h-[60px] xs:w-[180px] xs:h-[70px] sm:w-[230px] sm:h-[90px] md:w-[270px] md:h-[105px] lg:w-[360px] lg:h-[140px] object-contain cursor-pointer hover:opacity-80 transition-opacity"
                      alt="bepay Logo"
                    />
                  </Link>
                </motion.div>

                <motion.div 
                  className="w-full mx-2 sm:mx-4 sm:w-[5%] flex justify-center sm:justify-start"
                  variants={vectorVariants}
                  whileHover={vectorHover}
                >
                  <img
                    src="/images/agenda/img_vector.svg"
                    className="w-[25px] h-[8px] xs:w-[33px] xs:h-[10px] sm:w-[40px] sm:h-[12px] md:w-[49px] md:h-[15px] lg:w-[66px] lg:h-[20px] object-contain cursor-pointer"
                    alt="Vector"
                  />
                </motion.div>

                <motion.div 
                  className="w-full sm:w-1/2 flex-1 flex flex-col gap-[4px] sm:gap-[6px] md:gap-[8px] justify-start items-center md:items-start text-center sm:text-left px-2 sm:px-0"
                  variants={textVariants}
                  whileHover={textHover}
                  data-scroll
                  data-scroll-speed="1.4"
                >
                  <motion.h3 
                    className="text-[14px] xs:text-[16px] sm:text-[20px] md:text-[24px] lg:text-[32px] font-lufga font-semibold leading-[18px] xs:leading-[21px] sm:leading-[26px] md:leading-[31px] lg:leading-[42px] text-[#ffffff] w-auto"
                    whileHover={{ 
                      scale: 1.05,
                      textShadow: "0px 0px 20px rgba(255,255,255,0.8)",
                      transition: { duration: 0.3 }
                    }}
                  >
                    About bepay
                  </motion.h3>
                  <motion.p 
                    className="text-[10px] xs:text-[11px] sm:text-[12px] md:text-[14px] lg:text-[16px] font-lufga font-normal leading-[12px] xs:leading-[14px] sm:leading-[16px] md:leading-[18px] lg:leading-[20px] text-[#ffffff] w-full"
                    whileHover={{ 
                      opacity: 0.9,
                      transition: { duration: 0.3 }
                    }}
                  >
                    BePay is a global Web3 all-in-one payment platform that simplifies crypto
                    transactions for everyone—from individuals to merchants. BePay empowers users
                    worldwide to send, receive, and earn crypto while transacting. Built with a
                    mobile-first approach and sleek, minimal design, BePay makes web3 finance
                    accessible, fast, and rewarding.
                  </motion.p>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </div>
        
        {/* Decorative Elements with Animation */}
        <motion.div 
          className="absolute top-0 left-0 w-[20px] xs:w-[25px] sm:w-[60px] lg:w-[84px]"
          variants={decorativeVariants}
          whileHover={{ 
            scale: 1.1, 
            rotate: 45,
            transition: { duration: 0.3 }
          }}
          data-scroll
          data-scroll-speed="2"
        >
          <img src="/images/agenda/graycircle.svg" className="w-full h-auto" alt="Vector" />
        </motion.div>
        
        <motion.div 
          className="absolute bottom-0 right-0 w-[20px] xs:w-[25px] sm:w-[35px] lg:w-[44px]"
          variants={decorativeVariants}
          whileHover={{ 
            scale: 1.1, 
            rotate: -45,
            transition: { duration: 0.3 }
          }}
          data-scroll
          data-scroll-speed="-1"
        >
          <img src="/images/agenda/whitecircle.svg" className="w-full h-auto" alt="Vector" />
        </motion.div>
      </motion.div>
    </>
  );
};

export default Banner;