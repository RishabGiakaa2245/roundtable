import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

const MainContent = ({ data }) => {
  // Default data structure for fallback
  // Use provided data or fallback to default
  const contentData = data || defaultData;

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

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.5 }
    }
  };

  const renderHighlightedText = (text, highlights) => {
    if (!highlights || highlights.length === 0) {
      return <span className="text-gray-700 text-sm leading-relaxed">{text}</span>;
    }

    let highlightedText = text;
    highlights.forEach(highlight => {
      highlightedText = highlightedText.replace(
        highlight,
        `<span class="font-semibold text-blue-700">${highlight}</span>`
      );
    });

    return (
      <span 
        className="text-gray-700 text-sm leading-relaxed"
        dangerouslySetInnerHTML={{ __html: highlightedText }}
      />
    );
  };

  return (
    <div className="w-full min-h-screen bg-gray-100 p-6">
      <div className="max-w-7xl mx-auto">
        
        {/* Main Flex Container - Row Layout */}
        <div className="flex flex-col lg:flex-row gap-6 h-auto lg:h-[800px] w-full">
          
          {/* Left Side - Contains Overview and Key Topics */}
          <div className="flex flex-col gap-6 w-full lg:w-[60%]">
            
            {/* Overview Block */}
            {contentData.overview && (
              <motion.div 
                className="bg-gradient-to-br from-blue-50 to-cyan-100 rounded-3xl p-8 shadow-sm border border-cyan-200 flex-1 h-[35%]"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <motion.h1 
                  className="text-black text-3xl font-bold mb-6"
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                >
                  {contentData.overview.title}
                </motion.h1>

                <motion.div 
                  className="space-y-4"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4, duration: 0.6 }}
                >
                  {contentData.overview.paragraphs.map((paragraph, index) => (
                    <motion.p 
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5 + (index * 0.1), duration: 0.5 }}
                    >
                      {renderHighlightedText(paragraph.text, paragraph.highlights)}
                    </motion.p>
                  ))}
                </motion.div>
              </motion.div>
            )}

            {/* Key Topics Block */}
            {contentData.keyTopics && (
              <motion.div 
                className="h-[65%] bg-gradient-to-br from-yellow-50 to-orange-100 rounded-3xl p-8 shadow-sm border border-yellow-200 flex-1"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <motion.h2 
                  className="text-black text-2xl font-bold mb-6"
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6, duration: 0.5 }}
                >
                  {contentData.keyTopics.title}
                </motion.h2>
                
                <motion.div 
                  className="space-y-4"
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                >
                  {contentData.keyTopics.topics.map((topic, index) => (
                    <motion.div 
                      key={index}
                      variants={itemVariants}
                      whileHover={{ x: 6 }}
                      className="flex items-start gap-3 cursor-pointer"
                    >
                      <motion.div 
                        className="w-5 h-5 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1 shadow-sm"
                        whileHover={{ 
                          scale: 1.1, 
                          rotate: 10
                        }}
                        transition={{ duration: 0.2 }}
                      >
                        <Check className="w-3 h-3 text-yellow-900 font-bold" strokeWidth={3} />
                      </motion.div>
                      <motion.p 
                        className="text-gray-700 text-sm leading-relaxed font-medium"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.1 }}
                      >
                        {topic}
                      </motion.p>
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>
            )}
          </div>

          {/* Right Side - Contains Agenda and Call to Action */}
          <div className="flex flex-col gap-6 w-full lg:w-[40%]">
            
            {/* Agenda Block */}
            {contentData.agenda && (
              <motion.div 
                className="h-[80%] bg-gradient-to-br from-purple-100 to-indigo-200 rounded-3xl p-8 shadow-sm border border-purple-200"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <motion.h1 
                  className="text-black text-3xl font-bold mb-6"
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4, duration: 0.5 }}
                >
                  {contentData.agenda.title}
                </motion.h1>

                <motion.div 
                  className="space-y-7"
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                >
                  {contentData.agenda.items.map((item, index) => (
                    <motion.div 
                      key={index}
                      variants={itemVariants}
                      className="flex items-center gap-4"
                    >
                      <motion.div 
                        className="w-14 h-14 bg-[#5336f8] rounded-xl flex items-center justify-center flex-shrink-0 shadow-md"
                        whileHover={{ 
                          scale: 1.05,
                          boxShadow: "0 8px 25px -8px rgba(147, 51, 234, 0.4)"
                        }}
                        transition={{ duration: 0.2 }}
                      >
                        <img 
                          src={item.icon} 
                          alt="" 
                          className="w-8 h-8 text-white"
                          onError={(e) => {
                            e.target.style.display = 'none';
                          }}
                        />
                      </motion.div>
                      
                      <motion.div className="flex-1 min-w-0">
                        <div className="text-gray-600 text-[14px] font-medium mb-1">
                          {item.time}
                        </div>
                        <div className="text-blue-700 text-[19px] font-semibold leading-tight">
                          {item.title}
                        </div>
                      </motion.div>
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>
            )}

            {/* Call to Action Block */}
            {contentData.callToAction && (
              <motion.div 
                className="h-[20%] bg-gradient-to-r from-red-400 via-pink-400 to-red-500 rounded-3xl p-8 text-center shadow-xl relative overflow-hidden flex flex-col justify-center"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                whileHover={{ 
                  scale: 1.02,
                  boxShadow: "0 20px 60px -12px rgba(239, 68, 68, 0.4)"
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 translate-x-full opacity-0 hover:opacity-100 transition-opacity duration-700"></div>
                
                <motion.h3 
                  className="text-white text-2xl font-bold mb-6 relative z-10"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.8, duration: 0.3 }}
                >
                  {contentData.callToAction.title}
                </motion.h3>
                
                <motion.button 
                  className="bg-white text-gray-800 px-8 py-3 rounded-2xl font-semibold text-base hover:bg-gray-50 transition-all duration-200 shadow-lg hover:shadow-xl relative z-10"
                  whileHover={{ 
                    scale: 1.05,
                    y: -2
                  }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1, duration: 0.3 }}
                  onClick={() => {
                    if (contentData.callToAction.onClick) {
                      contentData.callToAction.onClick();
                    } else {
                      console.log('Button clicked: ' + contentData.callToAction.buttonText);
                    }
                  }}
                >
                  {contentData.callToAction.buttonText}
                </motion.button>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

// Example usage with custom data
const ExampleUsage = () => {
const customData = {
  overview: {
    title: "Overview",
    paragraphs: [
      {
        text: "India is at the verge of a digital financial revolution. Charting a course toward a more inclusive, resilient, and environmentally conscious economy by 2030. Through cutting-edge technology, strategic partnerships, and innovative policy frameworks, we ensure seamless access, financial empowerment, and sustainable growth.",
        highlights: ["India is at the verge of a digital financial revolution.", "2030."]
      },
      {
        text: "Collaborative agenda addresses industry leaders and innovators in building a robust ecosystem built on trust, security, and green practices. Together, we're building a digital financial landscape that not only drives progress but also ensures a brighter, more sustainable future for every Indian.",
        highlights: ["Collaborative agenda addresses"]
      }
    ]
  },
  agenda: {
    title: "Agenda",
    items: [
      { time: "4:30 - 4:40 PM", title: "Registration & Networking High Tea", icon: "/images/agenda/vector.svg" },
      { time: "4:40 - 4:50 PM", title: "Opening Remarks by Giakaa Capital", icon: "/images/agenda/vector2.svg" },
      { time: "4:50 - 5:00 PM", title: "Partner Introduction", icon: "/images/agenda/vector3.svg" },
      { time: "5:00 - 5:40 PM", title: "Discussion Points", icon: "/images/agenda/vector4.svg" },
      { time: "5:40 - 5:50 PM", title: "Group Photo & Thankyou Note", icon: "/images/agenda/vector5.svg" },
      { time: "5:50 - 6:30 PM", title: "Networking & Refreshments", icon: "/images/agenda/vector6.svg" }
    ]
  },
  keyTopics: {
    title: "Key topics",
    topics: [
      "What are the main barriers to digital payment adoption in rural and semi-urban India?",
      "How can vernacular language and offline features improve access to digital payments?",
      "What role do agents and local businesses play in expanding financial inclusion beyond metros?",
      "How should regulations evolve to boost trust, security, and innovation in Bharat's payment ecosystem?",
      "How can AI and interoperable systems help build scalable, user-friendly payment solutions for underserved areas?",
      "How can banks, fintechs, and government collaborate to deliver inclusive financial services across Bharat?"
    ]
  },
  callToAction: {
    title: "Secure Your Invitation Today",
    buttonText: "Request to Invite"
  }
};

  return <Overview data={customData} />;
};

export default MainContent;