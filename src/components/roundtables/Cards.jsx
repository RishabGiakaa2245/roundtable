import React from 'react';
import { motion } from 'framer-motion';
import Button from '../ui/Button';

const Cards = () => {

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
      ctaText: "Request to invite"
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
      ctaText: "Request to invite"
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
      ctaText: "Request to invite"
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
      ctaText: "Request to invite"
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
      ctaText: "Request to invite"
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
      ctaText: "Request to invite"
    }
  ];

  // Simplified animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 50
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1]
      }
    }
  };

  // Single Card Component
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
      >
        {/* Image Section */}
        <motion.div 
          className="w-full lg:w-[30%] flex-shrink-0 rounded-2xl sm:rounded-3xl overflow-hidden"
        >
          <motion.img
            src={cardData.imagePath}
            alt={cardData.title}
            className="w-full h-[280px] sm:h-[360px] lg:h-[440px] border-2 border-[#cacac9] rounded-2xl sm:rounded-3xl object-cover transition-transform duration-500 ease-out hover:scale-105"
          />
        </motion.div>

        {/* Content Section */}
        <motion.div 
          className="w-full lg:w-[70%] flex-shrink-0 transition-all duration-300 ease-out hover:shadow-xl"
          style={{
            '--shadow-color': `${cardData.borderColor}20`
          }}
        >
          <motion.div 
            className="h-[280px] sm:h-[360px] lg:h-[440px] rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-10 relative overflow-hidden transition-all duration-300 ease-out"
            style={{
              backgroundColor: cardData.bgColor,
              borderColor: cardData.borderColor,
            }}
          >
            <motion.div 
              className="flex flex-col justify-between h-full gap-6 sm:gap-8 relative z-10"
            >
              {/* Title and Description */}
              <div className="flex flex-col gap-4 sm:gap-6">
                <motion.h2 
                  className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-semibold leading-tight text-black transition-transform duration-200 ease-out hover:translate-x-1"
                >
                  {cardData.title}
                </motion.h2>
                <motion.p 
                  className="text-sm sm:text-base lg:text-lg font-normal leading-relaxed text-black opacity-75 transition-opacity duration-200 ease-out hover:opacity-90"
                >
                  {cardData.description}
                </motion.p>
              </div>

              {/* Buttons Section */}
              <div className="flex flex-col gap-4 sm:gap-6">
                {/* Info Buttons */}
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                  {cardData.buttons.map((btn, btnIndex) => {
                    const IconComponent = iconComponents[btn.icon];
                    
                    return (
                      <button
                        key={btn.icon}
                        className={`group relative flex items-center gap-3 px-4 sm:px-6 py-2 sm:py-3 border-2 rounded-xl font-medium text-sm sm:text-base transition-all duration-200 ease-out hover:scale-[1.02] hover:-translate-y-0.5 active:scale-[0.98] overflow-hidden ${
                          btnIndex === 0 ? 'min-w-fit' : ''
                        }`}
                        style={{
                          backgroundColor: cardData.bgColor,
                          color: cardData.textColor,
                          borderColor: cardData.borderColor,
                        }}
                      >
                        {/* Default state content */}
                        <div className="flex items-center gap-3 transition-opacity duration-200 ease-out group-hover:opacity-0">
                          <div className="transition-transform duration-200 ease-out group-hover:scale-110">
                            <IconComponent />
                          </div>
                          <span>{btn.text}</span>
                        </div>
                        
                        {/* Hover background */}
                        <div 
                          className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-200 ease-out"
                          style={{ backgroundColor: cardData.borderColor }}
                        />
                        
                        {/* Hover state content - white text and icons */}
                        <div className="absolute inset-0 flex items-center gap-3 px-4 sm:px-6 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-200 ease-out">
                          <div className="transition-transform duration-200 ease-out group-hover:scale-110">
                            <IconComponent />
                          </div>
                          <span>{btn.text}</span>
                        </div>
                      </button>
                    );
                  })}
                </div>

                {/* CTA Button */}
                <Button
                  onClick={handleCTAClick}
                  variants='primary'
                  className="w-fit"
                 
                >
                  <motion.span
                    whileHover={{ x: 3 }}
                    transition={{ duration: 0.2 }}
                  >
                    {cardData.ctaText}
                  </motion.span>
                </Button>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
    );
  };

  return (
    <div className="relative w-full px-4 sm:px-6 lg:px-8 my-16 sm:my-20 lg:my-24">
      <motion.div 
        className="max-w-[1280px] mx-auto"
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