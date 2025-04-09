import React, { useState } from "react";
import "./FoodOrder.css";
import { NavLink } from "react-router-dom";
import { foodOrder } from "../../Constants/FoodOrder";
import Footer from "../Footer/Footer";

const FoodOrder = () => {
  const [itemCount, setItemCount] = useState(0);

  const handleDecrement = () => {
    setItemCount(itemCount - 1);
  };

  const handleIncrement = () => {
    setItemCount(itemCount + 1);
  };
  return (
    <>
      <div className="dineoutnavbar-section">
        <NavLink to="/">
          <div className="logo-container">
            <img src="./Images/KitchenaryLogo.png"></img>
          </div>
        </NavLink>
        <div className="nav_details">
          <NavLink to="/cart">
            <div className="cart">
              <i class="bx bxs-cart-alt"></i>
              <p>Cart</p>
            </div>
          </NavLink>

          <NavLink to="/">
            <div className="back-btn">
              <i class="bx bx-left-arrow-alt"></i>
            </div>
          </NavLink>
        </div>
      </div>

      <div className="restaurant_details_background">
        <div className="restaurant_details">
          <h2>The Food Court</h2>
          <div className="restaurant_ratting">
            <div className="ratting_container">
              <i class="bx bxs-star"></i>
            </div>
            <p>4.3</p>
            <p>(132 Rattings)</p>
          </div>
          <p className="restaurant_location">Hyderabad</p>
          <p className="delivery_time">Dekivery within 30 - 35 mins</p>
        </div>
      </div>

      <div className="all_item_container">
        {foodOrder.map((currentItem, index) => {
          return (
            <div className="item_cards">
              <div className="about_item">
                <h3>{currentItem.itemName} </h3>
                <p className="item_price">₹ {currentItem.itemPrice}</p>
                <p className="item_desc">{currentItem.itemDescription}</p>
              </div>
              <div className="item_photo">
                <img src={currentItem.itemPhoto}></img>
                <div className="item_counter">
                  <button onClick={handleDecrement} className="decrement">
                    -
                  </button>
                  <div className="counter_display">
                    <p>{itemCount}</p>
                  </div>
                  <button onClick={handleIncrement} className="increment">
                    +
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <Footer />
    </>
  );
};

export default FoodOrder;
