import React, { useState, useRef, useEffect } from 'react';
import pause from '../assets/icons/pause-icon.svg'
import play from '../assets/icons/play-icon.svg'
import Music from '../assets/music/chaplean.mp3'


const MusicPlayer = () => {

  const [isPlaying, setIsPlaying] = useState(false);


  const audioRef = useRef(null);



  const togglePlay = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };


  const stop = () => {
    audioRef.current.pause();
    audioRef.current.currentTime = 0;
    setIsPlaying(false);
  };


  return (
    <div  className='min-w-[270px] p-6 flex justify-between items-center bg-blueSecond border-[4px] rounded-[10px] border-blueColor '>

      <audio ref={audioRef} src={Music} />
      <div className="textplayer flex flex-col">
        <h2 className='text-[16px] font-pop text-whiteColor'>Charlie Chapin</h2>
        <span className='text-[13px] text-whiteColor'>Piano</span>
      </div>
      <div>
        <button className='w-[55px] h-[55px] flex justify-center items-center bg-blueColor p-2 rounded-[16px]' onClick={togglePlay}>{isPlaying ? <img src={pause} alt="pause" /> : <img src={play} alt="pause" />}</button>

      </div>
    </div>
  );
};

export default MusicPlayer;
