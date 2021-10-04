import React from 'react';
import './Footer.scss';
import { Link } from 'react-scroll';
import { FaFacebookF } from 'react-icons/fa';
import { GrInstagram } from 'react-icons/gr';
import { GrTwitter } from 'react-icons/gr';
import { FaLinkedinIn } from 'react-icons/fa';



const Footer = () => {
    return (
        <div className="footer">
            <div className="foot-nav">
                <ul className="navig-links">
                    <li><Link className="link" activeClass="active" to="About" smooth={true} duration={500}>ABOUT</Link></li>
                    <li><Link className="link" activeClass="active" to="Process" smooth={true} duration={500}>PROCESS</Link></li>
                    <li><Link className="link" activeClass="active" to="Shop" smooth={true} duration={500}>SHOP</Link></li>
                </ul>
                <ul className="social-media-icons">
                    <li><FaFacebookF size='2rem'/></li>
                    <li><GrInstagram size='2rem'/></li>
                    <li><GrTwitter size='2rem' /></li>
                    <li><FaLinkedinIn size='2rem'/></li>
                </ul>
            </div>
            <div className="copyright">
                <h3>
                    © 2021 by Fit Eternally. All rights reserved.
                </h3>
            </div>
            
        </div>
    )
}

export default Footer;
