import React from "react";
import Demo2 from "./Demo2";
// drilling
const Demo = (props) => {
    return <div>
    <Demo2 para2={props.para}/>
     Demo component
    <h1> {props.para}</h1>
    </div>

};
export default Demo;