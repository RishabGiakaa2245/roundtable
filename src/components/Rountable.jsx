import React from 'react';
import Image from 'next/image';
import Button from './ui/Button';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { useRouter } from 'next/navigation';
import { generateSlug } from '@/helper/utils';
// Add these Tailwind custom utilities to your global CSS or component
const customStyles = `
  .line-clamp-3 {
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
`;

// Sample data - replace with your actual data source
const roundtableData = [
  {
    id: 1,
    title: "Financial Inclusion Through Digital Payments: Reaching Bharat",
    slug: generateSlug("Financial Inclusion Through Digital Payments: Reaching Bharat"),
    time: '4:30 PM PM',
    location: 'Trident Hotel, BKC, Mumbai',
    date: '7 Oct. 2025',
    image: '/images/roundtables/horizontal/Roundtable1.jpg',
    timeIcon: '/images/img_search.svg',
    locationIcon: '/images/img_frame_white_a700.svg',
    dateIcon: '/images/img_frame_white_a700_18x18.svg',
  },
  {
    id: 2,
    title: 'Fintech Valuations in 2025: Navigating Market Corrections & Realistic Pricing',
    slug: generateSlug('Fintech Valuations in 2025: Navigating Market Corrections & Realistic Pricing'),
    time: '6:30 PM',
    location: 'Trident Hotel, BKC, Mumbai',
    date: '7 Oct. 2025',
    image: '/images/roundtables/horizontal/Roundtable2.jpg',
    timeIcon: '/images/img_search.svg',
    locationIcon: '/images/img_frame_white_a700.svg',
    dateIcon: '/images/img_frame_white_a700_18x18.svg',
  },
  {
    id: 3,
    title: "India Stack Opportunities: Building on UPI's $990B Market Potential",
    slug: generateSlug("India Stack Opportunities: Building on UPI's $990B Market Potential"),
    time: '4:00 PM',
    location: 'Trident Hotel, BKC, Mumbai',
    date: '8 Oct. 2025',
    image: '/images/roundtables/horizontal/Roundtable3.jpg',
    timeIcon: '/images/img_search.svg',
    locationIcon: '/images/img_frame_white_a700.svg',
    dateIcon: '/images/img_frame_white_a700_18x18.svg',
  },
  {
    id: 4,
    title: 'Bank-Fintech Partnerships: Creating Win-Win Collaboration Models',
    slug: generateSlug('Bank-Fintech Partnerships: Creating Win-Win Collaboration Models'),
    time: '6:30 PM',
    location: 'Trident Hotel, BKC, Mumbai',
    date: '8 Oct. 2025',
    image: '/images/roundtables/horizontal/Roundtable4.jpg',
    timeIcon: '/images/img_search.svg',
    locationIcon: '/images/img_frame_white_a700.svg',
    dateIcon: '/images/img_frame_white_a700_18x18.svg',
  },
  {
    id: 5,
    title: "Building India's Sustainable Digital Financial Ecosystem 2030: A Multi-Stakeholder Blueprint for Inclusive Growth",
    slug: generateSlug("Building India's Sustainable Digital Financial Ecosystem 2030: A Multi-Stakeholder Blueprint for Inclusive Growth"),
    time: '4:00 PM',
    location: 'Trident Hotel, BKC, Mumbai',
    date: '9 Oct. 2025',
    image: '/images/roundtables/horizontal/Roundtable5.jpg',
    timeIcon: '/images/img_search.svg',
    locationIcon: '/images/img_frame_white_a700.svg',
    dateIcon: '/images/img_frame_white_a700_18x18.svg',
  },
  {
    id: 6,
    title: "Asset Allocators, PE, Family Offices & Institutional Investors Shaping India's Fintech Future",
    slug: generateSlug("Asset Allocators, PE, Family Offices & Institutional Investors Shaping India's Fintech Future"),
    time: '6:30 PM',
    location: 'Trident Hotel, BKC, Mumbai',
    date: '9 Oct. 2025',
    image: '/images/roundtables/horizontal/Roundtable6.jpg',
    timeIcon: '/images/img_search.svg',
    locationIcon: '/images/img_frame_white_a700.svg',
    dateIcon: '/images/img_frame_white_a700_18x18.svg',
  },
];

