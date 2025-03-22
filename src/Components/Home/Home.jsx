import React, { useState } from "react";
import "./Home.css";
import { NavLink } from "react-router-dom";
import { Cities } from "../../Constants/Cities";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";

const Home = () => {
  const [navMenu, setNavmenu] = useState(false);
  const [showHome, setShowhome] = useState(true);
  const [showCategory, setShowcategory] = useState(true);
  const [showFood, setShowfood] = useState(true);
  const [showGrocery, setShowgrocery] = useState(true);
  const [showFooter, setShowfooter] = useState(true);
  const handleMenu = () => {
    if (navMenu === false) {
      setNavmenu(true);
      setShowhome(false);
      setShowcategory(false);
      setShowfood(false);
      setShowgrocery(false);
      setShowfooter(false);
    } else {
      setNavmenu(false);
      setShowhome(true);
      setShowcategory(true);
      setShowfood(true);
      setShowgrocery(true);
      setShowfooter(true);
    }
  };
  return (
    <>
      {/* =================================================================== 
        ************************  NAV BAR SECTION  ************************
        =================================================================== */}

      <div className="navbar">
        <div className="logo">
          <NavLink to="/">
            <img src="./Images/KitchenaryLogo.png" alt="Logo"></img>
          </NavLink>
        </div>
        <div className="menu">
          <i onClick={handleMenu} class="bx bx-menu"></i>
        </div>
        <div className="nav-btn">
          <a href="#">Corporate</a>
          <NavLink to="/partnerwithus">
            <a href="#">Partner With Us</a>
          </NavLink>
          <button className="btn-getapp">Get app</button>
          <NavLink to="/signup">
            <button className="btn-signup">Sign up</button>
          </NavLink>
        </div>
      </div>

      {navMenu && (
        <div className="nav-menu">
          <div className="link-container">
            <a href="#">Corporate</a>
          </div>
          <div className="link-container">
            <NavLink to="/partnerwithus">
              <a href="#">Partner With Us</a>
            </NavLink>
          </div>
          <div className="link-container">
            <a href="#">Get app</a>
          </div>
          <div className="link-container">
            <NavLink to="/signup">
              <a href="#">Sign up</a>
            </NavLink>
          </div>
        </div>
      )}

      {/* =================================================================== 
        *************************  HOME SECTION  *************************
        =================================================================== */}

      {showHome && (
        <div className="home-section">
          <div className="home-detail">
            <p>Order Food &</p>
            <p style={{ color: "#ef1d26" }}>Discover</p>
            <p>Best Restaurant</p>
            <form>
              <input
                type="text"
                placeholder="Search for Food & Restaurant"
              ></input>
              <button type="submit">
                <i class="bx bx-search"></i>
              </button>
            </form>
          </div>
        </div>
      )}

      {/* =================================================================== 
        ************************  CATEGORY SECTION  ***********************
        =================================================================== */}

      {showCategory && (
        <div className="category-section">
          <NavLink to="/fooddelivery">
            <div className="option-card">
              <div className="card-about">
                <h2>FOOD DELIVERY</h2>
                <h4>FROM RESTAURANTS</h4>
                <div className="card-offer">
                  <p>UPTO 60% OFF</p>
                </div>
              </div>

              <div className="card-image">
                <div>
                  <i class="bx bx-right-arrow-circle"></i>
                </div>
                <div>
                  <img src="./images/food.png"></img>
                </div>
              </div>
            </div>{" "}
          </NavLink>

          <NavLink>
            <div className="option-card">
              <div className="card-about">
                <h2>INSTAMART</h2>
                <h4>INSTANT GROCERY</h4>
                <div className="card-offer">
                  <p>UPTO 50% OFF</p>
                </div>
              </div>

              <div className="card-image">
                <div>
                  <i class="bx bx-right-arrow-circle"></i>
                </div>
                <div>
                  <img src="./images/grocery.png"></img>
                </div>
              </div>
            </div>
          </NavLink>

          <NavLink to="/dineout">
            <div className="option-card">
              <div className="card-about">
                <h2>DINEOUT</h2>
                <h4>EAT OUT & SAVE MORE</h4>
                <div className="card-offer">
                  <p>UPTO 60% OFF</p>
                </div>
              </div>

              <div className="card-image">
                <div>
                  <i class="bx bx-right-arrow-circle"></i>
                </div>
                <div>
                  <img src="./images/resturant.png"></img>
                </div>
              </div>
            </div>
          </NavLink>

          <NavLink to="/genie">
            <div className="option-card">
              <div className="card-about">
                <h2>GENIE</h2>
                <h4>PICK-UP & DROP</h4>
                <div className="card-offer">
                  <p>UPTO 60% OFF</p>
                </div>
              </div>

              <div className="card-image">
                <div>
                  <i class="bx bx-right-arrow-circle"></i>
                </div>
                <div>
                  <img src="./images/deliveryboy.png"></img>
                </div>
              </div>
            </div>
          </NavLink>
        </div>
      )}

      {/* =================================================================== 
        **********************  TABLE BOOKING SLIDER  *********************
        =================================================================== */}
      {/* <div className='table-booking'>
            <div className='table-header'>
                <h1>BOOK A <span>TABLE</span></h1>
            </div>


            <div className='sliderdata-container'>
            
            {
                TableBooking.map((TableData,index)=>{
                return(
                <div key={index} className='slider-card'>
                <div className='slider-img'>
                    <img style={{position:'relative'}} src={TableData.image}></img>
                    <img style={{position:'absolute', left:'0', top:'0'}} src='../../images/shadow.png'></img>
                    <h2>{TableData.name}</h2>
                </div>

                <div className='slider-detail'>
                <div className='restaurant-discreption'>
                    <div>
                        <p>{TableData.category}</p>
                        <p>{TableData.location}</p>
                    </div>
                    <div>
                        <p>{TableData.price} per two</p>
                        <p style={{textAlign:'right'}}>{TableData.distance}km</p>
                    </div>
                </div>

                <div className='booking-tag'>
                    <i class='bx bxs-calendar-check'></i>
                    <p>Table Booking</p>
                </div>

                <div className='offer-section'>
                    <div className='offer-btn'>
                    <i class='bx bxs-offer'></i>
                    <p>Flat {TableData.offer} off on pre-booking</p>
                    </div>
                    <p>+2 more</p>
                </div>

                <div className='bank-offer'>
                    <p>Upto 10% off with bank offers</p>
                </div>

                </div>
                </div>
                
                    )
                })
                }
            </div>
            
        </div> */}

      {/* =================================================================== 
     **********************  CITIES WITH FOOD DELIVERY  ********************
     =================================================================== */}
      {showFood && (
        <div>
          <div className="city-header">
            <h2>Cities with food delivery</h2>
          </div>
          <div className="city-section">
            {Cities.map((city) => {
              return (
                <div className="city-card">
                  <p>Order food online in {city.name}</p>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* =================================================================== 
     ***************************  QR CODE SECTION  ************************
     =================================================================== */}

      <div className="qr-section">
        <div className="qr-container">
          <div className="qr-detail">
            <img src="./Images/KitchenaryLogo.png"></img>
            <h1>Get the Kitchenary App now!</h1>
            <p>For best offers & discounts curated specially for you</p>
          </div>

          <div className="qr-code">
            <img src="./Images/qrcode.jpg"></img>
          </div>
        </div>
      </div>

      {/* =================================================================== 
     ********************  CITIES WITH GROCERY DELIVERY  ******************
     =================================================================== */}
      {showGrocery && (
        <div>
          <div className="city-header">
            <h2>Cities with grocery delivery</h2>
          </div>
          <div className="city-section">
            {Cities.map((city) => {
              return (
                <div className="city-card">
                  <p>Order grocery online in {city.name}</p>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {showFooter && <Footer />}
    </>
  );
};

export default Home;
