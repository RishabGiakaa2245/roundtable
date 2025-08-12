import React, { useRef, useEffect } from 'react'
import Image from 'next/image'

const PostEventHighlights = () => {
  const scrollContainerRef = useRef(null)
  const autoScrollRef = useRef(null)

  // Main gallery images data - all same size
  const mainGalleryImages = [
    {
      id: 1,
      src: "/images/img_rectangle_160894.png",
      alt: "Past Event 1"
    },
    {
      id: 2,
      src: "/images/img_rectangle_160895.png",
      alt: "Past Event 2"
    },
    {
      id: 3,
      src: "/images/img_rectangle_160896.png",
      alt: "Past Event 3"
    },
    {
      id: 4,
      src: "/images/img_rectangle_160897.png",
      alt: "Past Event 4"
    },
    {
      id: 5,
      src: "/images/img_rectangle_160898.png",
      alt: "Past Event 5"
    },
    // Duplicate images for infinite scroll effect
    {
      id: 6,
      src: "/images/img_rectangle_160894.png",
      alt: "Past Event 1 Copy"
    },
    {
      id: 7,
      src: "/images/img_rectangle_160895.png",
      alt: "Past Event 2 Copy"
    },
    {
      id: 8,
      src: "/images/img_rectangle_160896.png",
      alt: "Past Event 3 Copy"
    }
  ]

  // Bottom gallery videos data
  const bottomGalleryVideos = [
    {
      id: 1,
      src: "/Sequence 01.mp4",
      alt: "Bottom Event Video 1"
    },
    {
      id: 2,
      src: "/Sequence 02.mp4",
      alt: "Bottom Event Video 2"
    },
    {
      id: 3,
      src: "/Sequence 03.mp4",
      alt: "Bottom Event Video 3"
    }
  ]

  // Navigation buttons data
  const navigationButtons = [
    {
      id: 'prev',
      ariaLabel: 'Previous images',
      isNext: false
    },
    {
      id: 'next',
      ariaLabel: 'Next images',
      isNext: true
    }
  ]

  // Auto-scroll functionality
  useEffect(() => {
    const container = scrollContainerRef.current
    if (!container) return

    const startAutoScroll = () => {
      autoScrollRef.current = setInterval(() => {
        const scrollAmount = 1
        container.scrollLeft += scrollAmount

        // Reset scroll position for infinite effect
        if (container.scrollLeft >= container.scrollWidth / 2) {
          container.scrollLeft = 0
        }
      }, 50)
    }

    const stopAutoScroll = () => {
      if (autoScrollRef.current) {
        clearInterval(autoScrollRef.current)
        autoScrollRef.current = null
      }
    }

    // Start auto-scroll
    startAutoScroll()

    // Pause on hover
    container.addEventListener('mouseenter', stopAutoScroll)
    container.addEventListener('mouseleave', startAutoScroll)

    // Cleanup
    return () => {
      stopAutoScroll()
      container.removeEventListener('mouseenter', stopAutoScroll)
      container.removeEventListener('mouseleave', startAutoScroll)
    }
  }, [])

  // Manual scroll functions
  const scrollLeft = () => {
    const container = scrollContainerRef.current
    if (container) {
      container.scrollBy({
        left: -280,
        behavior: 'smooth'
      })
    }
  }

  const scrollRight = () => {
    const container = scrollContainerRef.current
    if (container) {
      container.scrollBy({
        left: 280,
        behavior: 'smooth'
      })
    }
  }

  // Arrow icon component
  const ArrowIcon = ({ isNext }) => (
    <svg 
      width="16" 
      height="16" 
      viewBox="0 0 24 24" 
      fill="none" 
      className={`text-global-5 ${!isNext ? 'rotate-180' : ''}`}
    >
      <path 
        d="M9 18L15 12L9 6" 
        stroke="currentColor" 
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
    </svg>
  )

  return (
    <section className="w-[100vw] bg-[linear-gradient(90deg,#0575e6_0%,#5336f8_50%,#00f260_100%)] px-4 sm:px-6 lg:px-8 py-16 md:py-14 mt-16 md:mt-24">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <p className="text-sm md:text-base font-bold uppercase text-global-5 mb-4 md:mb-6 tracking-wider">
            Past Glimpse
          </p>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-normal text-global-5 leading-tight">
            Explore our Past Event Glimpse
          </h2>
        </div>

    {/* Scrollable Image Gallery */}
<div className="relative mb-4 md:mb-4 overflow-hidden">
  <div
    className="flex gap-3 md:gap-5 animate-scroll-left-past"
    style={{ width: 'max-content' }}
  >
    {/* Repeat the gallery twice for seamless infinite scroll */}
    {[...mainGalleryImages, ...mainGalleryImages].map((image, index) => (
      <div
        key={`${image.id}-${index}`}
        className="relative flex-shrink-0 overflow-hidden rounded-lg md:rounded-2xl"
      >
        <Image
          src={image.src}
          alt={image.alt}
          width={200}
          height={150}
          className="w-32 h-24 sm:w-40 sm:h-28 md:w-56 md:h-40 lg:w-64 lg:h-44 object-cover"
        />
      </div>
    ))}
  </div>
</div>


        {/* Navigation Controls */}
        {/* <div className="flex justify-center mb-12 md:mb-16">
          <div className="flex items-center gap-4 bg-global-5 backdrop-blur-sm border border-global-4/30 rounded-full px-6 py-3 shadow-lg">
            <button 
              onClick={scrollLeft}
              className="bg-global-1 hover:bg-gray-800 rounded-full p-3 md:p-4 transition-colors duration-200"
              aria-label="Previous images"
            >
              <ArrowIcon isNext={false} />
            </button>
            <button 
              onClick={scrollRight}
              className="bg-global-1 hover:bg-gray-800 rounded-full p-3 md:p-4 transition-colors duration-200"
              aria-label="Next images"
            >
              <ArrowIcon isNext={true} />
            </button>
          </div>
        </div> */}

        {/* Bottom Video Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {bottomGalleryVideos.map((video, index) => (
            <div 
              key={video.id}
              className={`relative overflow-hidden rounded-lg md:rounded-2xl bg-global-4 ${
                index === 2 ? 'sm:col-span-2 lg:col-span-1' : ''
              }`}
            >
              <video
                src={video.src}
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-24 sm:h-28 md:h-32 lg:h-40 object-cover rounded-md md:rounded-xl"
                aria-label={video.alt}
              >
                <source src={video.src} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default PostEventHighlights