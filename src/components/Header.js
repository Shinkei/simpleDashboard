import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faSearch, faQuestion, faBell, faUserCircle } from '@fortawesome/free-solid-svg-icons'
import React from 'react';
import StyledHeader from './styledComponents/StyledHeader';
import logo from '../assets/Logo.png'

const Header = () => (
  <StyledHeader>
      <a href="#home"><span><img src={logo} alt="logo"/></span></a>
        <div>
          <a href="#home">Dashboard</a>
          <a href="#home">Network</a>
          <a href="#home">Network</a>
          <a href="#home">Network</a>
          <a href="#home">Network</a>
          <a href="#home">Network</a>
          <a href="#home">Billing</a>
          <a href="#home">Network</a>
        </div>
        <div className="right-nav">
          <a href="#home"><FontAwesomeIcon icon={faSearch}/></a>
          <a href="#home"><FontAwesomeIcon icon={faQuestion}/></a>
          <a href="#home" className="selected"><FontAwesomeIcon icon={faBell}/></a>
          <a href="#home"><FontAwesomeIcon icon={faUserCircle}/></a>
        </div>
        
  </StyledHeader>
)

export default Header;