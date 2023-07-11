import React from 'react'

function Experience({items}) {
  return (
    <div>
    <h1>Skills</h1>
    <div className='skills'>
    {items.map((item,index)=>(
        <ul key={index}>
            
                <li >Company Name: {item.company}</li>
                <li >Year: {item.year}</li>
                <li >Role: {item.role}</li>
                </ul>
            ))}
        
    </div>
</div>
  )
}

export default Experience