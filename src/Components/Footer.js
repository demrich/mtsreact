import React, { Component } from 'react';
import byJasco from "../byjasco.svg";
import "../Assets/Footer.css";
export default class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <img className="byjasco" alt="" src={byJasco} />
        <div className="footer-content">

        <div className="footer-col">
        <h3>Who is Jasco?</h3>
        <p>At Jasco, we design and develop products to simplify your life and connect your home. Jasco provides one of the most comprehensive product offerings in home automation, lighting, security, home entertainment, power and mobility products.</p>
        </div>

        <div className="footer-col">
        <h3>Need Help?</h3>
        <ul>
            <li>Visit Support</li>
            <li>Jasco Online Store</li>
        </ul>
        
        </div>
        <div className="footer-col">
        <h3>Who is Jasco?</h3>
        <p>At Jasco, we design and develop products to simplify your life and connect your home. Jasco provides one of the most comprehensive product offerings in home automation, lighting, security, home entertainment, power and mobility products.</p>
        </div>


        </div>

        <div className="footer-notes">
        <span>Trademark Information  | Terms and Conditions  | Privacy Policy </span> <br />
        <span>© 2017 Jasco Products Company. </span> <br /> <br />
        <span>GE is a trademark of General Electric Company and under license to Jasco Products LLC, 10 E. Memorial Rd., Oklahoma City, OK 73114.</span>
        </div>
      </div>
    )
  }
}
