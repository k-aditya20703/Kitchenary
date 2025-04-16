import React, { useEffect, useState } from "react";
import "./FoodDelivery.css";
import { food } from "../../Constants/Food";
import Footer from "../Footer/Footer";
import { NavLink } from "react-router-dom";
import axios from "axios";
import Loader from "../Loader/Loader";
import Error from "../PopUp/Error";

const FoodDelivery = (props) => {
  const [showFoodcard, setShowFoodcard] = useState(food);
  const [loader, setLoader] = useState(false);
  const [restaurantName, setRestaurantName] = useState();
  const [error, setError] = useState("");
  const [itemDetails, setItemDetails] = useState([]);
  const [showAllItem, setShowAllItem] = useState(false);
  const [showRestaurants, setShowRestaurants] = useState(true);

  const API = `http://ec2-98-81-198-145.compute-1.amazonaws.com:9091/api/v1/kichenary/partners?page=0&size=20`;

  useEffect(() => {
    setLoader(true);
    axios
      .get(API)
      .then((res) => {
        props?.setPartners(res.data);
        setLoader(false);
        setError("");
      })

      .catch((error) => {
        console.error("Error Request:", error.request);
        setError("Unexpected error occured please try again");
        setLoader(false);
      });
  }, []);

  const comparePrice = showFoodcard.filter(
    (foodPrice) => foodPrice.price >= 300
  );
  // console.log(comparePrice);
  const handleBetween = () => {
    setShowFoodcard(comparePrice);
  };
  const ratting = showFoodcard.filter(
    (foodRatting) => Number(foodRatting.ratting) >= 3
  );
  const handleRatting = () => {
    setShowFoodcard(ratting);
  };

  const delivery = showFoodcard.filter(
    (fastDelivery) => Number(fastDelivery.time) < 35
  );
  const handleFastDelivery = () => {
    setShowFoodcard(delivery);
  };

  const newData = showFoodcard.filter((food) => food.price <= 300);
  const handleLessthen = () => {
    setShowFoodcard(newData);
  };

  // console.log(partners);

  const handleRestaurant = (FoodDelivery) => {
    setItemDetails([{ ...FoodDelivery }]);
    setShowRestaurants(false);
    setShowAllItem(true);
  };

  const handleBack = () => {
    setShowRestaurants(true);
    setShowAllItem(false);
  };

  return (
    <>
      {/* ============================================================================ */}

      {showAllItem && (
        <div className="item_container">
          <div className="foodnavbar-section">
            <div
              style={{ cursor: "pointer" }}
              onClick={handleBack}
              className="back-btn"
            >
              <i class="bx bx-left-arrow-alt"></i>
            </div>
            {/* </NavLink> */}
          </div>
          {itemDetails.map((currentItem) => {
            return (
              <>
                <div>
                  <div className="restaurant_details_background">
                    <div className="restaurant_details">
                      <h2>{currentItem.restaurantName}</h2>
                      <div className="restaurant_ratting">
                        <div className="ratting_container">
                          <i class="bx bxs-star"></i>
                        </div>
                        <p>4.3</p>
                        <p>(132 Rattings)</p>
                      </div>
                      <p className="restaurant_location">
                        {currentItem.partnerAddress.city},{" "}
                        {currentItem.partnerAddress.colonyName}
                      </p>
                      <p className="delivery_time">
                        Delivery within 30 - 35 mins
                      </p>
                    </div>
                  </div>

                  <div className="all_item_container">
                    {currentItem.partnerItems.map((itemDetails) => {
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
              </>
            );
          })}
        </div>
      )}

      {/* ============================================================================ */}

      {showRestaurants && (
        <>
          <div className="foodnavbar-section">
            <NavLink to="/">
              <div className="logo-container">
                <img src="./Images/KitchenaryLogo.png" alt="my"></img>
              </div>
            </NavLink>

            <NavLink to="/">
              <div className="back-btn">
                <i class="bx bx-left-arrow-alt"></i>
              </div>
            </NavLink>
          </div>

          <div className="fooddelivery-header">
            <h2>Restaurants with online food delivery</h2>
          </div>
          <div className="foodbtn-section">
            <button>
              Filter<i class="bx bx-slider-alt"></i>
            </button>
            <button>
              Sort by<i class="bx bx-chevron-down"></i>
            </button>
            <button onClick={handleFastDelivery}>Fast Delivery</button>
            <button onClick={handleRatting}>Rating 4.0+</button>
            <button onClick={handleBetween}>Less then Rs.600</button>
            <button onClick={handleLessthen}>Less then Rs.300</button>
          </div>

          {loader && <Loader />}
          {error && <Error errorMsg={error} />}
          <div className="foodcard-section">
            {showFoodcard && (
              <NavLink to=" ">
                <div className="foodcard-container">
                  {props?.partners.map((foodData, index) => (
                    <div
                      onClick={() => handleRestaurant(foodData)}
                      key={index}
                      className="food-card"
                    >
                      <div>
                        <div className="foodimg-section">
                          <img
                            src={foodData.restaurantImgUrl}
                            alt="my_img"
                          ></img>
                        </div>
                        <div className="fooddetail-section">
                          <h3 style={{ color: "black" }}>
                            {foodData.restaurantName}
                          </h3>

                          <p>
                            <i class="bx bxs-star"></i>
                            <span>4.3,{foodData.time} mins</span>
                          </p>
                          <p>{foodData.itemNameList[0]}</p>

                          <p>
                            {foodData.partnerAddress?.city} ,{" "}
                            {foodData.partnerAddress?.colonyName}
                          </p>
                        </div>
                      </div>
                      {/* ))} */}
                    </div>
                  ))}
                </div>
              </NavLink>
            )}
          </div>
        </>
      )}
      <Footer />
    </>
  );
};

export default FoodDelivery;
