import React, { Component } from 'react'
import Logo from "../logo.png";
import "../Assets/Header.css";

export default class Header extends Component {
  render() {
    return (
      <div className="header">
      <span className="shop-title">Shop</span>
      <span className="title"><img className="logo" alt="Logo" src={Logo} /></span>
      <span className="learn-title">Learn</span>
      <div className="outputs">
      <ul>
          <li>Search</li>
          <li>Cart</li>

      </ul>
      </div>
      </div>
    )
  }
}
