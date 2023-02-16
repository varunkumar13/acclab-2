import React from "react";
import { Link } from "react-router-dom";
// import { Link } from "../components/NavigationBar";;

const NavigationBar =() => {
    return (
        <div>
        <ul>
        <li>
        <Link to="/">Home</Link>
        </li>
        <li>
        <Link to="/about">About us</Link>
        </li>
        <li>
        <Link to="/contact">contact</Link>
        </li>
        <li>
        <Link to="/services">services</Link>
        </li>
        </ul>
           
        </div>
    )
}
 export default NavigationBar ;