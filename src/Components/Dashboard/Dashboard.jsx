import React from "react";
import "./Dashboard.css";
import { Circle } from "rc-progress";
import { NavLink } from "react-router-dom";
const Dashboard = () => {
  return (
    <>
      <div className="partner_login_nav">
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
      </div>
      <div className="dashboard-section">
        <div className="dashboard-menu">
          <div className="menu-option-container">
            <div className="menu-option active">
              <i class="bx bxs-dashboard"></i>
              <a>Dashboard</a>
            </div>
            <NavLink to="/">
              <div className="menu-option">
                <i class="bx bx-home"></i>
                <a>Home</a>
              </div>
            </NavLink>
            <div className="menu-option">
              <i class="bx bxs-component"></i>
              <a>Corporate</a>
            </div>
            <div className="menu-option">
              <i class="bx bx-user-circle"></i>
              <a>Profile</a>
            </div>
            <div className="menu-option">
              <i class="bx bx-cog"></i>
              <a>Settings</a>
            </div>
            <div className="menu-option">
              <i class="bx bx-log-out"></i>
              <a>Log out</a>
            </div>

            <div className="social-media-container">
              <a>
                <i class="bx bxl-facebook-square"></i>
              </a>
              <a>
                <i class="bx bxl-instagram-alt"></i>
              </a>
              <a>
                <i class="bx bxl-twitter"></i>
              </a>
              <a>
                <i class="bx bxl-linkedin-square"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="dashboard-option-section">
          <div className="dashboard-option">
            <div className="dashboard-option-card">
              <h3>Daily Revenue</h3>
              <div className="option-card-details">
                <h2>₹ 12345</h2>
                <div className="progress-indicator">
                  <Circle
                    percent={60}
                    strokeColor="#0059ff49"
                    strokeWidth={8}
                    trailColor="#00aeff42"
                    strokeLinecap="square"
                    trailWidth={8}
                    gapDegree={80}
                    gapPosition="bottom"
                  />
                  <div className="progress-value">
                    <p>60%</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="dashboard-option-card">
              <h3>Today's Order</h3>
              <div className="option-card-details">
                <h2>198</h2>
                <div className="progress-indicator">
                  <Circle
                    percent={80}
                    strokeColor="#0059ff49"
                    strokeWidth={8}
                    trailColor="#00aeff42"
                    strokeLinecap="square"
                    trailWidth={8}
                    gapDegree={80}
                    gapPosition="bottom"
                  />
                  <div className="progress-value">
                    <p>80%</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="dashboard-option-card">
              <h3>Cancled Order</h3>
              <div className="option-card-details">
                <h2>30</h2>
                <div className="progress-indicator">
                  <Circle
                    percent={20}
                    strokeColor="#0059ff49"
                    strokeWidth={8}
                    trailColor="#00aeff42"
                    strokeLinecap="square"
                    trailWidth={8}
                    gapDegree={80}
                    gapPosition="bottom"
                  />
                  <div className="progress-value">
                    <p>20%</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="dashboard-option-card">
              <h3>Partners</h3>
              <div className="option-card-details">
                <h2>423</h2>
                <div className="progress-indicator">
                  <Circle
                    percent={75}
                    strokeColor="#0059ff49"
                    strokeWidth={8}
                    trailColor="#00aeff42"
                    strokeLinecap="square"
                    trailWidth={8}
                    gapDegree={80}
                    gapPosition="bottom"
                  />

                  <div className="progress-value">
                    <p>75%</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="dashboard-option-card">
              <h3>Availabilites</h3>
              <div className="option-card-details">
                <h2>10+ cities</h2>
                <div className="progress-indicator">
                  <Circle
                    percent={35}
                    strokeColor="#0059ff49"
                    strokeWidth={8}
                    trailColor="#00aeff42"
                    strokeLinecap="square"
                    trailWidth={8}
                    gapDegree={80}
                    gapPosition="bottom"
                  />
                  <div className="progress-value">
                    <p>35%</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="dashboard-option-card">
              <h3>Active Users</h3>
              <div className="option-card-details">
                <h2>435 +</h2>
                <div className="progress-indicator">
                  <Circle
                    percent={60}
                    strokeColor="#0059ff49"
                    strokeWidth={8}
                    trailColor="#00aeff42"
                    strokeLinecap="square"
                    trailWidth={8}
                    gapDegree={80}
                    gapPosition="bottom"
                  />
                  <div className="progress-value">
                    <p>60%</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="dashboard-details"></div>
        </div>
        <div className="dashboard-other-details">
          <div className="partner-requests">
            <h3>Partner Requests</h3>
            <div className="partners">
              <i
                style={{ color: "grey", fontSize: "2rem" }}
                class="bx bxs-user-circle"
              ></i>
              <h4>User Name</h4>
              <button
                style={{
                  color: "grey",
                  border: ".1rem solid grey",
                  backgroundColor: "transparent",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: ".5rem",
                  paddingLeft: ".5rem",
                  paddingRight: ".5rem",
                }}
              >
                <i class="bx bxs-user-x"></i>
              </button>
              <button
                style={{
                  color: "blue",
                  border: ".1rem solid blue",
                  backgroundColor: "transparent",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: ".5rem",
                  paddingLeft: ".5rem",
                  paddingRight: ".5rem",
                }}
              >
                <i class="bx bxs-user-check"></i>
              </button>
            </div>

            <div className="partners">
              <i
                style={{ color: "grey", fontSize: "2rem" }}
                class="bx bxs-user-circle"
              ></i>
              <h4>User Name</h4>
              <button
                style={{
                  color: "grey",
                  border: ".1rem solid grey",
                  backgroundColor: "transparent",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: ".5rem",
                  paddingLeft: ".5rem",
                  paddingRight: ".5rem",
                }}
              >
                <i class="bx bxs-user-x"></i>
              </button>
              <button
                style={{
                  color: "blue",
                  border: ".1rem solid blue",
                  backgroundColor: "transparent",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: ".5rem",
                  paddingLeft: ".5rem",
                  paddingRight: ".5rem",
                }}
              >
                <i class="bx bxs-user-check"></i>
              </button>
            </div>

            <div className="partners">
              <i
                style={{ color: "grey", fontSize: "2rem" }}
                class="bx bxs-user-circle"
              ></i>
              <h4>User Name</h4>
              <button
                style={{
                  color: "grey",
                  border: ".1rem solid grey",
                  backgroundColor: "transparent",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: ".5rem",
                  paddingLeft: ".5rem",
                  paddingRight: ".5rem",
                }}
              >
                <i class="bx bxs-user-x"></i>
              </button>
              <button
                style={{
                  color: "blue",
                  border: ".1rem solid blue",
                  backgroundColor: "transparent",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: ".5rem",
                  paddingLeft: ".5rem",
                  paddingRight: ".5rem",
                }}
              >
                <i class="bx bxs-user-check"></i>
              </button>
            </div>

            <div className="partners">
              <i
                style={{ color: "grey", fontSize: "2rem" }}
                class="bx bxs-user-circle"
              ></i>
              <h4>User Name</h4>
              <button
                style={{
                  color: "grey",
                  border: ".1rem solid grey",
                  backgroundColor: "transparent",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: ".5rem",
                  paddingLeft: ".5rem",
                  paddingRight: ".5rem",
                }}
              >
                <i class="bx bxs-user-x"></i>
              </button>
              <button
                style={{
                  color: "blue",
                  border: ".1rem solid blue",
                  backgroundColor: "transparent",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: ".5rem",
                  paddingLeft: ".5rem",
                  paddingRight: ".5rem",
                }}
              >
                <i class="bx bxs-user-check"></i>
              </button>
            </div>

            <div className="partners">
              <i
                style={{ color: "grey", fontSize: "2rem" }}
                class="bx bxs-user-circle"
              ></i>
              <h4>User Name</h4>
              <button
                style={{
                  color: "grey",
                  border: ".1rem solid grey",
                  backgroundColor: "transparent",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: ".5rem",
                  paddingLeft: ".5rem",
                  paddingRight: ".5rem",
                }}
              >
                <i class="bx bxs-user-x"></i>
              </button>
              <button
                style={{
                  color: "blue",
                  border: ".1rem solid blue",
                  backgroundColor: "transparent",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: ".5rem",
                  paddingLeft: ".5rem",
                  paddingRight: ".5rem",
                }}
              >
                <i class="bx bxs-user-check"></i>
              </button>
            </div>

            <div>
              <button className="show-requests">Show all requests</button>
            </div>
          </div>

          <div style={{ marginLeft: "1rem" }}>
            <h3>Genie Analytics</h3>
          </div>

          <div className="genie-orders">
            <h3 style={{ fontSize: "1.5rem" }}>Genie Orders</h3>
            <img style={{ width: "5rem" }} src="./Images/deliveryboy.png"></img>
          </div>

          <div className="genie-orders">
            <h3 style={{ fontSize: "1.5rem" }}>Success Rate</h3>
            <div className="progress-indicator">
              <Circle
                percent={60}
                strokeColor="#0059ff49"
                strokeWidth={8}
                trailColor="#00aeff42"
                strokeLinecap="square"
                trailWidth={8}
                gapDegree={80}
                gapPosition="bottom"
              />
              <div className="progress-value">
                <p>60%</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
