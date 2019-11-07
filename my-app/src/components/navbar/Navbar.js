import React, { Component } from 'react';
import "./Navbar.css";

class Navbar extends Component {
    render() {
        return (
        <nav className="navbar navbar-default navbar-fixed-top">
            <li className="clickyLeft">Dragon Ball Z!</li>
           
            <li className="clickyScoreRight">Score: {this.props.score}</li>
        </nav>
        );
    }
}

export default Navbar;


