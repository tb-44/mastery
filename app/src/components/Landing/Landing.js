import React, { Component } from 'react';
import background from './hero-pic.png';
import './Landing.css';

class Landing extends Component {
  constructor() {
		super();

		this.state = {
			showMenu: false,
			showSubMenu: false
		}

		this.toggleMenu = this.toggleMenu.bind(this);
		this.toggleSubMenu = this.toggleSubMenu.bind(this);
	}

	toggleMenu() {
		this.setState({
			showMenu: !this.state.showMenu
		})
	}

	toggleSubMenu() {
		this.setState({
			showSubMenu: !this.state.showSubMenu
		})
	}
  render() {
    return (
      <div className='Landing'>
        <div className="landing-background">

        <img src={background} alt="background" className="superhero-pic"/>
                {/* <img src={logo} alt='logo'/> */}
                <h1>SUPERHEROS</h1>
                <a href={process.env.REACT_APP_LOGIN}><button>Login</button></a>
        </div>
      </div>
    );
  }
}

export default Landing;