import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import headerLogo from './header-logo.png';

class Header extends Component {

  render() {
    return (

      <header id="main-header">
        <div className="header-container">
          
          <div className="header-logo">
          {/* <img src={headerLogo} alt="" /> */}
          </div>
            
            <nav id="navbar">
              <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
              </ul>
            </nav>
        </div>
      </header>
    );
  }
}

export default Header;