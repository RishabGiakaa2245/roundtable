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
  
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const headerY = useTransform(scrollYProgress, [0, 0.5], ["0px", "-30px"]);

  // Main gallery images data
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

    let animationId;
    let isScrolling = false;
    let scrollSpeed = 0.5;

    const smoothScroll = () => {
      if (!isScrolling && container) {
        container.scrollLeft += scrollSpeed;
        
        // Reset scroll for infinite effect
        const maxScroll = container.scrollWidth / 2;
        if (container.scrollLeft >= maxScroll) {
          container.scrollLeft = 0;
        }
      }
      animationId = requestAnimationFrame(smoothScroll);
    };

    const handleMouseEnter = () => {
      isScrolling = true;
    };

    const handleMouseLeave = () => {
      isScrolling = false;
    };

    // Start animation
    animationId = requestAnimationFrame(smoothScroll);

    // Add event listeners
    container.addEventListener('mouseenter', handleMouseEnter);
    container.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
      if (container) {
        container.removeEventListener('mouseenter', handleMouseEnter);
        container.removeEventListener('mouseleave', handleMouseLeave);
      }
    };
  }, []);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.15,
        delayChildren: 0.1
      }
    }
  };

  const headerVariants = {
    hidden: { 
      opacity: 0, 
      y: 40,
      scale: 0.95
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  const subtitleVariants = {
    hidden: { 
      opacity: 0, 
      y: 20
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const galleryVariants = {
    hidden: { 
      opacity: 0,
      y: 50
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94],
        delay: 0.2
      }
    }
  };

  const videoGridVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const videoItemVariants = {
    hidden: { 
      opacity: 0, 
      y: 40,
      scale: 0.95
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  // Create duplicated images for infinite scroll
  const duplicatedImages = [...mainGalleryImages, ...mainGalleryImages];

  return (
    <section 
      ref={sectionRef}
      className="w-full bg-gradient-to-r from-blue-600 via-purple-600 to-green-400 relative overflow-hidden"
      style={{ 
        background: 'linear-gradient(90deg, #0575e6 0%, #5336f8 50%, #00f260 100%)',
      }}
    >
      <motion.div
        className="absolute inset-0"
        style={{ y: backgroundY }}
      >
        {/* Animated background pattern */}
        <div 
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.1) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
      </motion.div>

      <motion.div 
        className="relative z-10 px-4 sm:px-6 lg:px-8 py-12 md:py-16"
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={containerVariants}
      >
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <motion.div 
            className="text-center mb-8 md:mb-12"
            style={{ y: headerY }}
          >
            <motion.p 
              className="text-xs md:text-sm font-bold uppercase text-white mb-3 md:mb-4 tracking-wider opacity-90"
              variants={subtitleVariants}
              whileHover={{ 
                scale: 1.05,
                transition: { duration: 0.3 }
              }}
            >
              Past Glimpse
            </motion.p>
            <motion.h2 
              className="text-2xl md:text-4xl lg:text-5xl font-normal text-white leading-tight"
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
            className="relative mb-6 md:mb-8 overflow-hidden"
            variants={galleryVariants}
          >
            <div className="relative">
              <div
                ref={scrollContainerRef}
                className="flex gap-3 md:gap-4 py-4 overflow-x-hidden scrollbar-hide"
                style={{ 
                  scrollBehavior: 'auto',
                  WebkitOverflowScrolling: 'touch'
                }}
              >
                {duplicatedImages.map((image, index) => (
                  <motion.div
                    key={`${image.id}-${index}`}
                    className="relative flex-shrink-0 overflow-hidden rounded-lg group cursor-pointer"
                    whileHover={{ 
                      scale: 1.05,
                      y: -5,
                    }}
                    whileTap={{ scale: 0.98 }}
                    transition={{ 
                      duration: 0.3,
                      ease: "easeOut"
                    }}
                  >
                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 z-10 rounded-lg transition-opacity duration-300" />
                    
                    <div className="relative overflow-hidden rounded-lg">
                      <Image
                        src={image.src}
                        alt={image.alt}
                        width={240}
                        height={160}
                        className="w-28 h-20 sm:w-36 sm:h-24 md:w-48 md:h-32 lg:w-60 lg:h-40 object-cover transition-transform duration-300 group-hover:scale-110"
                        loading="lazy"
                      />
                    </div>

                    {/* Glow effect */}
                    <div className="absolute inset-0 bg-white/5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Bottom Video Grid */}
          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6"
            variants={videoGridVariants}
          >
            {bottomGalleryVideos.map((video, index) => (
              <motion.div
                key={video.id}
                className="relative overflow-hidden rounded-lg group cursor-pointer bg-black/20"
                variants={videoItemVariants}
                whileHover={{ 
                  scale: 1.03,
                  y: -4,
                }}
                whileTap={{ scale: 0.98 }}
                transition={{ 
                  duration: 0.3,
                  ease: "easeOut"
                }}
              >
                {/* Video overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 z-10 rounded-lg transition-opacity duration-300" />
                
                {/* Glowing border */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-green-500/10 opacity-0 group-hover:opacity-100 rounded-lg transition-opacity duration-300" />

                <div className="relative">
                  <video
                    src={video.src}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-48 md:h-56 object-cover rounded-lg"
                    style={{ aspectRatio: '16/9' }}
                  >
                    <source src={video.src} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Floating particles */}
        {[...Array(4)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white/20 rounded-full pointer-events-none"
            style={{
              left: `${15 + i * 20}%`,
              top: `${20 + i * 15}%`,
            }}
            animate={{
              y: [0, -20, 0],
              x: [0, 5, 0],
              opacity: [0.2, 0.6, 0.2],
            }}
            transition={{
              duration: 4 + i,
              repeat: Infinity,
              delay: i * 0.8,
              ease: "easeInOut"
            }}
          />
        ))}
      </motion.div>
    </section>
  );
};

export default PostEventHighlights;