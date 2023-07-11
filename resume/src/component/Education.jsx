import React from 'react'

function Education({items}) {
  return (
    <div>
    <h1>Education</h1>
    <div className='education'>
        <ul>
            {items.map((item,index)=>(
                <li key={index}>{item}</li>
            ))}
        </ul>
    </div>
</div>
  )
}

export default Education