import React, { useState } from "react";
import "./Tablebooking.css";
import { NavLink } from "react-router-dom";
import { AmbiencePhoto } from "../../Constants/AmbiencePhoto";
import { FoodPhoto } from "../../Constants/FoodPhoto";
import { VegMenu } from "../../Constants/Menu";
import { NonvegMenu } from "../../Constants/Menu";
import Footer from "../Footer/Footer";

const Tablebooking = () => {
  const [showDineout, setShowDineout] = useState(true);
  const [showPhotos, setShowPhotos] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const [showAmbience, setShowAmbience] = useState(true);
  const [showFood, setShowFood] = useState(false);
  const [showVegmenu, setShowVegmenu] = useState(true);
  const [showNonvegMenu, setShowNonvegMenu] = useState(false);

  const handleDineout = () => {
    return setShowPhotos(false), setShowMenu(false), setShowDineout(true);
  };

  const handlePhotos = () => {
    return setShowDineout(false), setShowMenu(false), setShowPhotos(true);
  };

  const handleMenu = () => {
    return setShowDineout(false), setShowPhotos(false), setShowMenu(true);
  };

  const handleAmbience = () => {
    return setShowFood(false), setShowAmbience(true);
  };

  const handleFood = () => {
    return setShowAmbience(false), setShowFood(true);
  };

  const handleVegMenu = () => (setShowNonvegMenu(false), setShowVegmenu(true));

  const handleNonvegMenu = () => (
    setShowVegmenu(false), setShowNonvegMenu(true)
  );
  return (
    <>
      <div className="tablebooking-navbar">
        <NavLink to="/">
          <img src="./Images/KitchenaryLogo.png"></img>
        </NavLink>
        <div className="tablebooking-btnsection">
          <button
            onClick={handleDineout}
            style={{
              color: showDineout ? "#ef1d26" : "#272727d2",
              borderColor: showDineout ? "#ef1d26" : "#272727d2",
            }}
          >
            Dineout
          </button>
          <button
            onClick={handlePhotos}
            style={{
              color: showPhotos ? "#ef1d26" : "#272727d2",
              borderColor: showPhotos ? "#ef1d26" : "#272727d2",
            }}
          >
            Photos
          </button>
          <button
            onClick={handleMenu}
            style={{
              color: showMenu ? "#ef1d26" : "#272727d2",
              borderColor: showMenu ? "#ef1d26" : "#272727d2",
            }}
          >
            Menu
          </button>
        </div>
      </div>

      <div className="tablebooking-header">
        <div className="header-element-icon">
          <NavLink to="/dineout">
            <i class="bx bx-left-arrow-alt"></i>
          </NavLink>
        </div>
        <div className="header-element">
          <h2>Punjab Grill</h2>
        </div>
      </div>

      <div className="dineout-card-container">
        <div className="dineout-card">
          <div>
            <p className="about-card">
              <i class="bx bxs-star"></i>4.5 . ₹1500 per two
            </p>
            <p className="about-card">Chinese,North Indian</p>
            <p className="location">Location: Plot no.2, Bhubneswar, Patia</p>
            <h3>
              Open: 11AM - 10PM{" "}
              <i
                style={{ fontSize: "small", marginLeft: ".5rem" }}
                class="bx bxs-down-arrow"
              ></i>
            </h3>
          </div>
          <hr></hr>
          <div className="link-section">
            <div className="call-section">
              <i class="bx bxs-phone-call"></i>
              <p>Call</p>
            </div>
            <hr></hr>
            <div className="direction-section">
              <i class="bx bxs-direction-right"></i>
              <p>Direction</p>
            </div>
          </div>
        </div>
      </div>

      {/* =====================================================================
        ************************   DINEOUT SECTION   ************************
        ===================================================================== */}

      {showDineout && (
        <div className="dineout-section">
          <div className="dineout-offer-section">
            <h2 style={{ marginBottom: "1rem", fontWeight: "400" }}>Offers</h2>
            <div className="offer-card-container">
              <div className="dineout-offer-card">
                <div className="dineout-ofr-amount">
                  <h3>Flat 10% Off</h3>
                  <p>on total bill</p>
                </div>
                <div className="dineout-ofr-category">
                  <h4>Pre-book offer</h4>
                  <p>Limited slots, reserve and book your table</p>
                </div>
              </div>

              <div className="dineout-offer-card">
                <div className="dineout-ofr-amount">
                  <h3>Flat 10% Off</h3>
                  <p>on total bill</p>
                </div>
                <div className="dineout-ofr-category">
                  <h4>Walk-in offer</h4>
                  <p>Pay bill via Kitchenaryapp to avail the offer</p>
                </div>
              </div>
            </div>

            <h2 style={{ marginTop: "1rem", fontWeight: "400" }}>
              Additional Offers
            </h2>
            <div className="additional-ofr-section">
              <div className="add-offer-card">
                <div className="additional-img-section">
                  <img src="./Images/hdfc.png"></img>
                </div>

                <div className="additional-ofr-details">
                  <h3>10% Cashback</h3>
                  <p>10% cashback|Above ₹100</p>
                </div>
              </div>

              <div className="add-offer-card">
                <div className="additional-img-section">
                  <img src="./Images/hdfc.png"></img>
                </div>

                <div className="additional-ofr-details">
                  <h3>10% Cashback</h3>
                  <p>10% cashback|Above ₹100</p>
                </div>
              </div>
            </div>
          </div>

          <div className="dineout-photo-section">
            <img src="./Images/Dineout-cover.jpg"></img>
          </div>
        </div>
      )}

      {/* =====================================================================
        ************************   PHOTOS SECTION   ************************
        ===================================================================== */}
      {showPhotos && (
        <div className="photo-section">
          <div>
            <h2>Punjab Grill Photos</h2>
            <div className="photo-btn-section">
              <button
                style={{
                  color: showAmbience ? "#ef1d26" : "#272727d2",
                  borderColor: showAmbience ? "#ef1d26" : "#272727d2",
                }}
                onClick={handleAmbience}
              >
                AMBIENCE
              </button>
              <button
                style={{
                  color: showFood ? "#ef1d26" : "#272727d2",
                  borderColor: showFood ? "#ef1d26" : "#272727d2",
                }}
                onClick={handleFood}
              >
                FOOD
              </button>
            </div>

            <div className="rest-photos">
              {showAmbience && (
                <div className="ambience-photo">
                  <div className="ambience-photocontainer">
                    {AmbiencePhoto.map((ambiencePhoto) => {
                      return <img src={ambiencePhoto.image}></img>;
                    })}
                  </div>
                </div>
              )}

              {showFood && (
                <div className="food-photo">
                  <div className="food-photocontainer">
                    {FoodPhoto.map((foodphoto) => {
                      return <img src={foodphoto.image}></img>;
                    })}
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className="photo-cover">
            <img src="./Images/photo-cover.jpg"></img>
          </div>
        </div>
      )}

      {/* =====================================================================
        ************************   MENU SECTION   ************************
        ===================================================================== */}

      {showMenu && (
        <div className="photo-section">
          <div>
            <h2>Punjab Grill Photos</h2>
            <div className="photo-btn-section">
              <button
                onClick={handleVegMenu}
                style={{
                  color: showVegmenu ? "#70bf60" : "#272727d2",
                  borderColor: showVegmenu ? "#70bf60" : "#272727d2",
                }}
              >
                Veg <i class="bx bxs-circle"></i>
              </button>
              <button
                onClick={handleNonvegMenu}
                style={{
                  color: showNonvegMenu ? "#ef1d26" : "#272727d2",
                  borderColor: showNonvegMenu ? "#ef1d26" : "#272727d2",
                }}
              >
                Non-veg <i class="bx bxs-circle"></i>
              </button>
            </div>

            <div className="rest-photos">
              {showVegmenu && (
                <div className="vegmenu-photo">
                  <div className="vegmenu-photocontainer">
                    {VegMenu.map((VegMenu) => {
                      return <img src={VegMenu.image}></img>;
                    })}
                  </div>
                </div>
              )}

              {showNonvegMenu && (
                <div className="Nonvegmenu-photo">
                  <div className="Nonvegmenu-photocontainer">
                    {NonvegMenu.map((NonvegMenu) => {
                      return <img src={NonvegMenu.image}></img>;
                    })}
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className="menu-cover">
            <img src="./Images/menu-cover.jpg"></img>
          </div>
        </div>
      )}

      <Footer />
    </>
  );
};

export default Tablebooking;
