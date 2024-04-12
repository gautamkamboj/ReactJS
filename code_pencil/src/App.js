import { useState,useEffect } from 'react';
import {Home, NewProject, EditProject, Python, Cpp, Java} from './container';
import {Route, Routes, Navigate, useNavigate} from "react-router-dom"
import {auth, db} from "./config/firebase.config"
import {doc, onSnapshot, orderBy, setDoc} from "firebase/firestore"
import {useDispatch} from "react-redux";
import { SET_USER } from './context/actions/userActions';
import { SET_PROJECTS } from './context/actions/projectActions';
import { 
  collection,
  query
 } from 'firebase/firestore';


function App() {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);
  const dispatch = useDispatch();


  useEffect(()=>{
    const unsubscribe = auth.onAuthStateChanged(userCred => {
      if(userCred){
        console.log(userCred?.providerData[0]);
        setDoc(doc(db, "users", userCred?.uid),userCred?.providerData[0]).then(()=>{
            dispatch(SET_USER(userCred?.providerData[0]))
        })
      }
      else{
        navigate("/home", {replace:true})
      }

      setInterval(() => {
        setIsLoading(false)
      }, 2000);
    })

    return  ()=>unsubscribe();
  },[]);

  useEffect(()=>{
    const projectQuery = query(
      collection(db,"Projects"),orderBy("id","desc")
    )
    const unsubscribe = onSnapshot(projectQuery,(querySnaps=>{
      const projectsList= querySnaps.docs.map(doc => doc.data())
      dispatch(SET_PROJECTS(projectsList))
    }))

    return unsubscribe;
  },[])
  return (
  <>
    {isLoading? (<div className='w-screen h-screen flex items-center justify-center overflow-hidden'>
      <h1 className='text-white text-4xl  '>L o a d i n g . . .</h1>

    </div>):(
        <div className='w-screen h-screen  overflow-hidden'>
        <Routes>
          <Route path="/home/*" element = {<Home/>}/>
          <Route path='/newProject' element={<NewProject/>}/>
          <Route path='/pythonProject' element={<Python/>}/>
          <Route path='/c++Project' element={<Cpp/>}/>
          <Route path='/JavaProject' element={<Java/>}/>
          <Route path="/editProject" element={<EditProject/>}/>
          <Route path="*" element = {<Navigate to={"/home"}/>}/>
        </Routes>
      </div>
    )}
  </>
  );
}

export default App;
