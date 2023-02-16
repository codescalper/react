import logo from './logo.svg';
import './App.css';
import Card from "./Card";

import Heading from "./Heading"

function Hello() {
  return <h1>Hello World</h1>;
 }
function App() {
 return (
  <div>
    <Heading firstName="Mayank" Dish="PavBhaji" />
    <h1>Task: Add three Card elements</h1>
    <Card  h2="First card's h2" h3="First card's h3" />
    <Card  h2="Third card's h2" h3="Third card's h3" />
 </div>
  );
}

export default App;
