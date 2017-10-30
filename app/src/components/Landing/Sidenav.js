import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Sidenav.css';

export default class Sidenav extends Component {
    render() {
        return (
            <div className={"mobile_menu_container " + (this.props.showMenu ? 'show' : 'hidden')}>
                <div className="mobile_menu_header">
                    <button onClick={() => this.props.toggleMenu()} className="close_button">Menu   &#10006;</button>
                </div>
                    <ul>
                        <a><Link to='/about' className="home" onClick={() => this.props.toggleSubMenu()}>About</Link></a>
                    </ul>
                </div>
        )
    }
}