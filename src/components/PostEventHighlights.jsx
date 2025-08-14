import React, { useRef, useEffect } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';

const PostEventHighlights = () => {
  const scrollContainerRef = useRef(null);
  const autoScrollRef = useRef(null);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  
  // Scroll-based animations
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });
  
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const headerY = useTransform(scrollYProgress, [0, 0.5], ["0px", "-50px"]);

  // Main gallery images data - all same size
  const mainGalleryImages = [
    {
      id: 1,
      src: '/images/img_rectangle_160894.png',
      alt: 'Past Event 1',
    },
    {
      id: 2,
      src: '/images/img_rectangle_160895.png',
      alt: 'Past Event 2',
    },
    {
      id: 3,
      src: '/images/img_rectangle_160896.png',
      alt: 'Past Event 3',
    },
    {
      id: 4,
      src: '/images/img_rectangle_160897.png',
      alt: 'Past Event 4',
    },
    {
      id: 5,
      src: '/images/img_rectangle_160898.png',
      alt: 'Past Event 5',
    },
    // Duplicate images for infinite scroll effect
    {
      id: 6,
      src: '/images/img_rectangle_160894.png',
      alt: 'Past Event 1 Copy',
    },
    {
      id: 7,
      src: '/images/img_rectangle_160895.png',
      alt: 'Past Event 2 Copy',
    },
    {
      id: 8,
      src: '/images/img_rectangle_160896.png',
      alt: 'Past Event 3 Copy',
    },
  ];

  // Bottom gallery videos data
  const bottomGalleryVideos = [
    {
      id: 1,
      src: '/Sequence 01.mp4',
      alt: 'Bottom Event Video 1',
    },
    {
      id: 2,
      src: '/Sequence 02.mp4',
      alt: 'Bottom Event Video 2',
    },
    {
      id: 3,
      src: '/Sequence 03.mp4',
      alt: 'Bottom Event Video 3',
    },
  ];

  // Auto-scroll functionality
  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const startAutoScroll = () => {
      autoScrollRef.current = setInterval(() => {
        const scrollAmount = 1;
        container.scrollLeft += scrollAmount;

        // Reset scroll position for infinite effect
        if (container.scrollLeft >= container.scrollWidth / 2) {
          container.scrollLeft = 0;
        }
      }, 50);
    };

    const stopAutoScroll = () => {
      if (autoScrollRef.current) {
        clearInterval(autoScrollRef.current);
        autoScrollRef.current = null;
      }
    };

    // Start auto-scroll
    startAutoScroll();

    // Pause on hover
    container.addEventListener('mouseenter', stopAutoScroll);
    container.addEventListener('mouseleave', startAutoScroll);

    // Cleanup
    return () => {
      stopAutoScroll();
      container.removeEventListener('mouseenter', stopAutoScroll);
      container.removeEventListener('mouseleave', startAutoScroll);
    };
  }, []);

  // Manual scroll functions
  const scrollLeft = () => {
    const container = scrollContainerRef.current;
    if (container) {
      container.scrollBy({
        left: -280,
        behavior: 'smooth',
      });
    }
  };

  const scrollRight = () => {
    const container = scrollContainerRef.current;
    if (container) {
      container.scrollBy({
        left: 280,
        behavior: 'smooth',
      });
    }
  };

  // Arrow icon component
  const ArrowIcon = ({ isNext }) => (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      className={`text-global-5 ${!isNext ? 'rotate-180' : ''}`}
    >
      <path
        d="M9 18L15 12L9 6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const headerVariants = {
    hidden: { 
      opacity: 0, 
      y: 60,
      scale: 0.9
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

  const subtitleVariants = {
    hidden: { 
      opacity: 0, 
      y: 30,
      letterSpacing: "0.2em"
    },
    visible: {
      opacity: 1,
      y: 0,
      letterSpacing: "0.1em",
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const galleryVariants = {
    hidden: { 
      opacity: 0,
      y: 100,
      scale: 0.8
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 1,
        ease: [0.25, 0.46, 0.45, 0.94],
        delay: 0.3
      }
    }
  };

  const videoGridVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.15,
        delayChildren: 0.5
      }
    }
  };

  const videoItemVariants = {
    hidden: { 
      opacity: 0, 
      y: 60,
      scale: 0.9,
      rotateX: -15
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      rotateX: 0,
      transition: {
        duration: 0.7,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  return (
    <motion.section 
      ref={sectionRef}
      className="w-[100vw] bg-[linear-gradient(90deg,#0575e6_0%,#5336f8_50%,#00f260_100%)] px-4 sm:px-6 lg:px-8 py-16 md:py-14 mt-16 md:mt-24 relative overflow-hidden"
      data-scroll
      data-scroll-speed="0.5"
      style={{ y: backgroundY }}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={containerVariants}
    >
      {/* Animated background elements */}
      <motion.div
        className="absolute inset-0 opacity-10"
        animate={{
          backgroundPosition: ["0% 0%", "100% 100%"],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          repeatType: "reverse",
        }}
        style={{
          backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.1) 1px, transparent 1px)",
          backgroundSize: "50px 50px",
        }}
      />

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div 
          className="text-center mb-12 md:mb-16"
          style={{ y: headerY }}
          data-scroll
          data-scroll-speed="0.3"
        >
          <motion.p 
            className="text-sm md:text-base font-bold uppercase text-global-5 mb-4 md:mb-6 tracking-wider"
            variants={subtitleVariants}
            whileHover={{ 
              scale: 1.05,
              letterSpacing: "0.15em",
              transition: { duration: 0.3 }
            }}
          >
            Past Glimpse
          </motion.p>
          <motion.h2 
            className="text-3xl md:text-5xl lg:text-6xl font-normal text-global-5 leading-tight"
            variants={headerVariants}
            whileHover={{ 
              scale: 1.02,
              transition: { duration: 0.3 }
            }}
          >
            Explore our Past Event Glimpse
          </motion.h2>
        </motion.div>

        {/* Scrollable Image Gallery */}
        <motion.div 
          className="relative mb-4 md:mb-4 py-6 overflow-hidden"
          variants={galleryVariants}
          data-scroll
          data-scroll-speed="0.4"
          whileHover={{ scale: 1.01 }}
          transition={{ duration: 0.3 }}
        >
          <motion.div
            ref={scrollContainerRef}
            className="flex gap-3 md:gap-5 animate-scroll-left-past"
            style={{ width: 'max-content' }}
            whileHover={{ 
              animationPlayState: 'paused',
              transition: { duration: 0.3 }
            }}
          >
            {/* Repeat the gallery twice for seamless infinite scroll */}
            {[...mainGalleryImages, ...mainGalleryImages].map((image, index) => (
              <motion.div
                key={`${image.id}-${index}`}
                className="relative flex-shrink-0 overflow-hidden rounded-lg md:rounded-2xl group cursor-pointer"
                whileHover={{ 
                  scale: 1.1,
                  y: -10,
                  rotateY: 5,
                  z: 50
                }}
                whileTap={{ scale: 0.95 }}
                transition={{ 
                  duration: 0.4,
                  ease: [0.25, 0.46, 0.45, 0.94]
                }}
                style={{
                  transformStyle: "preserve-3d",
                  perspective: "1000px"
                }}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 z-10 rounded-lg md:rounded-2xl"
                  transition={{ duration: 0.3 }}
                />
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.4 }}
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    width={200}
                    height={150}
                    className="w-32 h-24 sm:w-40 sm:h-28 md:w-56 md:h-40 lg:w-64 lg:h-44 object-cover transition-all duration-400"
                  />
                </motion.div>
                {/* Hover glow effect */}
                <motion.div
                  className="absolute inset-0 bg-white/10 rounded-lg md:rounded-2xl opacity-0 group-hover:opacity-100 blur-sm"
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Bottom Video Row */}
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6"
          variants={videoGridVariants}
          data-scroll
          data-scroll-speed="0.2"
        >
          {bottomGalleryVideos.map((video, index) => (
            <motion.div
              key={video.id}
              className={`relative overflow-hidden rounded-lg md:rounded-2xl bg-global-4 group cursor-pointer ${
                index === 2 ? 'sm:col-span-2 lg:col-span-1' : ''
              }`}
              variants={videoItemVariants}
              whileHover={{ 
                scale: 1.05,
                y: -8,
                rotateX: 2,
                boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)"
              }}
              whileTap={{ scale: 0.98 }}
              transition={{ 
                duration: 0.4,
                ease: [0.25, 0.46, 0.45, 0.94]
              }}
              style={{
                transformStyle: "preserve-3d"
              }}
            >
              {/* Overlay gradient */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 z-10 rounded-lg md:rounded-2xl"
                transition={{ duration: 0.3 }}
              />
              
              {/* Glowing border effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-green-500/20 opacity-0 group-hover:opacity-100 rounded-lg md:rounded-2xl blur-sm"
                transition={{ duration: 0.4 }}
              />

              <motion.video
                src={video.src}
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-auto object-cover rounded-md md:rounded-xl relative z-5"
                aria-label={video.alt}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <source src={video.src} type="video/mp4" />
                Your browser does not support the video tag.
              </motion.video>

              {/* Floating animation for video container */}
              <motion.div
                className="absolute inset-0"
                animate={{
                  y: [0, -2, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  delay: index * 0.5,
                }}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Floating particles animation */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-white/10 rounded-full"
          style={{
            left: `${20 + i * 15}%`,
            top: `${10 + i * 10}%`,
          }}
          animate={{
            y: [-20, -40, -20],
            x: [-10, 10, -10],
            opacity: [0.3, 0.8, 0.3],
          }}
          transition={{
            duration: 6 + i,
            repeat: Infinity,
            delay: i * 0.5,
          }}
        />
      ))}
    </motion.section>
  );
};

export default PostEventHighlights;