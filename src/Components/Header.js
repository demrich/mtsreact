import React, { Component } from 'react'
import "../Assets/Header.css";

export default class Header extends Component {
  render() {
    return (
      <div className="header">
      <span className="shop-title">Shop</span>
      <span className="title">Logo</span>
      <span className="learn-title">Learn</span>
      </div>
    )
  }
}
