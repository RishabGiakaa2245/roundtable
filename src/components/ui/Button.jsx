'use client';
import React from 'react';

const Button = ({
  children,
  onClick,
  variant = 'primary',
  size = 'md',
  disabled = false,
  type = 'button',
  className = '',
  fullWidth = false,
  loading = false,
  ...props
}) => {
  const variants = {
    primary: 'bg-[linear-gradient(90deg,#0575e6_0%,#5336f8_50%,#00f260_100%)] text-white rounded-[25px] md:rounded-[30px] transition-all duration-500 ease-in-out focus:ring-blue-500',
    secondary: 'bg-[#ffffff] text-[#000000] font-extrabold rounded-[11px] md:rounded-[22px] hover:bg-[#000000] hover:text-[#0575e6] transition-all duration-300 focus:ring-blue-500',
    outline: 'border border-gray-300 text-gray-700 bg-transparent hover:bg-gray-50 active:bg-gray-100 focus:ring-gray-300',
    ghost: 'text-gray-700 bg-transparent hover:bg-gray-100 active:bg-gray-200 focus:ring-gray-300',
    danger: 'bg-red-600 text-white hover:bg-red-700 active:bg-red-800 focus:ring-red-500',
    ternary: ' bg-transparent border border-white rounded-[25px] md:rounded-[30px] hover:bg-white hover:text-black  transition-all duration-500 ease-in-out'
  };

  const sizes = {
    xs: 'px-2 py-1 text-xs sm:px-2.5 sm:py-1.5 sm:text-xs',
    sm: 'px-2.5 py-1.5 text-xs sm:px-3 sm:py-2 sm:text-sm md:text-sm',
    md: variant === 'secondary' 
      ? 'px-[12px] md:px-[20px] py-[8px] md:py-[12px] text-[11px] md:text-[14px] leading-[14px] md:leading-[18px]' 
      : 'px-3 py-2 text-sm sm:px-4 sm:py-2.5 sm:text-base md:text-base',
    lg: 'px-4 py-2.5 text-base sm:px-5 sm:py-3 sm:text-lg md:text-lg lg:text-xl',
    xl: 'px-5 py-3 text-lg sm:px-6 sm:py-4 sm:text-xl md:text-xl lg:text-2xl'
  };

  // Use custom border radius for secondary and primary variants, default for others
  const responsiveRadius = (variant === 'secondary' || variant === 'primary' || variant === 'ternary' ) ? '' : 'rounded sm:rounded-md md:rounded-lg';
  const responsiveFocus = 'focus:ring-2 sm:focus:ring-2 md:focus:ring-4';

  const LoadingSpinner = () => (
    <svg
      className="animate-spin h-4 w-4 sm:h-5 sm:w-5 mr-2 sm:mr-3"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
    >
      <circle
        className="opacity-25"
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        strokeWidth="4"
      />
      <path
        className="opacity-75"
        fill="currentColor"
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
      />
    </svg>
  );

  return (
    <button
      type={type}
      onClick={disabled || loading ? undefined : onClick}
      disabled={disabled || loading}
      className={`
        ${responsiveRadius}
        transition-all
        duration-200
        ease-in-out
        focus:outline-none
        ${responsiveFocus}
        focus:ring-opacity-50
        ${variants?.[variant]}
        ${sizes?.[size]}
        ${fullWidth ? 'w-full' : ''}
        ${disabled || loading ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer hover:scale-105 active:scale-95'}
        ${loading ? 'relative' : ''}
        font-medium
        inline-flex
        items-center
        justify-center
        min-h-[44px] sm:min-h-[48px]
        touch-manipulation
        ${className}
      `?.trim()?.replace(/\s+/g, ' ')}
      aria-disabled={disabled || loading}
      aria-busy={loading}
      {...props}
    >
      {loading && <LoadingSpinner />}
      <span className={loading ? 'opacity-75' : ''}>{children}</span>
    </button>
  );
};

export default Button;