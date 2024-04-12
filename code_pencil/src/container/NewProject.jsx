import {useEffect, useState} from 'react'
import SplitPane from 'react-split-pane';
import CodeMirror from "@uiw/react-codemirror";
import { javascript } from "@codemirror/lang-javascript";
import { Link } from 'react-router-dom';
import {useSelector} from "react-redux"
import { UserProfileDetails, Alert } from '../components';
import { setDoc , doc} from 'firebase/firestore';
import {db} from "../config/firebase.config"

const NewProject = () => {
  const [html, setHtml] = useState("");
  const [css, setCss] = useState("");
  const [js, setJs] = useState("");
  const [output, setOutput] = useState("");

  const [isTitle, setIsTitle] = useState(true);
  const [title, setTitle] = useState("untitled");
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
  }

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
      <div className='w-screen h-screen flex flex-col items-start justify-start overflow-hidden'>
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
}

export default NewProject