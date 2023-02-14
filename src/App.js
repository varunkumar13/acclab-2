
import './App.css';
import image from "./assets/a1.jpg";
import Demo from './components/Demo';

function App() {
   var x=20;
   var text;

   if (x === 10)  {
   text= "equal";
   } else {
    text= "not equal";
   }

  return (
    <div className="App">
      <h1>HELLO WORLD</h1>
      <h2>{88+66}</h2>
      <img src={image} alt="pic" width="50%"/>

      <h2>{text}</h2>
      <h3>{x>=10 ? " greater then or equal to 10": "not equal to 10" } </h3>
      <Demo  para={text}/>
    </div>
  );
}

export default App;

