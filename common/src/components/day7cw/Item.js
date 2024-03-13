import React, { useState,  } from 'react';
function Item(prop){
    const [h3class,setClass] = useState();
    function strike(e){
        if(e.target.checked)
            setClass("strike");
        else
            setClass("");
            
    }
    
    return <div className='list'>
                <input type="checkbox" onChange={strike}/>
                <h3 className={h3class}>{prop.data}</h3>
                
            </div>
}

export default Item;