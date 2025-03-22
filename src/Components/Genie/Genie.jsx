import React from "react";
import "./Genie.css";
import { NavLink } from "react-router-dom";
import Footer from "../Footer/Footer";
const Genie = () => {
  return (
    <>
      <div className="signupnav-section">
        <img src="./Images/KitchenaryLogo.png"></img>
        <NavLink to="/">
          <div className="signupback-btn">
            <i class="bx bx-left-arrow-alt"></i>
          </div>
        </NavLink>
      </div>

      <div className="genie-container">
        <div className="genie-detail">
          <div className="genie-detailcontainer">
            <NavLink to="/pickup">
              <div>
                <button className="pick-btn">
                  <i class="bx bxs-up-arrow-square"></i>Set Pick-up Location
                </button>
              </div>
            </NavLink>
            <NavLink to="/drop">
              <div>
                <button className="drop-btn">
                  Set Drop Location<i class="bx bxs-down-arrow-square"></i>
                </button>
              </div>
            </NavLink>
            <div className="genie-offer">
              <div>
                <img src="./images/hdfc.png"></img>
              </div>

              <div>
                <h3>Extra 10% Cashback</h3>
                <h4>WITH KITCHENARY HDFC CARD | ABOVE ₹100</h4>
              </div>
            </div>
          </div>

          <div className="rulebox">
            <h4>Things to keep in mind</h4>
            <div className="rule-container">
              <i class="bx bx-cycling"></i>
              <p>Items should fit on a two-wheeler</p>
            </div>

            <div className="rule-container">
              <i class="bx bx-credit-card"></i>
              <p>Avoid sending expensive & fragile items</p>
            </div>

            <div className="rule-container">
              <i class="bx bxs-drink"></i>
              <p>No alcohol,illegal or restricted items</p>
            </div>
          </div>
        </div>

        <div className="genie-cover">
          <img src="./images/geniecover.jpg"></img>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Genie;
