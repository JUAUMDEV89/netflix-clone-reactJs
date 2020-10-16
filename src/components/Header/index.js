import React from 'react';

import Logo from '../../assets/1024px-Netflix_2015_logo.svg.png';

import './style.css';

function Header ({ black }){
  return(
    <header className={black ? 'header--black': ''}>
        <div className="header--logo">
          <a href="/">
            <img src={Logo} alt="netflix"/>
          </a>
        </div>
        <div className="header--user">
          <a href="/">
            <div className="header--userbox"></div>
          </a>
        </div>
    </header>
  )
}

export default Header;