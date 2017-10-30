import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {

  render() {
    return (

      <header id="main-header">
        <div className="header-container">
          <div className="header-logo">
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