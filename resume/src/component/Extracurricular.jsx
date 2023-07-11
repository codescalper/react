import React from 'react'
import './style.css'
function Extracurricular({items}) {
  return (
    <div>
        <h1>Extracurricular</h1>
        <div className='extra'>
            <ul>
                {items.map((item,index)=>(
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
    </div>
  )
}

export default Extracurricular