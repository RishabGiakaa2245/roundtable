import React from 'react';
import Image from 'next/image';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

// Move static data outside component to prevent re-creation on each render
const HIGHLIGHTS_DATA = [
  {
    id: 1,
    icon: "/images/img_frame_blue_700.svg",
    title: "Six Roundtables",
    description: "Inclusion, Valuations, India Stack, Partnerships, Fintech 2030, and Allocators in focused sessions.",
    alt: "Six Roundtables Icon"
  },
  {
    id: 2,
    icon: "/images/img_frame_blue_700_180x180.svg",
    title: "Invite-Only",
    description: "Decision-makers only: founders, bank/ NBFC leaders, PE, family offices, and institutions.",
    alt: "Invite-Only Icon"
  },
  {
    id: 3,
    icon: "/images/img_frame_180x180.svg",
    title: "Limited Seats",
    description: "Moderated, high-signal conversations — no panels, no pitches, no fluff.",
    alt: "Limited Seats Icon"
  },
  {
    id: 4,
    icon: "/images/img_frame_1.svg",
    title: "Chatham House",
    description: "Off-the-record candor to share real metrics, misses, and playbooks.",
    alt: "Chatham House Icon"
  },
  {
    id: 5,
    icon: "/images/img_frame_blue_700.svg",
    title: "Dual Moderation",
    description: "Operator + investor co-leads for on-stage and off-stage opportunities.",
    alt: "Dual Moderation Icon"
  },
  {
    id: 6,
    icon: "/images/img_frame_blue_700_180x180.svg",
    title: "Data Pre-Reads",
    description: "Glukas briefs, benchmarks, and context to prime productive debates.",
    alt: "Data Pre-Reads Icon"
  },
  {
    id: 7,
    icon: "/images/img_frame_180x180.svg",
    title: "Curated 1:1s",
    description: "Bank-fintech collaboration and capital connections arranged around your goals.",
    alt: "Curated 1:1s Icon"
  },
  {
    id: 8,
    icon: "/images/img_frame_1.svg",
    title: "Actionable Outcomes",
    description: "Post-event summary, warm intros (opt-out), and follow-up workstreams.",
    alt: "Actionable Outcomes Icon"
  }
];

// Enhanced section entrance animation variants
const sectionVariants = {
  hidden: { 
    opacity: 0,
    scale: 0.95,
    y: 50
  },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.25, 0.46, 0.45, 0.94],
      staggerChildren: 0.15,
      delayChildren: 0.2
    }
  }
};

// Background animation for section entry
const backgroundVariants = {
  hidden: {
    opacity: 0,
    scale: 1.1
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 1.2,
      ease: "easeOut"
    }
  }
};

// Enhanced container animation with wave effect
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.3
    }
  }
};

// Enhanced card entrance animations
const cardVariants = {
  hidden: { 
    opacity: 0, 
    y: 60,
    scale: 0.8,
    rotateX: 25
  },
  visible: (index) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    rotateX: 0,
    transition: {
      type: "spring",
      stiffness: 120,
      damping: 15,
      duration: 0.8,
      delay: (index % 4) * 0.1, // Wave effect across columns
      ease: [0.25, 0.46, 0.45, 0.94]
    }
  })
};

const iconVariants = {
  initial: { 
    scale: 1, 
    rotate: 0,
    filter: "blur(0px)"
  },
  hover: { 
    scale: 1.15,
    rotate: [0, -5, 5, -5, 0],
    filter: "blur(0px)",
    transition: {
      rotate: {
        duration: 0.5,
        ease: "easeInOut"
      },
      scale: {
        type: "spring",
        stiffness: 300,
        damping: 10
      }
    }
  },
  tap: {
    scale: 0.95,
    rotate: 0
  },
  // New entrance animation for icons
  entrance: {
    scale: [0.5, 1.1, 1],
    rotate: [0, 10, -5, 0],
    transition: {
      duration: 0.6,
      ease: "easeOut",
      times: [0, 0.6, 1]
    }
  }
};

