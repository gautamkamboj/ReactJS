import json from "./data.json";
import {useState} from 'react';
function Main(){
    const [quote,setQuote] = useState([]);
    function generateQuote(){
        const num = document.getElementById('num').value;
        if(num <9 && num>=0){
            let arr=[];
            for(let i=0; i<num; i++){
                arr[i] = json[i].data
            }
             setQuote(arr);
        }
        else
        alert("Ayyo ! you are demanding very much paragraph in one go, kindly take little litlle 😀");
        }
        

    return <div className="main">
        <h1>TIRED OF BORING LOREM IPSUM?</h1>
        <label>Paragraph:</label>
        <input type="number" id="num"></input>
        <button onClick={()=>generateQuote()}>Generate</button>

        {quote.map((ele,index)=><p>{ele}</p>)}
    </div>
}

export default Main;