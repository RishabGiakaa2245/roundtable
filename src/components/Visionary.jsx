'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Button from './ui/Button';
import { motion, AnimatePresence } from 'framer-motion';

// Data for the speakers. You can easily add, remove, or modify speakers here.
const speakersData = [
  {
    name: 'B. Shanker Jaiswal',
    title: 'Joint CP, Technology & Project Implementation and Licensing in Delhi Police',
    imageUrl: '/images/Rectangle 160878-1.png',
  },
  {
    name: 'Arvind Kumar',
    title: 'Director General, Software Technology Parks of India (STPI)',
    imageUrl: '/images/img.png',
  },
  {
    name: 'Ashima Batra IRS',
    title: 'Additional Director, Financial Intelligence Unit India',
    imageUrl: '/images/img-1.png',
  },
  {
    name: 'Suresh Khadakbhavi',
    title: 'CEO, Digi Yatra Foundation',
    imageUrl: '/images/img-2.png',
  },
  {
    name: 'Sandeep',
    title: 'Founder, Impact',
    imageUrl: '/images/Rectangle 1051.png',
  },
  {
    name: 'Golok Kumar Simli',
    title: 'Principal Advisor & CTO Passport Seva Programme, Ministry of External Affairs, Government of India',
    imageUrl: '/images/img-3.png',
  },
  {
    name: 'Dr. Satya N Gupta',
    title: 'NGNguru, Chairman - Blockchain For Productivity Forum (BPF)',
    imageUrl: '/images/KMM_5236.png',
  },
  {
    name: 'Nitin Mishra',
    title: 'Chief Technology Officer, Open Network for Digital Commerce (ONDC)',
    imageUrl: '/images/Rectangle 160878.png',
  },
];

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.1
    }
  }
};

const headerVariants = {
  hidden: { 
    opacity: 0, 
    y: -30,
    scale: 0.95
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: "easeOut"
    }
  }
};

