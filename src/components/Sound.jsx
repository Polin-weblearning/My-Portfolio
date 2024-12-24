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
      <button
        onClick={togglePlay}
        className={`px-6 py-3 text-white ${
          isPlaying ? "bg-red-500 hover:bg-red-600" : "bg-cyan-500 hover:bg-cyan-600"
        } rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-300 transition-all`}
      >
        {isPlaying ? "Pause Sound" : "Play Sound"}
      </button>
    </div>
  );
};

export default Sound;
