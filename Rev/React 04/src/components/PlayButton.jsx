import React from 'react'
import './PlayButton.css'
import { useState } from 'react';


function PlayButton({onPlay,onPause,children}) {
  const [play,setPlay] = useState(true);     
  let handleClick = () =>{
   
    if(play) onPlay();
    else onPause();
    setPlay(!play);
} 
  return (
   <button onClick={handleClick}>{children}:{play ? '▶️':'⏸️' } </button>
  )
}

export default PlayButton