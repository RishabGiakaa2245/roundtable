import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Form = ({closeForm}) => {

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    designation: '',
    organisation: '',
    mobileNumber: '',
    linkedinUrl: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission logic here
    closeForm();
    // Reset form
    setFormData({
      fullName: '',
      email: '',
      designation: '',
      organisation: '',
      mobileNumber: '',
      linkedinUrl: ''
    });
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

  const buttonVariants = {
    rest: { 
      scale: 1,
      boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)"
    },
    hover: {
      scale: 1.02,
      boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(59, 130, 246, 0.4)",
      background: "linear-gradient(135deg, #3b82f6, #10b981)",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10
      }
    },
    tap: { 
      scale: 0.98,
      transition: { duration: 0.1 }
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
    <motion.div 
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
      onClick={closeForm}
      variants={backdropVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <motion.div 
        className="bg-white rounded-3xl max-w-md w-full max-h-[90vh] overflow-hidden relative flex flex-col shadow-2xl"
        onClick={(e) => e.stopPropagation()}
        variants={modalVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        {/* Header with gradient background */}
        <motion.div 
          className="bg-gradient-to-r from-blue-500 to-green-500 rounded-t-3xl p-6 relative flex-shrink-0"
          variants={headerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.button 
            onClick={closeForm}
            className="absolute top-4 right-4 text-white hover:text-gray-200 transition-colors"
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
            className="text-2xl font-bold text-white"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.4 }}
          >
            Request an Invite
          </motion.h2>
          
          <motion.p 
            className="text-blue-100 text-sm mt-1"
            initial={{ opacity: 0, y: -5 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.4 }}
          >
            Join us for this exclusive roundtable
          </motion.p>
        </motion.div>

        {/* Form Content - Properly scrollable */}
        <div className="flex-1 overflow-y-auto p-6">
          <motion.div 
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

            <motion.div variants={inputVariants}>
              <motion.label 
                className="block text-sm font-medium text-gray-700 mb-2"
                whileHover={{ color: "#374151" }}
              >
                Mobile Number <span className="text-red-500">*</span>
              </motion.label>
              <motion.input
                type="tel"
                name="mobileNumber"
                value={formData.mobileNumber}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                placeholder="Enter your mobile number"
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
              <motion.button
                type="button"
                onClick={handleSubmit}
                className="w-full bg-gradient-to-r from-blue-500 to-green-500 text-white py-3 px-6 rounded-xl font-semibold text-lg hover:shadow-lg transition-all duration-200 transform hover:scale-105"
                variants={buttonVariants}
                initial="rest"
                whileHover="hover"
                whileTap="tap"
              >
                <motion.span
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8, duration: 0.3 }}
                >
                  Submit Request
                </motion.span>
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  )
}

export default Form;