const cardVariants = {
  hidden: { 
    opacity: 0, 
    y: 60,
    scale: 0.9,
    rotateX: 10
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    rotateX: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

const buttonVariants = {
  hidden: { 
    opacity: 0, 
    y: 20,
    scale: 0.9
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  }
};

const Visionary = () => {
  const [numVisibleSpeakers, setNumVisibleSpeakers] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // Adjust breakpoint as needed
    };

    handleResize(); // Set initial value
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (isMobile) {
      setNumVisibleSpeakers(8);
    } else {
      setNumVisibleSpeakers(8);
    }
  }, [isMobile]);

  const handleLoadMore = () => {
    if (isMobile) {
      setNumVisibleSpeakers(prev => prev + 2);
    } else {
      setNumVisibleSpeakers(prev => prev + 4);
    }
  };

  return (
    <>
      {/* Visionary Leaders Section */}
      <motion.section 
        className="w-full px-4 mt-[58px] sm:px-6 md:mt-[116px] lg:px-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
      >
        <div className="mx-auto w-full max-w-[1440px]">
          {/* Section Header */}
          <motion.div 
            className="mb-[22px] text-center md:mb-[44px]"
            variants={headerVariants}
          >
            <motion.p 
              className="text-center font-lufga text-[16px] font-bold uppercase leading-[21px] text-[#0575e6] md:text-[20px] md:leading-[27px]"
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Past Speakers
            </motion.p>
            <motion.h2 
              className="mt-[6px] text-center font-lufga text-[32px] font-normal leading-[42px] text-[#000000] md:mt-[8px] md:text-[64px] md:leading-[84px]"
              initial={{ opacity: 0, y: -30, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.8, 
                delay: 0.4,
                ease: [0.6, -0.05, 0.01, 0.99]
              }}
              whileHover={{ 
                scale: 1.02,
                transition: { duration: 0.2 }
              }}
            >
              Meet Our Visionary Leaders
            </motion.h2>
          </motion.div>

          {/* Speakers Grid - Mapped from speakersData array */}
          <motion.div 
            className="grid w-full grid-cols-1 gap-[13px] sm:grid-cols-2 md:gap-[26px] lg:grid-cols-4"
            variants={containerVariants}
          >
            <AnimatePresence>
              {speakersData.slice(0, numVisibleSpeakers).map((speaker, index) => (
                <motion.div
                  key={index} // It's important to provide a unique key for each item in a list
                  className="flex w-full flex-col items-center justify-start"
                  variants={cardVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                  whileHover={{ 
                    y: -10,
                    scale: 1.02,
                    rotateY: 2,
                    transition: { 
                      duration: 0.3,
                      ease: "easeOut"
                    }
                  }}
                  whileTap={{ scale: 0.98 }}
                  layout
                >
                  <motion.div
                    className="relative w-full overflow-hidden rounded-[20px]"
                    whileHover={{ 
                      scale: 1.05,
                      transition: { duration: 0.3 }
                    }}
                  >
                    <motion.div
                      initial={{ scale: 1 }}
                      whileHover={{ 
                        scale: 1.1,
                        transition: { duration: 0.4 }
                      }}
                    >
                      <Image
                        src={speaker.imageUrl}
                        alt={speaker.name}
                        width={150}
                        height={160}
                        className="h-[70%] w-full object-cover rounded-[20px]"
                      />
                    </motion.div>
                    
                    {/* Hover overlay effect */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-[20px]"
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                  </motion.div>

                  <motion.div 
                    className="-mt-[46px] flex w-full h-[30%] flex-row items-start justify-start bg-[linear-gradient(90deg,#0575e6_0%,#5336f8_50%,#00f260_100%)] p-[10px] py-0 shadow-[0px_4px_25px_#888888ff] rounded-[20px] z-20"
                    whileHover={{
                      boxShadow: "0px 8px 35px rgba(136,136,136,0.4)",
                      transition: { duration: 0.3 }
                    }}
                  >
                    <motion.div 
                      className="-mt-[10px] w-full h-full border border-[#ffffff] backdrop-blur-md bg-white/20 p-[12px] shadow-[0px_4px_100px_#888888ff] rounded-[20px]"
                      whileHover={{
                        bg: "rgba(255,255,255,0.3)",
                        backdropFilter: "blur(20px)",
                        transition: { duration: 0.3 }
                      }}
                    >
                      <div className="flex w-full h-fit flex-col items-start justify-start gap-[10px]">
                        <motion.h3 
                          className="text-left font-lufga font-medium text-[#ffffff] text-[24px] leading-[32px]"
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.5, delay: index * 0.1 + 0.6 }}
                          whileHover={{
                            x: 5,
                            transition: { duration: 0.2 }
                          }}
                        >
                          {speaker.name}
                        </motion.h3>
                        <motion.p 
                          className="w-full text-left font-lufga font-normal text-[#ffffff] text-[14px] leading-[18px]"
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.5, delay: index * 0.1 + 0.8 }}
                          whileHover={{
                            x: 5,
                            transition: { duration: 0.2 }
                          }}
                        >
                          {speaker.title}
                        </motion.p>
                      </div>
                    </motion.div>
                  </motion.div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {/* Load More Button */}
          {numVisibleSpeakers < speakersData.length && (
            <motion.div 
              className="mt-[27px] text-center md:mt-[54px]"
              variants={buttonVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <Button
                  variant="primary"
                  className="rounded-[12px] px-[12px] py-[6px] font-lufga text-[12px] font-bold leading-[16px] md:rounded-[24px] md:px-[24px] md:py-[12px] md:text-[16px] md:leading-[21px]"
                  onClick={handleLoadMore}
                >
                  Load More
                </Button>
              </motion.div>
            </motion.div>
          )}
        </div>
      </motion.section>
    </>
  );
};

export default Visionary;