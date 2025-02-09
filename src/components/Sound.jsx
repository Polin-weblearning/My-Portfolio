import React, { useState, useEffect, useRef } from "react"; 
import Sounds from "../assets/audio.mp3"; 

const Sound = () => {
  const audioRef = useRef(new Audio(Sounds)); 
  const [isPlaying, setIsPlaying] = useState(false); 

  const togglePlay = () => {
    const audio = audioRef.current;
    if (isPlaying) {
      audio.pause(); 
    } else {
      audio.play(); 
    }
    setIsPlaying(!isPlaying); 
  };

  useEffect(() => {
    const audio = audioRef.current;

    const handleAudioEnd = () => setIsPlaying(false);
    audio.addEventListener("ended", handleAudioEnd);

    return () => {
      audio.removeEventListener("ended", handleAudioEnd);
      audio.pause();
      audio.currentTime = 0; 
    };
  }, []);

  return (
    <div className="">
      <a
        onClick={togglePlay}
      >
        {isPlaying ? "Pause Sound" : "Play Sound"}
      </a>
    </div>
  );
};

export default Sound;
