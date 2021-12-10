import React from 'react';
import logo from './logo.svg';
import './Logo.css'

function Logo() {
    return (
        <div className='logo'>
            <img src={logo} className="logo-image" alt="logo" />
            <p className='logo-text'>Arden SocialNetwork</p>
        </div>
    );
}

export default Logo