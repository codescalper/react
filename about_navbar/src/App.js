import logo from './logo.svg';
import './App.css';
import {Routes,Route,Link} from 'react-router-dom';
import About from "./About";
import Contact from "./Contact";

function App() {
  return (
    <div className="App">
       <nav className="NAVBAR">
        <Link to ="/about-me" className="nav-item">About</Link>
        <Link to ="/contact-me" className="nav-item">Contact</Link>
       </nav>
      <Routes>
      <Route path="/about-me" element={<About />}/>
      <Route path="/contact-me" element={<Contact />}/>
      </Routes>
    </div>
  );
}

export default App;
