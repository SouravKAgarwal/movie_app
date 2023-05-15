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
                    <li className="menuItem">Terms Of Use</li>
                    <li className="menuItem">Privacy-Policy</li>
                    <li className="menuItem">About</li>
                    <li className="menuItem">Blog</li>
                    <li className="menuItem">FAQ</li>
                </ul>
                <div className="socialIcons">
                    <span className="icon">
                    <Link href="https://github.com/SouravKAgarwal" target='_blank'><FaGithub className='text-[white] text-[24px]'/></Link>
                    </span>
                    <span className="icon">
                    <Link href="https://www.linkedin.com/in/sourav-kumar-agarwal09/" target='_blank'><FaLinkedin className='text-blue-600 text-[24px]'/></Link>                       
                    </span>
                    <span className="icon">
                    <Link href="https://instagram.com/_souravagarwal_09?igshid=Yjk4NWM2ZWVkMw==" target='_blank'><FaInstagram className='text-pink-600 text-[24px]'/></Link>
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
