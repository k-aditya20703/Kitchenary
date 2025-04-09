import React from "react";
import "./Cart.css";
import { NavLink } from "react-router-dom";
import Footer from "../Footer/Footer";
const Cart = () => {
  return (
    <>
      <div className="dineoutnavbar-section">
        <NavLink to="/">
          <div className="logo-container">
            <img src="./Images/KitchenaryLogo.png"></img>
          </div>
        </NavLink>

        <NavLink to="/foodorder">
          <div className="back-btn">
            <i class="bx bx-left-arrow-alt"></i>
          </div>
        </NavLink>
      </div>

      <div className="cart_section">
        <div className="cart_item_container">
          <div className="all_item_container">
            <div className="item_cards">
              <div className="about_item">
                <h3>Chicken Biriyani</h3>
                <p className="item_price">₹ 230</p>
                <p className="item_desc">
                  {" "}
                  "A light roll high on the goodness of veggies. Assorted
                  vegetables, sourced locally are spiced & rolled into the
                  paratha along with our delicious mint sauce. This is health in
                  a paratha! (420 Calories)",
                </p>
              </div>
              <div className="item_photo">
                <img src="./Images/food1.png"></img>
              </div>
            </div>
          </div>
        </div>
        <div className="cart_billing_container"></div>
      </div>

      {/* <Footer /> */}
    </>
  );
};

export default Cart;
