import React, {useState, useEffect } from 'react'
import {useSelector} from "react-redux";
import { Link,Route,Routes, NavLink  } from 'react-router-dom';
const Projects = () => {
  const projects = useSelector((state)=>state.projects?.projects);
  const searchTerm = useSelector(state => state.searchTerm?.searchTerm ? state.searchTerm ?.searchTerm :"");

  const [filtered, setFiltered] = useState(null);

  
  useEffect(()=>{
      if(searchTerm?.length > 0){
          setFiltered( projects.filter(project=>{
            const lowerCaseItem = project?.title.toLowerCase();
            return searchTerm.split("").every((letter)=> lowerCaseItem.includes(letter))
          }))
       
      }else{
        setFiltered(null)
;      }
  },[searchTerm])
  
  return (<div className='text-center text-white text-5xl'>
    Projects
      <div className='w-full py-6 flex items-center flex-wrap justify-center gap-6'>
      {filtered ? <>{
        filtered && filtered.map((project,index)=>(
          <ProjectCard key={project.id} project={project} index={index}/>
        ))
      }

      </> : <>{projects && projects.map((project,index)=>(
        <ProjectCard key={project.id} project={project} index={index}/>
      ))}</>

      }
    </div>
  </div>
  
  )
}
const ProjectCard =({project,index})=>{

  const user = useSelector(state=> state.user?.user);

  
  return <div  className='w-full cursor-pointer md:w-[450px] h-[375px] bg-slate-800 rounded-md p-4 flex flex-col items-center justify-center gap-4 ' > 
    <button className='text-sm p-0 border border-green-500  px-2 rounded-full'>{user && <NavLink  to={{pathname:"/editProject" }} state={{project}}>Edit</NavLink >
}</button>

  

  <div className='bg-gray-700  w-full h-full rounded-md overflow-hidden' style={{overflow:"hidden",height:"100%"}}>
  <iframe title='result' srcDoc={project.output} style={{border:"none" , width:"100%", height:"100%"}}/>
</div>

<div className='flex items-center justify-start gap-3 w-full'>

 <div className='w-14 h-14 flex items-center justify-center rounded-xl overflow-hidden cursor-pointer'>
 {
          project?.user?.photoURL ? 
            <img src={project?.user?.photoURL} alt={project?.user?.displayName}
            referrerPolicy='no-referrer' className='w-full h-full object-cover' height='20' width='20'/>
          : <p className='text-xl text-white font-semibold capitalize'>{project?.user?.email[0]}</p>
        }

 </div>
 <div className='flex items-center justify-center px-2 -mt-1 gap-2'>
                  <p className='text-white text-sm'>
                    {project?.title}<br/>
                    {project?.user?.displayName 
                    ? project?.user?.displayName:
                    project?.user?.uid}
                  </p>
                </div>
</div>
  </div>
  
}

export default Projects