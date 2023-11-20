
import React, { useRef, useEffect, useState } from 'react';
import Typography from '../components/Typography';

const LoopVideo: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const videoElement = videoRef.current;

    const handleMouseEnter = () => {
      if (videoElement) {
        videoElement.play();
      }
      setIsHovered(true);
    };

    const handleMouseLeave = () => {
      if (videoElement) {
        videoElement.pause();
        videoElement.currentTime = 0;
      }
      setIsHovered(false);
    };

    if (videoElement) {
      videoElement.addEventListener('loadedmetadata', () => {
        videoElement.loop = false;
      });

      videoElement.addEventListener('mouseenter', handleMouseEnter);
      videoElement.addEventListener('mouseleave', handleMouseLeave);
    }

    return () => {
      if (videoElement) {
        videoElement.removeEventListener('loadedmetadata', () => {});
        videoElement.removeEventListener('mouseenter', handleMouseEnter);
        videoElement.removeEventListener('mouseleave', handleMouseLeave);
      }
    };
  }, []);

  return (
    <div style={{ position: 'relative' }}>
      <video
        ref={videoRef}
        autoPlay={isHovered}
        muted
        style={{ width: '100%', objectFit: 'cover' }}
      >
        <source src="your-video-file.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div
        style={{
          position: 'absolute',
          left: 0,
          right: 0,
          top: 0,
          bottom: 50,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'common.white',
          zIndex: 2, // Adjust the z-index value as needed
          opacity: isHovered ? 0 : 1,
          pointerEvents: 'none', // Allow interaction with the video even when the title is present
        }}
      >
        <Typography
          component="h3"
          variant="h6"
          color="inherit"
        >
          Animation
        </Typography>
      </div>
    </div>
  );
};

export default LoopVideo;
