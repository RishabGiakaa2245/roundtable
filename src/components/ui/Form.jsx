import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Button from './Button';
import { db } from "../../firebase/config";   // path to your firebase.js
import { collection, addDoc, Timestamp } from "firebase/firestore";

// Success Confirmation Modal Component
const SuccessModal = ({ isOpen, onClose }) => {
  useEffect(() => {
    if (isOpen) {
      const timer = setTimeout(() => {
        onClose();
      }, 3000); // Auto close after 3 seconds

      return () => clearTimeout(timer);
    }
  }, [isOpen, onClose]);

  const successVariants = {
    hidden: { 
      opacity: 0,
      scale: 0.3,
      rotateX: -90
    },
    visible: { 
      opacity: 1,
      scale: 1,
      rotateX: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30,
        duration: 0.6
      }
    },
    exit: { 
      opacity: 0,
      scale: 0.8,
      y: -50,
      transition: { 
        duration: 0.3,
        ease: "easeInOut"
      }
    }
  };

  const checkmarkVariants = {
    hidden: { 
      pathLength: 0,
      opacity: 0
    },
    visible: { 
      pathLength: 1,
      opacity: 1,
      transition: { 
        pathLength: { 
          delay: 0.3, 
          duration: 0.8, 
          ease: "easeInOut" 
        },
        opacity: { 
          delay: 0.3, 
          duration: 0.2 
        }
      }
    }
  };

  const circleVariants = {
    hidden: { 
      scale: 0,
      opacity: 0
    },
    visible: { 
      scale: 1,
      opacity: 1,
      transition: { 
        delay: 0.1,
        type: "spring",
        stiffness: 300,
        damping: 25
      }
    }
  };

  const textVariants = {
    hidden: { 
      opacity: 0,
      y: 20
    },
    visible: { 
      opacity: 1,
      y: 0,
      transition: { 
        delay: 0.5,
        duration: 0.4
      }
    }
  };

  const particleVariants = {
    hidden: { 
      scale: 0,
      opacity: 0
    },
    visible: { 
      scale: [0, 1, 0],
      opacity: [0, 1, 0],
      transition: { 
        duration: 2,
        delay: 0.4,
        repeat: Infinity,
        repeatDelay: 0.5
      }
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div 
          className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-[60] p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <motion.div 
            className="bg-white rounded-3xl p-8 max-w-sm w-full text-center relative overflow-hidden shadow-2xl"
            variants={successVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            {/* Animated particles */}
            <div className="absolute inset-0 pointer-events-none">
              {[...Array(8)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-2 h-2 bg-gradient-to-r from-green-400 to-blue-500 rounded-full"
                  style={{
                    left: `${20 + (i * 10)}%`,
                    top: `${30 + (i % 3) * 20}%`,
                  }}
                  variants={particleVariants}
                  initial="hidden"
                  animate="visible"
                />
              ))}
            </div>

            {/* Success Icon */}
            <motion.div 
              className="mx-auto mb-6 relative"
              variants={circleVariants}
              initial="hidden"
              animate="visible"
            >
              <div className="w-20 h-20 bg-gradient-to-r from-green-400 to-green-600 rounded-full flex items-center justify-center mx-auto shadow-lg">
                <svg 
                  className="w-10 h-10 text-white" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <motion.path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={3} 
                    d="M5 13l4 4L19 7"
                    variants={checkmarkVariants}
                    initial="hidden"
                    animate="visible"
                  />
                </svg>
              </div>
              
              {/* Ripple effect */}
              <motion.div
                className="absolute inset-0 border-4 border-green-400 rounded-full"
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.8, 0, 0.8],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: 0.8
                }}
              />
            </motion.div>

            {/* Success Text */}
            <motion.div
              variants={textVariants}
              initial="hidden"
              animate="visible"
            >
              <h3 className="text-2xl font-bold text-gray-800 mb-2">
                Request Submitted!
              </h3>
              <p className="text-gray-600 mb-1">
                Thank you for your interest in joining our strategic initiative.
              </p>
              <p className="text-sm text-gray-500">
                We'll review your application and get back to you soon.
              </p>
            </motion.div>

            {/* Progress bar */}
            <motion.div 
              className="mt-6 h-1 bg-gray-200 rounded-full overflow-hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
            >
              <motion.div
                className="h-full bg-gradient-to-r from-green-400 to-green-600 rounded-full"
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ 
                  delay: 1,
                  duration: 2,
                  ease: "easeInOut"
                }}
              />
            </motion.div>

            {/* Close button */}
            <motion.button
              onClick={onClose}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
              whileHover={{ scale: 1.1, rotate: 90 }}
              whileTap={{ scale: 0.9 }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </motion.button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

const Form = ({closeForm}) => {
  const modalRef = useRef(null);
  const [showSuccess, setShowSuccess] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    designation: '',
    organisation: '',
    countryCode: '+1', // Default to US
    mobileNumber: '',
    linkedinUrl: ''
  });

  // Clean country codes for the dropdown
  const countryCodes = [
    { code: '+1', country: 'United States', flag: '🇺🇸' },
    { code: '+44', country: 'United Kingdom', flag: '🇬🇧' },
    { code: '+91', country: 'India', flag: '🇮🇳' },
    { code: '+61', country: 'Australia', flag: '🇦🇺' },
    { code: '+49', country: 'Germany', flag: '🇩🇪' },
    { code: '+33', country: 'France', flag: '🇫🇷' },
    { code: '+86', country: 'China', flag: '🇨🇳' },
    { code: '+81', country: 'Japan', flag: '🇯🇵' },
    { code: '+82', country: 'South Korea', flag: '🇰🇷' },
    { code: '+65', country: 'Singapore', flag: '🇸🇬' },
    { code: '+971', country: 'United Arab Emirates', flag: '🇦🇪' },
    { code: '+7', country: 'Russia', flag: '🇷🇺' },
    { code: '+55', country: 'Brazil', flag: '🇧🇷' },
    { code: '+34', country: 'Spain', flag: '🇪🇸' },
    { code: '+39', country: 'Italy', flag: '🇮🇹' },
    { code: '+31', country: 'Netherlands', flag: '🇳🇱' },
    { code: '+46', country: 'Sweden', flag: '🇸🇪' },
    { code: '+47', country: 'Norway', flag: '🇳🇴' },
    { code: '+41', country: 'Switzerland', flag: '🇨🇭' },
    { code: '+43', country: 'Austria', flag: '🇦🇹' }
  ];

  // More robust body scroll lock
  useEffect(() => {
    const body = document.body;
    const html = document.documentElement;
    
    // Store original styles
    const originalBodyOverflow = body.style.overflow;
    const originalBodyPosition = body.style.position;
    const originalBodyTop = body.style.top;
    const originalBodyWidth = body.style.width;
    const originalHtmlOverflow = html.style.overflow;
    
    // Get current scroll position
    const scrollY = window.scrollY;
    
    // Apply scroll lock styles
    html.style.overflow = 'hidden';
    body.style.overflow = 'hidden';
    body.style.position = 'fixed';
    body.style.top = `-${scrollY}px`;
    body.style.width = '100%';
    
    // Cleanup function
    return () => {
      // Restore original styles
      html.style.overflow = originalHtmlOverflow;
      body.style.overflow = originalBodyOverflow;
      body.style.position = originalBodyPosition;
      body.style.top = originalBodyTop;
      body.style.width = originalBodyWidth;
      
      // Restore scroll position
      window.scrollTo(0, scrollY);
    };
  }, []);

  // Handle wheel events to prevent propagation to body
  useEffect(() => {
    const handleWheel = (e) => {
      const modal = modalRef.current;
      if (modal && modal.contains(e.target)) {
        // If scrolling within the modal, let it scroll normally
        const scrollableElement = modal.querySelector('.scrollable-content');
        if (scrollableElement) {
          const { scrollTop, scrollHeight, clientHeight } = scrollableElement;
          const isAtTop = scrollTop === 0;
          const isAtBottom = scrollTop + clientHeight >= scrollHeight;
          
          // If trying to scroll up when at top, or down when at bottom, prevent default
          if ((isAtTop && e.deltaY < 0) || (isAtBottom && e.deltaY > 0)) {
            e.preventDefault();
          }
        }
      } else {
        // If scrolling outside the modal, prevent all scrolling
        e.preventDefault();
        e.stopPropagation();
      }
    };

    // Add event listener with capture to catch events early
    document.addEventListener('wheel', handleWheel, { passive: false, capture: true });
    document.addEventListener('touchmove', (e) => e.preventDefault(), { passive: false });
    
    return () => {
      document.removeEventListener('wheel', handleWheel, { capture: true });
      document.removeEventListener('touchmove', (e) => e.preventDefault());
    };
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Store in Firestore
      await addDoc(collection(db, "requests"), {
        ...formData,
        createdAt: Timestamp.now(),
      });

      // Show success modal instead of alert
      setShowSuccess(true);

      // Reset form
      setFormData({
        fullName: "",
        email: "",
        designation: "",
        organisation: "",
        countryCode: '+1',
        mobileNumber: "",
        linkedinUrl: "",
      });
    } catch (error) {
      console.error("Error adding document: ", error);
      alert("❌ Something went wrong!");
    }
  };

  const handleSuccessClose = () => {
    setShowSuccess(false);
    closeForm(); // Close the main form after success
  };

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      closeForm();
    }
  };

  // Prevent any scroll events from bubbling up
  const handleModalScroll = (e) => {
    e.stopPropagation();
  };

  // Animation variants
  const backdropVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { duration: 0.3 }
    },
    exit: { 
      opacity: 0,
      transition: { duration: 0.2 }
    }
  };

  const modalVariants = {
    hidden: { 
      opacity: 0, 
      scale: 0.8,
      y: 100
    },
    visible: { 
      opacity: 1, 
      scale: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30,
        duration: 0.4
      }
    },
    exit: { 
      opacity: 0, 
      scale: 0.8,
      y: 100,
      transition: { duration: 0.2 }
    }
  };

  const headerVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { delay: 0.2, duration: 0.4 }
    }
  };

  const formVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const inputVariants = {
    hidden: { 
      opacity: 0, 
      x: -30,
      scale: 0.95
    },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 20
      }
    }
  };

  const closeButtonVariants = {
    rest: { 
      scale: 1,
      rotate: 0
    },
    hover: { 
      scale: 1.1,
      rotate: 90,
      transition: { duration: 0.2 }
    },
    tap: { 
      scale: 0.9,
      transition: { duration: 0.1 }
    }
  };

  const inputFocusVariants = {
    focus: {
      scale: 1.02,
      boxShadow: "0 0 0 3px rgba(59, 130, 246, 0.1)",
      borderColor: "#3b82f6",
      transition: { duration: 0.2 }
    },
    blur: {
      scale: 1,
      boxShadow: "0 0 0 0px rgba(59, 130, 246, 0.1)",
      transition: { duration: 0.2 }
    }
  };

  return (
    <>
      <motion.div 
        className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
        onClick={handleBackdropClick}
        variants={backdropVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
        style={{ 
          overflow: 'hidden',
          overscrollBehavior: 'none'
        }}
      >
        <motion.div 
          ref={modalRef}
          className="bg-white rounded-3xl max-w-md w-full max-h-[90vh] overflow-hidden relative flex flex-col shadow-2xl"
          onClick={(e) => e.stopPropagation()}
          onWheel={handleModalScroll}
          variants={modalVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          style={{ overscrollBehavior: 'contain' }}
        >
          {/* Header with gradient background */}
          <motion.div 
            className="bg-white rounded-t-3xl p-8 pb-4 relative flex-shrink-0"
            variants={headerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.button 
              onClick={closeForm}
              className="absolute top-4 right-4 rounded-md bg-white text-black transition-colors z-10"
              variants={closeButtonVariants}
              initial="rest"
              whileHover="hover"
              whileTap="tap"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </motion.button>
            
            <motion.h2 
              className="text-4xl font-semibold text-black z-10"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.4 }}
            >
              Strategic Value for Participants
            </motion.h2>
            
            <div className="w-full z-0 h-[25px] bg-[linear-gradient(90deg,#0575e6_0%,#5336f8_50%,#00f260_100%)] rounded-t-3xl left-0 right-0 absolute top-[-1px]"></div>
          </motion.div>

          {/* Form Content - Enhanced scrollable area */}
          <div 
            className="flex-1 overflow-y-auto p-6 scrollable-content"
            onWheel={handleModalScroll}
            style={{
              overscrollBehavior: 'contain',
              scrollbarWidth: 'thin',
              scrollbarColor: '#cbd5e1 #f1f5f9',
              WebkitOverflowScrolling: 'touch'
            }}
          >
            <motion.form 
              onSubmit={handleSubmit}
              className="space-y-4"
              variants={formVariants}
              initial="hidden"
              animate="visible"
            >
              <motion.div variants={inputVariants}>
                <motion.label 
                  className="block text-sm font-medium text-gray-700 mb-2"
                  whileHover={{ color: "#374151" }}
                >
                  Full Name <span className="text-red-500">*</span>
                </motion.label>
                <motion.input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                  placeholder="Enter your full name"
                  whileFocus="focus"
                  initial="blur"
                  variants={inputFocusVariants}
                  whileHover={{ scale: 1.01 }}
                />
              </motion.div>

              <motion.div variants={inputVariants}>
                <motion.label 
                  className="block text-sm font-medium text-gray-700 mb-2"
                  whileHover={{ color: "#374151" }}
                >
                  Email <span className="text-red-500">*</span>
                </motion.label>
                <motion.input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                  placeholder="Enter your email"
                  whileFocus="focus"
                  initial="blur"
                  variants={inputFocusVariants}
                  whileHover={{ scale: 1.01 }}
                />
              </motion.div>

              <motion.div variants={inputVariants}>
                <motion.label 
                  className="block text-sm font-medium text-gray-700 mb-2"
                  whileHover={{ color: "#374151" }}
                >
                  Designation <span className="text-red-500">*</span>
                </motion.label>
                <motion.input
                  type="text"
                  name="designation"
                  value={formData.designation}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                  placeholder="Enter your designation"
                  whileFocus="focus"
                  initial="blur"
                  variants={inputFocusVariants}
                  whileHover={{ scale: 1.01 }}
                />
              </motion.div>

              <motion.div variants={inputVariants}>
                <motion.label 
                  className="block text-sm font-medium text-gray-700 mb-2"
                  whileHover={{ color: "#374151" }}
                >
                  Organisation <span className="text-red-500">*</span>
                </motion.label>
                <motion.input
                  type="text"
                  name="organisation"
                  value={formData.organisation}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                  placeholder="Enter your organisation"
                  whileFocus="focus"
                  initial="blur"
                  variants={inputFocusVariants}
                  whileHover={{ scale: 1.01 }}
                />
              </motion.div>

              {/* Clean Mobile Number Section */}
              <motion.div variants={inputVariants}>
                <motion.label 
                  className="block text-sm font-medium text-gray-700 mb-2"
                  whileHover={{ color: "#374151" }}
                >
                  Mobile Number <span className="text-red-500">*</span>
                </motion.label>
                <div className="flex gap-0">
                  <motion.select
                    name="countryCode"
                    value={formData.countryCode}
                    onChange={handleInputChange}
                    className="px-3 py-3 border border-gray-300 rounded-l-xl border-r-0 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all bg-white text-sm w-20 text-center"
                    whileFocus="focus"
                    initial="blur"
                    variants={inputFocusVariants}
                  >
                    {countryCodes.map((country) => (
                      <option key={country.code} value={country.code} className='text-left'>
                         {country.code} &nbsp;  &nbsp; &nbsp;  {country.country}
                      </option>
                    ))}
                  </motion.select>
                  <motion.input
                    type="tel"
                    name="mobileNumber"
                    value={formData.mobileNumber}
                    onChange={handleInputChange}
                    required
                    className="flex-1 px-4 py-3 border border-gray-300 rounded-r-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                    placeholder="Enter mobile number"
                    whileFocus="focus"
                    initial="blur"
                    variants={inputFocusVariants}
                    whileHover={{ scale: 1.01 }}
                  />
                </div>
              </motion.div>

              <motion.div variants={inputVariants}>
                <motion.label 
                  className="block text-sm font-medium text-gray-700 mb-2"
                  whileHover={{ color: "#374151" }}
                >
                  LinkedIn URL <span className="text-red-500">*</span>
                </motion.label>
                <motion.input
                  type="url"
                  name="linkedinUrl"
                  value={formData.linkedinUrl}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                  placeholder="https://linkedin.com/in/yourprofile"
                  whileFocus="focus"
                  initial="blur"
                  variants={inputFocusVariants}
                  whileHover={{ scale: 1.01 }}
                />
              </motion.div>

              <motion.div 
                className="pt-4"
                variants={inputVariants}
              >
                <Button
                  type="submit"
                  className="w-full hover:shadow-lg transition-all duration-200 transform hover:scale-105"
                  variants="primary"
                >
                  <motion.span
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8, duration: 0.3 }}
                  >
                    Submit Request
                  </motion.span>
                </Button>
              </motion.div>
            </motion.form>
          </div>
        </motion.div>
      </motion.div>

      {/* Success Confirmation Modal */}
      <SuccessModal 
        isOpen={showSuccess} 
        onClose={handleSuccessClose}
      />
    </>
  )
}

export default Form;