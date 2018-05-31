import React, { Component } from 'react';
import Logo from "../../logo.png";
import "./../../Assets/Header.css";
import { Link } from 'react-router-dom'

export default class Header extends Component {
  constructor(){
    super();
    this.state = {
      hidden: true
    };
  }
  toggleMenu(){
    this.setState({hidden: !this.state.hidden})
  }
  render() {
    let toggle = this.state.hidden ? "mobile-sub hidden" : "mobile-sub visible"

    return (
      
      <div className="header">
      <div className="desktop-header">
      <Link className="shop-title" to="/shop" >Shop</Link>
      <span className="title"><Link to="/" ><img className="logo" alt="Logo" src={Logo} /></Link></span>
      <Link className="learn-title" to="/learn" >Learn</Link>
      <div className="outputs">
      <ul>
          {/* <li><i className="fa fa-search" /></li> */}
          <li><a alt="Cart" href="https://byjasco.com/cart"><i className="fa fa-shopping-cart" /></a></li>

      </ul>
      </div>
      </div>
            <div className={toggle}>
      <ul className="submenu-items">
        <li>
        <Link to="/shop" >Shop</Link>
        </li>
        <li>
        <Link to="/learn" >Learn</Link>
        </li>
      </ul>
      </div>
      <div className="mobile-header">
      <span className="title"><Link to="/" ><img className="logo" alt="Logo" src={Logo} /></Link></span>
      <div className="hamburger"><i className="fa fa-bars" onClick={this.toggleMenu.bind(this)} /></div>
      <div className="outputs">
      <ul>
          {/* <li><i className="fa fa-search" /></li> */}
          <li><a alt="Cart" href="https://byjasco.com/cart"><i className="fa fa-shopping-cart" /></a></li>

      </ul>
      </div>
      </div>
      </div>
    )
  }
}
