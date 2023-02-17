
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import About from './pages/About';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Services from './pages/Services';
//import image from "./assets/a1.jpg";
//import Demo from './components/Demo';

function App() {
   return (
    <div className= "App">
     <BrowserRouter>
     <Routes>
      <Route path="/" element= {<Home />} />
      <Route path="/about" element= {<About />} />
      <Route path="/contact" element= {<Contact />} />
      <Route path="/services" element= {<Services />} />
      

     </Routes>
     </BrowserRouter> 
    </div>
  );
}

export default App;

