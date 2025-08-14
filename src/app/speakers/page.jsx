import React from 'react'
import Hero from '@/components/speakers/Hero'
import Visionary from '@/components/Visionary'

const page = () => {
  return (
    <div className="flex flex-col justify-start items-center w-full bg-[#ffffff]">
      {/* Hero Section */}
        <Hero />
        {/* Event Cards Section */}
        <Visionary />

    </div>
  )
}

export default page