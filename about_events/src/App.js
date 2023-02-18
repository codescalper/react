import logo from './logo.svg';
import './App.css';
import Button from "./Button"
import ModeToggler from './ModeToggler';
import Child from './Child';

// function App() {
//   return (
//     <div>
//     <Button />
//     <ModeToggler />
//     </div>
//   );
// }


function handleClick() { 
  let randomNum = Math.floor(Math.random() * 3) + 1;
  console.log(randomNum);
  let userInput = prompt('type a number'); 
  alert(`Computer number: ${randomNum}, Your guess: ${userInput}`);
}


function App() {
  const date = new Date();
return (
  <div>
    <h1>Task: Add a button and handle a click event</h1>
    <button onClick={handleClick}>Guess the number between 1 and 3.</button>
    

    {/* This code is for data event/data flow */}
    <Child message={date.toLocaleTimeString()}/>  {/** This will show the time when the app is render */}

  </div>

);
}

export default App;
