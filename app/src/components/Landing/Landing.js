import React, { Component } from 'react';
import './Landing.css';

class Landing extends Component {
  render() {
    return (
      <div className='Landing'>
                {/* <img src={logo} alt='logo'/> */}
                <a href={process.env.REACT_APP_LOGIN}><button>Login</button></a>
      </div>
    );
  }
}

export default Landing;