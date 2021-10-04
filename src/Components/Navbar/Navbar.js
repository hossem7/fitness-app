import React, { useState } from 'react'
import logo from '../../Assets/Logo.png';
import './Navbar.scss';
import { Link } from 'react-scroll';
import { FiMenu, FiX } from 'react-icons/fi';

const Navbar = () => {
    const [open, setOpen] = useState(false);

    const handleClick = () => {
        setOpen(!open);
    };

    const closeMenu = () => {
        setOpen(false);
    };
    return (
        // <nav className="navbar">
        //     <div className="brand-logo">
        //         <Link className="logo" to="Home" smooth={true} duration={500}>
        //             
        //         </Link>
        //     </div>
        //     <div className="navbar-links">
        //         <ul>
        //             <li><Link className="link" activeClass="active" to="Home" smooth={true} duration={500}>HOME</Link></li>
        //             <li><Link className="link" activeClass="active" to="About" smooth={true} duration={500}>ABOUT</Link></li>
        //             <li><Link className="link" activeClass="active" to="Process" smooth={true} duration={500}>PROCESS</Link></li>
        //             <li><Link className="link" activeClass="active" to="Shop" smooth={true} duration={500}>SHOP</Link></li>   
        //         </ul>
        //     </div>
        //     
        // </nav>
        <nav className="navbar">
            <Link to="Home" className="nav-logo" smooth={true} duration={500}>
                <img src={logo} alt="logo" />
            </Link>
            <div onClick={handleClick} className="nav-icon">
                {open ? <FiX /> : <FiMenu />}
            </div>
            <ul className={open ? 'nav-links active' : 'nav-links'}>
                <li className="nav-item">
                    <Link to="Home" className="nav-link" onClick={closeMenu} smooth={true} duration={500}>
                        HOME
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="About" className="nav-link" onClick={closeMenu} smooth={true} duration={500}>
                        ABOUT
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="Process" className="nav-link" onClick={closeMenu} smooth={true} duration={500}>
                        PROCESS
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="Shop" className="nav-link" onClick={closeMenu} smooth={true} duration={500}>
                        SHOP
                    </Link>
                </li>
                <li className="nav-item">
                    <div className="hamburger">
                        <Link to="#" className="nav-link" onClick={closeMenu} smooth={true} duration={500}>
                            SIGN UP
                        </Link>
                    </div>
                </li>
            </ul>
            <div className="Auth">
                <button className="signup">SIGN UP</button>
            </div>
        </nav>
    )
}

export default Navbar;