const textVariants = {
  initial: { 
    y: 0,
    opacity: 1
  },
  hover: {
    y: -3,
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 10
    }
  },
  // Enhanced entrance animation for text
  entrance: {
    opacity: [0, 1],
    y: [20, 0],
    transition: {
      duration: 0.5,
      delay: 0.2,
      ease: "easeOut"
    }
  }
};

const descriptionVariants = {
  initial: {
    opacity: 0.8
  },
  hover: {
    opacity: 1,
    transition: {
      duration: 0.3
    }
  },
  // Enhanced entrance animation for description
  entrance: {
    opacity: [0, 0.8],
    y: [15, 0],
    transition: {
      duration: 0.4,
      delay: 0.3,
      ease: "easeOut"
    }
  }
};

// Enhanced header animation variants with more dramatic entrance
const headerVariants = {
  hidden: { 
    opacity: 0,
    y: -60,
    scale: 0.8
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 1,
      ease: [0.25, 0.46, 0.45, 0.94]
    }
  }
};

const titleVariants = {
  hidden: { 
    opacity: 0,
    scale: 0.7,
    y: 40,
    rotateX: 15
  },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    rotateX: 0,
    transition: {
      duration: 1,
      ease: [0.25, 0.46, 0.45, 0.94],
      delay: 0.3
    }
  }
};

