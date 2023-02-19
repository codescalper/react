import logo from './logo.svg';
import './App.css';
import mayank from './assets/images/pfp.jpg';



const MyVideo = () => {
  return (
    <ReactPlayer url='https://youtu.be/W8lMMzYtatw' />
  );
};

function App() {
  const onlineImg = "https://cdn.discordapp.com/attachments/1037708259152367677/1074984214912565258/Untitled-01.png";
  return (
    <div className="App">

      {/* First method to add image in react */}
      <img src={mayank} height={200} width={200} alt="My profile picture" />

      {/* Another way of adding image using require attribute */}
      <img height={200} width={200} alt="My profile picture" require={"/assets/images/pfp.jpg"}/>

      {/* ANother way of adding image and the image can be from a website */}
      <img height={200} width={200} alt="Photo from discord" require={onlineImg} />

      <MyVideo />

    </div>
  );
}

export default App;
