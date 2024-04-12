import {useState} from 'react'
import { Link,Route,Routes } from 'react-router-dom';
import {Projects, SignUp} from "../container";
import {useSelector, useDispatch} from "react-redux";
import { UserProfileDetails } from '../components';
import {SET_SEARCH_TERM} from "../context/actions/searchActions"

const Home = () => {
    const [sideMenu, setsideMenu] = useState(true);
    const user = useSelector(state=> state.user?.user)
    const searchTerm = useSelector(state => state.searchTerm?.searchTerm ? state.searchTerm ?.searchTerm :"");

    const dispatch = useDispatch();
    return (
    <div className='flex overflow-scroll'>
        <div className={`${sideMenu ? "w-56" : "w-3"} 
         min-h-screen h-[100%] relative bg-slate-800 duration-500 p-3`}>

            <div onClick={()=> setsideMenu(!sideMenu)} className='absolute -right-5 cursor-pointer text-xl text-white'>{sideMenu ? "←": "→"}</div>
            <div className='overflow-hidden w-full flex flex-col gap-4'>
                <Link to={"/home"}>
                    <img src='https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTBy9MCtgz_RX9sfcSJBjTYSLlOqNlG9T5I3PMdLObuwSxsWToD' className='object-cover w-72 h-20 rounded-lg'/>
                </Link>
                
                {user ? (
                    <div className='flex flex-col gap-3'>
                        <Link to={"/newProject"}>
                    <div className='px-6 py-3 border rounded-lg border-gray-400 flex items-center justify-center'><p className='text-gray-400'>
                        HTML</p></div>
                        
                </Link>
                <Link to={"/pythonProject"}>
                    <div className='px-6 py-3 border rounded-lg border-gray-400 flex items-center justify-center'><p className='text-gray-400'>
                        Python</p></div>
                        
                </Link>
                <Link to={"/c++Project"}>
                    <div className='px-6 py-3 border rounded-lg border-gray-400 flex items-center justify-center'><p className='text-gray-400'>
                        C++</p></div>
                        
                </Link>
                <Link to={"/JavaProject"}>
                    <div className='px-6 py-3 border rounded-lg border-gray-400 flex items-center justify-center'><p className='text-gray-400'>
                        Java</p></div>
                        
                </Link>
                    <Link to={"/home/projects"} className='flex items-center justify-center gap-6'>
                            <h2 className='text-white hover:bg-red-500 rounded-md p-2'> Projects</h2>
                    </Link>
                    </div>
                ):<p className='text-white '>Login to Start Coding or view Projects</p>}
            </div>
        </div>
        <div className='w-full min-h-screen max-h-screen  h-full flex flex-col items-start justify-start px-8 md:px-12 py-8 md:py-12'>
            <div className='w-full flex items-center justify-between gap-3 '>
                
                    <input type='text' value={searchTerm} onChange={(e)=> dispatch(SET_SEARCH_TERM(e.target.value))} className=' px-4 py-1 bg-gray-700   rounded-lg text-xl text-white placeholder:text-gray-400 w-full'
                    placeholder='Search here...'/>
            {!user && (
                <div className='flex items-center justify-center gap-3'>
                    <Link to={"/home/auth"} className='bg-emerald-400 px-5 py-1 rounded-md text-white text-lg cursor-pointer hover:bg-emerald-700'>SignUp</Link>
                </div>
            )}
           
            
                {user && <UserProfileDetails/>} 
            </div>
            <div className='w-full '>
                <Routes><Route path="/*" element ={<Projects/>} />
                    {
                        !user && <Route path="/auth" element ={<SignUp/>} />
                    }
                    
                    

                </Routes>
             
            </div>
        </div>
       
    </div>
    )
}

export default Home