// Floating animation for decorative elements
const floatingVariants = {
  animate: {
    y: [-10, 10, -10],
    rotate: [-2, 2, -2],
    transition: {
      duration: 6,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
};

// Memoized highlight card component with enhanced animations
const HighlightCard = React.memo(({ highlight, index }) => {
  const cardRef = useRef(null);
  const isCardInView = useInView(cardRef, { once: true, margin: "-20px" });
  
  return (
    <motion.div
      ref={cardRef}
      variants={cardVariants}
      initial="hidden"
      animate={isCardInView ? "visible" : "hidden"}
      custom={index}
      whileHover="hover"
      whileTap="tap"
      className="flex flex-col gap-[15px] md:gap-[30px] justify-start items-center w-full max-w-[280px] group cursor-pointer relative"
      style={{ perspective: "1000px" }}
    >

      
      {/* Icon with enhanced entrance animations */}
      <motion.div 
        className="w-[90px] h-[90px] md:w-[180px] md:h-[180px] flex justify-center items-start relative"
        variants={iconVariants}
        initial="initial"
        animate={isCardInView ? "entrance" : "initial"}
        whileHover="hover"
        whileTap="tap"
      >
        {/* Enhanced animated shadow/glow */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-2xl"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ 
            opacity: isCardInView ? 0.6 : 0,
            scale: isCardInView ? 1 : 0.5
          }}
          whileHover={{ 
            opacity: 1,
            scale: 1.3,
            transition: { duration: 0.4 }
          }}
          transition={{ delay: index * 0.1 + 0.3, duration: 0.6 }}
        />
        
        <Image
          src={highlight.icon}
          alt={highlight.alt}
          width={180}
          height={180}
          className="w-full h-full object-contain relative z-10"
          loading="lazy"
          sizes="(max-width: 768px) 90px, 180px"
        />
      </motion.div>
      
      {/* Text content with enhanced stagger animations */}
      <div className="flex flex-col gap-[8px] md:gap-[12px] justify-start items-center sm:items-start w-full text-center sm:text-left">
        <motion.h3 
          className="text-[18px] md:text-[24px] font-lufga font-bold leading-[24px] md:leading-[32px] text-[#000000] relative"
          variants={textVariants}
          initial="initial"
          animate={isCardInView ? "entrance" : "initial"}
          whileHover="hover"
        >
          {/* Enhanced underline animation on hover */}
          <motion.span
            className="absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-blue-500 to-purple-500"
            initial={{ width: "0%", opacity: 0 }}
            animate={{ opacity: isCardInView ? 1 : 0 }}
            whileHover={{ width: "100%" }}

          />
          {highlight.title}
        </motion.h3>
        
        <motion.p 
          className="text-[12px] md:text-[14px] font-lufga font-normal leading-[16px] md:leading-[20px] text-[#666666] max-w-[240px]"
          initial="initial"
          animate={isCardInView ? "entrance" : "initial"}
        >
          {highlight.description}
        </motion.p>
      </div>
    </motion.div>
  );
});

HighlightCard.displayName = 'HighlightCard';

// Main component with enhanced section entrance animations
const EventHighlights = React.memo(() => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-150px", threshold: 0.1 });
  
  return (
    <motion.section 
      ref={sectionRef}
      className="w-full px-4 sm:px-6 lg:px-8 mt-[58px] py-20 md:mt-[116px] relative overflow-hidden"
      variants={sectionVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      {/* Enhanced animated background gradient */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-50/30 to-transparent pointer-events-none"
        variants={backgroundVariants}
        animate={{
          backgroundPosition: ["0% 0%", "100% 100%"],
          opacity: isInView ? [0.3, 0.6, 0.3] : 0
        }}
        transition={{
          backgroundPosition: {
            duration: 20,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "linear"
          },
          opacity: {
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }
        }}
      />
      
      {/* Particle effect background */}
      <motion.div
        className="absolute top-0 left-1/4 w-2 h-2 bg-blue-400 rounded-full opacity-40"
        animate={{
          y: [0, -100, 0],
          opacity: [0.4, 0.8, 0.4],
          scale: [1, 1.5, 1]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          delay: 1
        }}
      />
      <motion.div
        className="absolute top-1/3 right-1/3 w-1 h-1 bg-purple-400 rounded-full opacity-50"
        animate={{
          y: [0, 80, 0],
          x: [0, 20, 0],
          opacity: [0.5, 1, 0.5]
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          delay: 2
        }}
      />
      
      <div className="w-full max-w-[1440px] mx-auto relative">
        {/* Section Header with enhanced animations */}
        <motion.header 
          className="text-center mb-[30px] md:mb-[60px]"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : -50 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.p 
            className="text-[16px] md:text-[20px] font-lufga font-bold leading-[21px] md:leading-[27px] text-center uppercase text-[#0575e6]"
            variants={headerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <motion.span
              animate={{
                backgroundImage: isInView ? [
                  "linear-gradient(90deg, #0575e6 0%, #0575e6 100%)",
                  "linear-gradient(90deg, #0575e6 0%, #021b79 50%, #0575e6 100%)",
                  "linear-gradient(90deg, #0575e6 0%, #0575e6 100%)"
                ] : "linear-gradient(90deg, #0575e6 0%, #0575e6 100%)",
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              style={{
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
                color: "transparent",
                backgroundImage: "linear-gradient(90deg, #0575e6 0%, #0575e6 100%)"
              }}
            >
              Highlights
            </motion.span>
          </motion.p>
          
          <motion.h2 
            className="text-[32px] md:text-[64px] font-lufga font-medium leading-[42px] md:leading-[84px] text-center text-[#22242e] mt-[6px] md:mt-[8px]"
            variants={titleVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <motion.span
              className="inline-block"
              whileHover={{ scale: 1.05, color: "#0575e6" }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              Event Highlights
            </motion.span>
            {" & "}
            <motion.span
              className="inline-block"
              whileHover={{ scale: 1.05, color: "#0575e6" }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              Connections
            </motion.span>
          </motion.h2>
        </motion.header>

        {/* Highlights Grid with enhanced stagger animations */}
        <div className="max-w-[1200px] mx-auto px-[20px] md:px-[40px]">
          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-[20px] md:gap-x-[40px] gap-y-[40px] md:gap-y-[60px] justify-items-center"
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            {HIGHLIGHTS_DATA.map((highlight, index) => (
              <HighlightCard 
                key={highlight.id} 
                highlight={highlight} 
                index={index}
              />
            ))}
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
});

EventHighlights.displayName = 'EventHighlights';

export default EventHighlights;