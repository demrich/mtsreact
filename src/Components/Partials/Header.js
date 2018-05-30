import React, { Component } from 'react';
import Logo from "../../logo.png";
import "./../../Assets/Header.css";
import { Link } from 'react-router-dom'

export default class Header extends Component {
  render() {
    return (
      <div className="header">
      <div className="desktop-header">
      <Link className="shop-title" to="/shop" >Shop</Link>
      <span className="title"><Link to="/" ><img className="logo" alt="Logo" src={Logo} /></Link></span>
      <Link className="learn-title" to="/learn" >Learn</Link>
      <div className="outputs">
      <ul>
          <li><i className="fa fa-search" /></li>
          <li><a alt="Cart" href="https://byjasco.com/cart"><i className="fa fa-shopping-cart" /></a></li>

      </ul>
      </div>
      </div>
      <div className="mobile-header">

      </div>
      </div>
    )
  }
}
