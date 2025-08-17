import { useState, useEffect, useRef } from 'react';

const VideoHero = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      const handleLoadedData = () => {
        setIsLoading(false);
        console.log('Video loaded successfully');
      };

      const handleError = (error) => {
        console.error('Video error:', error);
        setHasError(true);
        setIsLoading(false);
      };

      video.addEventListener('loadeddata', handleLoadedData);
      video.addEventListener('error', handleError);

      return () => {
        video.removeEventListener('loadeddata', handleLoadedData);
        video.removeEventListener('error', handleError);
      };
    }
  }, []);

  return (
    <div className="relative w-[376px] md:w-[600px] aspect-video overflow-hidden z-[0] rounded-xl border-2">
      {/* Video Container with Mask */}
      <div className="absolute inset-0 rounded-xl">
        <video
          ref={videoRef}
          className="w-full h-full object-cover rounded-xl scale-105"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
        >
          <source src="/heroVideo.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Multi-layer gradient effects for better blending */}
        <div className="absolute inset-0 rounded-xl">
          {/* <div className="absolute inset-0 bg-gradient-to-r from-[#2146be]/90 via-transparent to-[#1e7a85]/90" />
          
          <div className="absolute inset-0 bg-gradient-to-t from-[#3e32bc]/90 via-transparent to-[#3e32bc]/90" />
          
          <div className="absolute inset-0 bg-radial-fade pointer-events-none" /> */}
        </div>
      </div>
    </div>
  );
};

export default VideoHero;