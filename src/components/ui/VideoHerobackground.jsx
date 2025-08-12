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
    <div className="absolute inset-0 overflow-hidden z-[0]">
      {/* Video Background */}
      <video
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-center scale-125 object-cover
"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
      >
        <source src="/Animating_a_Single_Frame.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Glass/Blur Effect */}
      <div className="absolute inset-0 backdrop-blur-[60px] bg-black/20"></div>

      </div>
  );
};

export default VideoHero;