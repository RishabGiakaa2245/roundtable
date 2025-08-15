import React, { useState, useEffect } from 'react';
import { ChevronDown, ChevronUp, Calendar, Mic, Users, MessageSquare, Camera, Coffee } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Form from '../ui/Form';

const MainContent = ({tempData}) => {
  const [expandedPillars, setExpandedPillars] = useState({});
  const [showFullAbout, setShowFullAbout] = useState(false);
  const [showForm, setShowForm] = useState(false);

  const togglePillar = (index) => {
    setExpandedPillars(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  const toggleAboutExpansion = () => {
    setShowFullAbout(prev => !prev);
  };

  const openForm = () => {
    setShowForm(true);
  };

  const closeForm = () => {
    setShowForm(false);
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const cardVariants = {
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
        type: "spring",
        stiffness: 100,
        damping: 12,
        duration: 0.6
      }
    }
  };

  const hoverVariants = {
    hover: {
      y: -8,
      scale: 1.02,
      boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 20
      }
    }
  };

  const iconBounceVariants = {
    hover: {
      scale: 1.2,
      rotate: [0, -10, 10, 0],
      transition: {
        duration: 0.5,
        ease: "easeInOut"
      }
    }
  };

  const pillarsVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const pillarItemVariants = {
    hidden: { 
      opacity: 0, 
      x: -30 
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12
      }
    }
  };

  const agendaItemVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12
      }
    }
  };

  const buttonVariants = {
    rest: { scale: 1 },
    hover: {
      scale: 1.05,
      boxShadow: "0 10px 20px rgba(0, 0, 0, 0.2)",
      background: "linear-gradient(45deg, #3b82f6, #10b981)",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10
      }
    },
    tap: { 
      scale: 0.95,
      transition: {
        duration: 0.1
      }
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <motion.div 
        className="max-w-7xl mx-auto flex flex-col gap-6"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* About Section */}
        <motion.div 
          className="bg-pink-100 rounded-3xl p-8 border border-pink-200"
          variants={cardVariants}
          whileHover="hover"
        >
          <div className="flex items-center mb-4">
            <motion.div 
              className="w-1 h-8 bg-pink-500 rounded-full mr-4"
              initial={{ scaleY: 0 }}
              animate={{ scaleY: 1 }}
              transition={{ delay: 0.5, duration: 0.6, ease: "easeOut" }}
            />
            <motion.h2 
              className="text-2xl font-bold text-gray-900"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
            >
              {tempData.about.title}
            </motion.h2>
          </div>
          <div className="space-y-4">
            <AnimatePresence>
              {tempData.about.paragraphs.slice(0, showFullAbout ? tempData.about.paragraphs.length : 2).map((paragraph, index) => (
                <motion.p 
                  key={index} 
                  className="text-gray-700 text-sm leading-relaxed"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 + (index * 0.1), duration: 0.4 }}
                >
                  {paragraph}
                </motion.p>
              ))}
            </AnimatePresence>
          </div>
          <motion.button 
            onClick={toggleAboutExpansion}
            className="text-blue-600 text-sm font-medium hover:underline mt-4 transition-colors duration-200"
            whileHover={{ scale: 1.05, color: "#1d4ed8" }}
            whileTap={{ scale: 0.95 }}
          >
            {showFullAbout ? 'Read less' : 'Read more'}
          </motion.button>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-6 w-full">
          
          {/* Left Column */}
          <div className="flex flex-col w-full lg:w-[65%] space-y-6">

            {/* Objective Section */}
            <motion.div 
              className="bg-blue-100 rounded-3xl p-8 border border-blue-200"
              variants={cardVariants}
              whileHover="hover"
            >
              <div className="flex items-center mb-4">
                <motion.div 
                  className="w-1 h-8 bg-blue-500 rounded-full mr-4"
                  initial={{ scaleY: 0 }}
                  whileInView={{ scaleY: 1 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  viewport={{ once: true }}
                />
                <motion.h2 
                  className="text-2xl font-bold text-gray-900"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  {tempData.objective.title}
                </motion.h2>
              </div>
              <motion.p 
                className="text-gray-700 text-sm leading-relaxed"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.4 }}
                viewport={{ once: true }}
              >
                {tempData.objective.content}
              </motion.p>
            </motion.div>

            {/* Discussion Pillars Section */}
            <motion.div 
              className="bg-yellow-100 rounded-3xl p-8 border border-yellow-200"
              variants={cardVariants}
              whileHover="hover"
            >
              <div className="flex items-center mb-6">
                <motion.div 
                  className="w-1 h-8 bg-yellow-500 rounded-full mr-4"
                  initial={{ scaleY: 0 }}
                  whileInView={{ scaleY: 1 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  viewport={{ once: true }}
                />
                <motion.h2 
                  className="text-2xl font-bold text-gray-900"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  {tempData.discussionPillars.title}
                </motion.h2>
              </div>
              <motion.div 
                className="space-y-4"
                variants={pillarsVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {tempData.discussionPillars.pillars.map((pillar, index) => (
                  <motion.div 
                    key={index} 
                    className="border-b border-yellow-200 pb-4 last:border-b-0 last:pb-0"
                    variants={pillarItemVariants}
                  >
                    <motion.button
                      onClick={() => togglePillar(index)}
                      className="flex items-center justify-between w-full text-left"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <div className="flex items-center">
                        <motion.div 
                          className="w-6 h-6 bg-yellow-500 rounded-full flex items-center justify-center mr-3"
                          whileHover={iconBounceVariants.hover}
                        >
                          <span className="text-yellow-900 text-sm font-bold">✓</span>
                        </motion.div>
                        <span className="text-gray-900 font-medium">{pillar.title}</span>
                      </div>
                      <motion.div
                        animate={{ rotate: expandedPillars[index] ? 180 : 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                      >
                        {expandedPillars[index] ? 
                          <ChevronUp className="w-5 h-5 text-gray-600" /> : 
                          <ChevronDown className="w-5 h-5 text-gray-600" />
                        }
                      </motion.div>
                    </motion.button>
                    <AnimatePresence>
                      {expandedPillars[index] && (
                        <motion.p 
                          className="text-gray-600 text-sm mt-3 ml-9 leading-relaxed"
                          initial={{ opacity: 0, height: 0, y: -10 }}
                          animate={{ opacity: 1, height: "auto", y: 0 }}
                          exit={{ opacity: 0, height: 0, y: -10 }}
                          transition={{ duration: 0.3, ease: "easeInOut" }}
                        >
                          {pillar.content}
                        </motion.p>
                      )}
                    </AnimatePresence>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            {/* Intended Outcomes Section */}
            <motion.div 
              className="bg-green-100 rounded-3xl p-8 border border-green-200"
              variants={cardVariants}
              whileHover="hover"
            >
              <div className="flex items-center mb-4">
                <motion.div 
                  className="w-1 h-8 bg-green-500 rounded-full mr-4"
                  initial={{ scaleY: 0 }}
                  whileInView={{ scaleY: 1 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  viewport={{ once: true }}
                />
                <motion.h2 
                  className="text-2xl font-bold text-gray-900"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  {tempData.intendedOutcomes.title}
                </motion.h2>
              </div>
              <motion.p 
                className="text-gray-700 text-sm mb-4 font-medium"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.4 }}
                viewport={{ once: true }}
              >
                {tempData.intendedOutcomes.subtitle}
              </motion.p>
              <ul className="space-y-2">
                {tempData.intendedOutcomes.outcomes.map((outcome, index) => (
                  <motion.li 
                    key={index} 
                    className="flex items-start"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 + (index * 0.1), duration: 0.4 }}
                    viewport={{ once: true }}
                    whileHover={{ x: 5 }}
                  >
                    <span className="text-green-600 mr-2 mt-1">•</span>
                    <span className="text-gray-700 text-sm leading-relaxed">{outcome}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Why does this matter now Section */}
            <motion.div 
              className="bg-orange-100 rounded-3xl p-8 border border-orange-200"
              variants={cardVariants}
              whileHover="hover"
            >
              <div className="flex items-center mb-4">
                <motion.div 
                  className="w-1 h-8 bg-orange-500 rounded-full mr-4"
                  initial={{ scaleY: 0 }}
                  whileInView={{ scaleY: 1 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  viewport={{ once: true }}
                />
                <motion.h2 
                  className="text-2xl font-bold text-gray-900"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  {tempData.whyNow.title}
                </motion.h2>
              </div>
              <motion.p 
                className="text-gray-700 text-sm leading-relaxed mb-4"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.4 }}
                viewport={{ once: true }}
              >
                {tempData.whyNow.content}
              </motion.p>
              <ul className="space-y-2">
                {tempData.whyNow.points.map((point, index) => (
                  <motion.li 
                    key={index} 
                    className="flex items-start"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 + (index * 0.1), duration: 0.4 }}
                    viewport={{ once: true }}
                    whileHover={{ x: 5 }}
                  >
                    <span className="text-orange-600 mr-2 mt-1">•</span>
                    <span className="text-gray-700 text-sm leading-relaxed">{point}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Who will be in the room Section */}
            <motion.div 
              className="bg-pink-100 rounded-3xl p-8 border border-pink-200"
              variants={cardVariants}
              whileHover="hover"
            >
              <div className="flex items-center mb-4">
                <motion.div 
                  className="w-1 h-8 bg-pink-500 rounded-full mr-4"
                  initial={{ scaleY: 0 }}
                  whileInView={{ scaleY: 1 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  viewport={{ once: true }}
                />
                <motion.h2 
                  className="text-2xl font-bold text-gray-900"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  {tempData.whoWillBeInRoom.title}
                </motion.h2>
              </div>
              <motion.p 
                className="text-gray-700 text-sm mb-4 font-medium"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.4 }}
                viewport={{ once: true }}
              >
                {tempData.whoWillBeInRoom.subtitle}
              </motion.p>
              <ul className="space-y-2">
                {tempData.whoWillBeInRoom.participants.map((participant, index) => (
                  <motion.li 
                    key={index} 
                    className="flex items-start"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 + (index * 0.1), duration: 0.4 }}
                    viewport={{ once: true }}
                    whileHover={{ x: 5 }}
                  >
                    <span className="text-pink-600 mr-2 mt-1">•</span>
                    <span className="text-gray-700 text-sm leading-relaxed">{participant}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Right Column */}
          <div className="flex flex-col w-full lg:w-[35%] space-y-6">
            
            {/* Agenda Section */}
            <motion.div 
              className="bg-purple-100 rounded-3xl p-8 border border-purple-200"
              variants={cardVariants}
              whileHover="hover"
            >
              <div className="flex items-center mb-6">
                <motion.div 
                  className="w-1 h-8 bg-purple-500 rounded-full mr-4"
                  initial={{ scaleY: 0 }}
                  whileInView={{ scaleY: 1 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  viewport={{ once: true }}
                />
                <motion.h2 
                  className="text-2xl font-bold text-gray-900"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  {tempData.agenda.title}
                </motion.h2>
              </div>
              <div className="space-y-8">
                {tempData.agenda.items.map((item, index) => {
                  const IconComponent = item.icon;
                  return (
                    <motion.div 
                      key={index} 
                      className="flex items-center gap-4"
                      variants={agendaItemVariants}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ scale: 1.05, x: 10 }}
                    >
                      <motion.div 
                        className="w-12 h-12 bg-purple-600 rounded-xl flex items-center justify-center flex-shrink-0"
                        whileHover={{ 
                          scale: 1.1,
                          rotate: 360,
                          transition: { duration: 0.5 }
                        }}
                      >
                        <IconComponent className="w-6 h-6 text-white" />
                      </motion.div>
                      <div className="flex-1">
                        <motion.div 
                          className="text-gray-600 text-sm font-medium mb-1"
                          initial={{ opacity: 0 }}
                          whileInView={{ opacity: 1 }}
                          transition={{ delay: 0.2 }}
                        >
                          {item.time}
                        </motion.div>
                        <motion.div 
                          className="text-purple-700 text-base font-semibold leading-tight"
                          initial={{ opacity: 0 }}
                          whileInView={{ opacity: 1 }}
                          transition={{ delay: 0.3 }}
                        >
                          {item.title}
                        </motion.div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>

            <div className="flex flex-col gap-6">
              {/* Why Attend Section */}
              <motion.div 
                className="flex-1 bg-blue-100 rounded-3xl p-8 border border-blue-200"
                variants={cardVariants}
                whileHover="hover"
              >
                <div className="flex items-center mb-6">
                  <motion.div 
                    className="w-1 h-8 bg-blue-500 rounded-full mr-4"
                    initial={{ scaleY: 0 }}
                    whileInView={{ scaleY: 1 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    viewport={{ once: true }}
                  />
                  <motion.h2 
                    className="text-2xl font-bold text-gray-900"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                  >
                    {tempData.whyAttend.title}
                  </motion.h2>
                </div>
                <ul className="space-y-3">
                  {tempData.whyAttend.points.map((point, index) => (
                    <motion.li 
                      key={index} 
                      className="flex items-start"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.2 + (index * 0.1), duration: 0.4 }}
                      viewport={{ once: true }}
                      whileHover={{ x: 5 }}
                    >
                      <span className="text-blue-600 mr-2 mt-1">•</span>
                      <span className="text-gray-700 text-sm leading-relaxed">{point}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>

              {/* Strategic Value Section */}
              <motion.div 
                className="flex-1 bg-purple-100 rounded-3xl p-8 border border-purple-200"
                variants={cardVariants}
                whileHover="hover"
              >
                <div className="flex items-center mb-6">
                  <motion.div 
                    className="w-1 h-8 bg-purple-500 rounded-full mr-4"
                    initial={{ scaleY: 0 }}
                    whileInView={{ scaleY: 1 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    viewport={{ once: true }}
                  />
                  <motion.h2 
                    className="text-2xl font-bold text-gray-900"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                  >
                    {tempData.strategicValue.title}
                  </motion.h2>
                </div>
                <ul className="space-y-3">
                  {tempData.strategicValue.values.map((value, index) => (
                    <motion.li 
                      key={index} 
                      className="flex items-start"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.2 + (index * 0.1), duration: 0.4 }}
                      viewport={{ once: true }}
                      whileHover={{ x: 5 }}
                    >
                      <span className="text-purple-600 mr-2 mt-1">•</span>
                      <span className="text-gray-700 text-sm leading-relaxed">{value}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </div>

            {/* Request Invite Button */}
            <div className="flex justify-center">
              <motion.button 
                onClick={openForm}
                className="bg-gradient-to-r w-full from-blue-500 to-green-500 text-white px-8 py-3 rounded-full font-semibold text-lg hover:shadow-lg transition-all duration-200 transform hover:scale-105"
                variants={buttonVariants}
                initial="rest"
                whileHover="hover"
                whileTap="tap"
              >
                Request an Invite
              </motion.button>
            </div>
          </div>
        </div>

        {/* Modal Form */}
        <AnimatePresence>
          {showForm && ( 
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <Form closeForm={closeForm} />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

export default MainContent;