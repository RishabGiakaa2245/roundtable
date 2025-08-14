'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence, useMotionValueEvent, useScroll } from 'framer-motion';

const Header = () => {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [hasScrolled, setHasScrolled] = useState(false);
  const { scrollY } = useScroll();

  const scrollToSection = (sectionId) => {
    if (typeof window !== 'undefined' && window.lenisScroll) {
      const section = document.getElementById(sectionId);
      if (section) {
        window.lenisScroll(section, {
          duration: 1.2,
          easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t))
        });
      }
    }
    // Fallback for when Lenis isn't ready
    else if (typeof window !== 'undefined') {
      const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ 
        block: 'start' 
      });
    }
  }
  setMenuOpen(false); // Close mobile menu after clicking
  };


  // Header visibility animation variants
  const headerVisibilityVariants = {
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.4,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    },
    hidden: {
      y: -120,
      opacity: 0,
      transition: {
        duration: 0.3,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  // Enhanced header variants with scroll state
  const headerVariants = {
    initial: { 
      opacity: 0, 
      y: -100,
      scale: 0.95
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94],
        staggerChildren: 0.1
      }
    }
  };

  const logoVariants = {
    hidden: { 
      opacity: 0, 
      x: -30,
      scale: 0.8
    },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const menuButtonVariants = {
    hidden: { 
      opacity: 0, 
      x: 30,
      scale: 0.8
    },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const navVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.4,
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const navItemVariants = {
    hidden: { 
      opacity: 0, 
      y: -10,
      scale: 0.95
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.4,
        ease: "easeOut"
      }
    }
  };

  const mobileMenuVariants = {
    hidden: {
      opacity: 0,
      y: -30,
      scale: 0.8,
      rotateX: -15,
      transformOrigin: "top center"
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      rotateX: 0,
      transformOrigin: "top center",
      transition: {
        duration: 0.5,
        ease: [0.34, 1.56, 0.64, 1],
        staggerChildren: 0.08,
        delayChildren: 0.1
      }
    },
    exit: {
      opacity: 0,
      y: -20,
      scale: 0.9,
      rotateX: 10,
      transition: {
        duration: 0.3,
        ease: "easeIn",
        staggerChildren: 0.03,
        staggerDirection: -1
      }
    }
  };

  const mobileNavItemVariants = {
    hidden: { 
      opacity: 0, 
      x: -40,
      y: 10,
      scale: 0.8,
      filter: "blur(4px)"
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      scale: 1,
      filter: "blur(0px)",
      transition: {
        duration: 0.4,
        ease: [0.25, 0.46, 0.45, 0.94],
        type: "spring",
        stiffness: 100
      }
    },
    exit: {
      opacity: 0,
      x: 40,
      y: -10,
      scale: 0.9,
      filter: "blur(2px)",
      transition: {
        duration: 0.2,
        ease: "easeIn"
      }
    }
  };

  // Hover animations
  const logoHover = {
    scale: 1.05,
    transition: {
      duration: 0.3,
      ease: "easeInOut"
    }
  };

  const menuButtonHover = {
    scale: 1.1,
    rotate: 90,
    transition: {
      duration: 0.3,
      ease: "easeInOut"
    }
  };

  const navItemHover = {
    scale: 1.05,
    y: -2,
    transition: {
      duration: 0.2,
      ease: "easeOut"
    }
  };

  const headerContainerHover = {
    y: hasScrolled ? -1 : -2,
    boxShadow: hasScrolled 
      ? "0 10px 40px rgba(0,0,0,0.15)" 
      : "0 0 120px rgba(0,0,0,0.15)",
    transition: {
      duration: 0.3,
      ease: "easeOut"
    }
  };

  return (
    <motion.header 
      className="fixed top-0 left-0 right-0 w-full z-50 bg-transparent"
      initial="initial"
      animate="visible"
      variants={headerVariants}
    >
      <motion.div
        animate={isVisible ? "visible" : "hidden"}
        variants={headerVisibilityVariants}
        className="w-full"
      >
        <motion.div className="w-full max-w-[1440px] flex justify-center mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row justify-center items-start w-full lg:w-[74%] mt-[10px] md:mt-[20px]">
            {/* Main Header Row */} 
            <motion.div 
              className={`flex flex-row justify-between items-center w-full lg:w-[72%] rounded-[14px] md:rounded-[28px] px-[20px] md:px-[40px] py-[6px] md:py-[12px] transition-all duration-300 ${
                hasScrolled 
                  ? 'bg-white/95 backdrop-blur-md shadow-[0_8px_32px_rgba(0,0,0,0.12)] border border-white/20' 
                  : 'bg-[#ffffff] shadow-[0_0_80px_rgba(0,0,0,0.10)]'
              }`}
              whileHover={headerContainerHover}
              layout
            >
            {/* Logo */}
            <motion.div
              variants={logoVariants}
              whileHover={logoHover}
              whileTap={{ scale: 0.98 }}
            >
              <Link href="/" className="w-[120px] md:w-[194px] hover:opacity-80 transition-opacity">
                <Image
                  src="/images/img_primary_without_bg.png"
                  alt="Giakaa Capital Logo"
                  width={194}
                  height={32}
                  className="w-full h-auto"
                />
              </Link>
            </motion.div>

            {/* Hamburger Menu (Mobile) */}
            <motion.button 
              className="block lg:hidden p-2" 
              aria-label="Open menu"
              onClick={() => setMenuOpen(!menuOpen)}
              variants={menuButtonVariants}
              whileHover={menuButtonHover}
              whileTap={{ scale: 0.9 }}
            >
              <motion.svg 
                className="w-6 h-6" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
                animate={menuOpen ? { rotate: 180 } : { rotate: 0 }}
                transition={{ duration: 0.3 }}
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </motion.svg>
            </motion.button>

            {/* Navigation Menu - Desktop */}
            <motion.nav 
              className="hidden lg:block"
              variants={navVariants}
            >
              <motion.div 
                className="flex flex-row gap-[24px] justify-center items-center"
                variants={navVariants}
              >
                <motion.div variants={navItemVariants} whileHover={navItemHover}>
                  <Link 
                    href="/agenda"
                    className={`text-[12px] md:text-[14px] font-poppins font-medium leading-[16px] md:leading-[21px] text-center ${
                      pathname === '/agenda' ? 'text-[#0575e6]' : 'text-[#000000]'
                    } hover:text-[#0575e6] transition-colors relative`}
                  >
                    Agenda
                    {pathname === '/agenda' && (
                      <motion.div
                        className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[#0575e6] rounded-full"
                        layoutId="activeIndicator"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3 }}
                      />
                    )}
                  </Link>
                </motion.div>

                <motion.div variants={navItemVariants} whileHover={navItemHover}>
                  <Link 
                    href="/speakers"
                    className={`text-[12px] md:text-[14px] font-poppins font-medium leading-[16px] md:leading-[21px] text-center ${
                      pathname === '/speakers' ? 'text-[#0575e6]' : 'text-[#000000]'
                    } hover:text-[#0575e6] transition-colors relative`}
                  >
                    Speakers
                    {pathname === '/speakers' && (
                      <motion.div
                        className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[#0575e6] rounded-full"
                        layoutId="activeIndicator"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3 }}
                      />
                    )}
                  </Link>
                </motion.div>

                <motion.div variants={navItemVariants} whileHover={navItemHover}>
                  <Link 
                    href="/roundtables"
                    className={`text-[12px] md:text-[14px] font-poppins font-medium leading-[16px] md:leading-[21px] text-center ${
                      pathname === '/roundtables' ? 'text-[#0575e6]' : 'text-[#000000]'
                    } hover:text-[#0575e6] transition-colors relative`}
                  >
                    Roundtables
                    {pathname === '/roundtables' && (
                      <motion.div
                        className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[#0575e6] rounded-full"
                        layoutId="activeIndicator"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3 }}
                      />
                    )}
                  </Link>
                </motion.div>

                <motion.div variants={navItemVariants} whileHover={navItemHover}>
                  <Link 
                    href="/contact"
                    className={`text-[12px] md:text-[14px] font-poppins font-medium leading-[16px] md:leading-[21px] text-center ${
                      pathname === '/contact' ? 'text-[#0575e6]' : 'text-[#000000]'
                    } hover:text-[#0575e6] transition-colors relative`}
                  >
                    Contact
                    {pathname === '/contact' && (
                      <motion.div
                        className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[#0575e6] rounded-full"
                        layoutId="activeIndicator"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3 }}
                      />
                    )}
                  </Link>
                </motion.div>
              </motion.div>
            </motion.nav>
          </motion.div>

          {/* Mobile Navigation Menu */}
          <AnimatePresence>
            {menuOpen && (
              <motion.nav
                className="block lg:hidden absolute top-full left-0 w-full bg-gradient-to-br from-white via-blue-50/30 to-purple-50/20 backdrop-blur-xl shadow-2xl z-50 mt-2 rounded-[20px] border border-white/20 overflow-hidden"
                variants={mobileMenuVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                style={{
                  boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(255, 255, 255, 0.2)"
                }}
              >
                {/* Animated Background Gradient */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-green-500/10"
                  animate={{
                    backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                  }}
                  transition={{
                    duration: 8,
                    ease: "linear",
                    repeat: Infinity,
                  }}
                  style={{
                    backgroundSize: "200% 200%",
                  }}
                />
                
                <motion.div 
                  className="relative flex flex-col gap-[8px] justify-center items-center p-6"
                  variants={mobileMenuVariants}
                >
                  <motion.div 
                    variants={mobileNavItemVariants}
                    whileHover={{ 
                      scale: 1.05, 
                      x: 8,
                      backgroundColor: "rgba(5, 117, 230, 0.1)",
                      borderRadius: "12px"
                    }}
                    whileTap={{ 
                      scale: 0.95,
                      backgroundColor: "rgba(5, 117, 230, 0.2)" 
                    }}
                    className="w-full relative group"
                  >
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-blue-500/0 to-purple-500/0 rounded-lg opacity-0 group-hover:opacity-100"
                      whileHover={{ 
                        background: "linear-gradient(90deg, rgba(5, 117, 230, 0.1) 0%, rgba(147, 51, 234, 0.1) 100%)"
                      }}
                      transition={{ duration: 0.3 }}
                    />
                    <Link 
                      href="/agenda"
                      className={`relative text-[14px] font-poppins font-medium leading-[21px] text-center ${
                        pathname === '/agenda' ? 'text-[#0575e6]' : 'text-[#333333]'
                      } hover:text-[#0575e6] transition-all duration-300 w-full block py-4 px-4 rounded-lg`}
                      onClick={() => setMenuOpen(false)}
                    >
                      <motion.span
                        whileHover={{ y: -1 }}
                        className="relative z-10 flex items-center justify-center gap-2"
                      >
                        Agenda
                      </motion.span>
                      {pathname === '/agenda' && (
                        <motion.div
                          className="absolute bottom-2 left-1/2 w-6 h-0.5 bg-[#0575e6] rounded-full"
                          initial={{ width: 0, x: "-50%" }}
                          animate={{ width: 24, x: "-50%" }}
                          layoutId="mobileActiveIndicator"
                        />
                      )}
                    </Link>
                  </motion.div>

                  <motion.div 
                    variants={mobileNavItemVariants}
                    whileHover={{ 
                      scale: 1.05, 
                      x: 8,
                      backgroundColor: "rgba(5, 117, 230, 0.1)",
                      borderRadius: "12px"
                    }}
                    whileTap={{ 
                      scale: 0.95,
                      backgroundColor: "rgba(5, 117, 230, 0.2)" 
                    }}
                    className="w-full relative group"
                  >
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-blue-500/0 to-purple-500/0 rounded-lg opacity-0 group-hover:opacity-100"
                      whileHover={{ 
                        background: "linear-gradient(90deg, rgba(5, 117, 230, 0.1) 0%, rgba(147, 51, 234, 0.1) 100%)"
                      }}
                      transition={{ duration: 0.3 }}
                    />
                    <Link 
                      href="/speakers"
                      className={`relative text-[14px] font-poppins font-medium leading-[21px] text-center ${
                        pathname === '/speakers' ? 'text-[#0575e6]' : 'text-[#333333]'
                      } hover:text-[#0575e6] transition-all duration-300 w-full block py-4 px-4 rounded-lg`}
                      onClick={() => setMenuOpen(false)}
                    >
                      <motion.span
                        whileHover={{ y: -1 }}
                        className="relative z-10 flex items-center justify-center gap-2"
                      >
                        Speakers
                      </motion.span>
                      {pathname === '/speakers' && (
                        <motion.div
                          className="absolute bottom-2 left-1/2 w-6 h-0.5 bg-[#0575e6] rounded-full"
                          initial={{ width: 0, x: "-50%" }}
                          animate={{ width: 24, x: "-50%" }}
                          layoutId="mobileActiveIndicator"
                        />
                      )}
                    </Link>
                  </motion.div>

                  <motion.div 
                    variants={mobileNavItemVariants}
                    whileHover={{ 
                      scale: 1.05, 
                      x: 8,
                      backgroundColor: "rgba(5, 117, 230, 0.1)",
                      borderRadius: "12px"
                    }}
                    whileTap={{ 
                      scale: 0.95,
                      backgroundColor: "rgba(5, 117, 230, 0.2)" 
                    }}
                    className="w-full relative group"
                  >
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-blue-500/0 to-purple-500/0 rounded-lg opacity-0 group-hover:opacity-100"
                      whileHover={{ 
                        background: "linear-gradient(90deg, rgba(5, 117, 230, 0.1) 0%, rgba(147, 51, 234, 0.1) 100%)"
                      }}
                      transition={{ duration: 0.3 }}
                    />
                    <Link 
                      href="/roundtables"
                      className={`relative text-[14px] font-poppins font-medium leading-[21px] text-center ${
                        pathname === '/roundtables' ? 'text-[#0575e6]' : 'text-[#333333]'
                      } hover:text-[#0575e6] transition-all duration-300 w-full block py-4 px-4 rounded-lg`}
                      onClick={() => setMenuOpen(false)}
                    >
                      <motion.span
                        whileHover={{ y: -1 }}
                        className="relative z-10 flex items-center justify-center gap-2"
                      >
                        Roundtables
                      </motion.span>
                      {pathname === '/roundtables' && (
                        <motion.div
                          className="absolute bottom-2 left-1/2 w-6 h-0.5 bg-[#0575e6] rounded-full"
                          initial={{ width: 0, x: "-50%" }}
                          animate={{ width: 24, x: "-50%" }}
                          layoutId="mobileActiveIndicator"
                        />
                      )}
                    </Link>
                  </motion.div>

                  <motion.div 
                    variants={mobileNavItemVariants}
                    whileHover={{ 
                      scale: 1.05, 
                      x: 8,
                      backgroundColor: "rgba(5, 117, 230, 0.1)",
                      borderRadius: "12px"
                    }}
                    whileTap={{ 
                      scale: 0.95,
                      backgroundColor: "rgba(5, 117, 230, 0.2)" 
                    }}
                    className="w-full relative group"
                  >
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-blue-500/0 to-purple-500/0 rounded-lg opacity-0 group-hover:opacity-100"
                      whileHover={{ 
                        background: "linear-gradient(90deg, rgba(5, 117, 230, 0.1) 0%, rgba(147, 51, 234, 0.1) 100%)"
                      }}
                      transition={{ duration: 0.3 }}
                    />
                    <Link 
                      href="/contact"
                      className={`relative text-[14px] font-poppins font-medium leading-[21px] text-center ${
                        pathname === '/contact' ? 'text-[#0575e6]' : 'text-[#333333]'
                      } hover:text-[#0575e6] transition-all duration-300 w-full block py-4 px-4 rounded-lg`}
                      onClick={() => setMenuOpen(false)}
                    >
                      <motion.span
                        whileHover={{ y: -1 }}
                        className="relative z-10 flex items-center justify-center gap-2"
                      >
                        Contact
                      </motion.span>
                      {pathname === '/contact' && (
                        <motion.div
                          className="absolute bottom-2 left-1/2 w-6 h-0.5 bg-[#0575e6] rounded-full"
                          initial={{ width: 0, x: "-50%" }}
                          animate={{ width: 24, x: "-50%" }}
                          layoutId="mobileActiveIndicator"
                        />
                      )}
                    </Link>
                  </motion.div>
                </motion.div>
              </motion.nav>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </motion.div>
    </motion.header>
  );
};

export default Header;