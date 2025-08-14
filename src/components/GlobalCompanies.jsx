import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

// Animation variants
const sectionVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.8,
      staggerChildren: 0.2
    }
  }
};

const headingVariants = {
  hidden: { 
    opacity: 0, 
    y: 30,
    scale: 0.95
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.7,
      ease: [0.6, -0.05, 0.01, 0.99]
    }
  }
};

const scrollRowVariants = {
  hidden: { 
    opacity: 0,
    y: 50
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut"
    }
  }
};

const cardHoverVariants = {
  hover: {
    y: -8,
    scale: 1.05,
    boxShadow: "0px 10px 30px rgba(24, 175, 255, 0.3)",
    transition: {
      duration: 0.3,
      ease: "easeOut"
    }
  },
  tap: {
    scale: 0.95,
    y: -2
  }
};

const imageVariants = {
  hover: {
    scale: 1.1,
    transition: {
      duration: 0.3,
      ease: "easeInOut"
    }
  }
};

const CompanyCard = ({ imgSrc, index = 0 }) => (
  <motion.div 
    className="flex flex-row justify-center items-center shadow-[0px_0px_15px_#18afff3f] bg-white border border-[#00000019] rounded-[10px] md:rounded-[20px] py-[11px] md:py-[22px] min-w-[120px]"
    variants={cardHoverVariants}
    whileHover="hover"
    whileTap="tap"
    initial={{ opacity: 0, scale: 0.8, y: 20 }}
    animate={{ 
      opacity: 1, 
      scale: 1, 
      y: 0,
      transition: {
        delay: index * 0.1,
        duration: 0.5,
        ease: "easeOut"
      }
    }}
  >
    <motion.div
      variants={imageVariants}
      className="overflow-hidden"
    >
      <Image
        src={imgSrc}
        alt="Logo"
        width={80}
        height={40}
        className="w-[80px] h-auto object-contain"
      />
    </motion.div>
  </motion.div>
);

const GlobalCompanies = () => {
  // Object-based arrays for partners and media partners
  const partnersRow1 = [
    { img: "/images/cropped-ABA-logo 1.png" },
    { img: "/images/dea 1.png" },
    { img: "/images/fisme 1.png" },
    { img: "/images/gba 1.png" },
    { img: "/images/gcpit 3.png" },
    { img: "/images/Group 1261154156.png" },
    { img: "/images/Group 1261154362.png" },
  ];

  const partnersRow2 = [
    { img: "/images/iba 1.png" },
    { img: "/images/micci 1.png" },
    { img: "/images/sia 1.png" },
    { img: "/images/wicci 1.png" },
    { img: "/images/cropped-ABA-logo 1.png" },
    { img: "/images/dea 1.png" },
    { img: "/images/fisme 1.png" },
  ];

  const mediaRow = [
    { img: "/images/gba 1.png" },
    { img: "/images/gcpit 3.png" },
    { img: "/images/Group 1261154156.png" },
    { img: "/images/Group 1261154362.png" },
    { img: "/images/iba 1.png" },
    { img: "/images/micci 1.png" },
  ];

  return (
    <motion.section 
      className="w-[100vw] bg-[linear-gradient(90deg,#0575e6_0%,#5336f8_50%,#00f260_100%)] px-4 sm:px-6 lg:px-8 py-[33px] md:py-[66px] mt-[60px] md:mt-[120px]"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={sectionVariants}
    >
      <div className="w-full max-w-[1440px] mx-auto">
        
        {/* Past Partners Heading */}
        <motion.div variants={headingVariants}>
          <motion.p 
            className="text-[16px] md:text-[20px] font-lufga font-bold text-center uppercase text-white"
            initial={{ opacity: 0, y: -20, scale: 0.9 }}
            whileInView={{ 
              opacity: 1, 
              y: 0, 
              scale: 1,
              transition: {
                duration: 0.6,
                ease: "easeOut"
              }
            }}
            viewport={{ once: true }}
            whileHover={{
              scale: 1.05,
              textShadow: "0px 0px 20px rgba(255,255,255,0.5)",
              transition: { duration: 0.2 }
            }}
          >
            Past Partners
          </motion.p>
          
          <motion.h2 
            className="text-[32px] md:text-[64px] font-lufga font-normal text-center text-white mt-[6px] md:mt-[8px] w-full sm:w-[54%] mx-auto"
            initial={{ opacity: 0, y: -30, scale: 0.95 }}
            whileInView={{ 
              opacity: 1, 
              y: 0, 
              scale: 1,
              transition: {
                duration: 0.8,
                delay: 0.2,
                ease: [0.6, -0.05, 0.01, 0.99]
              }
            }}
            viewport={{ once: true }}
            whileHover={{
              scale: 1.02,
              textShadow: "0px 0px 30px rgba(255,255,255,0.3)",
              transition: { duration: 0.3 }
            }}
          >
            Global Companies Attending our Events
          </motion.h2>
        </motion.div>

        {/* Partners Rows */}
        <motion.div 
          className="mt-[30px] md:mt-[60px] flex flex-col gap-[24px] md:gap-[48px]"
          variants={scrollRowVariants}
        >
          <motion.div 
            className="overflow-hidden py-4"
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ 
              opacity: 1, 
              x: 0,
              transition: {
                duration: 0.8,
                delay: 0.3
              }
            }}
            viewport={{ once: true }}

          >
            <motion.div 
              className="flex gap-[25px] md:gap-[50px] animate-scroll-left"
              animate={{
                x: [0, -50],
              }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 20,
                  ease: "linear",
                },
              }}
            >
              {[...partnersRow1, ...partnersRow1].map((item, i) => (
                <CompanyCard key={`p1-${i}`} imgSrc={item.img} index={i} />
              ))}
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="overflow-hidden py-4"
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ 
              opacity: 1, 
              x: 0,
              transition: {
                duration: 0.8,
                delay: 0.5
              }
            }}
            viewport={{ once: true }}

          >
            <motion.div 
              className="flex gap-[25px] md:gap-[50px] animate-scroll-right"
              animate={{
                x: [0, 50],
              }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 25,
                  ease: "linear",
                },
              }}
            >
              {[...partnersRow2, ...partnersRow2].map((item, i) => (
                <CompanyCard key={`p2-${i}`} imgSrc={item.img} index={i} />
              ))}
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Past Media Partners Heading */}
        <motion.p 
          className="text-[16px] md:text-[20px] font-lufga font-bold text-center uppercase text-white mt-[50px]"
          initial={{ opacity: 0, y: 30, scale: 0.9 }}
          whileInView={{ 
            opacity: 1, 
            y: 0, 
            scale: 1,
            transition: {
              duration: 0.6,
              delay: 0.7
            }
          }}
          viewport={{ once: true }}
          whileHover={{
            scale: 1.05,
            textShadow: "0px 0px 20px rgba(255,255,255,0.5)",
            transition: { duration: 0.2 }
          }}
        >
          Past Media Partners
        </motion.p>

        {/* Media Partners Row */}
        <motion.div 
          className="mt-[24px] overflow-hidden py-4"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ 
            opacity: 1, 
            y: 0,
            transition: {
              duration: 0.8,
              delay: 0.8
            }
          }}
          viewport={{ once: true }}

        >
          <motion.div 
            className="flex gap-[25px] md:gap-[50px] animate-scroll-left"
            animate={{
              x: [0, -50],
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 22,
                ease: "linear",
              },
            }}
          >
            {[...mediaRow, ...mediaRow].map((item, i) => (
              <CompanyCard key={`m-${i}`} imgSrc={item.img} index={i} />
            ))}
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default GlobalCompanies;