import React, { useEffect, useState } from "react";
import "./FoodDelivery.css";
import { food } from "../../Constants/Food";
import Footer from "../Footer/Footer";
import { NavLink } from "react-router-dom";
import axios from "axios";
import Loader from "../Loader/Loader";

const FoodDelivery = () => {
  const [showFoodcard, setShowFoodcard] = useState(food);
  const [partners, setPartners] = useState([]);
  const [loader, setLoader] = useState(false);
  const [partnerAddress, setPartnerAddress] = useState();
  const [test, setTest] = useState(["test"]);

  const API = `http://ec2-44-201-134-49.compute-1.amazonaws.com:9091/api/v1/kichenary/partners?page=0&size=20`;

  useEffect(() => {
    try {
      setLoader(true);
      axios.get(API).then((res) => {
        console.log(res.data);
        setPartners(res.data);
        setLoader(false);
        let nameList = [];
        res.data.map((partner, index) => {
          let itemName = "";
          partner.partnerItems.map((item, key) => {
            console.log(item.itemName);
            if (item.itemName && item.itemName !== undefined) {
              console.log(partner.partnerItems.length);
              if (key < partner.partnerItems.length - 1) {
                itemName = itemName + item.itemName + " | ";
              } else {
                itemName = itemName + item.itemName;
              }
            }

            return itemName;
          });
          console.log(itemName);
          nameList.push(itemName);
        });
        setTest(nameList);
      });
    } catch (error) {
      console.log(error);
    }
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

      <div className="foodcard-section">
        {showFoodcard && (
          <div className="foodcard-container">
            {partners.map((foodData, index) => (
              <div key={index} className="food-card">
                {/* {foodData.partnerItems.map((itemDetails, index) => ( */}
                <div>
                  <div className="foodimg-section">
                    <img src="./Images/food3.jpeg" alt="my_img"></img>
                  </div>
                  <div className="fooddetail-section">
                    <h3>{foodData.restaurantName}</h3>
                    <p>
                      <i class="bx bxs-star"></i>
                      <span>4.3,{foodData.time} mins</span>
                    </p>
                    <p>{test[index]}</p>

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
        )}
      </div>
      <Footer />
    </>
  );
};

export default FoodDelivery;
