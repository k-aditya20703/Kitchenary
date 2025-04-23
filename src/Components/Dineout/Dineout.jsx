import React, { useEffect, useState } from "react";
import "./Dineout.css";
import { NavLink } from "react-router-dom";
import { food } from "../../Constants/Food";
import { TableBooking } from "../../Constants/TableBooking";
import Footer from "../Footer/Footer";
import Loader from "../Loader/Loader";
import Error from "../PopUp/Error";
import axios from "axios";

const Dineout = () => {
  const [loader, setLoader] = useState(false);
  const [restaurant, setRestaurant] = useState([]);
  const [error, setError] = useState("");
  const [search, setSearch] = useState("");

  const API = `http://ec2-98-81-198-145.compute-1.amazonaws.com:9091/api/v1/kichenary/partners?page=0&size=20`;

  useEffect(() => {
    setLoader(true);
    axios
      .get(API)
      .then((res) => {
        setRestaurant(res.data);
        setLoader(false);
        setError("");
      })

      .catch((error) => {
        console.error("Error Request:", error.request);
        setError("Unexpected error occured please try again");
        setLoader(false);
      });
  }, []);

  const handleSearch = (event) => {
    setSearch(event.target.value);
  };

  const searchData = restaurant.filter((curRestaurant) =>
    curRestaurant.restaurantName.includes(search)
  );

  return (
    <>
      <div className="dineoutnavbar-section">
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

      <div className="dineout-body">
        <div className="coverPicture">
          <img
            className="restaurant"
            src="./images/restaurant.jpg"
            alt="restuaurant"
          ></img>
          <img
            className="CoverPicture-logo"
            src="./images/KitchenaryLogo.png"
            alt="myimg"
          />
          <div className="coverText">
            <p>Explore Best Restaurants</p>
            <p>Nearby You ...</p>
          </div>
        </div>
      </div>

      <div className="input-btn-container">
        <div className="dineout-input-container">
          <input
            type="search"
            value={search}
            onChange={handleSearch}
            placeholder="Search Restaurants"
          ></input>
          <button>
            <i class="bx bx-search-alt-2"></i>
          </button>
        </div>
        <div className="btn-section">
          <button>
            Filter<i class="bx bx-slider-alt"></i>
          </button>
          <button>
            Sort by<i class="bx bx-chevron-down"></i>
          </button>
          <button>With in 5km</button>
          <button>Rating 3.0+</button>
        </div>
      </div>

      {loader && <Loader />}
      {error && <Error errorMsg={error} />}

      <div className="sliderdata-container">
        {searchData.map((TableData, index) => {
          return (
            <NavLink to="/tablebooking">
              <div key={index} className="slider-card">
                <div className="slider-img">
                  <img
                    style={{ position: "relative" }}
                    src={TableData.restaurantImgUrl}
                  ></img>
                  <img
                    style={{ position: "absolute", left: "0", top: "0" }}
                    src="../../images/shadow.png"
                  ></img>
                  <h2>{TableData.restaurantName}</h2>
                </div>

                <div className="slider-detail">
                  <div className="restaurant-discreption">
                    <div>
                      <p>{TableData.partnerAddress.city}</p>
                      <p>{TableData.partnerAddress.colonyName}</p>
                    </div>
                    <div>
                      <p>1000 per two</p>
                      <p style={{ textAlign: "right" }}>8km</p>
                    </div>
                  </div>

                  <div className="dineout-ratting-section">
                    <div className="booking-tag">
                      <i class="bx bxs-calendar-check"></i>
                      <p>Table Booking</p>
                    </div>

                    <NavLink to="/ratting">
                      <div className="ratting-container">
                        <i class="bx bxs-star"></i>
                        <i class="bx bxs-star"></i>
                        <i class="bx bxs-star"></i>
                        <i class="bx bxs-star"></i>
                        <i class="bx bxs-star-half"></i>
                      </div>
                    </NavLink>
                  </div>

                  <div className="offer-section">
                    <div className="offer-btn">
                      <i class="bx bxs-offer"></i>
                      <p>Flat 10% off on pre-booking</p>
                    </div>
                    <p>+2 more</p>
                  </div>

                  <div className="bank-offer">
                    <p>Upto 10% off with bank offers</p>
                  </div>
                </div>
              </div>
            </NavLink>
          );
        })}
      </div>

      <Footer />
    </>
  );
};

export default Dineout;
