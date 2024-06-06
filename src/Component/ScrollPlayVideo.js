import React, { useEffect, useRef, useState } from 'react';

const ScrollPlayVideo = ({ videoUrl, width = '-webkit-fill-available', height = '650' }) => {
  const videoContainerRef = useRef(null);
  const playerRef = useRef(null);
  const hasPlayedOnceRef = useRef(false);

  useEffect(() => {
    const onPlayerReady = (event) => {
      try {
        const savedTime = sessionStorage.getItem(videoUrl) || 0;
        event.target.seekTo(parseFloat(savedTime));
        playerRef.current = event.target;
        // Pause the video initially
        event.target.pauseVideo();
      } catch (error) {
        console.error('Error during onPlayerReady:', error);
      }
    };

    const onPlayerStateChange = (event) => {
      try {
        if (event.target && typeof event.target.getCurrentTime === 'function') {
          if (event.data === window.YT.PlayerState.PAUSED || event.data === window.YT.PlayerState.ENDED) {
            const currentTime = event.target.getCurrentTime();
            sessionStorage.setItem(videoUrl, currentTime);
          }
        } else {
          console.error('Invalid player instance in onPlayerStateChange');
        }
      } catch (error) {
        console.error('Error during onPlayerStateChange:', error);
      }
    };

    const createPlayer = () => {
      try {
        const videoId = new URL(videoUrl).searchParams.get('v');
        if (!videoId) {
          console.error('Invalid YouTube URL');
          return;
        }

        const playerInstance = new window.YT.Player(`player-${videoId}`, {
          videoId,
          width,
          height,
          playerVars: {
            controls: 0, // Hide controls
            rel: 0      // Disable related videos
          },
          events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
          }
        });
        playerRef.current = playerInstance;
      } catch (error) {
        console.error('Error during createPlayer:', error);
      }
    };

    const loadYouTubeAPI = () => {
      if (!window.YT) {
        const tag = document.createElement('script');
        tag.src = 'https://www.youtube.com/iframe_api';
        const firstScriptTag = document.getElementsByTagName('script')[0];
        firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

        window.onYouTubeIframeAPIReady = createPlayer;
      } else {
        createPlayer();
      }
    };

    loadYouTubeAPI();

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (playerRef.current && typeof playerRef.current.playVideo === 'function') {
            if (entry.isIntersecting) {
              if (!hasPlayedOnceRef.current) {
                playerRef.current.playVideo();
                hasPlayedOnceRef.current = true;
              }
            } else {
              playerRef.current.pauseVideo();
            }
          }
        });
      },
      {
        threshold: 0.5
      }
    );

    if (videoContainerRef.current) {
      observer.observe(videoContainerRef.current);
    }

    const handleVisibilityChange = () => {
      if (document.visibilityState === 'hidden') {
        sessionStorage.removeItem(videoUrl);
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      if (observer && videoContainerRef.current) {
        observer.unobserve(videoContainerRef.current);
      }
      if (playerRef.current) {
        playerRef.current.destroy(); // Properly destroy the player
        playerRef.current = null; // Ensure player reference is cleared
      }
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, [videoUrl, width, height]);

  const videoId = new URL(videoUrl).searchParams.get('v');
  return (
    <div className='bkblue mt-5 mb-4' ref={videoContainerRef}>
      {videoId ? <div id={`player-${videoId}`} style={{ width, height }}></div> : <p>Invalid YouTube URL</p>}
    </div>
  );
};

export default ScrollPlayVideo;
