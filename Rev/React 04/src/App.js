import React from 'react'
import Video from './components/Video'
import './App.css'
import vid from './data/data'
import List from './components/List'
import PlayButton from './components/PlayButton'
import Counter from './components/Counter'
import Assignment from './components/Assignment'


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
    <Video title='Namaste Guys' views='5460' verified={true} time='2:47' />
    {vid.map((video) => (
        <Video
          key={video.id}
          title={video.title}
          views={video.views}
          time={video.time}
          channel={video.channel}
          verified={video.verified}
          id={video.id}
        >
          <PlayButton
            onPlay={() => console.log('Playing..',video.title)}
            onPause={() => console.log('Paused..',video.title)}
          >
            {video.title}
          </PlayButton>
        </Video>
      ))}

    <div style={{clear:'both'}}>
      {/* <PlayButton  onPress={()=>console.log('Play')}>Play</PlayButton>
      <PlayButton onPress={()=>alert('Paused')}>Pause</PlayButton> */}

      {/* Now Adding Play and Pause functionality in on button */}
      {/* <PlayButton onPlay={()=>console.log('Playing')} onPause={()=>{console.log("Pausing")}}>Hello</PlayButton> */}
      
    </div>

    <Counter></Counter>
    <Assignment/>
    </div>
  ) 
}

export default App
