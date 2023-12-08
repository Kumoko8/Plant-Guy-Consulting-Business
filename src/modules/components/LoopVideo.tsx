import React, { useRef, useEffect, useState } from 'react';
import Typography from '../components/Typography';

interface LoopVideoProps {
  videoSource: string;
  title?: string; // Add a prop for the title
}

const LoopVideo: React.FC<LoopVideoProps> = ({ videoSource, title }) => {
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
        videoElement.loop = false; // Set loop to false initially
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
    <div
      style={{ position: 'relative' }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <video
        ref={videoRef}
        autoPlay={isHovered}
        muted
        style={{ width: '100%', objectFit: 'cover' }}
        loop
      >
        <source src={videoSource} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {title && !isHovered && (
        <div
          style={{
            position: 'absolute',
            left: 0,
            right: 0,
            top: 0,
            bottom: 0,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'common.white',
            zIndex: 12,
          }}
        >

          <Typography
            component="h3"
            variant="h5"
            color="black"
            style={{ zIndex: 2, position: 'relative', marginBottom: '0px', textAlign: 'center'}}
          >
            {title}
            <div style={{borderBottom: '4px solid white', paddingBottom: '14px', backgroundColor: 'transparent', width: '7%', margin: '0 auto', display: 'block'}}/>
            
            
          </Typography>
        </div>
      )}
    </div>
  );
};

export default LoopVideo;


