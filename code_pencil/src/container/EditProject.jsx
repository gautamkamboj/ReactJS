import {useEffect, useState} from 'react'
import SplitPane from 'react-split-pane';
import CodeMirror from "@uiw/react-codemirror";
import { javascript } from "@codemirror/lang-javascript";
import { Link } from 'react-router-dom';
import {useSelector} from "react-redux"
import { UserProfileDetails, Alert } from '../components';
import { setDoc , doc} from 'firebase/firestore';
import {db} from "../config/firebase.config"
import { useLocation } from 'react-router-dom'
import { python } from "@codemirror/lang-python";
const EditProject = ()=> {
    
    const project = useLocation().state;
    
   console.log(project)
const [html, setHtml] = useState(project.project.html);
    const [css, setCss] = useState(project.project.css);
    const [js, setJs] = useState(project.project.js);

    const [output, setOutput] = useState("");
  
 
   
    const [input, setInput] = useState(project.project.input);
    
    const [userInput, setUserInput] = useState(project.project.userInput);
  
    const [isTitle, setIsTitle] = useState(true);
    const [title, setTitle] = useState(project.project.title);
      const [alert, setAlert] = useState(false)
  

    const user = useSelector((state)=>state.user.user);
  useEffect(()=>{
      updateOutput();
    },[html,css,js]);
    const updateOutput = ()=>{
      const combinedOutput=`
      <html>
      <head>
        <style>${css}</style>
      </head>
      <body>${html}
        <script>${js}</script>
      </body>
      </html>
      `;
      setOutput(combinedOutput);
    };
     if(project.project.input=== undefined){
        const saveProgram =async()=>{
          const id =`${Date.now()}`
          const _doc={
            id: id,
            title: title,
            html: html,
            css: css,
            js: js,
            output: output,
            user: user
          }
          await setDoc(doc(db,"Projects",id),_doc).then((res)=>{
              setAlert(true);
          }).catch((err)=> console.log(err))
  
          setInterval(()=>{
            setAlert(false)
          },2000);
    }
  
    return (
      <>
        <div className='w-screen h-screen flex flex-col items-start justify-start overflow-scroll'>
          {alert && <Alert status={"Success"} alertMsg={"Project Saved.."}/>}
          <header className='w-full flex items-center justify-between p-2'>
              <div className='flex items-center justify-center gap-6'>
                <Link to={"/home/projects"}>
                  <img className='w-32 h-10 object-cover rounded-md' src='https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTBy9MCtgz_RX9sfcSJBjTYSLlOqNlG9T5I3PMdLObuwSxsWToD'/>
                </Link>
                <div className='flex flex-col items-start justify-start'>
                  <div className='flex items-center justify-center gap-3'>
                    {isTitle? 
                    <>
                      <input type='text' placeholder='Your Title' value={title} className=' rounded-md bg-gray-900 text-white' onChange={(e)=>
                      {setTitle(e.target.value)}}/>
  
                    </>:<>
                        <label className='text-orange-400'>Title:</label>
                        <p className=' text-white text-lg'>{title} </p>
                    </>}
  
                    {isTitle? 
                    <>
                      <div className='cursor-pointer text-white' onClick={()=>setIsTitle(false)}>✓</div>
  
                    </>:<>
                    <button className='border border-red-400 px-2 rounded-lg bg-emerald-100 text-gray-900' onClick={()=>setIsTitle(true)}>edit</button>
                    </>}
                  </div>
                  <div className='flex items-center justify-center px-2 -mt-1 gap-2'>
                    <p className='text-white text-sm'>profile:
                      {user?.displayName 
                      ? user?.displayName:
                      user?.uid}
                    </p>
                  </div>
                </div>
              </div>
              {user && 
                <div className='flex items-center justify-center gap-4'>
                  <button onClick={saveProgram} className='px-6 py-2 bg-green-300 cursor-pointer text-gray-900 font-semibold rounded-md'>Save</button> 
                   <UserProfileDetails/>
                </div>}
          </header>
          <div className='w-screen h-screen'>
  
         
              <div className=''>
                <SplitPane split='vertical' >
                  <div className='m-1'>
                    <p className='text-white border'>HTML</p>
                    <CodeMirror
                    value={html}
                    height='300px'
                    
                    extensions={[javascript({ jsx: true })]}
                    onChange={(value,viewUpdate) => {
                      setHtml(value);
                     }}
                    theme={'dark'} />
                  </div>
                  <div className='m-1'>
                    <p className='text-white border'>CSS</p>
                    <CodeMirror
                    value={css}
                    height='300px'
                    extensions={[javascript({ jsx: true })]}
                    onChange={(value,viewUpdate) => {
                      setCss(value);
                     }}
                    theme={'dark'} />
                  </div>
                  <div className='m-1'>
                    <p className='text-white border'>JavaScript</p>   
                    <CodeMirror
                    value={js}
                    height='300px'
                    extensions={[javascript({ jsx: true })]}
                    onChange={(value,viewUpdate) => {
                      setJs(value);
                     }}
                    theme={'dark'} />
                  </div>
                </SplitPane>
              </div>
  
              <div className='bg-white' style={{overflow:"hidden",height:"50vh"}}>
                <iframe title='result' srcDoc={output} style={{border:"none" , width:"100%", height:"100%"}}/>
              </div>
            
          </div>
        </div>
      </>
    )

   }else{

    const saveProgram =async()=>{
        const combinedOutput=`
        <html>
        <head>
          <style>
          h1{
            color: white;
          }
            pre{
                color: white;
            }
          </style>
        </head>
        <body>
        <h1>Python</h1>
        <pre>${output}</pre>
          
        </body>
        </html>
        `;
        
            const id =`${Date.now()}`
            const _doc={
              id: id,
              title: title,
              input: input,
              userInput:userInput,
              output: combinedOutput,
              user: user
            }
            await setDoc(doc(db,"Projects",id),_doc).then((res)=>{
                setAlert(true);
            }).catch((err)=> console.log(err))
    
            setInterval(()=>{
              setAlert(false)
            },2000);
      }
    
    
    
      const submit = async () => {
      
        let outputText = document.getElementById("output");
        outputText.innerHTML = "";
        outputText.innerHTML += "Creating Submission ...\n";
        const response = await fetch(
          "https://judge0-ce.p.rapidapi.com/submissions",
          {
            method: "POST",
            headers: {
              "x-rapidapi-host": "judge0-ce.p.rapidapi.com",
              "x-rapidapi-key": "79042ddb0emshf83291c83466846p1fc7eajsncc2d7152aa93", // Get yours for free at https://rapidapi.com/judge0-official/api/judge0-ce/
              "content-type": "application/json",
              accept: "application/json",
            },
            body: JSON.stringify({
              source_code: input,
              stdin: userInput,
              language_id: project.project.lang,
            }),
          }
        );
        if(response.status === 429){
            outputText.innerHTML += "Api call limit reached!!! try again later "
        }
        else{
        outputText.innerHTML += "Submission Created ...\n";
        const jsonResponse = await response.json();
        let jsonGetSolution = {
          status: { description: "Queue" },
          stderr: null,
          compile_output: null,
        };
        while (
          jsonGetSolution.status.description !== "Accepted" &&
          jsonGetSolution.stderr == null &&
          jsonGetSolution.compile_output == null
        ) {
          outputText.innerHTML = `Creating Submission ... \nSubmission Created ...\nChecking Submission Status\nstatus : ${jsonGetSolution.status.description}`;
          if (jsonResponse.token) {
            let url = `https://judge0-ce.p.rapidapi.com/submissions/${jsonResponse.token}?base64_encoded=true`;
            const getSolution = await fetch(url, {
              method: "GET",
              headers: {
                "x-rapidapi-host": "judge0-ce.p.rapidapi.com",
                "x-rapidapi-key": "79042ddb0emshf83291c83466846p1fc7eajsncc2d7152aa93", // Get yours for free at https://rapidapi.com/judge0-official/api/judge0-ce/
                "content-type": "application/json",
              },
            });
            jsonGetSolution = await getSolution.json();
          }
        }
        
        if (jsonGetSolution.stdout) {
          const output = atob(jsonGetSolution.stdout);
          outputText.innerHTML = "";
          outputText.innerHTML += `Results :\n${output}\nExecution Time : ${jsonGetSolution.time} Secs\nMemory used : ${jsonGetSolution.memory} bytes`;
        } else if (jsonGetSolution.stderr) {
          const error = atob(jsonGetSolution.stderr);
          outputText.innerHTML = "";
          outputText.innerHTML += `\n Error :${error}`;
        } else {
          const compilation_error = atob(jsonGetSolution.compile_output);
          outputText.innerHTML = "";
          outputText.innerHTML += `\n Error :${compilation_error}`;
        }
        setOutput(outputText.innerHTML);
    }
      };
      
    
      return (
        <>
          <div className='w-screen h-screen flex flex-col items-start justify-start overflow-x-hidden'>
            {alert && <Alert status={"Success"} alertMsg={"Project Saved.."}/>}
            <header className='w-full flex items-center justify-between p-2'>
                <div className='flex items-center justify-center gap-6'>
                  <Link to={"/home/projects"}>
                    <img className='w-32 h-10 object-cover rounded-md' src='https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTBy9MCtgz_RX9sfcSJBjTYSLlOqNlG9T5I3PMdLObuwSxsWToD'/>
                  </Link>
                  <div className='flex flex-col items-start justify-start'>
                    <div className='flex items-center justify-center gap-3'>
                      {isTitle? 
                      <>
                        <input type='text' placeholder='Your Title' value={title} className=' rounded-md bg-gray-900 text-white' onChange={(e)=>
                        {setTitle(e.target.value)}}/>
    
                      </>:<>
                          <label className='text-orange-400'>Title:</label>
                          <p className=' text-white text-lg'>{title} </p>
                      </>}
    
                      {isTitle? 
                      <>
                        <div className='cursor-pointer text-white' onClick={()=>setIsTitle(false)}>✓</div>
    
                      </>:<>
                      <button className='border border-red-400 px-2 rounded-lg bg-emerald-100 text-gray-900' onClick={()=>setIsTitle(true)}>edit</button>
                      </>}
                    </div>
                    <div className='flex items-center justify-center px-2 -mt-1 gap-2'>
                      <p className='text-white text-sm'>profile:
                        {user?.displayName 
                        ? user?.displayName:
                        user?.uid}
                      </p>
                    </div>
                  </div>
                </div>
                {user && 
                  <div className='flex items-center justify-center gap-4'>
                    <button onClick={saveProgram} className='px-6 py-2 bg-green-300 cursor-pointer text-gray-900 font-semibold rounded-md'>Save</button> 
                     <UserProfileDetails/>
                  </div>}
            </header>
            <div className='w-screen h-screen'>
            <>
            <div className="flex gap-5">
              <div className=" flex flex-col m-2">
                <label htmlFor="solution ">
                  <span className="text-white">
                    <i className=""></i> Code Here
                  </span>
                </label>
                
                <CodeMirror
                required
                name="solution"
                id="source"
                      value={input}
                      height='207px'
                      width='600px'
                      onChange={(value,viewUpdate) => {
                        setInput(value);}}
                        extensions={ [python().language]}
                      theme={'dark'}
                      className='source'
                       />
                <button
                  type="submit"
                  className="text-white bg-green-400"
                  onClick={()=>{input && submit()}}
                >
                  <i className=""></i> Run
                </button>
    
                <div className=" flex flex-col">
                    <span className=" text-white">
                        <i ></i> User Input
                    </span>
                    <br />
                    <textarea className="w-[600px] h-24" id="input" onChange={(e)=>setUserInput(e.target.value)}></textarea>
                </div>
              </div>
              <div>
                <div className=" flex flex-col">
                  <span className="text-white">
                    <i className=""></i> Output
                  </span>
                  <textarea className="w-[600px] h-96" id="output" onChange={(e)=>setOutput(e.target.value)}></textarea>
                </div>
              </div>
            </div>
           
          </>
           
                </div>
          </div>
        </>
      )

   }
   
 
}

export default EditProject;