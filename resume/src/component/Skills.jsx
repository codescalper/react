import React from 'react'
import './style.css'

function Skills({items}) {
  return (
    <div>
    <h1>Skills</h1>
    <div className='skills'>
        <ul>
            {items.map((item,index)=>(
                <li key={index}>{item}</li>
            ))}
        </ul>
    </div>
</div>
  )
}

export default Skills