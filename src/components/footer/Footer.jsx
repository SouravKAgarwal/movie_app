import React from "react";
import {
    FaInstagram,
    FaTwitter,
    FaLinkedin,
    FaGithub
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
                
                <div className="socialIcons">
                    <span className="icon">
                        <FaGithub />
                    </span>
                    <span className="icon">
                        <FaInstagram />
                    </span>
                    <span className="icon">
                        <FaTwitter />
                    </span>
                    <span className="icon">
                        <FaLinkedin />
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
