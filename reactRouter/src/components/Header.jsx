import React from 'react';
import './Header.css'
import logo from '../assets/icons8-chatgpt-128.png'

function Header() {
    return (
        <div className="header-container">
        <header className="Header">
            <div className='header-logo'>
                <img src={logo} alt='Logo do site'/>
            </div>
            <span>CHATGPT API</span>
        </header>
        </div>
    )
}

export default Header;