import { useState } from "react";
import Sidebar from "./Sidebar";
import About from "./About"
import Certificates from './Certificates'
import Project from './Project'
import More from './More'
import Contact from './Contact'
const Home = ()=>{
    const [about,setAbout] = useState(true);
    const [certificates,setCertificates] = useState(false);
    const [project,setProject] = useState(false);
    const [more,setMore] = useState(false);
    const [contact,setContact] = useState(false);

    function setAboutHandler(){
        setAbout(true)
        setCertificates(false)
        setProject(false)
        setMore(false)
        setContact(false)
    }
    function setCertificatesHandler(){
        setAbout(false)
        setCertificates(true)
        setProject(false)
        setMore(false)
        setContact(false)
    }
    function setProjectHandler(){
        setAbout(false)
        setCertificates(false)
        setProject(true)
        setMore(false)
        setContact(false)
    }
    function setMoreHandler(){
        setAbout(false)
        setCertificates(false)
        setProject(false)
        setMore(true)
        setContact(false)
    }
    function setContactHandler(){
        setAbout(false)
        setCertificates(false)
        setProject(false)
        setMore(false)
        setContact(true)
    }
    

    return <div className="home">
        <div className="sidebar"> 
            <Sidebar/>
        </div>   
        <div className="main">
            <nav className="nav">
                <a onClick={()=> setAboutHandler()} href="#">About</a>
                <a onClick={()=> setCertificatesHandler()} href="#">Certificates</a>
                <a onClick={()=> setProjectHandler()} href="#">Projects</a>
                <a onClick={()=> setMoreHandler()} href="#">More</a>
                <a onClick={()=> setContactHandler()} href="#">Contact</a>
            </nav>
            <div>
            { about ? <About/> : certificates ? <Certificates/> : project ? <Project/> : more ? <More/> : contact ? <Contact/>: <h1>no more</h1>}
            </div>
        </div>
    </div>
}
export default Home;