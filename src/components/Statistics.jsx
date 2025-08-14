import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import Button from './ui/Button'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const Statistics = ({onExploreMore}) => {
  // Refs for counting animation
  const statsRef = useRef(null)
  const isInView = useInView(statsRef, { once: true, amount: 0.5 })
  
  // State for counting numbers
  const [expertVoices, setExpertVoices] = useState(0)
  const [disruptiveIdeas, setDisruptiveIdeas] = useState(0)
  const [intensiveHours, setIntensiveHours] = useState(0)

  // Counting animation effect
  useEffect(() => {
    if (isInView) {
      // Expert Voices counting to 70
      const expertTimer = setInterval(() => {
        setExpertVoices(prev => {
          if (prev < 70) return prev + 1
          clearInterval(expertTimer)
          return 70
        })
      }, 30)

      // Disruptive Ideas counting to 12
      const ideasTimer = setInterval(() => {
        setDisruptiveIdeas(prev => {
          if (prev < 12) return prev + 1
          clearInterval(ideasTimer)
          return 12
        })
      }, 100)

      // Intensive Hours counting to 12
      const hoursTimer = setInterval(() => {
        setIntensiveHours(prev => {
          if (prev < 12) return prev + 1
          clearInterval(hoursTimer)
          return 12
        })
      }, 100)

      return () => {
        clearInterval(expertTimer)
        clearInterval(ideasTimer)
        clearInterval(hoursTimer)
      }
    }
  }, [isInView])
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      }
    }
  }

  const itemVariants = {
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
        duration: 0.6,
        ease: "easeOut"
      }
    }
  }

  const statsBarVariants = {
    hidden: { 
      opacity: 0, 
      y: -50,
      backgroundPosition: "0% 50%"
    },
    visible: {
      opacity: 1,
      y: 0,
      backgroundPosition: "100% 50%",
      transition: {
        duration: 0.8,
        ease: "easeOut",
        backgroundPosition: {
          duration: 3,
          repeat: Infinity,
          repeatType: "reverse"
        }
      }
    }
  }

  const numberCountVariants = {
    hidden: { scale: 0 },
    visible: {
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 10,
        delay: 0.5
      }
    }
  }

  const textSlideVariants = {
    hidden: { 
      opacity: 0,
      x: -30
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        delay: 0.3
      }
    }
  }

  const imageFloatVariants = {
    initial: {
      y: 0,
      rotate: 0
    },
    animate: {
      y: [-5, 5, -5],
      rotate: [0, 1, 0, -1, 0],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  }

  return (
    <>
      <section className="w-full px-4 sm:px-6 lg:px-8 mt-[60px] md:mt-[120px]">
        <motion.div 
          className="w-full max-w-[1440px] mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* Main Grid Container - 4 columns, 5 rows on desktop */}
          <div className="grid grid-cols-3 grid-rows-7 sm:grid-rows-5 md:grid-cols-4 row-start-1 md:grid-rows-5 gap-[10px] md:gap-[20px] max-h-[780px]">
            
            {/* Statistics Bar - Full width, spans all 4 columns */}
            <motion.div 
              ref={statsRef}
              className="col-span-3 md:col-span-3 row-span-1 bg-[linear-gradient(129deg,#0575e6_0%,#00f260_50%,#5336f8_100%)] rounded-[10px] md:rounded-[20px] px-[14px] md:px-[28px] py-[14px] md:py-[28px]"
              variants={statsBarVariants}
              whileHover={{ 
                scale: 1.02,
                boxShadow: "0 20px 40px rgba(5, 117, 230, 0.3)",
                transition: { duration: 0.3 }
              }}
              style={{
                backgroundSize: "200% 200%",
              }}
            >
              <div className="flex flex-row px- justify-center items-center w-full">
                {/* Expert Voices */}
                <motion.div 
                  className="flex flex-row justify-start items-center w-full sm:w-[22%]"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  <motion.p 
                    className="text-[22px] md:text-[64px] font-bold leading-[42px] md:leading-[84px] text-center uppercase text-[#ffffff]"
                    variants={numberCountVariants}
                    whileHover={{ 
                      scale: 1.1,
                      textShadow: "0 0 20px rgba(255,255,255,0.8)"
                    }}
                  >
                    {expertVoices}+
                  </motion.p>
                  <motion.p 
                    className="text-[12px] md:text-[16px] font-semibold leading-[15px] md:leading-[20px] text-left text-[#ffffff] ml-[6px] md:ml-[12px] w-[32%]"
                    variants={textSlideVariants}
                  >
                    Expert Voices
                  </motion.p>
                </motion.div>
                {/* Disruptive Ideas */}
                <motion.div 
                  className="flex flex-row gap-[6px] md:gap-[12px] justify-center items-center w-full sm:w-auto px-[25px] md:px-[50px]"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  <motion.p 
                    className="text-[22px] md:text-[64px] font-bold leading-[42px] md:leading-[84px] text-center uppercase text-[#ffffff]"
                    variants={numberCountVariants}
                    whileHover={{ 
                      scale: 1.1,
                      textShadow: "0 0 20px rgba(255,255,255,0.8)"
                    }}
                  >
                    {disruptiveIdeas}
                  </motion.p>
                  <motion.p 
                    className="text-[12px] md:text-[16px] font-semibold leading-[15px] md:leading-[20px] text-left text-[#ffffff] w-[32%]"
                    variants={textSlideVariants}
                  >
                    Disruptive Ideas
                  </motion.p>
                </motion.div>
                {/* Intensive Hours */}
                <motion.div 
                  className="flex flex-row gap-[6px] md:gap-[12px] justify-center items-center w-full sm:w-auto px-[25px] md:px-[50px]"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  <motion.p 
                    className="text-[22px] md:text-[64px] font-bold leading-[42px] md:leading-[84px] text-center uppercase text-[#ffffff]"
                    variants={numberCountVariants}
                    whileHover={{ 
                      scale: 1.1,
                      textShadow: "0 0 20px rgba(255,255,255,0.8)"
                    }}
                  >
                    {intensiveHours}
                  </motion.p>
                  <motion.p 
                    className="text-[12px] md:text-[16px] font-semibold leading-[15px] md:leading-[20px] text-left text-[#ffffff] w-[32%]"
                    variants={textSlideVariants}
                  >
                    Intensive Hours
                  </motion.p>
                </motion.div>
              </div>
            </motion.div>

            {/* Unite Transform Card - Spans 2 columns, 4 rows */}
            <motion.div 
              className="col-span-2 md:col-span-2 row-span-4 row-start-2 relative bg-[linear-gradient(135deg,#0575e6_0%,#18afff_100%)] rounded-[10px] md:rounded-[20px] overflow-hidden"
              variants={itemVariants}
              whileHover={{ 
                scale: 1.03,
                boxShadow: "0 25px 50px rgba(5, 117, 230, 0.4)",
                transition: { duration: 0.3 }
              }}
            >
              <motion.div 
                className="absolute bottom-[16px] md:bottom-[32px] right-[18px] md:right-[36px] z-10"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.button 
                onClick={onExploreMore}
                  className="bg-[#ffffff] text-[#000000] rounded-[11px] md:rounded-[22px] px-[12px] md:px-[24px] py-[5px] md:py-[10px] text-[12px] md:text-[16px] font-bold leading-[16px] md:leading-[21px]"
                  whileHover={{
                    boxShadow: "0 8px 25px rgba(0,0,0,0.2)",
                    y: -2
                  }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  Explore
                </motion.button>
              </motion.div>
              <motion.div 
                className="absolute top-[18px] md:top-[36px] pl-[18px] md:pl-[36px] flex flex-col justify-start items-start w-[60%]"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <motion.div 
                  className="w-full text-[30px] md:text-[78px] font-medium leading-[31px] md:leading-[92px] text-left uppercase text-[#ffffff]"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                  viewport={{ once: true }}
                >
                  <motion.span 
                    className="font-medium mr-4"
                    whileHover={{ scale: 0.9 }}
                  >
                    Unite
                  </motion.span>
                  <motion.span 
                    className="font-[100] italic"
                    whileHover={{ scale: 0.9 }}
                  >
                    Inspire
                  </motion.span>
                  <motion.span 
                    className="font-medium block border-b-[1px] border-white pb-6"
                    whileHover={{ scale: 0.9 }}
                  >
                    Transform
                  </motion.span>
                </motion.div>
                <div className="flex flex-row justify-start items-start w-full -mt-[43px] md:-mt-[86px]">
                  <motion.p 
                    className="text-[10px] md:text-[16px] font-normal leading-[15px] md:leading-[20px] text-left text-[#ffffff] sm:w-[100%] mt-[63px] md:mt-[126px] z-20"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.7 }}
                    viewport={{ once: true }}
                  >
                    Our event is dedicated to driving bold conversations that shape the future of innovation.
                  </motion.p>
                </div>
              </motion.div>
              <motion.div 
                className="absolute bottom-0 w-full md:w-full self-center"
                variants={imageFloatVariants}
                initial="initial"
                animate="animate"
              >
                <Image
                  src="/images/33034375 3.png"
                  alt="Hero Background"
                  width={372}
                  height={462} 
                  className="w-full h-auto rounded-[10px] md:rounded-[20px]"
                />
              </motion.div>
            </motion.div>

            {/* Join Us Card - Spans 1 column, 2 rows */}
            <motion.div 
              className="col-span-1 md:col-span-1 row-span-4 row-start-2 flex flex-col gap-[2px] md:gap-[4px] justify-start items-center w-full bg-[#000000] rounded-[10px] md:rounded-[20px] p-4 md:p-0 overflow-hidden"
              variants={itemVariants}
              whileHover={{ 
                scale: 1.02,
                boxShadow: "0 20px 40px rgba(0,0,0,0.5)"
              }}
            >
              <motion.p 
                className="text-[8px] md:text-[16px] font-normal leading-[10px] md:leading-[20px] text-left text-[#ffb11b] w-[100%] sm:w-[80%] mt-[16px] md:mt-[32px]"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <motion.span 
                  className="font-bold"
                  whileHover={{ scale: 1.1, display: "inline-block" }}
                >
                  Join us
                </motion.span>
                <span className="font-light text-white">
                  {' '}
                  as we create connections, share insights, and empower the next era of progress.
                </span>
                <motion.div 
                  className="w-[33px] md:w-[66px] h-[1px] bg-[#ffb11b] mb-[2px] md:mb-[4px] self-start my-[12px] md:my-[24px]"
                  initial={{ width: 0 }}
                  whileInView={{ width: "33px" }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  viewport={{ once: true }}
                ></motion.div>
              </motion.p>
              <motion.div 
                className="relative w-full h-[80%]"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <Image
                  src="/images/img_rectangle_160872.png"
                  alt="Event Image"
                  width={320}
                  height={480}
                  className="w-full h-full object-cover rounded-b-[10px] md:rounded-b-[20px]"
                />
                <motion.div 
                  className="absolute top-0 left-0 w-full h-[27px] md:h-[54px] bg-[linear-gradient(180deg,#000000_0%,#00000000_100%)] flex flex-row justify-start items-center px-[12px] md:px-[24px] py-[12px] md:py-[24px]"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.8 }}
                  viewport={{ once: true }}
                >
                </motion.div>
              </motion.div>
            </motion.div>

            {/* Right Side Meeting Images */}
            <motion.div 
              className="col-span-1 row-span-2 col-start-1 rounded-[10px] md:rounded-[20px] sm:col-start-4 row-start-6 sm:row-start-1"
              variants={itemVariants}
              whileHover={{ 
                scale: 1.05,
                zIndex: 10,
                boxShadow: "0 15px 30px rgba(0,0,0,0.3)"
              }}
              transition={{ duration: 0.3 }}
            >
              <Image
                src="/images/userFlow.png"
                alt="Meeting Room 1"
                width={320}
                height={280}
                className="w-full h-full object-cover rounded-[10px] md:rounded-[20px]"
              />
            </motion.div>
            
            <motion.div 
              className="col-span-1 row-span-2 col-start-2 rounded-[10px] md:rounded-[20px] sm:col-start-4 row-start-6 sm:row-start-3"
              variants={itemVariants}
              whileHover={{ 
                scale: 1.05,
                zIndex: 10,
                boxShadow: "0 15px 30px rgba(0,0,0,0.3)"
              }}
              transition={{ duration: 0.3 }}
            >
              <Image
                src="/images/Rectangle 160871.png"
                alt="Meeting Room 2"
                width={320}
                height={260}
                className="w-full h-full object-cover rounded-[10px] md:rounded-[20px]"
              />
            </motion.div>
            
            <motion.div 
              className="col-span-1 row-span-2 sm:row-span-1 rounded-[10px] md:rounded-[20px] col-start-3 sm:col-start-4 row-start-6 sm:row-start-5"
              variants={itemVariants}
              whileHover={{ 
                scale: 1.05,
                zIndex: 10,
                boxShadow: "0 15px 30px rgba(0,0,0,0.3)"
              }}
              transition={{ duration: 0.3 }}
            >
              <Image
                src="/images/Rectangle 1609501.png"
                alt="Meeting Room 3"
                width={320}
                height={180}
                className="w-full h-full object-cover rounded-[10px] md:rounded-[20px]"
              />
            </motion.div>

          </div>
        </motion.div>
      </section>
    </>
  )
}

export default Statistics