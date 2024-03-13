import "./Main.css"
import Item from "./Item"
import React, { useState,  } from 'react';
function Main(){
    const [list, setList] = useState([]);
    function addItem(){
        let item = document.getElementById('item').value;
        setList([...list,item]);
    }

    function deleteItem(elem){
        function abc(item){
            if(item===elem)
                return false;
            else
                return true;

        };

        let newList = list.filter(abc);

        setList(newList);
    }

    function strike(e){
        if(e.target.checked)
            setClass("strike");
        else
            setClass("");
            
    }

    return <div className="main">
        <h1>Grocery Bud</h1>
        <div>
        <input type="text" id="item"></input>
        <button className="addbtn" onClick={()=> addItem()}>Add item</button>
        {   list.map((element)=>{
            return <div className="list">
                <Item data={element}/>
                <button className="deletebtn" onClick={()=>deleteItem(element)}>delete</button>
            </div>

        })

        }
        </div>
       
    </div>
};

export default Main;