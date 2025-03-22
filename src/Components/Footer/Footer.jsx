import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <>
      <div className="footer-section">
        <div className="logo-section">
          <img src="./Images/KitchenaryLogo.png"></img>

          <div className="icon-section">
            <i class="bx bxl-linkedin-square"></i>
            <i class="bx bxl-facebook-square"></i>
            <i class="bx bxl-instagram-alt"></i>
            <i class="bx bxl-twitter"></i>
          </div>
        </div>

        <div className="company-section">
          <h3>Company</h3>
          <ul>
            <li>About us</li>
            <li>Corporate</li>
            <li>Careers</li>
            <li>Instamart</li>
            <li>Dineout</li>
            <li>Genie</li>
            <li>Kitchenary Team</li>
            <li>Minis</li>
          </ul>
        </div>

        <div className="contact-section">
          <div className="contact-info">
            <h3>Contact</h3>
            <ul>
              <li>Help & Support</li>
              <li>Partner with us</li>
              <li>Ride with us</li>
              <li>Feedback</li>
            </ul>
          </div>

          <div className="legal-info">
            <h3>Legal</h3>
            <ul>
              <li>Term & Condition</li>
              <li>Cookie Policy</li>
              <li>Privacy Ploicy</li>
            </ul>
          </div>
        </div>

        <div className="available-section">
          <h3>Available</h3>
          <ul>
            <li>Bhubneswar</li>
            <li>Mumbai</li>
            <li>Hyderabad</li>
            <li>Pune</li>
            <li>Delhi</li>
            <li>Bengaluru</li>
            <li>Ahmedabad</li>
            <li>Chennai</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Footer;
