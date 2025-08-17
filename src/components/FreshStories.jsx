import React from 'react';
import Image from 'next/image';
import Button from './ui/Button';
import { motion } from 'framer-motion';

const FreshStories = () => {
  // Stories data array - can be moved to props or external data source
  const stories = [
    {
      id: 1,
      imageUrl: '/images/img_rectangle_160945.png',
      title: 'Over 10,000 Jobs Lost as Automation Reshapes the',
      date: 'July 15',
      link: '#',
    },
    {
      id: 2,
      imageUrl: '/images/Rectangle 160945.png',
      title: 'Over 10,000 Jobs Lost as Automation Reshapes the',
      date: 'July 15',
      link: '#',
    },
    {
      id: 3,
      imageUrl: '/images/Rectangle 160945-1.png',
      title: 'Over 10,000 Jobs Lost as Automation Reshapes the',
      date: 'July 15',
      link: '#',
    },
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  };

  const headerVariants = {
    hidden: { 
      opacity: 0, 
      y: -30 
    },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  const cardVariants = {
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
        duration: 0.7,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  const imageVariants = {
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.4,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  const cardContentVariants = {
    hover: {
      y: -8,
      transition: {
        duration: 0.3,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  const glassCardVariants = {
    hover: {
      backdropFilter: 'blur(20px)',
      background: 'rgba(255, 255, 255, 0.25)',
      scale: 1.02,
      transition: {
        duration: 0.3,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  return (
    <motion.section 
      className="w-full overflow-hidden mt-[48px] sm:mt-[64px] md:mt-[96px]"
      data-scroll
      data-scroll-speed="0.1"
    >
      <div className="w-full max-w-[1440px] mx-auto overflow-hidden">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-[24px] sm:mb-[32px] md:mb-[40px]"
          variants={headerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.p 
            className="text-[14px] sm:text-[16px] lg:text-[20px] font-lufga font-bold leading-[18px] sm:leading-[21px] lg:leading-[27px] text-center uppercase text-[#0575e6]"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            data-scroll
            data-scroll-speed="0.2"
          >
            News Feed
          </motion.p>
          <motion.h2 
            className="text-[24px] sm:text-[32px] lg:text-[64px] font-lufga font-normal leading-[32px] sm:leading-[42px] lg:leading-[84px] text-center text-[#000000] mt-[12px] sm:mt-[16px] lg:mt-[32px] max-w-full break-words"
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            data-scroll
            data-scroll-speed="0.3"
          >
            Stay Updated by Fresh Stories
          </motion.h2>
        </motion.div>

        {/* Stories Grid */}
        <motion.div 
          className="flex flex-col sm:flex-row sm:flex-wrap lg:flex-nowrap gap-[16px] sm:gap-[20px] w-full p-8 sm:p-14 justify-center items-stretch overflow-hidden"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {stories.map((story, index) => (
            <motion.div
              key={story.id}
              className="flex w-full sm:w-[calc(50%-10px)] lg:flex-1 lg:max-w-none max-w-full flex-col items-center justify-start"
              variants={cardVariants}
              whileHover="hover"
              data-scroll
              data-scroll-speed={`${0.1 + index * 0.05}`}
            >
              <motion.div
                className="relative overflow-hidden rounded-[16px] sm:rounded-[20px] w-full z-10"
                variants={imageVariants}
              >
                <Image
                  src={story.imageUrl}
                  alt={story.title}
                  width={210}
                  height={120}
                  className="h-[200px] sm:h-[220px] md:h-[240px] w-full object-cover rounded-[16px] sm:rounded-[20px]"
                />
                <motion.div
                  className="absolute inset-0 bg-black/20 opacity-0 rounded-[16px] sm:rounded-[20px]"
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
              
              <motion.div 
                className="-mt-[18px] sm:-mt-[22px] flex w-full h-[160px] sm:h-[170px] md:h-[184px] flex-row items-start justify-start bg-[linear-gradient(90deg,#0575e6_0%,#5336f8_50%,#00f260_100%)] px-[12px] sm:px-[16px] py-0 shadow-[0px_4px_25px_#888888ff] rounded-[16px] sm:rounded-[20px] z-20"
                variants={cardContentVariants}
                whileHover={{
                  y: -8,
                  boxShadow: "0px 8px 40px rgba(136, 136, 136, 0.8)",
                  transition: { duration: 0.3 }
                }}
              >
                <motion.div 
                  className="-mt-[12px] sm:-mt-[16px] w-full h-full border z-20 border-[#ffffff] backdrop-blur-md bg-white/20 p-[16px] sm:p-[22px] shadow-[0px_4px_100px_#888888ff] rounded-[16px] sm:rounded-[20px]"
                  variants={glassCardVariants}
                >
                  <div className="flex w-full h-full flex-col items-start justify-between gap-[8px] sm:gap-[12px] mt-[4px] sm:mt-[6px]">
                    <div className="flex flex-col gap-[2px] justify-start items-start w-full">
                      <motion.h3 
                        className="text-[16px] sm:text-[18px] lg:text-[24px] font-lufga font-semibold leading-[20px] sm:leading-[23px] lg:leading-[31px] text-left text-[#ffffff] w-full break-words overflow-hidden"
                        whileHover={{ x: 5 }}
                        transition={{ duration: 0.2 }}
                      >
                        {story.title}
                      </motion.h3>
                      <motion.p 
                        className="text-[12px] sm:text-[14px] lg:text-[16px] font-lufga font-medium leading-[16px] sm:leading-[18px] lg:leading-[21px] text-left text-[#ffffff]"
                        whileHover={{ x: 5 }}
                        transition={{ duration: 0.2, delay: 0.05 }}
                      >
                        {story.date}
                      </motion.p>
                    </div>
                    <motion.a
                      href={story.link}
                      className="text-[12px] sm:text-[14px] lg:text-[16px] font-lufga font-bold leading-[16px] sm:leading-[18px] lg:leading-[21px] text-center underline text-[#ffdf01] hover:text-[#ffb11b] transition-colors"
                      whileHover={{ 
                        scale: 1.05,
                        color: "#ffb11b",
                        transition: { duration: 0.2 }
                      }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Read More
                    </motion.a>
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default FreshStories;