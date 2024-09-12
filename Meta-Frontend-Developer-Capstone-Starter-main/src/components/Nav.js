import React, { useState } from 'react';
import logo from '../images/Logo .svg'

const Nav = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen = (!menuOpen); //switches whether or not menu is open to the opposite state, when activated
    }
    return (
        //Creates default nav
        <nav className={`navbar ${menuOpen ? "open" : ""}`}>
            <a href='/' className="logo">
                <img src={logo} alt="Lemon logo" />
            </a>

            <div className="menu-icon" onClick={toggleMenu}> //Menu opens or closes depending on click for mobile
                <div className="bar"></div>
                <div className="bar"></div>
                <div className="bar"></div>
            </div>

            <ul className={`nav-links ${menuOpen ? "visible" : ""}`}>
                <li>
                    <a href="/">Home</a>
                </li>
                <li>
                    <a href="/">About</a>
                </li>
                <li>
                    <a href="/">Services</a>
                </li>
                <li>
                    <a href="/">Menu</a>
                </li>
                <li>
                    <a href="/">Reservations</a>
                </li>
                <li>
                    <a href="/">Make an Order</a>
                </li>
                <li>
                    <a href="/">Login</a>
                </li>
            </ul>
        </nav>
    );
};

export default App;