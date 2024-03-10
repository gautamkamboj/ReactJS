import "./Main.css";
import "./Card.js";
import { useState } from "react";
import Card from "./Card.js";

function Main(){
    const [arr,setArr] = useState([]);
    function addButton(){
        const subject = document.getElementById('subject').value;
        const hour = document.getElementById('hour').value;
        console.log(hour);
        const data = {
            name: subject,
            time: parseInt(hour)
        }
            setArr([...arr,data]);
    }
    

 

 return <div className="main">
        <div className="heading">
            <h1>Geekster Education Planner</h1>
        </div>
        <div className="input">
            <input type="text" maxLength="20" id="subject" placeholder="Subject"></input>
            <input type="number" min="0" id="hour" placeholder="Hour"></input>
            <button className="add" onClick={()=>addButton()}>Add</button>
        </div>
        {arr.map((elem,index)=>( <Card name={elem.name} time={elem.time}/>))}
    </div>
}

export default Main; 