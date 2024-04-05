import React from "react";

import ContentWrapper from "../contentWrapper/ContentWrapper";

import "./Style.scss";

const Footer = () => {
    return (
        <footer className="footer">
            <ContentWrapper>
                <ul className="menuItems">
                    <li className="menuItem">Terms Of Use</li>
                    <li className="menuItem">Privacy-Policy</li>
                    <li className="menuItem">About</li>
                    <li className="menuItem">Blog</li>
                </ul>
                <div className="infoText">
                    all rights are reserved...
                </div>
                
            </ContentWrapper>
        </footer>
    );
};

export default Footer;
