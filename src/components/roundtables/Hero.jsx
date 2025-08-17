import React from 'react'
import { motion } from 'framer-motion'
import Button from '@/components/ui/Button'

const Hero = ({ onSelectOne, onContactUs }) => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      }
    }
  }

  const textVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      scale: 0.95
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
  }

  const slideInVariants = {
    hidden: { 
      opacity: 0, 
      x: -60,
      scale: 0.9
    },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        duration: 1,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  }

  const buttonVariants = {
    hidden: { 
      opacity: 0, 
      scale: 0.8,
      y: 30
    },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "backOut"
      }
    },
    hover: {
      scale: 1.05,
      y: -2,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    },
    tap: {
      scale: 0.95,
      transition: {
        duration: 0.1
      }
    }
  }

  const floatingVariants = {
    animate: {
      y: [0, -10, 0],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  }

  const sparkleVariants = {
    animate: {
      opacity: [0.4, 1, 0.4],
      scale: [0.8, 1.2, 0.8],
      rotate: [0, 180, 360],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  }

  return (
    <>
      <motion.section 
        className="w-full bg-[url('/images/agenda/img_bg_gradient_2.png')] bg-cover bg-center relative overflow-hidden"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        data-scroll
        data-scroll-speed="1"
      >
        {/* Animated background overlay */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-transparent via-white/5 to-transparent"
          animate={{
            background: [
              "linear-gradient(45deg, transparent, rgba(255,255,255,0.05), transparent)",
              "linear-gradient(135deg, transparent, rgba(255,255,255,0.1), transparent)",
              "linear-gradient(45deg, transparent, rgba(255,255,255,0.05), transparent)"
            ]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        {/* Floating particles */}
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white/30 rounded-full"
            style={{
              left: `${20 + i * 15}%`,
              top: `${30 + i * 10}%`,
            }}
            variants={sparkleVariants}
            animate="animate"
            transition={{
              delay: i * 0.5,
              duration: 2 + i * 0.5,
              repeat: Infinity
            }}
          />
        ))}

        <div className="w-full bg-[url('/images/agenda/img_image1_1.png')] bg-cover bg-center">
          <motion.div 
            className="w-full bg-[url('/images/agenda/Vector_60.png')] bg-cover bg-center"

          >
            <div className="w-full pt-[53px] pr-[28px] pb-[53px] pl-[28px] sm:pt-[79px] sm:pr-[42px] sm:pb-[79px] sm:pl-[42px] md:pt-[106px] md:pr-[56px] md:pb-[106px] md:pl-[56px]">
              <div className="flex flex-row justify-start items-end w-full">
                <motion.div 
                  className="mt-[80px] mr-[12px] ml-[12px] sm:mt-[120px] sm:mr-[18px] sm:ml-[18px] md:mt-[160px] md:mr-[24px] md:ml-[24px] flex flex-col gap-[16px] sm:gap-[24px] md:gap-[32px] justify-start items-start w-full"
                  variants={containerVariants}
                  data-scroll
                  data-scroll-speed="0.1"
                >
                  <motion.div 
                    className="flex flex-col gap-[3px] sm:gap-[4px] md:gap-[6px] justify-start items-start flex-1"
                    variants={textVariants}
                  >
                    <motion.p 
                      className="text-[8px] sm:text-[12px] md:text-[16px] font-lufga font-bold leading-[10px] sm:leading-[15px] md:leading-[21px] text-left uppercase text-[#ffffff] w-auto"
                      variants={slideInVariants}
                      whileHover={{
                        scale: 1.05,
                        letterSpacing: "0.1em",
                        transition: { duration: 0.3 }
                      }}
                      data-scroll
                      data-scroll-speed="0.3"
                    >
                      2025 Roundtables
                    </motion.p>

                    <motion.h1 
                      className="text-[24px] sm:text-[36px] md:text-[48px] font-lufga font-normal leading-[31px] sm:leading-[46px] md:leading-[62px] text-left text-[#ffffff] w-full sm:w-[46%] md:w-[60%]"
                      variants={textVariants}
                      whileHover={{
                        scale: 1.02,
                        transition: { duration: 0.3 }
                      }}
                      data-scroll
                      data-scroll-speed="0.2"
                    >
                      <motion.span
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5, duration: 0.8 }}
                      >
                        Choose your table, join the conversation
                      </motion.span>
                    </motion.h1>

                    <motion.div 
                      className="flex flex-col sm:flex-row justify-start md:items-center items-start flex-1 gap-1 sm:gap-0"
                      variants={slideInVariants}
                      data-scroll
                      data-scroll-speed="0.4"
                    >
                      <motion.p 
                        className="text-[8px] sm:text-[12px] md:text-[16px] font-lufga font-normal leading-[10px] sm:leading-[15px] md:leading-[21px] text-left text-[#ffffff] w-auto"
                        whileHover={{
                          scale: 1.05,
                          color: "#f0f0f0",
                          transition: { duration: 0.2 }
                        }}
                      >
                        7-9 October 2025
                      </motion.p>
                      <motion.p 
                        className="text-[8px] sm:text-[12px] md:text-[16px] font-lufga font-normal leading-[10px] sm:leading-[15px] md:leading-[21px] text-left text-[#ffffff] w-auto ml-0 sm:ml-[4px] md:ml-[8px]"
                        whileHover={{
                          scale: 1.05,
                          color: "#f0f0f0",
                          transition: { duration: 0.2 }
                        }}
                      >
                        Trident Hotel, BKC, Mumbai
                      </motion.p>
                    </motion.div>
                  </motion.div>

                  <motion.div
                    variants={buttonVariants}
                    whileHover="hover"
                    whileTap="tap"
                    data-scroll
                    data-scroll-speed="0.6"
                    className='mt-6'
                  >
                    <motion.div
                      variants={floatingVariants}
                      animate="animate"
                      className='flex gap-3'
                    >
                      <Button
                        onClick={onSelectOne}
                        variant="secondary" 
                        size="md"
                        className="relative overflow-hidden group"
                      >
                        <motion.div
                          className="absolute inset-0 -translate-x-full"
                          whileHover={{
                            translateX: "100%",
                            transition: { duration: 0.6 }
                          }}
                        />
                        <span className="relative z-10">Select One</span>
                      </Button>
                      <Button
                        onClick={onContactUs}
                        variant='ternary'

                        className="relative overflow-hidden group text-white "
                      >
                        <motion.div
                          className="absolute inset-0 -translate-x-full"
                          whileHover={{
                            translateX: "100%",
                            transition: { duration: 0.6 }
                          }}
                        />
                        <span className="relative z-10">Contact Us</span>
                      </Button>
                    </motion.div>
                  </motion.div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.section>
    </>
  )
}

export default Hero