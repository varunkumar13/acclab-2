import React from "react";
import Demo2 from "./Demo2";
import MadeGoal from "./Madegoal";
import MissedGoal from "./MissedGoal";
// drilling
const Demo = (props) => {
//const bool = false;
const x=10;
const cars = [ "Ford","bmw","benz","audi","skoda","sora","nano"]
//if (bool) {
   // return <MadeGoal />;
//}
 //return <MissedGoal />;

    const handleClick =(x,y) => {
        alert(x+y)
    };
    return <div>
    
     Demo component
    <h1> {props.para}</h1>

    <ol>
        {cars.map ((car,i)=> (
            <li key={i}>{car}</li>
        ))}
    </ol>
    <button onClick={ () => handleClick(10,50)}>Click</button>
    <button onClick={ () => handleClick(100,500)}>Add more</button>
    { /*bool && <MadeGoal /> */}
    { x >=10 ? <MadeGoal /> : <MissedGoal /> }
    <Demo2 para2={props.para} />
    </div>

};
export default Demo;