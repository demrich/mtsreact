import React, { Component } from 'react';
import byJasco from "../../byjasco.svg";
import "./../../Assets/Footer.css";



export default class Footer extends Component {
  render() {
    let cart = {width:'0', height:'0', border:'none'};

    return (
      <div className="footer">
       <a href="https://byjasco.com">
        <img className="byjasco" alt="" src={byJasco} />
        </a>
        <div className="footer-content">

        <div className="footer-col">
        <h3>Who is Jasco?</h3>
        <p>At Jasco, we design and develop products to simplify your life and connect your home. Jasco provides one of the most comprehensive product offerings in home automation, lighting, security, home entertainment, power and mobility products.</p>
        </div>

        <div className="footer-col">
        <h3>Need Help?</h3>
        <ul>
            <li><a href="https://byjasco.com/support">Visit Support </a></li>
            <li><a href="https://byjasco.com/brands/mytouchsmart">Jasco Online Store</a></li>
        </ul>
        
        </div>
        <div className="footer-col">
        <h3>Newsletter Signup</h3>
        <div className="social">
        <i className="fa fa-facebook" /><i className="fa fa-twitter" />
        <i className="fa fa-pinterest" /><i className="fa fa-instagram" />
        <i className="fa fa-youtube" />
        </div>
        


       </div>


        </div>

        <div className="footer-notes">
        <span><a href="https://byjasco.com/trademark-information?__hstc=20260967.da027c5315d85dab3ba64f6b5bc238bf.1526412895839.1527780113528.1528119111164.4&__hssc=20260967.1.1528119111164&__hsfp=2971992012" target="_blank">Trademark Information</a>  | <a href="https://byjasco.com/terms-and-conditions" target="_blank">Terms and Conditions</a>  | <a href="https://byjasco.com/privacy-policy" target="_blank">Privacy Policy</a> </span> <br />
        <span>© 2017 Jasco Products Company. </span> <br /> <br />
        </div>
        <iframe title="cart" id="result" style={cart} />
      </div>
    )
  }
}
