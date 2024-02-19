
import React, { useRef, useEffect } from 'react';

const AudioPlayer = ({ src, onEnded }) => {
  const audioRef = useRef(null);

  useEffect(() => {
    const audio = audioRef.current;

    const handleEnded = () => {
      onEnded();
    };

    audio.addEventListener('ended', handleEnded);

    return () => {
      audio.removeEventListener('ended', handleEnded);
    };
  }, [onEnded]);

  useEffect(() => {
    
    const audio = audioRef.current;
    
    
    audio.currentTime = 0;


    audio.load();
    audio.play().catch((error) => console.error('Error playing audio:', error));

   
  }, [src]);

  return (
    <div className="audio-player-container">
      <audio ref={audioRef} controls>
        <source src={src} type="audio/mp3" />
        Your browser does not support the audio element.
      </audio>
    </div>
  );
};

export default AudioPlayer;
