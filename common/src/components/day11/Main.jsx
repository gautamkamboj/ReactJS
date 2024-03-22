import { useEffect } from "react";
import { useRef } from "react";
import { useCallback } from "react";
import { useState } from "react";

const Main = ()=>{
    const [length, setLength] = useState(8);
    const [password, setPassword] = useState('');
    const [isNumber, setIsNumber] = useState(true);
    const [isChar, setIsChar] = useState(true);
    const [isUpper, setIsUpper] = useState(true);

    const passwordRef = useRef(null);

    const genPassword= useCallback(()=>{
        let lower = "qwertyuiopasdfghjklzxcvbnm";
        const capital = "QWERTYUIOPASDFGHJKLZXCVBNM";
        const numbers = "1234567890";
        const characters = "!@#$%^&*()_+{}:<>?,./';[]`|-=";

        if(isUpper)
            lower+=capital;
        if(isNumber)
            lower+=numbers;
        if(isChar)
            lower+=characters;
        

        let newPassword = '';



        for (let index = 1; index < length; index++) {
               let char = Math.floor(Math.random()*lower.length);
                newPassword += lower.charAt(char);
        }

        setPassword(newPassword);
    },[length,isChar,isNumber,isUpper]);

    useEffect(()=>{
        genPassword();
    },[isChar,isNumber,isUpper,length]);

    const copyClip=()=>{
        passwordRef.current.select();
        document.execCommand("copy");
    }
    return <div style={{textAlign:'center', margin:'150px'}}>
        <div>
            <div style={{ margin:'10px'}}>
                    <h1>PASSWORD GENERATOR</h1>
                <input type="text" value={password} readOnly ref={passwordRef}/>
                <button onClick={copyClip}>Copy</button>
            </div>
        <br/>
        <input type="range" min='6' max='20' value={length} onChange={(e)=> setLength(e.target.value)}/>
        <label>length:{length}</label>
        <br/>
        <input type="checkbox" checked={isUpper} onChange={()=>setIsUpper((prev)=> !prev)}/>
        <label>Uppercase</label>        <br/>

        <input type="checkbox" checked={isNumber} onChange={()=>setIsNumber((prev)=> !prev)}/>
        <label>Numbers</label>
        <br/>

        <input type="checkbox" checked={isChar} onChange={()=>setIsChar((prev)=> !prev)}/>
        <label>Characters</label>
        </div>
    </div>
}

export default Main;