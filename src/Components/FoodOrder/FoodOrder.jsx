import React, { useState } from "react";
import "./FoodOrder.css";
import { NavLink } from "react-router-dom";
import { foodOrder } from "../../Constants/FoodOrder";
import Footer from "../Footer/Footer";

const FoodOrder = (props) => {
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

          <NavLink to="/fooddelivery">
            <div className="back-btn">
              <i class="bx bx-left-arrow-alt"></i>
            </div>
          </NavLink>
        </div>
      </div>
      {props?.partners.map((restaurantData) => {
        return (
          <div>
            <div className="restaurant_details_background">
              <div className="restaurant_details">
                <h2>{restaurantData.restaurantName}</h2>
                <div className="restaurant_ratting">
                  <div className="ratting_container">
                    <i class="bx bxs-star"></i>
                  </div>
                  <p>4.3</p>
                  <p>(132 Rattings)</p>
                </div>
                <p className="restaurant_location">
                  {restaurantData.partnerAddress.city},{" "}
                  {restaurantData.partnerAddress.colonyName}
                </p>
                <p className="delivery_time">Delivery within 30 - 35 mins</p>
              </div>
            </div>

            <div className="all_item_container">
              {restaurantData.partnerItems.map((itemDetails) => {
                return (
                  <div className="item_cards">
                    <div className="about_item">
                      <h3>{itemDetails.itemName} </h3>
                      <p className="item_price">₹ {itemDetails.price}</p>
                      <p className="item_desc">{itemDetails.itemDesc}</p>
                    </div>
                    <div className="item_photo">
                      <img src={itemDetails.itemImgUrl}></img>
                      <div className="item_counter"></div>
                      <button className="add_to_cart">Add to cart</button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
      <Footer />
    </>
  );
};

export default FoodOrder;
