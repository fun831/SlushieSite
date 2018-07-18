import React, { Component } from 'react';

export default class Navbar extends Component {
  render() {
    return (
        <body>
    <div className="navbar">
        <a href="#" className="toggle" id="navHamburger">
            <i className="fas fa-bars"></i>
        </a>
        <a href="#" className="brand">slushishack</a>
        <div className="left">
            <a href="#" className="link">Home</a>
            <a href="#" className="link">Browse</a>
        </div>
        <div className="right">
            <a href="#" className="link">Order</a>
        </div>
    </div>
</body>
    );
  }
}
