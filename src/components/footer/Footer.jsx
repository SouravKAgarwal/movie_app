import React from "react";
import {
    FaInstagram,
    FaLinkedin,
    FaGithub,
} from "react-icons/fa";

import ContentWrapper from "../contentWrapper/ContentWrapper";

import "./style.scss";

const Footer = () => {
    return (
        <footer className="footer">
            <ContentWrapper>
                <ul className="menuItems">
                    <li className="menuItem">Home</li>
                    <li className="menuItem">Movies</li>
                    <li className="menuItem">TV Shows</li>
                    <li className="menuItem">Author</li>
                    <li className="menuItem">Contact</li>
                </ul>
                {/* <div className="infoText">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur.
                </div> */}
                <div className="socialIcons">
                    <span className="icon">
                        <FaGithub />
                    </span>
                    <span className="icon">
                        <FaLinkedin />
                    </span>
                    <span className="icon">
                        <FaInstagram />
                    </span>
                    
                </div>
                <ul className="footerCopyrightItems">
                    <li className="footerCopyrightItem">&copy; 2023 | Sourav Kumar Agarwal</li>
                </ul>
            </ContentWrapper>
        </footer>
    );
};

export default Footer;
