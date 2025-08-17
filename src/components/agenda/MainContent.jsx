import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/navigation';
import Button from '../ui/Button';
import Image from 'next/image';
import { generateSlug } from '@/helper/utils';
import { Calendar, Clock, Users, MessageSquare, Camera, Coffee, MapPin, ChevronDown } from 'lucide-react';


// UI Components with Motion
const Badge = ({ className, variant = 'default', children, ...props }) => {
  const baseClasses =
    'inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors';
  const variantClasses = {
    default: 'border-transparent bg-primary text-primary-foreground shadow hover:bg-primary/80',
    outline: 'text-foreground',
  };

  return (
    <motion.div
      className={`${baseClasses} ${variantClasses[variant]} ${className || ''}`}
      whileHover={{ scale: 1.05, y: -1 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      {...props}
    >
      {children}
    </motion.div>
  );
};

const Card = ({ className, children, ...props }) => (
  <motion.div
    className={`rounded-xl border bg-card text-card-foreground shadow ${className || ''}`}
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
    whileHover={{
      y: -2,
      boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
    }}
    {...props}
  >
    {children}
  </motion.div>
);

const CardContent = ({ className, children, ...props }) => (
  <div className={`p-6 ${className || ''}`} {...props}>
    {children}
  </div>
);

// Data (keeping original agenda structure)
const agendaData = [
  {
    date: 'Tuesday, 7 October',
    dateValue: '7 Oct',
    events: [
      {
        id: 1,
        time: '4:30 PM - 6:30 PM',
        location: 'Trident Hotel, BKC, Mumbai',
        eventDate: '7 Sept, 2025',
        title: 'Financial Inclusion Through Digital Payments: Reaching Bharat',
        slug: generateSlug('Financial Inclusion Through Digital Payments: Reaching Bharat'),
        type: 'Roundtable',
        roundtableId: 'Roundtable 1',
        bgColor: 'bg-blue-50',
        borderColor: 'border-blue-200',
        textColor: 'text-blue-900',
        iconColor: 'text-blue-600',
        hasAgenda: true,
        isExpanded: false,
        speakers: [
          {
            name: 'Rajesh Kumar',
            role: 'CEO',
            company: 'PayTech India',
            email: 'rajesh@paytech.in',
            phone: '+91-9876543210',
          },
          {
            name: 'Priya Sharma',
            role: 'Head of Digital Banking',
            company: 'HDFC Bank',
            email: 'priya.sharma@hdfc.com',
            phone: '+91-9876543211',
          },
          {
            name: 'Amit Patel',
            role: 'VP Strategy',
            company: 'PhonePe',
            email: 'amit.patel@phonepe.com',
            phone: '+91-9876543212',
          },
        ],
        capacity: 25,
        registered: 18,
        agenda: [
          {
            time: '4:30 PM - 4:40 PM',
            title: 'Registration & Networking High Tea',
            icon: 'Calendar',
            iconBg: 'bg-blue-500',
          },
          {
            time: '4:40 PM - 4:50 PM',
            title: 'Opening Remarks by Giakaa Capital',
            icon: 'Clock',
            iconBg: 'bg-blue-500',
          },
          {
            time: '4:50 PM - 5:00 PM',
            title: 'Partner Introduction',
            icon: 'Users',
            iconBg: 'bg-blue-500',
          },
          {
            time: '5:00 PM - 5:40 PM',
            title: 'Discussion Points',
            icon: 'MessageSquare',
            iconBg: 'bg-blue-500',
          },
          {
            time: '5:40 PM - 5:50 PM',
            title: 'Group Photo & Thankyou Note',
            icon: 'Camera',
            iconBg: 'bg-blue-500',
          },
          {
            time: '5:50 PM - 6:30 PM',
            title: 'Networking & Refreshments',
            icon: 'Coffee',
            iconBg: 'bg-blue-500',
          },
        ],
      },
      {
        id: 2,
        time: '6:30 PM - 8:30 PM',
        location: 'Trident Hotel, BKC, Mumbai',
        eventDate: '7 Sept, 2025',
        title: 'Fintech Valuations in 2025: Navigating Market Corrections & Realistic Pricing',
        slug: generateSlug('Fintech Valuations in 2025: Navigating Market Corrections & Realistic Pricing'),
        type: 'Roundtable',
        roundtableId: 'Roundtable 2',
        bgColor: 'bg-red-50',
        borderColor: 'border-red-200',
        textColor: 'text-red-900',
        iconColor: 'text-red-600',
        hasAgenda: false,
        isExpanded: false,
        speakers: [
          {
            name: 'Vikram Singh',
            role: 'Managing Partner',
            company: 'Sequoia Capital',
            email: 'vikram@sequoia.com',
            phone: '+91-9876543213',
          },
          {
            name: 'Meera Jain',
            role: 'Investment Director',
            company: 'Tiger Global',
            email: 'meera@tiger.com',
            phone: '+91-9876543214',
          },
          {
            name: 'Arjun Malhotra',
            role: 'CFO',
            company: 'Razorpay',
            email: 'arjun@razorpay.com',
            phone: '+91-9876543215',
          },
        ],
        capacity: 20,
        registered: 15,
        agenda: [
          {
            time: '6:30 PM - 6:40 PM',
            title: 'Registration & Networking High Tea',
            icon: 'Calendar',
            iconBg: 'bg-red-500',
          },
          {
            time: '6:40 PM - 6:50 PM',
            title: 'Opening Remarks by Giakaa Capital',
            icon: 'Clock',
            iconBg: 'bg-red-500',
          },
          {
            time: '6:50 PM - 7:00 PM',
            title: 'Partner Introduction',
            icon: 'Users',
            iconBg: 'bg-red-500',
          },
          {
            time: '7:00 PM - 7:40 PM',
            title: 'Valuation Discussion Points',
            icon: 'MessageSquare',
            iconBg: 'bg-red-500',
          },
          {
            time: '7:40 PM - 7:50 PM',
            title: 'Group Photo & Thankyou Note',
            icon: 'Camera',
            iconBg: 'bg-red-500',
          },
          {
            time: '7:50 PM - 8:30 PM',
            title: 'Networking & Refreshments',
            icon: 'Coffee',
            iconBg: 'bg-red-500',
          },
        ],
      },
    ],
  },
  {
    date: 'Wednesday, 8 October',
    dateValue: '8 Oct',
    events: [
      {
        id: 3,
        time: '4:00 PM - 6:00 PM',
        location: 'Trident Hotel, BKC, Mumbai',
        eventDate: '8 Sept, 2025',
        title: "India Stack Opportunities: Building on UPI's $990B Market Potential",
        slug: generateSlug("India Stack Opportunities: Building on UPI's $990B Market Potential"),
        type: 'Roundtable',
        roundtableId: 'Roundtable 3',
        bgColor: 'bg-purple-50',
        borderColor: 'border-purple-200',
        textColor: 'text-purple-900',
        iconColor: 'text-purple-600',
        hasAgenda: false,
        isExpanded: false,
        speakers: [
          {
            name: 'Nandan Nilekani',
            role: 'Co-founder',
            company: 'Infosys',
            email: 'nandan@infosys.com',
            phone: '+91-9876543216',
          },
          {
            name: 'Dilip Asbe',
            role: 'CEO',
            company: 'NPCI',
            email: 'dilip@npci.org.in',
            phone: '+91-9876543217',
          },
          {
            name: 'Sameer Nigam',
            role: 'Founder',
            company: 'PhonePe',
            email: 'sameer@phonepe.com',
            phone: '+91-9876543218',
          },
        ],
        capacity: 30,
        registered: 22,
        agenda: [
          {
            time: '4:00 PM - 4:10 PM',
            title: 'Registration & Networking High Tea',
            icon: 'Calendar',
            iconBg: 'bg-purple-500',
          },
          {
            time: '4:10 PM - 4:20 PM',
            title: 'Opening Remarks by Giakaa Capital',
            icon: 'Clock',
            iconBg: 'bg-purple-500',
          },
          {
            time: '4:20 PM - 4:30 PM',
            title: 'Partner Introduction',
            icon: 'Users',
            iconBg: 'bg-purple-500',
          },
          {
            time: '4:30 PM - 5:10 PM',
            title: 'India Stack Discussion Points',
            icon: 'MessageSquare',
            iconBg: 'bg-purple-500',
          },
          {
            time: '5:10 PM - 5:20 PM',
            title: 'Group Photo & Thankyou Note',
            icon: 'Camera',
            iconBg: 'bg-purple-500',
          },
          {
            time: '5:20 PM - 6:00 PM',
            title: 'Networking & Refreshments',
            icon: 'Coffee',
            iconBg: 'bg-purple-500',
          },
        ],
      },
      {
        id: 4,
        time: '6:30 PM - 8:30 PM',
        location: 'Trident Hotel, BKC, Mumbai',
        eventDate: '8 Sept, 2025',
        title: 'Bank-Fintech Partnerships: Creating Win-Win Collaboration Models',
        slug: generateSlug('Bank-Fintech Partnerships: Creating Win-Win Collaboration Models'),
        type: 'Roundtable',
        roundtableId: 'Roundtable 4',
        bgColor: 'bg-orange-50',
        borderColor: 'border-orange-200',
        textColor: 'text-orange-900',
        iconColor: 'text-orange-600',
        hasAgenda: false,
        isExpanded: false,
        speakers: [
          {
            name: 'Shikha Sharma',
            role: 'Former CEO',
            company: 'Axis Bank',
            email: 'shikha@axis.com',
            phone: '+91-9876543219',
          },
          {
            name: 'Harshil Mathur',
            role: 'CEO',
            company: 'Razorpay',
            email: 'harshil@razorpay.com',
            phone: '+91-9876543220',
          },
          {
            name: 'Ashneer Grover',
            role: 'Former MD',
            company: 'BharatPe',
            email: 'ashneer@bharatpe.com',
            phone: '+91-9876543221',
          },
        ],
        capacity: 25,
        registered: 20,
        agenda: [
          {
            time: '6:30 PM - 6:40 PM',
            title: 'Registration & Networking High Tea',
            icon: 'Calendar',
            iconBg: 'bg-orange-500',
          },
          {
            time: '6:40 PM - 6:50 PM',
            title: 'Opening Remarks by Giakaa Capital',
            icon: 'Clock',
            iconBg: 'bg-orange-500',
          },
          {
            time: '6:50 PM - 7:00 PM',
            title: 'Partner Introduction',
            icon: 'Users',
            iconBg: 'bg-orange-500',
          },
          {
            time: '7:00 PM - 7:40 PM',
            title: 'Partnership Discussion Points',
            icon: 'MessageSquare',
            iconBg: 'bg-orange-500',
          },
          {
            time: '7:40 PM - 7:50 PM',
            title: 'Group Photo & Thankyou Note',
            icon: 'Camera',
            iconBg: 'bg-orange-500',
          },
          {
            time: '7:50 PM - 8:30 PM',
            title: 'Networking & Refreshments',
            icon: 'Coffee',
            iconBg: 'bg-orange-500',
          },
        ],
      },
    ],
  },
  {
    date: 'Thursday, 9 October',
    dateValue: '9 Oct',
    events: [
      {
        id: 5,
        time: '4:00 PM - 6:00 PM',
        location: 'Trident Hotel, BKC, Mumbai',
        eventDate: '9 Sept, 2025',
        title: "Building India's Sustainable Digital Financial Ecosystem 2030: A Multi-Stakeholder Blueprint for Inclusive Growth",
        slug: generateSlug("Building India's Sustainable Digital Financial Ecosystem 2030: A Multi-Stakeholder Blueprint for Inclusive Growth"),
        type: 'Roundtable',
        roundtableId: 'Roundtable 5',
        bgColor: 'bg-cyan-50',
        borderColor: 'border-cyan-200',
        textColor: 'text-cyan-900',
        iconColor: 'text-cyan-600',
        hasAgenda: false,
        isExpanded: false,
        speakers: [
          {
            name: 'Raghuram Rajan',
            role: 'Former RBI Governor',
            company: 'University of Chicago',
            email: 'raghuram@uchicago.edu',
            phone: '+91-9876543222',
          },
          {
            name: 'Uday Kotak',
            role: 'Executive Chairman',
            company: 'Kotak Mahindra Bank',
            email: 'uday@kotak.com',
            phone: '+91-9876543223',
          },
          {
            name: 'Kunal Shah',
            role: 'Founder',
            company: 'CRED',
            email: 'kunal@cred.club',
            phone: '+91-9876543224',
          },
        ],
        capacity: 35,
        registered: 28,
        agenda: [
          {
            time: '4:00 PM - 4:10 PM',
            title: 'Registration & Networking High Tea',
            icon: 'Calendar',
            iconBg: 'bg-cyan-500',
          },
          {
            time: '4:10 PM - 4:20 PM',
            title: 'Opening Remarks by Giakaa Capital',
            icon: 'Clock',
            iconBg: 'bg-cyan-500',
          },
          {
            time: '4:20 PM - 4:30 PM',
            title: 'Partner Introduction',
            icon: 'Users',
            iconBg: 'bg-cyan-500',
          },
          {
            time: '4:30 PM - 5:10 PM',
            title: 'Ecosystem Discussion Points',
            icon: 'MessageSquare',
            iconBg: 'bg-cyan-500',
          },
          {
            time: '5:10 PM - 5:20 PM',
            title: 'Group Photo & Thankyou Note',
            icon: 'Camera',
            iconBg: 'bg-cyan-500',
          },
          {
            time: '5:20 PM - 6:00 PM',
            title: 'Networking & Refreshments',
            icon: 'Coffee',
            iconBg: 'bg-cyan-500',
          },
        ],
      },
      {
        id: 6,
        time: '6:30 PM - 8:30 PM',
        location: 'Trident Hotel, BKC, Mumbai',
        eventDate: '9 Sept, 2025',
        title: "Asset Allocators, PE, Family Offices & Institutional Investors Shaping India's Fintech Future",
        slug: generateSlug("Asset Allocators, PE, Family Offices & Institutional Investors Shaping India's Fintech Future"),
        type: 'Roundtable',
        roundtableId: 'Roundtable 6',
        bgColor: 'bg-green-50',
        borderColor: 'border-green-200',
        textColor: 'text-green-900',
        iconColor: 'text-green-600',
        hasAgenda: false,
        isExpanded: false,
        speakers: [
          {
            name: 'Ravi Adusumalli',
            role: 'Founder',
            company: 'Elevation Capital',
            email: 'ravi@elevation.capital',
            phone: '+91-9876543225',
          },
          {
            name: 'Binny Bansal',
            role: 'Co-founder',
            company: 'Flipkart',
            email: 'binny@flipkart.com',
            phone: '+91-9876543226',
          },
          {
            name: 'Anand Piramal',
            role: 'Executive Director',
            company: 'Piramal Group',
            email: 'anand@piramal.com',
            phone: '+91-9876543227',
          },
        ],
        capacity: 20,
        registered: 16,
        agenda: [
          {
            time: '6:30 PM - 6:40 PM',
            title: 'Registration & Networking High Tea',
            icon: 'Calendar',
            iconBg: 'bg-green-500',
          },
          {
            time: '6:40 PM - 6:50 PM',
            title: 'Opening Remarks by Giakaa Capital',
            icon: 'Clock',
            iconBg: 'bg-green-500',
          },
          {
            time: '6:50 PM - 7:00 PM',
            title: 'Partner Introduction',
            icon: 'Users',
            iconBg: 'bg-green-500',
          },
          {
            time: '7:00 PM - 7:40 PM',
            title: 'Investment Discussion Points',
            icon: 'MessageSquare',
            iconBg: 'bg-green-500',
          },
          {
            time: '7:40 PM - 7:50 PM',
            title: 'Group Photo & Thankyou Note',
            icon: 'Camera',
            iconBg: 'bg-green-500',
          },
          {
            time: '7:50 PM - 8:30 PM',
            title: 'Networking & Refreshments',
            icon: 'Coffee',
            iconBg: 'bg-green-500',
          },
        ],
      },
    ],
  },
];

// Filter Sidebar Component with Motion - FIXED LOGIC
const FilterSidebar = ({
  selectedDate,
  setSelectedDate,
  selectedRoundtable,
  setSelectedRoundtable,
}) => {
  const dateOptions = [
    { label: 'All', value: 'All' },
    { label: '7 Oct', value: '7 Oct' },
    { label: '8 Oct', value: '8 Oct' },
    { label: '9 Oct', value: '9 Oct' },
  ];

  const getAvailableRoundtables = () => {
    if (selectedDate === 'All') {
      // When "All" dates is selected, show all roundtables
      return [
        { label: 'All', value: 'All' },
        { label: 'Roundtable 1', value: 'Roundtable 1' },
        { label: 'Roundtable 2', value: 'Roundtable 2' },
        { label: 'Roundtable 3', value: 'Roundtable 3' },
        { label: 'Roundtable 4', value: 'Roundtable 4' },
        { label: 'Roundtable 5', value: 'Roundtable 5' },
        { label: 'Roundtable 6', value: 'Roundtable 6' },
      ];
    }

    // When specific date is selected, show only roundtables available for that date
    const selectedDateData = agendaData.find((day) => day.dateValue === selectedDate);
    if (!selectedDateData) return [{ label: 'All', value: 'All' }];

    const roundtables = [...new Set(selectedDateData.events.map((event) => event.roundtableId))];
    return [
      { label: 'All', value: 'All' }, 
      ...roundtables.map((rt) => ({ label: rt, value: rt }))
    ];
  };

  const availableRoundtables = getAvailableRoundtables();

  useEffect(() => {
    const availableValues = availableRoundtables.map((rt) => rt.value);
    if (!availableValues.includes(selectedRoundtable)) {
      setSelectedRoundtable('All');
    }
  }, [selectedDate, availableRoundtables, selectedRoundtable, setSelectedRoundtable]);

  const handleResetFilters = () => {
    setSelectedDate('All');
    setSelectedRoundtable('All');
  };

  const handleDateChange = (dateValue) => {
    setSelectedDate(dateValue);
    setSelectedRoundtable('All');
  };

  return (
    <motion.div
      className="w-full"
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
      data-scroll
      data-scroll-speed="0.1"
    >
      <Card className="bg-white rounded-2xl border shadow-lg">
        <motion.div
          className="h-20 lg:h-24 rounded-t-2xl bg-[linear-gradient(90deg,#0575e6_0%,#5336f8_50%,#00f260_100%)] relative overflow-hidden"
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.3 }}
        >
          {/* Animated background particles */}
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-white/40 rounded-full"
              style={{
                left: `${10 + i * 15}%`,
                top: `${20 + i * 8}%`,
              }}
              animate={{
                opacity: [0.2, 1, 0.2],
                scale: [0.5, 1.2, 0.5],
                y: [0, -10, 0],
              }}
              transition={{
                duration: 3 + i * 0.5,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: i * 0.3,
              }}
            />
          ))}

          <motion.div
            className="absolute inset-3 lg:inset-4 bg-white/20 rounded-lg backdrop-blur-sm border border-white/30"
            whileHover={{ backgroundColor: 'rgba(255, 255, 255, 0.25)' }}
            transition={{ duration: 0.3 }}
          />
          <motion.div
            className="absolute inset-0 flex items-center justify-center"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <motion.h2
              className="text-white text-2xl lg:text-3xl font-bold tracking-wide"
            >
              AGENDA
            </motion.h2>
          </motion.div>
        </motion.div>

        <CardContent className="p-4 lg:p-6">
          <motion.div
            className="flex items-start gap-3 mb-6 lg:mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            <motion.div
              className="w-1 h-8 lg:h-12 bg-red-500 rounded-full flex-shrink-0"
              animate={{ height: ['32px', '48px', '32px'] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            />
            <motion.p
              className="text-gray-700 text-xs lg:text-sm leading-relaxed"
              whileHover={{ color: '#374151' }}
            >
              All the Roundtable sessions are scheduled in Indian Standard Time (IST).
            </motion.p>
          </motion.div>

          <motion.div
            className="mb-6 lg:mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            <motion.h3
              className="text-blue-600 font-bold text-base lg:text-lg mb-3 lg:mb-4"
              whileHover={{ scale: 1.02 }}
            >
              DATE:
            </motion.h3>
            <motion.div
              className="flex flex-wrap gap-2"
              variants={{
                visible: {
                  transition: {
                    staggerChildren: 0.1,
                  },
                },
              }}
              initial="hidden"
              animate="visible"
            >
              {dateOptions.map((option, index) => (
                <motion.div
                  key={option.value}
                  variants={{
                    hidden: { opacity: 0, scale: 0.8 },
                    visible: { opacity: 1, scale: 1 },
                  }}
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    variant="outline"
                    className={`px-3 lg:px-4 py-2 rounded-lg border-blue-500 transition-all text-xs lg:text-sm ${
                      selectedDate === option.value
                        ? 'bg-blue-100 text-blue-600 border-blue-600 shadow-lg'
                        : 'bg-white text-gray-700 hover:bg-blue-50'
                    }`}
                    onClick={() => handleDateChange(option.value)}
                  >
                    {option.label}
                  </Button>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            className="mb-6 lg:mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            <motion.h3
              className="text-blue-600 font-bold text-base lg:text-lg mb-3 lg:mb-4"
              whileHover={{ scale: 1.02 }}
            >
              ROUNDTABLE:
            </motion.h3>
            <AnimatePresence mode="sync">
              <motion.div
                key={selectedDate}
                className="flex flex-wrap gap-2"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                {availableRoundtables.map((option, index) => (
                  <motion.div
                    key={option.value}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button
                      variant="outline"
                      className={`px-3 lg:px-4 py-2 rounded-lg border-blue-500 transition-all text-xs lg:text-sm ${
                        selectedRoundtable === option.value
                          ? 'bg-blue-100 text-blue-600 border-blue-600 shadow-lg'
                          : 'bg-white text-gray-700 hover:bg-blue-50'
                      }`}
                      onClick={() => setSelectedRoundtable(option.value)}
                    >
                      {option.label}
                    </Button>
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>
            {selectedDate !== 'All' && (
              <motion.p
                className="text-xs lg:text-sm text-gray-500 mt-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                Showing roundtables available for {selectedDate}
              </motion.p>
            )}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.5 }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <Button
              variant="primary"
              size="md"
              className="w-full relative overflow-hidden"
              onClick={handleResetFilters}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full"
                whileHover={{
                  translateX: '100%',
                  transition: { duration: 0.6 },
                }}
              />
              <span className="relative z-10">Reset Filters</span>
            </Button>
          </motion.div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

// Main Agenda Section with Motion
const AgendaSection = ({ filteredData }) => {
  const router = useRouter();
  const [openDropdown, setOpenDropdown] = useState(null);

  const handleDropdownToggle = (eventId) => {
    setOpenDropdown(openDropdown === eventId ? null : eventId);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  return (
    <motion.section
      className="w-full"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      data-scroll
      data-scroll-speed="0.05"
    >
      <div className="space-y-16">
        <AnimatePresence mode="sync">
          {filteredData.map((dayData, dayIndex) => (
            <motion.div
              key={`${dayData.dateValue}-${dayIndex}`}
              className="space-y-6 lg:space-y-8"
              variants={itemVariants}
              layout
            >
              <motion.h2
                className="text-3xl lg:text-5xl font-normal text-gray-800 mb-6 lg:mb-8"
                whileHover={{ scale: 1.02, x: 10 }}
                transition={{ duration: 0.3 }}
                data-scroll
                data-scroll-speed="0.2"
              >
                {dayData.date}
              </motion.h2>

              <motion.div className="space-y-4 lg:space-y-6" variants={containerVariants}>
                {dayData.events.map((event, eventIndex) => (
                  <motion.div
                    key={event.id}
                    variants={itemVariants}
                    layout
                    data-scroll
                    data-scroll-speed="0.1"
                  >
                    <Card
                      className={`${event.bgColor} ${event.borderColor} rounded-2xl border-2 transition-all hover:shadow-lg relative overflow-hidden`}
                    >
                      <CardContent className="p-4 lg:p-8 relative z-10">
                        <motion.div
                          className="space-y-4 lg:space-y-6"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 0.2 }}
                        >
                          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                            <motion.div
                              className="grid grid-cols-1 sm:grid-cols-2 lg:flex lg:items-center gap-3 lg:gap-6"
                              variants={containerVariants}
                            >
                              <motion.div
                                className="flex items-center gap-2"
                                whileHover={{ scale: 1.02, x: 5 }}
                                transition={{ duration: 0.2 }}
                              >
                                <Clock className={`w-4 lg:w-5 h-4 lg:h-5 ${event.textColor}`} />
                                <span
                                  className={`font-semibold ${event.textColor} text-sm lg:text-base`}
                                >
                                  {event.time}
                                </span>
                              </motion.div>

                              <motion.div
                                className="flex items-center gap-2"
                                whileHover={{ scale: 1.02, x: 5 }}
                                transition={{ duration: 0.2 }}
                              >
                                <MapPin className={`w-4 lg:w-5 h-4 lg:h-5 ${event.textColor}`} />
                                <span
                                  className={`font-semibold ${event.textColor} text-sm lg:text-base truncate`}
                                >
                                  {event.location}
                                </span>
                              </motion.div>

                              <motion.div
                                className="flex items-center gap-2"
                                whileHover={{ scale: 1.02, x: 5 }}
                                transition={{ duration: 0.2 }}
                              >
                                <Calendar
                                  className={`w-4 lg:w-5 h-4 lg:h-5 ${event.textColor}`}
                                />
                                <span
                                  className={`font-semibold ${event.textColor} text-sm lg:text-base`}
                                >
                                  {event.eventDate}
                                </span>
                              </motion.div>
                            </motion.div>

                            <motion.div
                              className="flex items-center gap-3"
                              initial={{ opacity: 0, scale: 0.8 }}
                              animate={{ opacity: 1, scale: 1 }}
                              transition={{ delay: 0.3, duration: 0.4 }}
                            >
                              <Badge
                                variant="outline"
                                className={`${event.borderColor} px-3 lg:px-4 py-1 lg:py-2 rounded-lg text-xs lg:text-sm`}
                              >
                                {event.type}
                              </Badge>
                            </motion.div>
                          </div>

                          <motion.div
                            className="space-y-3 lg:space-y-4"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4, duration: 0.5 }}
                          >
                            <motion.h3
                              className="text-black text-lg sm:text-xl lg:text-3xl font-semibold leading-tight"
                              whileHover={{ scale: 1.01, x: 5 }}
                              transition={{ duration: 0.3 }}
                            >
                              {event.title}
                            </motion.h3>

                            <motion.div
                              className="flex flex-row items-center justify-between lg:gap-0"
                              initial={{ opacity: 0, y: 20 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: 0.5, duration: 0.5 }}
                            >
                              <motion.div
                                className="relative"
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                              >
                                <Button
                                  onClick={() => router.push(`/overview/${event.slug}`)}
                                  variant="primary"
                                  size="md"
                                  className="relative overflow-hidden group"
                                >
                                  <motion.div
                                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full"
                                    whileHover={{
                                      translateX: '100%',
                                      transition: { duration: 0.6 },
                                    }}
                                  />
                                  <span className="relative z-10">Request an invite</span>
                                </Button>
                              </motion.div>

                              <motion.button
                                className="w-8 lg:w-9 h-8 lg:h-9 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 transition-colors self-end sm:self-auto relative overflow-hidden"
                                onClick={() => handleDropdownToggle(event.id)}
                                whileHover={{
                                  scale: 1.1,
                                  backgroundColor: '#e5e7eb',
                                  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
                                }}
                                whileTap={{ scale: 0.9 }}
                                animate={{
                                  rotate: openDropdown === event.id ? 180 : 0,
                                }}
                                transition={{ duration: 0.3 }}
                              >
                                <ChevronDown className="w-3 lg:w-4 h-3 lg:h-4" />
                              </motion.button>
                            </motion.div>
                          </motion.div>
                        </motion.div>
                      </CardContent>
                    </Card>

                    {/* Event-specific Detailed Agenda with AnimatePresence */}
                    <AnimatePresence>
                      {openDropdown === event.id && event.agenda.length > 0 && (
                        <motion.div
                          initial={{ opacity: 0, height: 0, scale: 0.95 }}
                          animate={{
                            opacity: 1,
                            height: 'auto',
                            scale: 1,
                            transition: {
                              duration: 0.4,
                              ease: [0.25, 0.46, 0.45, 0.94],
                            },
                          }}
                          exit={{
                            opacity: 0,
                            height: 0,
                            scale: 0.95,
                            transition: {
                              duration: 0.3,
                              ease: 'easeInOut',
                            },
                          }}
                          className="mt-4 overflow-hidden"
                        >
                          <Card
                            className={`${event.bgColor} ${event.borderColor} rounded-2xl border shadow-lg`}
                          >
                            <CardContent className="p-6 lg:p-8">
                              <h3 className="text-black text-2xl lg:text-4xl font-medium mb-6">
                                Agenda
                              </h3>
                              <div className="space-y-0">
                                {event.agenda.map((item, index) => (
                                  <div
                                    key={index}
                                    className="rounded-lg"
                                  >
                                    <div
                                      className={`flex items-center gap-3 lg:gap-4 py-3 lg:py-4 ${index !== 0 && 'border-t border-gray-300'}`}
                                    >
                                      <div
                                        className={`w-10 lg:w-12 h-10 lg:h-12 flex items-center justify-center ${item.iconBg} rounded-md flex-shrink-0 p-2 relative overflow-hidden`}
                                      >
                                        <span className="text-white">
                                          {(() => {
                                            switch (item.icon) {
                                              case 'Calendar':
                                                return <Calendar className="w-5 h-5" />;
                                              case 'Clock':
                                                return <Clock className="w-5 h-5" />;
                                              case 'Users':
                                                return <Users className="w-5 h-5" />;
                                              case 'MessageSquare':
                                                return <MessageSquare className="w-5 h-5" />;
                                              case 'Camera':
                                                return <Camera className="w-5 h-5" />;
                                              case 'Coffee':
                                                return <Coffee className="w-5 h-5" />;
                                              default:
                                                return null;
                                            }
                                          })()}
                                        </span>
                                      </div>
                                      <div className="flex-1 min-w-0">
                                        <div className="text-gray-600 text-xs lg:text-sm font-medium">
                                          {item.time}
                                        </div>
                                        <div
                                          className={`${event.textColor} text-sm lg:text-lg font-medium leading-tight`}
                                        >
                                          {item.title}
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                ))}
                              </div>
                            </CardContent>
                          </Card>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </AnimatePresence>

        {filteredData.length === 0 && (
          <motion.div
            className="text-center py-16"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <motion.div
              className="text-gray-400 text-6xl mb-4"
              animate={{
                rotate: [0, -10, 10, 0],
                scale: [1, 1.1, 0.9, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            >
              <Calendar className="w-16 h-16 text-gray-400" />
            </motion.div>
            <motion.h3
              className="text-2xl font-semibold text-gray-600 mb-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              No events found
            </motion.h3>
            <motion.p
              className="text-gray-500"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              Try adjusting your filters to see more events.
            </motion.p>
          </motion.div>
        )}
      </div>
    </motion.section>
  );
};

// Main App Component - FIXED FILTER LOGIC
export default function CombinedAgendaApp() {
  const [selectedDate, setSelectedDate] = useState('All');
  const [selectedRoundtable, setSelectedRoundtable] = useState('All');

  const getFilteredData = () => {
    let filteredData = agendaData
      .map((dayData) => ({
        ...dayData,
        events: dayData.events.filter((event) => {
          // Date filter logic
          const dateMatch = selectedDate === 'All' || dayData.dateValue === selectedDate;
          
          // Roundtable filter logic
          const roundtableMatch = selectedRoundtable === 'All' || event.roundtableId === selectedRoundtable;
          
          return dateMatch && roundtableMatch;
        }),
      }))
      .filter((dayData) => dayData.events.length > 0);
 
    return filteredData;
  };

  const filteredData = getFilteredData();

  return (
    <motion.div
      className="min-h-screen bg-gray-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto p-4 lg:p-6">
        <motion.div
          className="flex flex-col lg:flex-row gap-6 lg:gap-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <motion.aside
            className="w-full lg:w-[30%] lg:flex-shrink-0"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="lg:sticky lg:top-6">
              <FilterSidebar
                selectedDate={selectedDate}
                setSelectedDate={setSelectedDate}
                selectedRoundtable={selectedRoundtable}
                setSelectedRoundtable={setSelectedRoundtable}
              />
            </div>
          </motion.aside>

          <motion.main
            className="flex-1 min-w-0"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <AgendaSection filteredData={filteredData} />
          </motion.main>
        </motion.div>
      </div>
    </motion.div>
  );
}