import React from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import Button from '../ui/Button';
import { generateSlug } from '@/helper/utils';

const Cards = () => {
  const router = useRouter();

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

  // Icon components - simplified
const cardsData = [
  {
    id: 1,
    imagePath: '/images/agenda/Rectangle 160911.png',
    title: 'Financial Inclusion Through Digital Payments: Reaching Bharat',
    slug: generateSlug('Financial Inclusion Through Digital Payments: Reaching Bharat'),
    description: [
      'India\'s financial inclusion journey is one of the most ambitious transformations of our time. Yet, the promise of "Digital India" will only be fulfilled when digital payments reach not just the cities, but the very heart of Bharat - its towns, villages, and underserved communities.',
      'This Executive Roundtable convenes senior policymakers, banking leaders, fintech innovators, investors, and technology architects to collaboratively explore pathways for expanding digital payment adoption across diverse socio-economic landscapes.',
      'The conversation is designed to move beyond policy discussions, toward practical frameworks, partnership models, and actionable strategies that address the realities of low-connectivity regions, cultural diversity, and trust-building in financial systems.',
      'In this session, we aim to shape an inclusion blueprint that aligns technological innovation with human-centric design, ensuring that every citizen has the tools, access, and confidence to participate in the digital economy.',
    ],
    bgColor: '#d5ceff',
    borderColor: '#5336f8',
    textColor: '#5336f8',
    buttons: [
      { icon: 'clock', text: '4:30 PM' },
      { icon: 'location', text: 'Trident Hotel, BKC, Mumbai' },
      { icon: 'calendar', text: '7 Oct. 2025' },
    ],
  },
  {
    id: 2,
    imagePath: '/images/agenda/Rectangle 160911.png',
    title: 'Fintech Valuations in 2025: Navigating Market Corrections & Realistic Pricing',
    slug: generateSlug(
      'Fintech Valuations in 2025: Navigating Market Corrections & Realistic Pricing'
    ),
    description: [
      'The fintech sector has witnessed unprecedented growth in the past decade, fuelled by capital inflows, disruptive innovation, and a rapidly expanding customer base. However, 2025 has brought a more tempered, reality-driven investment climate, marked by valuation corrections, regulatory scrutiny, and shifting investor expectations',
      ' This Executive Roundtable convenes leading investors, fintech founders, financial analysts, policymakers, and strategic advisors to critically assess the state of fintech valuations. Together, we will explore how to move from inflated pricing models towards grounded, performance-based valuation frameworks that reflect long-term sustainability.',
      "This dialogue is not about short-term market sentiment – it's about shaping a resilient, transparent, and value-driven fintech ecosystem capable of thriving in a post-hype economy.",
    ],
    bgColor: '#cfeeff',
    borderColor: '#18afff',
    textColor: '#18afff',
    buttons: [
      { icon: 'clock', text: '6:30 PM' },
      { icon: 'location', text: 'Trident Hotel, BKC, Mumbai' },
      { icon: 'calendar', text: '7 Oct. 2025' },
    ],
  },
  {
    id: 3,
    imagePath: '/images/agenda/Rectangle 160911.png',
    title: "India Stack Opportunities: Building on UPI's $990B Market Potential",
    slug: generateSlug("India Stack Opportunities: Building on UPI's $990B Market Potential"),
    description: [
      'The success of UPI has positioned India as a global benchmark for digital payments – with transactions exceeding $990 billion annually and reshaping how individuals, businesses, and governments exchange value. Yet UPI is just the beginning.',
      'The India Stack – a unified, open, and interoperable set of APIs including Aadhaar, e-KYC, e-Sign, DigiLocker, and Account Aggregator – is unlocking entirely new possibilities for digital identity, seamless onboarding, credit access, e-governance, and cross-border innovations.',
      "This Executive Roundtable brings together policy leaders, fintech founders, infrastructure architects, global investors, and ecosystem enablers to explore how India can fully capitalize on the India Stack's potential – scaling from a payments revolution to a complete digital economy transformation.",
      'The discussion will focus on moving from infrastructure availability to mass-scale adoption, ensuring that the India Stack fuels innovation across finance, commerce, health, education, and beyond.',
    ],
    bgColor: '#ffc4c4',
    borderColor: '#ff5b5b',
    textColor: '#ff5b5b',
    buttons: [
      { icon: 'clock', text: '4:00 PM' },
      { icon: 'location', text: 'Trident Hotel, BKC, Mumbai' },
      { icon: 'calendar', text: '8 Oct. 2025' },
    ],
  },
  {
    id: 4,
    imagePath: '/images/agenda/Rectangle 160911.png',
    title: 'Bank-Fintech Partnerships: Creating Win-Win Collaboration Models',
    slug: generateSlug('Bank-Fintech Partnerships: Creating Win-Win Collaboration Models'),
    description: [
      "The convergence of traditional banking institutions and innovative fintech companies is one of the most transformative forces in today's financial sector. Banks bring trust, regulatory expertise, and deep customer bases. Fintechs bring agility, cutting-edge technology, and the ability to deliver seamless digital experiences.",
      'When these strengths combine effectively, they can unlock new products, expanded market reach, and improved financial inclusion – while maintaining compliance and customer trust.',
      'However, these partnerships face challenges: misaligned priorities, differing risk appetites, integration complexities, and evolving regulatory landscapes. This Executive Roundtable will convene top bank executives, fintech founders, regulators, and investors to develop collaboration models that are not only innovative, but also sustainable and mutually beneficial.',
    ],
    bgColor: '#ffe2cb',
    borderColor: '#ff7d1b',
    textColor: '#ff7d1b',
    buttons: [
      { icon: 'clock', text: '6:30 PM' },
      { icon: 'location', text: 'Trident Hotel, BKC, Mumbai' },
      { icon: 'calendar', text: '8 Oct. 2025' },
    ],
  },
  {
    id: 5,
    imagePath: '/images/agenda/Rectangle 160911.png',
    title: "Building India's Sustainable Digital Financial Ecosystem 2030: A Multi-Stakeholder Blueprint for Inclusive Growth",
    slug: generateSlug("Building India's Sustainable Digital Financial Ecosystem 2030: A Multi-Stakeholder Blueprint for Inclusive Growth"),
    description: [
      "India stands at the threshold of a decade that will define its leadership in digital finance, sustainable innovation, and equitable economic growth. By 2030, the nation's financial ecosystem will need to be digitally advanced, climate-resilient, and socially inclusive – serving urban, rural, and underserved populations with equal efficiency.",
      'The vision for this roundtable is to convene public and private sector leaders, regulators, global development institutions, technology innovators, and sustainability experts to co-create a shared blueprint for building an ecosystem that thrives on responsible innovation, environmental stewardship, and inclusive growth.',
      "This is not a policy talk or a tech showcase. It is a working dialogue aimed at aligning India's growth trajectory with global sustainability benchmarks while leveraging its homegrown digital public infrastructure as a competitive advantage.",
    ],
    bgColor: '#b9dbff',
    borderColor: '#0575e6',
    textColor: '#0575e6',
    buttons: [
      { icon: 'clock', text: '4:00 PM' },
      { icon: 'location', text: 'Trident Hotel, BKC, Mumbai' },
      { icon: 'calendar', text: '9 Oct. 2025' },
    ],
  },
  {
    id: 6,
    imagePath: '/images/agenda/Rectangle 160911.png',
    title: "Asset Allocators, PE, Family Offices & Institutional Investors Shaping India's Fintech Future",
    slug: generateSlug(
      "Asset Allocators, PE, Family Offices & Institutional Investors Shaping India's Fintech Future"
    ),
    description: [
      "India's fintech sector has matured from being innovation-led to becoming investment-driven. As the ecosystem scales, the nature and direction of capital inflows will be a key determinant of its long-term sustainability, global competitiveness, and governance standards.",
      ' Private equity firms, family offices, institutional investors, and sovereign funds are no longer just funding the future – they are actively shaping market priorities, influencing regulatory direction, and determining the pace of consolidation in fintech.',
      'This closed-door roundtable is designed to bring together the capital allocators and ecosystem leaders who will collectively define how investment strategies, risk appetites, and exit horizons will shape the next decade of fintech in India. The dialogue will focus not just on returns, but on responsible growth, financial inclusion, and ecosystem resilience.',
    ],
    bgColor: '#cdffe1',
    borderColor: '#00ca00',
    textColor: '#00ca00',
    buttons: [
      { icon: 'clock', text: '6:30 PM' },
      { icon: 'location', text: 'Trident Hotel, BKC, Mumbai' },
      { icon: 'calendar', text: '9 Oct. 2025' },
    ],
  },
];

  // Creative but performance-optimized animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 60,
      scale: 0.95,
      rotateX: 15,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      rotateX: 0,
      transition: {
        duration: 0.7,
        ease: [0.16, 1, 0.3, 1],
        type: 'spring',
        stiffness: 100,
        damping: 15,
      },
    },
  };

  const imageVariants = {
    hidden: { scale: 1.1, opacity: 0, rotateY: -10 },
    visible: {
      scale: 1,
      opacity: 1,
      rotateY: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
    },
  };

  const contentVariants = {
    hidden: { x: 30, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] },
    },
  };

  // Single Card Component - heavily optimized
  const EventCard = ({ cardData, index }) => {
    return (
      <motion.div
        className="flex flex-col lg:flex-row justify-center gap-[1px] items-stretch w-full"
        variants={cardVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1, margin: '0px 0px -50px 0px' }}
      >
        {/* Image Section - creative entrance with hover effects */}
        <motion.div
          className="w-full lg:w-[30%] flex-shrink-0 rounded-2xl sm:rounded-3xl overflow-hidden relative group"
          variants={imageVariants}
          whileHover={{
            scale: 1.03,
            rotateY: 5,
            transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] },
          }}
          style={{ perspective: '1000px' }}
        >
          <motion.div
            className="relative h-full overflow-hidden rounded-2xl sm:rounded-3xl"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <motion.img
              src={cardData.imagePath}
              alt={cardData.title}
              className="w-full h-[330px] sm:h-full border-2 border-[#cacac9] rounded-2xl sm:rounded-3xl object-cover"
              loading="lazy"
              initial={{ scale: 1.2 }}
              animate={{ scale: 1 }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ scale: 1.1 }}
            />

            {/* Creative overlay effects */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100"
              transition={{ duration: 0.3 }}
            />

            {/* Animated corner accent */}
            <motion.div
              className="absolute top-4 right-4 w-12 h-12 rounded-full opacity-0 group-hover:opacity-100"
              style={{
                background: `linear-gradient(45deg, ${cardData.borderColor}, ${cardData.borderColor}80)`,
              }}
              initial={{ scale: 0, rotate: 0 }}
              whileHover={{
                scale: 1,
                rotate: 360,
                transition: { duration: 0.5, ease: 'backOut' },
              }}
            />

            {/* Shimmer effect */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 opacity-0 group-hover:opacity-100"
              initial={{ x: '-100%' }}
              whileHover={{
                x: '200%',
                transition: { duration: 0.8, ease: 'easeInOut' },
              }}
            />
          </motion.div>
        </motion.div>

        {/* Content Section - creative entrance with enhanced hover */}
        <motion.div
          className="w-full lg:w-[70%] lg:h-auto flex-shrink-0"
          variants={contentVariants}
        >
          <motion.div
            className="h-fit rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-10 relative overflow-hidden group"
            style={{
              backgroundColor: cardData.bgColor,
              borderColor: cardData.borderColor,
            }}
            whileHover={{
              scale: 1.02,
              y: -8,
              boxShadow: `0 25px 50px -12px ${cardData.borderColor}40, 0 0 0 1px ${cardData.borderColor}30`,
              transition: { duration: 0.3, ease: [0.16, 1, 0.3, 1] },
            }}
          >
            {/* Animated background pattern */}
            <motion.div
              className="absolute inset-0 opacity-0 group-hover:opacity-10"
              style={{
                background: `radial-gradient(circle at 20% 80%, ${cardData.borderColor}, transparent 50%),
                           radial-gradient(circle at 80% 20%, ${cardData.borderColor}, transparent 50%)`,
              }}
              transition={{ duration: 0.5 }}
            />

            {/* Border glow on hover */}
            <motion.div
              className="absolute inset-0 rounded-2xl sm:rounded-3xl border-2 opacity-0 group-hover:opacity-100 pointer-events-none"
              style={{
                borderColor: cardData.borderColor,
                boxShadow: `inset 0 0 20px ${cardData.borderColor}20`,
              }}
              transition={{ duration: 0.3 }}
            />

            <div className="flex flex-col justify-between h-full gap-6 sm:gap-8 relative z-10">
              {/* Title and Description with stagger animation */}
              <div className="flex flex-col gap-4 sm:gap-6">
                <motion.h2
                  className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-semibold leading-tight text-black group-hover:text-opacity-90 transition-colors duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  viewport={{ once: true, amount: 0.1 }}
                >
                  {cardData.title.split(' ').map((word, wordIndex) => (
                    <motion.span
                      key={wordIndex}
                      className="inline-block mr-2"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{
                        duration: 0.4,
                        delay: 0.2 + wordIndex * 0.05,
                        ease: [0.16, 1, 0.3, 1],
                      }}
                      whileHover={{
                        y: -2,
                        color: cardData.borderColor,
                        transition: { duration: 0.2 },
                      }}
                      viewport={{ once: true, amount: 0.1 }}
                    >
                      {word}
                    </motion.span>
                  ))}
                </motion.h2>
                <div className='flex flex-col gap-0'>
                  {cardData.description.slice(0, 2).map((paragraph, index) => (
                  <motion.p
                    key={index}
                    className="text-[12px] sm:text-[12px] lg:text-[12px] font-normal leading-relaxed text-black opacity-75 group-hover:opacity-85 mb-4 last:mb-0"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 0.75, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                    viewport={{ once: true, amount: 0.1 }}
                    style={{ willChange: 'transform' }}
                  >
                    {paragraph}
                  </motion.p>
                ))}
                </div>

                
              </div>

              {/* Buttons Section with creative animations */}
              <motion.div
                className="flex flex-col gap-4 sm:gap-6"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true, amount: 0.1 }}
              >
                {/* Info Buttons with enhanced hover effects */}
                <motion.div
                  className="flex flex-col sm:flex-row gap-3 sm:gap-4"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ staggerChildren: 0.1, delay: 0.5 }}
                  viewport={{ once: true, amount: 0.1 }}
                >
                  {cardData.buttons.map((btn, btnIndex) => {
                    const IconComponent = iconComponents[btn.icon];

                    return (
                      <motion.button
                        key={btn.icon}
                        className="group relative flex items-center gap-3 px-4 sm:px-6 py-3 sm:py-4 border-2 rounded-2xl font-medium text-sm sm:text-base backdrop-blur-sm overflow-hidden"
                        style={{
                          backgroundColor: `${cardData.bgColor}80`,
                          color: cardData.textColor,
                          borderColor: `${cardData.borderColor}40`,
                        }}
                        initial={{ opacity: 0, x: -20, scale: 0.8 }}
                        whileInView={{ opacity: 1, x: 0, scale: 1 }}
                        transition={{
                          duration: 0.5,
                          delay: 0.6 + btnIndex * 0.1,
                          type: 'spring',
                          stiffness: 200,
                          damping: 20,
                        }}
                        whileHover={{
                          scale: 1.05,
                          y: -4,
                          borderColor: cardData.borderColor,
                          backgroundColor: `${cardData.borderColor}15`,
                          boxShadow: `0 8px 25px ${cardData.borderColor}30`,
                          transition: { duration: 0.2, ease: [0.16, 1, 0.3, 1] },
                        }}
                        whileTap={{ scale: 0.95 }}
                        viewport={{ once: true, amount: 0.1 }}
                      >
                        {/* Gradient background on hover */}
                        <motion.div
                          className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100"
                          style={{
                            background: `linear-gradient(135deg, ${cardData.borderColor}10, ${cardData.borderColor}20)`,
                          }}
                          transition={{ duration: 0.3 }}
                        />

                        {/* Sliding highlight effect */}
                        <motion.div
                          className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100"
                          style={{
                            background: `linear-gradient(45deg, transparent 40%, ${cardData.borderColor}30 50%, transparent 60%)`,
                          }}
                          initial={{ x: '-100%' }}
                          whileHover={{
                            x: '100%',
                            transition: { duration: 0.6, ease: 'easeInOut' },
                          }}
                        />

                        <motion.div className="flex items-center gap-3 relative z-10">
                          <motion.div
                            whileHover={{
                              scale: 1.2,
                              rotate: btn.icon === 'clock' ? 180 : 0,
                              y: btn.icon === 'location' ? -2 : 0,
                            }}
                            transition={{ duration: 0.3 }}
                          >
                            <IconComponent />
                          </motion.div>
                          <motion.span
                            whileHover={{
                              letterSpacing: '0.02em',
                              transition: { duration: 0.2 },
                            }}
                          >
                            {btn.text}
                          </motion.span>
                        </motion.div>
                      </motion.button>
                    );
                  })}
                </motion.div>

                {/* CTA Button with magnetic effect */}
                <motion.div
                  initial={{ opacity: 0, y: 20, scale: 0.9 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{
                    duration: 0.5,
                    delay: 0.9,
                    type: 'spring',
                    stiffness: 150,
                    damping: 15,
                  }}

                  whileTap={{ scale: 0.95 }}
                  viewport={{ once: true, amount: 0.1 }}
                >
                  <Button
                    onClick={() => router.push(`/overview/${cardData.slug}`)}
                    variants="primary"
                    className="w-fit relative overflow-hidden group"
                  >
                    <motion.span
                      className="relative z-10"
                      whileHover={{ x: 2 }}
                      transition={{ duration: 0.2 }}
                    >
                      Learn More
                    </motion.span>

                    {/* Animated background shimmer */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/25 to-transparent opacity-0 group-hover:opacity-100"
                      initial={{ x: '-100%' }}
                      whileHover={{
                        x: '100%',
                        transition: { duration: 0.6, ease: 'easeInOut' },
                      }}
                    />
                  </Button>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    );
  };

  return (
    <div className="relative w-full px-4 sm:px-6 lg:px-8 my-16 sm:my-20 lg:my-24 overflow-hidden py-5 sm:py-10">
      {/* Creative background elements */}
      <motion.div className="absolute inset-0 pointer-events-none">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-gradient-to-br from-blue-400/5 to-purple-400/5"
            style={{
              width: `${80 + i * 40}px`,
              height: `${80 + i * 40}px`,
              left: `${10 + i * 20}%`,
              top: `${20 + i * 15}%`,
            }}
            animate={{
              y: [0, -30, 0],
              x: [0, 20, 0],
              scale: [1, 1.1, 1],
              opacity: [0.3, 0.1, 0.3],
            }}
            transition={{
              duration: 8 + i * 2,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: i * 1.5,
            }}
          />
        ))}
      </motion.div>
      <motion.div
        className="max-w-[1280px] mx-auto relative z-10"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.05, margin: '0px 0px -100px 0px' }}
      >
        <div className="flex flex-col gap-16 sm:gap-20 lg:gap-24">
          {cardsData.map((cardData, index) => (
            <EventCard key={cardData.id} cardData={cardData} index={index} />
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Cards;
