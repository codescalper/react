import React from 'react'
import './PlayButton.css'



function PlayButton({onPlay,onPause,children}) {
  let currState = true;     // don't use this approach
  let handleClick = () =>{
   
    if(currState) onPlay();
    else onPause();
    currState=!currState;
} 
  return (
   <button onClick={handleClick}>{children}</button>
  )
}

export default PlayButton