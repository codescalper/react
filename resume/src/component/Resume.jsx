import React from 'react'
import './style.css'
function Resume({name}) {
  return (
    <div className='name'>
        <h1>Resume <span>{name}</span> </h1> 
    </div>
  )
}

export default Resume