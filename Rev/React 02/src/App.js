import React from 'react'
import Video from './components/Video'
import './App.css'

const video1={
  title:'Hello World',
   views:'3000',
    time:'3:00'
}

function App() {
  return (
    <div className='App'>
     
    {/* <Video title='Hello World' views='3000' time='3:00' />  */}
    {/* Let's say that there is an object which you want to pass as  prop you can do that by using spread operator */}

    <Video {...video1} /> {/* Using Spread Operator */}
    <Video title='Namaste Guys' views='5460' time='2:47' />
    
    </div>
  )
}

export default App

// export default function Gallery() {
//   // ...
// }

// // ✅ Declare components at the top level
// function Profile() {
//   // ...
// }