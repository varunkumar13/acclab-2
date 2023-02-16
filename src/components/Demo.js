import React from "react";
import Demo2 from "./Demo2";
import MadeGoal from "./Madegoal";
import MissedGoal from "./MissedGoal";
// drilling
const Demo = (props) => {
//const bool = false;
const x=10;
const cars = [ "Ford","bmw","benz","audi","skoda","sora","nano"];
const passwordRegex= /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
//if (bool) {
   // return <MadeGoal />;
//}
 //return <MissedGoal />;

    const handleClick =(x,y) => {
        alert(x+y)
    };

    const handleNameChange = (event) => {
        console.log(event.target.value);
    }
    const handlepasswordChange = (event) => {
        if(passwordRegex.test(event.target.value)){
            console.log("password matched");
        } else {
            console.log("password  not matched");
        }
        
    }

    const handleSubmit = (event) => {
        event.preventDefault();

    };


    return <div>
    
     Demo component
    <h1> {props.para}</h1>
    <form onSubmit ={handleSubmit}>
        <label>name :</label>
        <input type="text" name="name" onChange={handleNameChange} /><br/>
        <label> password :</label>
        <input type="password" name="password" onChange={handlepasswordChange}/>
        <br/>
        <input type="submit" value="submit" />

    </form>
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