import React, { useState } from "react";
import "./UserSignup.css";
import { NavLink } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa6";

const UserSignup = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [hidePassword, setHidePassword] = useState(true);
  const [slide, setSlide] = useState(false); //for adding animation

  const handleHide = () => {
    setHidePassword(false);
    setShowPassword(true);
  };

  const handleShow = () => {
    setShowPassword(false);
    setHidePassword(true);
  };
  return (
    <>
      <div className="usersignup_container">
        <div className="foodnavbar-section">
          <NavLink to="/">
            <div className="logo-container">
              <img src="./Images/KitchenaryLogo.png"></img>
            </div>
          </NavLink>

          <NavLink to="/">
            <div className="back-btn">
              <i className="bx bx-left-arrow-alt"></i>
            </div>
          </NavLink>
        </div>

        <div className="usersignup_section">
          <div className="usersignup_form">
            <form>
              <h2>Log in</h2>

              <div className="usersignup_input">
                <input
                  className="userInput"
                  type="email"
                  placeholder="E-mail"
                ></input>
                <i class="bx bxs-envelope"></i>
              </div>

              <div className="usersignup_input">
                <input
                  className="userInput"
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                ></input>
                {hidePassword && (
                  <i
                    onClick={handleHide}
                    style={{ cursor: "pointer" }}
                    class="bx bxs-hide"
                  ></i>
                )}
                {showPassword && (
                  <i
                    onClick={handleShow}
                    style={{ cursor: "pointer" }}
                    class="bx bxs-show"
                  ></i>
                )}
              </div>

              <div className="password_section">
                <div className="rememberpassword">
                  <input type="checkbox"></input>
                  <label>Remember Password</label>
                </div>

                <a href="#">Forget password ?</a>
              </div>

              <button>Submit</button>
              <p className="login_option">Try another way ?</p>
            </form>
          </div>
          <div className="usersignup_form">
            <form>
              <h2>Sign Up</h2>
              <div className="usersignup_input">
                <input
                  className="userInput"
                  type="text"
                  placeholder="Full Name"
                ></input>
                <i class="bx bxs-user"></i>
              </div>

              <div className="usersignup_input">
                <input
                  className="userInput"
                  type="email"
                  placeholder="E-mail"
                ></input>
                <i class="bx bxs-envelope"></i>
              </div>

              <div className="usersignup_input">
                <input
                  className="userInput"
                  type="tel"
                  placeholder="Contact"
                ></input>
                <i class="bx bxs-phone-call"></i>
              </div>

              <div className="usersignup_input">
                <input
                  className="userInput"
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                ></input>
                {hidePassword && (
                  <i
                    onClick={handleHide}
                    style={{ cursor: "pointer" }}
                    class="bx bxs-hide"
                  ></i>
                )}
                {showPassword && (
                  <i
                    onClick={handleShow}
                    style={{ cursor: "pointer" }}
                    class="bx bxs-show"
                  ></i>
                )}
              </div>

              <div className="usersignup_input">
                <input
                  className="userInput"
                  type="text"
                  placeholder="Confirm Password"
                ></input>
                <i class="bx bxs-show"></i>
              </div>

              <div className="termandcondition">
                <input type="checkbox"></input>
                <label>Agree with all terms & conditions</label>
              </div>

              <button>Submit</button>

              <div className="signup_options">
                <div>
                  <FcGoogle />
                </div>

                <div style={{ color: "#1877F2" }}>
                  <FaFacebook />
                </div>
              </div>
            </form>
          </div>
          <div
            className="goto_login"
            style={{
              left: slide ? "calc(100% - 50%)" : "-250%",
              transition: "left 1s ease",
            }}
          >
            <div
              style={{ marginLeft: "3rem" }}
              className="goto_login_container"
            >
              <h1>Hello! WELCOME</h1>
              <img src="./Images/burger.png"></img>
              <p>You don't have any account</p>
              <button onClick={() => setSlide(!slide)}>Go to signup</button>
            </div>
            <div
              style={{ marginRight: "3rem" }}
              className="goto_login_container"
            >
              <h1>WELCOME BACK</h1>
              <img src="./Images/burger.png"></img>
              <p>You already have an account</p>
              <button onClick={() => setSlide(!slide)}>Go to login</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserSignup;
