import "./Header.css";

function Header(){
    return <div id="header">
            <h1>Family Wellness</h1>
            <h5>MASSAGE THERAPY</h5>
            <div id="nav">
                <div className="nav-link">
                    <a href="#">HOME</a>
                </div>
                <div className="nav-link">
                    <a href="#">ABOUT</a>
                </div>
                <div className="nav-link">
                    <a href="#">SERVICES</a>
                </div>
                <div className="nav-link">
                    <a href="#">FAQ</a>
                </div>
                <div className="nav-link">
                    <a href="#">CONTACT</a>
                </div>
            
            </div>
    </div>
};

export default Header;