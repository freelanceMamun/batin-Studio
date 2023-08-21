import React, { useState, useEffect, useRef } from 'react';
import ReactPlayer from 'react-player';
import { Player } from 'video-react';

const VideoPlayer = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isPlaying, setIsPlaying] = useState(true);
  const videoRef = useRef(null);
  const handleVideoClick = () => {
    setIsPlaying(true);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };
  const cursorStyle = {
    cursor: isHovered ? 'url(./soundplay.png), auto' : 'default',
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <>
      <div
        className="custom-cursor"
        style={{ width: '100%', borderRadius: '36px' }}
      >
        {isPlaying ? (
          //    <ReactPlayer
          //    ref={videoRef}
          //    url="video/video.mp4"
          //    playing={true}
          //    autoplay={true}
          //    controls

          //    width="100%"
          //    height="100%"
          //  />

          <video
            autoPlay
            className="vid"
            title="batin studio"
            webkit-playsinline={true}
            playsinline={true}
            ref={videoRef}
            loop
            muted={true}
            style={{
              width: '100%',
              height: '650px',
              objectFit: 'cover',
              cursor: 'url(images/soundplay.png), auto',
              borderRadius: '36px',
            }}
            onClick={handleVideoClick}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <source src="video/video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        ) : (
          <div
            style={{
              width: '300px',
              height: '300px',
              backgroundImage: 'url(./soundplay.png)',
              backgroundSize: 'cover',
              cursor: 'pointer',
              zIndex: '10',
              position: 'absolute',
              top: '50%',
              left: '6%',
            }}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            {' '}
          </div>
        )}
      </div>
    </>
  );
};

export default VideoPlayer;
