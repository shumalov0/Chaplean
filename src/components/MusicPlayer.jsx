import React, { useState, useRef } from 'react';

const MusicPlayer = () => {
  // State to track if the audio is playing
  const [isPlaying, setIsPlaying] = useState(false);

  // Reference to the audio element
  const audioRef = useRef(null);

  // Function to handle play/pause button click
  const togglePlay = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  // Function to handle stop button click
  const stop = () => {
    audioRef.current.pause();
    audioRef.current.currentTime = 0;
    setIsPlaying(false);
  };

  return (
    <div>
      <h2>Music Player</h2>
      <audio ref={audioRef} src="path_to_your_audio_file.mp3" />
      <div>
        <button onClick={togglePlay}>{isPlaying ? 'Pause' : 'Play'}</button>
        <button onClick={stop}>Stop</button>
      </div>
    </div>
  );
};

export default MusicPlayer;
