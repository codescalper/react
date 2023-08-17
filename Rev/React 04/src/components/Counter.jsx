import React from 'react'
import { useState } from 'react';

function Counter() {
    const [number,setNumber] = useState(0);
    let handleClick = (e) =>{
        e.stopPropagation();
        setNumber(number=>number+1)
        console.log(number);
    }
    let handleClick2 = (e) =>{
      e.stopPropagation();
      if(number<=0){
        return;
      }else{
      setNumber(number=>number-1)
      console.log(number);
      }
  }

  return (
    <div>
        <h1 style={{color:'white'}}>{number}</h1>
        <div>
        <button onClick={handleClick}>Add</button>
        <button onClick={handleClick2}>Subract</button>
        </div>
    </div>
  )
}

export default Counter