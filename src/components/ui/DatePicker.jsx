'use client';
import React, { useState } from 'react';

const DatePicker = ({ 
  placeholder = "Select Date",
  value,
  onChange,
  disabled = false,
  className = '',
  leftImage,
  ...props
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState(value || '');

  const handleDateChange = (event) => {
    const newValue = event?.target?.value;
    setSelectedDate(newValue);
    if (onChange) {
      onChange(newValue);
    }
  };

  return (
    <div className={`relative w-full ${className}`}>
      <div className="relative">
        {leftImage && (
          <div className="absolute left-3 top-1/2 transform -translate-y-1/2 z-10">
            <img 
              src={leftImage?.src} 
              alt="calendar icon"
              width={leftImage?.width || 20}
              height={leftImage?.height || 20}
              className="w-[20px] h-[20px]"
            />
          </div>
        )}
        <input
          type="datetime-local"
          value={selectedDate}
          onChange={handleDateChange}
          disabled={disabled}
          placeholder={placeholder}
          className={`
            w-full
            pt-[10px] pr-[16px] pb-[10px] pl-[40px]
            bg-button-1
            text-button-2
            text-[16px]
            font-lufga
            font-semibold
            leading-[21px]
            text-center
            border border-solid border-button-2
            rounded-[10px]
            focus:outline-none
            focus:ring-2
            focus:ring-button-2
            focus:ring-opacity-50
            transition-all
            duration-200
            ease-in-out
            ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer hover:bg-blue-200'}
            min-h-[44px] sm:min-h-[48px]
            touch-manipulation
          `?.trim()?.replace(/\s+/g, ' ')}
          {...props}
        />
      </div>
    </div>
  );
};

export default DatePicker;