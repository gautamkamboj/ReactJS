import { useState } from "react";
function Card(props){
    const [hour,setHour] = useState(props.time);
    function incHour(){
        setHour(hour+1);
    }
    function decHour(){
        if(hour>0)
        setHour(hour-1);
    }

    return (<div className="cards">
        <p>
        <div>{props.name}: </div>
        <div><button className="green" onClick={()=>incHour()}> + </button> 
        {hour}
        <button onClick={()=>decHour()} className="red">-</button></div>
    </p>
    </div>)
}

export default Card;