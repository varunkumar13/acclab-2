import React ,{useState,useEffect} from "react" ;

import React from "react";
import NavigationBar from "../components/NavigationBar";
import "./Style.css";
import Classes from "./Style.module.css";

const Home =() => {
    const [isDate ,setIsdate]= useState("Hello");
    const myStyle = {color :" #da70d6",
    backgroundColor :"#9d44f0",
    textAlign:"center",
};
 consthandleChange = () => {
    setIsDate("World")
 }
    return (
        <div>
            <h1>{isDate}</h1>
            <button onClick ={handleChange}>change</button>
            <NavigationBar />
            <h1 style={{color : "white",backgroundColor : "black"}}> Home page  component</h1>
            <h3 style={myStyle}>style using object</h3>
            <h3 className="demo">External css</h3>
            <h3 className={Classes.body}>Css module</h3>
            <h3 className={`${Classes.body} demo`}>add more elements</h3>

        </div>
    );
};
 export default Home ;