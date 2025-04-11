import React from "react";
import "./PartnerSignup.css";
import { NavLink } from "react-router-dom";
const PartnerSignup = () => {
  return (
    <>
      <div className="foodnavbar-section">
        <NavLink to="/">
          <div className="logo-container">
            <img src="./Images/KitchenaryLogo.png"></img>
          </div>
        </NavLink>

        <NavLink to="/">
          <div className="back-btn">
            <i class="bx bx-left-arrow-alt"></i>
          </div>
        </NavLink>
      </div>

      <div className="partner_signup_section">
        <form>
          <div className="partner_signup_container">
            <div className="restaurant_details">
              <div className="input_feild">
                <label>Restaurant name :</label>
                <input type="text" name="resturant_name"></input>
              </div>
              <div className="input_feild">
                <label>Restaurant Reg Code :</label>
                <input type="text" name="resturant_name"></input>
              </div>
              <div className="input_feild">
                <label>Restaurant image :</label>
                <input type="file" name="resturant_name"></input>
              </div>
              <div className="input_feild">
                <label>Business email :</label>
                <input type="email" name="resturant_name"></input>
              </div>
              <div className="input_feild">
                <label>Business number :</label>
                <input type="number" name="resturant_name"></input>
              </div>
              <div className="input_feild">
                <label>Password :</label>
                <input type="password" name="resturant_name"></input>
              </div>
              <div className="input_feild">
                <label>Confirm password :</label>
                <input type="text" name="resturant_name"></input>
              </div>
            </div>
            <div className="restaurant_address_details">
              {/* <label>Restaurant address :</label> */}
              <div className="address_container">
                <input
                  type="text"
                  name="country"
                  placeholder="County / Region"
                ></input>
                <input type="text" name="state" placeholder="State"></input>
              </div>

              <div className="address_container">
                <input
                  type="text"
                  name="district"
                  placeholder="District"
                ></input>
                <input type="text" name="city" placeholder="City"></input>
              </div>

              <div className="address_container">
                <input type="text" name="pincode" placeholder="Pincode"></input>
                <input
                  type="text"
                  name="landmark"
                  placeholder="Landmark"
                ></input>
              </div>

              <div className="address_container">
                <input
                  type="text"
                  name="building"
                  placeholder="Building name, House no."
                ></input>
              </div>

              <div className="address_container">
                <input
                  type="text"
                  name="colony"
                  placeholder="Rode name, area, colony"
                ></input>
              </div>

              <div className="term_condition">
                <input type="checkbox"></input>
                <label>Agree with all terms & conditions</label>
              </div>

              <button className="form_submit">Submit</button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default PartnerSignup;