// Reusable RoundtableCard component with animations
const RoundtableCard = ({ roundtable, index }) => {
  const router = useRouter();
  const {id , title, time, location, date, image, timeIcon, locationIcon, dateIcon , slug } = roundtable;
  const cardRef = useRef(null);
  const isInView = useInView(cardRef, { once: true, amount: 0.2 });

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 60,
      scale: 0.9,
      rotateY: -15
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      rotateY: 0,
      transition: {
        duration: 0.8,
        delay: index * 0.15,
        ease: "easeOut"
      }
    }
  };

  const imageVariants = {
    hidden: { scale: 1.05, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 1,
        delay: index * 0.15 + 0.3,
        ease: "easeOut"
      }
    }
  };

  const contentVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        delay: index * 0.15 + 0.5,
        ease: "easeOut"
      }
    }
  };

  const infoItemVariants = {
    hidden: { x: -20, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <motion.div 
      ref={cardRef}
      className="flex flex-col justify-start items-center w-full h-full"
      variants={cardVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      whileHover={{
        y: -15,
        scale: 1.03,
        transition: { duration: 0.3, ease: "easeOut" }
      }}
      style={{ perspective: 1000 }}
    >
      <motion.div 
        className="relative w-full aspect-[412/280] mb-4"
        whileHover={{
          scale: 1.05,
          boxShadow: "0 25px 50px rgba(0,0,0,0.15)"
        }}
        transition={{ duration: 0.3 }}
      >
        <motion.div
          variants={imageVariants}
          className="w-full h-full"
        >
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover rounded-[10px] md:rounded-[20px]"
          />
          <motion.div
            className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-[10px] md:rounded-[20px]"
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          />
        </motion.div>
      </motion.div>

      <motion.div 
        className="flex flex-col justify-between w-full shadow-[0px_4px_25px_#888888ff] bg-[linear-gradient(90deg,#0575e6_0%,#5336f8_50%,#00f260_100%)] rounded-[10px] md:rounded-[20px] p-[6px] md:p-[12px] -mt-[30px] md:-mt-[40px] relative z-10 flex-1"
        whileHover={{
          boxShadow: "0px 8px 40px rgba(5, 117, 230, 0.4)",
          scale: 1.02
        }}
        transition={{ duration: 0.3 }}
        animate={{
          backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
        }}
       
      >
        <motion.div 
          className="flex flex-col w-full shadow-[0px_4px_100px_#888888ff] bg-[#ffffff33] border border-[#ffffff] rounded-[10px] md:rounded-[20px] p-[15px] md:p-[20px] h-full"
          variants={contentVariants}
          whileHover={{
            backdropFilter: "blur(20px)",
            backgroundColor: "rgba(255, 255, 255, 0.4)"
          }}
          transition={{ duration: 0.3 }}
        >
          <div className="flex flex-col gap-[8px] md:gap-[12px] justify-between h-full">
            <motion.h3 
              className="text-[24px] md:text-[24px] lg:text-[26px] font-lufga font-medium leading-[26px] md:leading-[26px] lg:leading-[27px] text-left text-[#ffffff] line-clamp-3 min-h-[60px] md:min-h-[72px]"
              whileHover={{
                scale: 1.02,
                textShadow: "0 0 20px rgba(255,255,255,0.8)"
              }}
              transition={{ duration: 0.3 }}
            >
              {title}
            </motion.h3>
            
            <div className="flex flex-col gap-[8px] md:gap-[12px] justify-center items-start flex-1">
              <motion.div 
                className="flex justify-start items-center gap-[6px] md:gap-[8px] w-full"
                variants={{
                  visible: {
                    transition: {
                      staggerChildren: 0.1
                    }
                  }
                }}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
              >
                <motion.div variants={infoItemVariants}>
                  <InfoItem icon={timeIcon} text={time} alt="Time Icon" />
                </motion.div>
                <motion.div variants={infoItemVariants}>
                  <InfoItem icon={locationIcon} text={location} alt="Location Icon" />
                </motion.div>
                <motion.div variants={infoItemVariants}>
                  <InfoItem icon={dateIcon} text={date} alt="Date Icon" />
                </motion.div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.5, delay: index * 0.15 + 0.8 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button  onClick={() => router.push(`/overview/${slug}`)} variant="secondary" size="md" className="">
                  Request an invite
                </Button>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

// Enhanced InfoItem component with animations
const InfoItem = ({ icon, text, alt }) => (
  <motion.div 
    className="flex flex-row gap-[4px] md:gap-[6px] justify-start items-center w-fit"
    whileHover={{ 
      scale: 1.1,
      x: 2
    }}
    transition={{ duration: 0.2 }}
  >
    <motion.div
      whileHover={{ 
        rotate: 10,
        scale: 1.2
      }}
      transition={{ duration: 0.3 }}
    >
      <Image
        src={icon}
        alt={alt}
        width={12}
        height={12}
        className="w-[12px] h-[12px] md:w-[16px] md:h-[16px] flex-shrink-0"
      />
    </motion.div>
    <motion.p 
      className="text-[10px] md:text-[12px] font-lufga font-medium leading-[12px] md:leading-[16px] text-left text-[#ffffff] truncate"
      whileHover={{ 
        textShadow: "0 0 10px rgba(255,255,255,0.6)"
      }}
    >
      {text}
    </motion.p>
  </motion.div>
);

const Roundtable = ({ data = roundtableData }) => {
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true, amount: 0.5 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const headerVariants = {
    hidden: { opacity: 0, y: -30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const titleVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        delay: 0.2,
        ease: "easeOut"
      }
    }
  };

  const gridVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.4
      }
    }
  };

  return (
    <motion.section 
      ref={sectionRef}
      className="w-full px-4 sm:px-6 lg:px-8 mt-[39px] md:mt-[78px]"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
    >
      <div className="w-full max-w-[1440px] mx-auto">
        {/* Section Header */}
        <motion.div 
          ref={headerRef}
          className="text-center mb-[30px] md:mb-[60px]"
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.2
              }
            }
          }}
          initial="hidden"
          animate={isHeaderInView ? "visible" : "hidden"}
        >
          <motion.p 
            className="text-[16px] md:text-[20px] font-lufga font-bold leading-[21px] md:leading-[27px] text-center uppercase text-[#0575e6]"
            variants={headerVariants}
            whileHover={{
              scale: 1.05,
              textShadow: "0 0 20px rgba(5, 117, 230, 0.6)"
            }}
          >
            Giakaa Capital Roundtables
          </motion.p>
          <motion.h2 
            className="text-[32px] md:text-[64px] font-lufga font-medium leading-[42px] md:leading-[84px] text-center text-[#22242e] mt-[6px] md:mt-[8px]"
            variants={titleVariants}
            whileHover={{
              scale: 1.02,
              textShadow: "0 0 30px rgba(34, 36, 46, 0.3)"
            }}
          >
            India's Digital Finance Tracks
          </motion.h2>
        </motion.div>

        {/* Roundtable Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[20px] md:gap-[30px] lg:gap-[40px] px-[20px] md:px-[40px] lg:px-[28px]"
          variants={gridVariants}
        >
          {data.map((roundtable, index) => (
            <motion.div
              key={roundtable.id}
              className="h-full min-h-[400px] md:min-h-[450px] lg:min-h-[500px]"
              layout
            >
              <RoundtableCard roundtable={roundtable} index={index} />
            </motion.div>
          ))}
        </motion.div>

        {/* Floating decorative elements */}
        <motion.div
          className="absolute top-0 left-0 w-4 h-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full opacity-20"
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
            scale: [1, 1.5, 1]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute top-1/2 right-0 w-6 h-6 bg-gradient-to-r from-green-400 to-blue-500 rounded-full opacity-15"
          animate={{
            x: [0, -80, 0],
            y: [0, 60, 0],
            rotate: [0, 180, 360]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>
    </motion.section>
  );
};

export default Roundtable;