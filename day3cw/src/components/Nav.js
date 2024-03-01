import "./Nav.css";
function Nav(){
    return <div className="Nav">
        <div className="left">
            <img src="https://flowbite.com/docs/images/logo.svg"/>
            <h2>GEEKFOODS</h2>
        </div>
        <div className="menu">
            <a href="#">Home</a>
            <a href="#">Quote</a>
            <a href="#">Restaurant</a>
            <a href="#">Foods</a>
            <a href="#">Contact</a>
        </div>
        <div className="right">
            <button className="navButton">Get Started</button>
        </div>
    </div>
}
export default Nav;