import React from 'react';
import logo from '../assets/icons/logo.png';

const Header =()=> (
    <header>
        <img className="header__logo" alt='weather-logo' src={logo}/>
        <h1 className="header__title">Weather Channel</h1>
    </header>
);



export default Header;