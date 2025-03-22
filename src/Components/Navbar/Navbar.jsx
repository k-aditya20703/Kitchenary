import React, { useState } from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";
const Navbar = () => {
  const [navMenu, setNavmenu] = useState(false);

  const handleMenu = () => {
    if (navMenu === false) {
      setNavmenu(true);
    } else {
      setNavmenu(false);
    }
  };
  return (
    <>
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
            <a href="#">Partner With Us</a>
          </div>
          <div className="link-container">
            <a href="#">Get app</a>
          </div>
          <div className="link-container">
            <a href="#">Sign up</a>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
