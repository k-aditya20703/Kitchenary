import React, { useState } from "react";
import "./Cart.css";
import { NavLink } from "react-router-dom";
import Payment from "../Payment/Payment";
const Cart = () => {
  const [quantity, setQuantity] = useState(1);
  const [itemPrice, setItemPrice] = useState(230);
  const [paymentSection, setPaymentSection] = useState(false);

  const handleDecrement = () => {
    setQuantity(quantity - 1);
  };
  const handleIncrement = () => {
    setQuantity(quantity + 1);
  };

  const handlePlaceOrder = () => {
    setPaymentSection(true);
  };
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
        <div className="cart_details">
          <div className="item_card">
            <div className="item_details">
              <h3>Chicken Biriyani</h3>
              <p className="item_price">₹230</p>
              <p className="item_desc">
                A light roll high on the goodness of veggies. Assorted
                vegetables, sourced locally are spiced & rolled into the paratha
                along with our delicious mint sauce. This is health in a
                paratha! (420 Calories)
              </p>
            </div>
            <div className="cart_item_photo">
              <img src="./Images/food1.png"></img>
              <div className="quantity_btn_section">
                <button className="delete_btn">
                  <i class="bx bxs-trash"></i>
                </button>
                <button disabled={quantity <= 1} onClick={handleDecrement}>
                  -
                </button>
                <button>{quantity}</button>
                <button disabled={quantity >= 10} onClick={handleIncrement}>
                  +
                </button>
              </div>
            </div>
          </div>
          <div className="item_card">
            <div className="item_details">
              <h3>Chicken Biriyani</h3>
              <p className="item_price">₹230</p>
              <p className="item_desc">
                A light roll high on the goodness of veggies. Assorted
                vegetables, sourced locally are spiced & rolled into the paratha
                along with our delicious mint sauce. This is health in a
                paratha! (420 Calories)
              </p>
            </div>
            <div className="cart_item_photo">
              <img src="./Images/food1.png"></img>
              <div className="quantity_btn_section">
                <button className="delete_btn">
                  <i class="bx bxs-trash"></i>
                </button>
                <button disabled={quantity <= 1} onClick={handleDecrement}>
                  -
                </button>
                <button>{quantity}</button>
                <button disabled={quantity >= 10} onClick={handleIncrement}>
                  +
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="cart_billing">
          <div className="about_restaurant">
            <img src="./Images/food1.png"></img>
            <div>
              <h3>The Food Court</h3>
              <p className="location">Bhubneswar</p>
            </div>
          </div>

          <div className="item_details">
            <ul>
              <li>
                <div className="about_item">
                  <p className="item_name">Chicken Biriyani</p>
                  <p>Quantity: {quantity} </p>
                  <p className="item_price">{quantity * itemPrice}</p>
                </div>
              </li>

              <li>
                <div className="about_item">
                  <p className="item_name">Chicken Biriyani</p>
                  <p>Quantity: {quantity} </p>
                  <p className="item_price">{quantity * itemPrice}</p>
                </div>
              </li>
            </ul>
          </div>

          <div className="no_contact_delivery">
            <input type="checkbox"></input>
            <p>
              <span>No-Contact Delivery</span> (Unwell, or avoiding contact?
              Please select no-contact delivery. Partner will safely place the
              order outside your door) (not for COD)
            </p>
          </div>

          <div className="bill_details">
            <p> Bill Details</p>
            <div>
              <p className="bill_heading">Item Total</p>
              <p>₹230</p>
            </div>
            <div>
              <p className="bill_heading">Delivery Fee</p>
              <p>₹30</p>
            </div>
            <div>
              <p className="bill_heading">GST & Other Charges</p>
              <p>₹50</p>
            </div>
          </div>
          <div className="total">
            <p>To Pay</p>
            <p className="bill_value">₹310</p>
          </div>
          <div className="place_order">
            <button onClick={handlePlaceOrder}>Place Order</button>
          </div>
        </div>
      </div>

      {paymentSection && (
        <div className="payment_section">
          <Payment />
        </div>
      )}
    </>
  );
};

export default Cart;
