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
        <span>Trademark Information  | Terms and Conditions  | Privacy Policy </span> <br />
        <span>© 2017 Jasco Products Company. </span> <br /> <br />
        <span>GE is a trademark of General Electric Company and under license to Jasco Products LLC, 10 E. Memorial Rd., Oklahoma City, OK 73114.</span>
        </div>
        <iframe title="cart" id="result" style={cart} />
      </div>
    )
  }
}
