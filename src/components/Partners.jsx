'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
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
    name: 'Sandeep Nailwal',
    title: 'Co-Founder, Polygon Labs | Founder, Blockchain for Impact (BFI)',
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

const Partners = () => {
  const [isHovered, setIsHovered] = useState(false);

  // Duplicate the speakers array for seamless scrolling
  const duplicatedSpeakers = [...speakersData, ...speakersData];

  return (
    <>
      {/* Visionary Leaders Section */}
      <motion.section 
        className="w-full px-4 mt-[58px] sm:px-6 md:mt-[116px] lg:px-8 overflow-hidden"
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

          {/* Horizontal Scrolling Container */}
          <div 
            className="relative w-full overflow-hidden"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {/* Gradient overlays for smooth fade effect */}
            <div className="absolute left-0 top-0 z-10 h-full w-20 bg-gradient-to-r from-white to-transparent pointer-events-none" />
            <div className="absolute right-0 top-0 z-10 h-full w-20 bg-gradient-to-l from-white to-transparent pointer-events-none" />
            
            {/* Scrolling Track */}
            <motion.div 
              className="flex w-fit gap-[26px] py-4"
              animate={{
                x: isHovered ? 0 : "-100%"
              }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 30,
                  ease: "linear"
                }
              }}
              style={{
                width: `${duplicatedSpeakers.length * 320}px` // Approximate card width + gap
              }}
            >
              {duplicatedSpeakers.map((speaker, index) => (
                <motion.div
                  key={`speaker-${index}`}
                  className="flex w-[300px] flex-shrink-0 flex-col items-center justify-start"
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
                        width={300}
                        height={280}
                        className="h-[280px] w-full object-cover rounded-[20px]"
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
                    className="-mt-[46px] flex w-full h-[120px] flex-row items-start justify-start bg-[linear-gradient(90deg,#0575e6_0%,#5336f8_50%,#00f260_100%)] p-[10px] py-0 shadow-[0px_4px_25px_#888888ff] rounded-[20px] z-20"
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
                          className="text-left font-lufga font-medium text-[#ffffff] text-[20px] leading-[26px]"
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.5, delay: (index % speakersData.length) * 0.1 + 0.6 }}
                          whileHover={{
                            x: 5,
                            transition: { duration: 0.2 }
                          }}
                        >
                          {speaker.name}
                        </motion.h3>
                        <motion.p 
                          className="w-full text-left font-lufga font-normal text-[#ffffff] text-[12px] leading-[16px] overflow-hidden"
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.5, delay: (index % speakersData.length) * 0.1 + 0.8 }}
                          whileHover={{
                            x: 5,
                            transition: { duration: 0.2 }
                          }}
                          style={{
                            display: '-webkit-box',
                            WebkitLineClamp: 3,
                            WebkitBoxOrient: 'vertical'
                          }}
                        >
                          {speaker.title}
                        </motion.p>
                      </div>
                    </motion.div>
                  </motion.div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Scroll indicator */}
          <motion.div 
            className="mt-6 text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 1 }}
          >

          </motion.div>
        </div>
      </motion.section>
    </>
  );
};

export default Partners;