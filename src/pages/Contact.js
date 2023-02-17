import React, { useEffect, useState } from "react";
import NavigationBar from "../components/NavigationBar";

const Contact =() => {
    const [isName , setIsName]= useState("");
    const [ispassword,setIsPassword]= useState("");
    const [count,setCount]=useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCount((count) => count+1);
        }, 1000);
        return () =>clearInterval(interval);
        }, []);
    

    const handleNameChange =(event) => {
    setIsName(event.target.value);
    }
    const handlePasswordChange =(event) => {
        setIsPassword(event.target.value);
        }
        const handleSubmit =(event) => {
            event.preventDefault();
            console.log(isName,ispassword)
            }
    return (
        <div>
            <NavigationBar />
            <h1> Contact page  component</h1>
            <h1>{count}</h1>
            <form onSubmit={handleSubmit}>
                <label> name :</label>
                <input type="text" name="name" onChange={handleNameChange} />
                <label> password :</label>
                
                <input type="password" name="password" onChange={handlePasswordChange} />
                <input type="submit" value="Submit" />
            </form>
        </div>
    )
}
 export default Contact ;