import './Video.css';
// function Video(props) {
  // console.log(props) //will give you an object
function Video({title,channel="Mayank Singh",views,time}) { // Always destructre the object here //Channel name is defualt 
  return (
      <>
      <div className='container'>
      <div className="pic">
      <img src="https://picsum.photos/160/90"/>
      </div>
      <div className="title">{title}</div>
      <div className="channel">{channel}</div>
      <div className="views">
        {views} views <span>.</span> {time}
      </div>
      </div>
      </>
  );
}

export default Video;