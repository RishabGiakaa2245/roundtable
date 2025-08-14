import React from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import Button from '../ui/Button';

const Cards = () => {
  const router = useRouter();

  // Icon components map - now accepts currentColor for hover responsiveness
  const iconComponents = {
    clock: () => (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
        <polyline points="12,6 12,12 16,14" stroke="currentColor" strokeWidth="2"/>
      </svg>
    ),
    location: () => (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" stroke="currentColor" strokeWidth="2"/>
        <circle cx="12" cy="10" r="3" stroke="currentColor" strokeWidth="2"/>
      </svg>
    ),
    calendar: () => (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
        <rect x="3" y="4" width="18" height="18" rx="2" ry="2" stroke="currentColor" strokeWidth="2"/>
        <line x1="16" y1="2" x2="16" y2="6" stroke="currentColor" strokeWidth="2"/>
        <line x1="8" y1="2" x2="8" y2="6" stroke="currentColor" strokeWidth="2"/>
        <line x1="3" y1="10" x2="21" y2="10" stroke="currentColor" strokeWidth="2"/>
      </svg>
    )
  };

  const cardsData = [
    {
      id: 1,
      imagePath: "/images/agenda/Rectangle 160911.png",
      title: "Building India's Sustainable Digital Financial Ecosystem 2030",
      description: "India is on the verge of a digital financial revolution, charting a course toward a more inclusive, resilient, and environmentally conscious economy by 2030. Through cutting-edge technologies and responsible innovation, we are unlocking new opportunities for seamless access, financial empowerment, and sustainable growth.",
      bgColor: '#b9dbff',
      borderColor: '#0575e6',
      textColor: '#0575e6',
      buttons: [
        { icon: 'clock', text: '10:00 PM' },
        { icon: 'location', text: 'Mumbai, India' },
        { icon: 'calendar', text: '9 Sept. 2025' }
      ],
    },
    {
      id: 2,
      imagePath: "/images/agenda/Rectangle 160911.png",
      title: "Future of AI in Healthcare: Transforming Patient Care",
      description: "Explore how artificial intelligence is revolutionizing healthcare delivery, from predictive diagnostics to personalized treatment plans. Join us for an insightful discussion on the latest innovations and their impact on patient outcomes.",
      bgColor: '#d5ceff',
      borderColor: '#5336f8',
      textColor: '#5336f8',
      buttons: [
        { icon: 'clock', text: '2:00 PM' },
        { icon: 'location', text: 'Delhi, India' },
        { icon: 'calendar', text: '15 Sept. 2025' }
      ],
    },
    {
      id: 3,
      imagePath: "/images/agenda/Rectangle 160911.png",
      title: "Startup Innovation Summit: Next-Gen Entrepreneurs",
      description: "Connect with innovative startups and visionary entrepreneurs shaping the future. Discover breakthrough technologies, investment opportunities, and network with industry leaders in this exclusive summit.",
      bgColor: '#ffc4c4',
      borderColor: '#ff5b5b',
      textColor: '#ff5b5b',
      buttons: [
        { icon: 'clock', text: '11:00 AM' },
        { icon: 'location', text: 'Bangalore, India' },
        { icon: 'calendar', text: '22 Sept. 2025' }
      ],
    },
    {
      id: 4,
      imagePath: "/images/agenda/Rectangle 160911.png",
      title: "Sustainable Energy Solutions for Smart Cities",
      description: "Discover cutting-edge renewable energy technologies and smart grid solutions that are powering the cities of tomorrow. Learn from experts about sustainable urban development and green infrastructure.",
      bgColor: '#ffe2cb',
      borderColor: '#ff7d1b',
      textColor: '#ff7d1b',
      buttons: [
        { icon: 'clock', text: '4:30 PM' },
        { icon: 'location', text: 'Pune, India' },
        { icon: 'calendar', text: '28 Sept. 2025' }
      ],
    },
    {
      id: 5,
      imagePath: "/images/agenda/Rectangle 160911.png",
      title: "Digital Marketing Revolution: Data-Driven Strategies",
      description: "Master the art of modern digital marketing with advanced analytics, AI-powered campaigns, and customer journey optimization. Learn from industry experts about the latest trends and tools.",
      bgColor: '#cfeeff',
      borderColor: '#18afff',
      textColor: '#18afff',
      buttons: [
        { icon: 'clock', text: '1:00 PM' },
        { icon: 'location', text: 'Chennai, India' },
        { icon: 'calendar', text: '5 Oct. 2025' }
      ],
    },
    {
      id: 6,
      imagePath: "/images/agenda/Rectangle 160911.png",
      title: "Blockchain & Cryptocurrency: Future of Finance",
      description: "Dive deep into blockchain technology, cryptocurrency markets, and decentralized finance (DeFi). Understand the regulatory landscape and investment opportunities in this evolving sector.",
      bgColor: '#cdffe1',
      borderColor: '#00ca00',
      textColor: '#00ca00',
      buttons: [
        { icon: 'clock', text: '6:00 PM' },
        { icon: 'location', text: 'Hyderabad, India' },
        { icon: 'calendar', text: '12 Oct. 2025' }
      ],
    }
  ];

  // Enhanced animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 80,
      scale: 0.95
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1],
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    }
  };

  // Image animation variants
  const imageVariants = {
    initial: {
      scale: 1,
      rotateY: 0,
      z: 0
    },
    hover: {
      scale: 1.05,
      rotateY: 5,
      z: 20,
      transition: {
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1]
      }
    }
  };

  // Content card animation variants
  const contentCardVariants = {
    initial: {
      scale: 1,
      rotateX: 0,
      z: 0
    },
    hover: {
      scale: 1.02,
      rotateX: -2,
      z: 10,
      transition: {
        duration: 0.5,
        ease: [0.16, 1, 0.3, 1]
      }
    }
  };

  // Text animation variants
  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1]
      }
    }
  };

  const staggeredTextVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  // Button animation variants
  const buttonContainerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1],
        staggerChildren: 0.1
      }
    }
  };

  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 20 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.16, 1, 0.3, 1]
      }
    }
  };

  // Enhanced button animation variants
  const infoButtonVariants = {
    initial: {
      scale: 1,
      y: 0,
      rotateY: 0
    },
    hover: {
      scale: 1.08,
      y: -6,
      rotateY: 10,
      transition: {
        duration: 0.3,
        ease: [0.16, 1, 0.3, 1]
      }
    },
    tap: {
      scale: 0.95,
      y: 0,
      transition: {
        duration: 0.1
      }
    }
  };

  // Individual icon animations based on type
  const getIconAnimation = (iconType) => {
    switch (iconType) {
      case 'clock':
        return {
          initial: { rotate: 0 },
          hover: { 
            rotate: 360,
            transition: { duration: 0.8, ease: "easeInOut" }
          }
        };
      case 'location':
        return {
          initial: { y: 0, scale: 1 },
          hover: { 
            y: -3,
            scale: 1.2,
            transition: { duration: 0.3, ease: [0.16, 1, 0.3, 1] }
          }
        };
      case 'calendar':
        return {
          initial: { rotateX: 0, scale: 1 },
          hover: { 
            rotateX: 15,
            scale: 1.1,
            transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] }
          }
        };
      default:
        return {
          initial: { scale: 1 },
          hover: { scale: 1.1 }
        };
    }
  };

  // Single Card Component with enhanced animations
  const EventCard = ({ cardData, index }) => {
    const handleCTAClick = () => {
      console.log(`${cardData.ctaText} clicked for: ${cardData.title}`);
    };

    return (
      <motion.div 
        className={`flex flex-col lg:flex-row justify-center gap-[1px] items-stretch w-full`}
        variants={cardVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        style={{ perspective: '1000px' }}
      >
        {/* Image Section with 3D hover effects */}
        <motion.div 
          className="w-full lg:w-[30%] flex-shrink-0 rounded-2xl sm:rounded-3xl overflow-hidden"
          variants={imageVariants}
          initial="initial"
          whileHover="hover"
        >
          <motion.div
            className="relative overflow-hidden rounded-2xl sm:rounded-3xl"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            <motion.img
              src={cardData.imagePath}
              alt={cardData.title}
              className="w-full h-[280px] sm:h-[360px] lg:h-[440px] border-2 border-[#cacac9] rounded-2xl sm:rounded-3xl object-cover"
              initial={{ scale: 1.1, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ scale: 1.1 }}
            />
            
            {/* Animated overlay gradient */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0"
              whileHover={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            />

            {/* Floating particles effect on hover */}
            <motion.div
              className="absolute inset-0 pointer-events-none"
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              {[...Array(6)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-2 h-2 bg-white/30 rounded-full"
                  style={{
                    left: `${20 + i * 15}%`,
                    top: `${30 + (i % 3) * 20}%`
                  }}
                  animate={{
                    y: [-10, -20, -10],
                    opacity: [0.3, 0.7, 0.3],
                    scale: [1, 1.2, 1]
                  }}
                  transition={{
                    duration: 2 + i * 0.3,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: i * 0.2
                  }}
                />
              ))}
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Content Section with enhanced animations */}
        <motion.div 
          className="w-full lg:w-[70%] lg:h-auto flex-shrink-0"
          variants={contentCardVariants}
          initial="initial"
          whileHover="hover"
          style={{ perspective: '1000px' }}
        >
          <motion.div 
            className="h-[570px] sm:h-[360px] lg:h-[440px] rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-10 relative overflow-hidden transition-all duration-500 ease-out"
            style={{
              backgroundColor: cardData.bgColor,
              borderColor: cardData.borderColor,
            }}
            whileHover={{
              boxShadow: `0 25px 50px -12px ${cardData.borderColor}40, 0 0 0 1px ${cardData.borderColor}20`,
              scale: 1.01
            }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Animated background pattern */}
            <motion.div
              className="absolute inset-0 opacity-5"
              style={{
                background: `radial-gradient(circle at 20% 80%, ${cardData.borderColor} 0%, transparent 50%),
                           radial-gradient(circle at 80% 20%, ${cardData.borderColor} 0%, transparent 50%),
                           radial-gradient(circle at 40% 40%, ${cardData.borderColor} 0%, transparent 50%)`
              }}
              animate={{
                scale: [1, 1.1, 1],
                rotate: [0, 5, 0]
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />

            <motion.div 
              className="flex flex-col justify-between h-full gap-6 sm:gap-8 relative z-10"
              variants={staggeredTextVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {/* Title and Description with staggered animations */}
              <div className="flex flex-col gap-4 sm:gap-6">
                <motion.h2 
                  className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-semibold leading-tight text-black"
                  variants={textVariants}
                  whileHover={{ 
                    x: 5,
                    color: cardData.borderColor,
                    transition: { duration: 0.2 }
                  }}
                >
                  {cardData.title.split(' ').map((word, wordIndex) => (
                    <motion.span
                      key={wordIndex}
                      className="inline-block mr-2"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{
                        duration: 0.5,
                        delay: wordIndex * 0.1,
                        ease: [0.16, 1, 0.3, 1]
                      }}
                      whileHover={{ 
                        y: -2,
                        transition: { duration: 0.2 }
                      }}
                    >
                      {word}
                    </motion.span>
                  ))}
                </motion.h2>

                <motion.p 
                  className="text-sm sm:text-base lg:text-lg font-normal leading-relaxed text-black opacity-75"
                  variants={textVariants}
                  whileHover={{ 
                    opacity: 0.9,
                    x: 3,
                    transition: { duration: 0.2 }
                  }}
                >
                  {cardData.description}
                </motion.p>
              </div>

              {/* Buttons Section with enhanced animations */}
              <motion.div 
                className="flex flex-col gap-4 sm:gap-6"
                variants={buttonContainerVariants}
              >
                {/* Info Buttons with completely redesigned animations */}
                <motion.div 
                  className="flex flex-col sm:flex-row gap-3 sm:gap-4"
                  variants={staggeredTextVariants}
                >
                  {cardData.buttons.map((btn, btnIndex) => {
                    const IconComponent = iconComponents[btn.icon];
                    const iconAnimation = getIconAnimation(btn.icon);
                    
                    return (
                      <motion.button
                        key={btn.icon}
                        className={`group relative flex items-center gap-3 px-4 sm:px-6 py-3 sm:py-4 border-2 rounded-2xl font-medium text-sm sm:text-base backdrop-blur-sm overflow-hidden ${
                          btnIndex === 0 ? 'min-w-fit' : ''
                        }`}
                        style={{
                          backgroundColor: `${cardData.bgColor}80`,
                          color: cardData.textColor,
                          borderColor: `${cardData.borderColor}40`,
                          backdropFilter: 'blur(10px)',
                        }}
                        variants={infoButtonVariants}
                        initial="initial"
                        whileHover="hover"
                        whileTap="tap"
                      >
                        {/* Gradient background that appears on hover */}
                        <motion.div
                          className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100"
                          style={{
                            background: `linear-gradient(135deg, ${cardData.borderColor}15, ${cardData.borderColor}25)`
                          }}
                          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                        />
                        
                        {/* Shimmer effect on hover */}
                        <motion.div
                          className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100"
                          style={{
                            background: `linear-gradient(45deg, transparent 30%, ${cardData.borderColor}20 50%, transparent 70%)`
                          }}
                          initial={{ x: '-100%' }}
                          whileHover={{
                            x: '100%',
                            transition: { duration: 0.6, ease: "easeInOut" }
                          }}
                        />

                        {/* Content container */}
                        <motion.div 
                          className="flex items-center gap-3 relative z-10"
                          initial={{ opacity: 1 }}
                          whileHover={{ opacity: 1 }}
                        >
                          {/* Enhanced Icon Animation */}
                          <motion.div 
                            className="relative"
                            variants={iconAnimation}
                            initial="initial"
                            whileHover="hover"
                            style={{ perspective: '100px' }}
                          >
                            {/* Icon glow effect */}
                            <motion.div
                              className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100"
                              style={{
                                background: `radial-gradient(circle, ${cardData.borderColor}30, transparent)`
                              }}
                              animate={{
                                scale: [1, 1.5, 1],
                              }}
                              transition={{
                                duration: 1.5,
                                repeat: Infinity,
                                ease: "easeInOut"
                              }}
                            />
                            
                            <motion.div
                              whileHover={{
                                filter: `drop-shadow(0 0 8px ${cardData.borderColor}60)`
                              }}
                              transition={{ duration: 0.2 }}
                            >
                              <IconComponent />
                            </motion.div>
                          </motion.div>

                          {/* Enhanced Text Animation */}
                          <motion.span
                            className="font-medium"
                            whileHover={{
                              letterSpacing: '0.05em',
                              transition: { duration: 0.2 }
                            }}
                          >
                            {btn.text.split('').map((char, charIndex) => (
                              <motion.span
                                key={charIndex}
                                className="inline-block"
                                whileHover={{
                                  y: -2,
                                  transition: { 
                                    duration: 0.2, 
                                    delay: charIndex * 0.02 
                                  }
                                }}
                              >
                                {char === ' ' ? '\u00A0' : char}
                              </motion.span>
                            ))}
                          </motion.span>
                        </motion.div>

                        {/* Border glow effect */}
                        <motion.div
                          className="absolute inset-0 rounded-2xl border-2 opacity-0 group-hover:opacity-100 pointer-events-none"
                          style={{
                            borderColor: cardData.borderColor,
                            boxShadow: `0 0 20px ${cardData.borderColor}40, inset 0 0 20px ${cardData.borderColor}20`
                          }}
                          transition={{ duration: 0.3 }}
                        />

                        {/* Pulse effect on hover */}
                        <motion.div
                          className="absolute inset-0 rounded-2xl pointer-events-none"
                          style={{ backgroundColor: cardData.borderColor }}
                          initial={{ scale: 1, opacity: 0 }}
                          whileHover={{
                            scale: [1, 1.05, 1],
                            opacity: [0, 0.1, 0],
                            transition: { duration: 0.8, repeat: Infinity }
                          }}
                        />
                      </motion.button>
                    );
                  })}
                </motion.div>

                {/* CTA Button with enhanced animations */}
                <motion.div
                  variants={buttonVariants}
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Button
                    onClick={() => router.push(`/overview/${cardData.id}`)}
                    variants='primary'
                    className="w-fit relative overflow-hidden"
                  >
                    <motion.span
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.2 }}
                      className="relative z-10"
                    >
                    Request to invite
                    </motion.span>
                    
                    {/* Animated background on CTA */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                      initial={{ x: '-100%', opacity: 0 }}
                      whileHover={{ 
                        x: '100%', 
                        opacity: 1,
                        transition: { duration: 0.6, ease: "easeInOut" }
                      }}
                    />
                  </Button>
                </motion.div>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
    );
  };

  return (
    <div className="relative w-full px-4 sm:px-6 lg:px-8 my-16 sm:my-20 lg:my-24">
      {/* Background animated elements */}
      <motion.div 
        className="absolute inset-0 pointer-events-none overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
      >
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-32 h-32 rounded-full bg-gradient-to-br from-blue-400/5 to-purple-400/5"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`
            }}
            animate={{
              x: [0, 100, 0],
              y: [0, -100, 0],
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.1, 0.3]
            }}
            transition={{
              duration: 10 + i * 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.5
            }}
          />
        ))}
      </motion.div>

      <motion.div 
        className="max-w-[1280px] mx-auto relative z-10"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        <motion.div 
          className="flex flex-col gap-16 sm:gap-20 lg:gap-24"
          variants={containerVariants}
        >
          {cardsData.map((cardData, index) => (
            <EventCard 
              key={cardData.id} 
              cardData={cardData} 
              index={index} 
            />
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Cards;