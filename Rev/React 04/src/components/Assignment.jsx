import React, { useState } from 'react'
import './Assignment.css'
function Assignment() {

    const [imgSrc,setImgSrc] = useState('https://picsum.photos/160/90')

    let handleHover= () =>{
        setImgSrc('https://picsum.photos/320/180')
    }

    let handleHover2= () =>{
        setImgSrc('https://picsum.photos/160/90')
    }

    let handleClick = () =>{
        alert('Clicked Twice')
    }

    let handleKeyDown = (e) =>{
        e.key =='Enter'? console.log('Key Pressed Enter'): console.log("someother key is pressed");
        
    }


  return (
    <div>
        <img onMouseOver={handleHover} onMouseOut={handleHover2} src={imgSrc}/>
        <button onClose={()=>{console.log('a')}} onDoubleClick={handleClick} onClick={()=>console.log('Clicked Once')}>Click me!</button>
        <input onKeyDown={handleKeyDown} onPaste={()=>alert("Text Pasted")} type="text" name="input" onFocus={()=>console.log('Focus on TEXT box')} onBlur={()=>console.log('Focus on BLUR')} id=""/>
        <div>
            <p onCopy={()=>alert("Text Copied")} onCut={()=>alert("Text CUT")} style={{color:'white'}}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dignissimos officiis sed, corporis, laudantium expedita recusandae qui accusamus totam dolorem fuga ducimus ipsam libero? Libero voluptatibus officiis nobis repudiandae dicta, repellendus pariatur velit debitis quam, iure reprehenderit soluta iusto recusandae eligendi ullam ratione deserunt ut commodi harum aliquid odio in! Dolorum hic perspiciatis laborum quae repellat quo inventore labore, voluptates velit, quia alias consectetur dicta cumque ut nesciunt. Ullam veniam assumenda dolorem quisquam a! Suscipit temporibus corporis, iure voluptate mollitia exercitationem nesciunt debitis enim beatae totam deleniti ea cupiditate quis ducimus non harum officia veniam? Iure itaque autem sapiente iste blanditiis dolorum, sit repellendus expedita pariatur doloremque iusto perferendis doloribus exercitationem, accusantium, soluta eaque suscipit. Eos, ad quam autem consectetur ipsam dicta ut facere?</p>
        </div>
    </div>
    
  )
}

export default Assignment