import './Video.css';
// function Video(props) {
  // console.log(props) //will give you an object
function Video({title,channel='Mayank Singh',views,time,verified}) { // Always destructre the object here //Channel name is defualt 

  // if(verified){
  //     channel = 'Mayank Singh ✅';
  // }else{
  //   channel = 'Mayank Singh'
  // }
  return (
      <>
      <div className='container'>
      <div className="pic">
      <img src="https://picsum.photos/160/90"/>
      </div>
      <div className="title">{title}</div>
     {/* {verified?  <div className="channel">{channel}</div> :  <div className="channel">{channel + "✅"}</div> } */} {/*using ternary operator*/}
      {verified?  <div className="channel">{channel}</div> :  <div className="channel">{channel + "✅"}</div> } {/*another method of applying */}
      <div className="views">
        {views} views <span>.</span> {time}
      </div>
      </div>
      </>
  );
}

export default Video;