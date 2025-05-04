import React, { useState } from "react";
import "./PartnerDashboard.css";
import { NavLink } from "react-router-dom";
import { Formik, useFormik } from "formik";
import { AddItemSchema } from "../../Schemas";
import axios from "axios";
import AddItem from "../AddItem/AddItem";
import { Circle } from "rc-progress";
import DragandDrop from "../DragandDrop/DragandDrop";
import PartnerLogout from "../PartnerLogout/PartnerLogout";
import PartnerProfile from "../PartnerProfile/PartnerProfile";
const initialValues = {
  item_name: "",
  prep_time: "",
  item_price: "",
  item_offer: "",
  item_photo: "",
  item_desc: "",
};
const PartnerDashboard = (props) => {
  const [additem, setAdditem] = useState(false);
  const [ambiance, setAmbience] = useState(false);
  const [logout, setLogout] = useState(false);
  const [partnerProfile, setPartnerProfile] = useState(true);
  const Formik = useFormik({
    initialValues: initialValues,
    validationSchema: AddItemSchema,
    onSubmit: async (values, action) => {
      console.log(values);
      const API = `http://ec2-98-81-198-145.compute-1.amazonaws.com:9091/api/v1/kichenary/partner-items/${props?.partnerId}?itemName=${Formik.values.item_name}&itemDesc=${Formik.values.item_desc}&price=${Formik.values.item_price}&offer=${Formik.values.item_offer}&prepareTime=${Formik.values.prep_time}`;
      const formData = new FormData();
      formData.append("file", values.item_photo);

      try {
        const response = await axios.post(API, formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });
        console.log("uploaded successfully:", response.data);
      } catch (error) {
        console.error("Error uploading file:", error);
      }
      action.resetForm();
      alert("Item Registered Successfully");
    },
  });

  const handleAdditem = () => {
    setAmbience(false);
    setLogout(false);
    setPartnerProfile(false);
    setAdditem(true);
  };

  const handleAmbience = () => {
    setLogout(false);
    setAdditem(false);
    setPartnerProfile(false);
    setAmbience(true);
  };

  const handleLogout = () => {
    setAmbience(false);
    setAdditem(false);
    setPartnerProfile(false);
    setLogout(true);
  };

  const handleProfile = () => {
    setAmbience(false);
    setAdditem(false);
    setLogout(false);
    setPartnerProfile(true);
  };
  return (
    <>
      <div className="partnerDashboard_section">
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

        <div className="partnerDashboard_details">
          {/* ======================================================== 
           ======================MENU SECTION====================== 
           ========================================================  */}
          <div className="partnerDashboard_menu">
            <div
              onClick={handleProfile}
              tabIndex="0"
              className="partnerDashboard_menu_option"
              style={{
                backgroundColor: partnerProfile ? "#ef1d27" : "#cfcfcf",
                color: partnerProfile ? "#ffffff" : "#272727",
              }}
            >
              <i class="bx bxs-user-circle"></i>
              <p>Profile</p>
            </div>

            <div
              onClick={handleAdditem}
              tabIndex="0"
              className="partnerDashboard_menu_option"
              style={{
                backgroundColor: additem ? "#ef1d27" : "#cfcfcf",
                color: additem ? "#ffffff" : "#272727",
              }}
            >
              <i class="bx bxs-bowl-hot"></i>
              <p>Add Item</p>
            </div>

            <div
              onClick={handleAmbience}
              tabIndex="0"
              className="partnerDashboard_menu_option"
              style={{
                backgroundColor: ambiance ? "#ef1d27" : "#cfcfcf",
                color: ambiance ? "#ffffff" : "#272727",
              }}
            >
              <i class="bx bxs-store-alt"></i>
              <p>Add ambience photo</p>
            </div>
            <div tabIndex="0" className="partnerDashboard_menu_option">
              <i class="bx bx-cog"></i>
              <p>Setting</p>
            </div>
            <div
              onClick={handleLogout}
              tabIndex="0"
              className="partnerDashboard_menu_option"
              style={{
                backgroundColor: logout ? "#ef1d27" : "#cfcfcf",
                color: logout ? "#ffffff" : "#272727",
              }}
            >
              <i class="bx bx-log-out"></i>
              <p>Logout</p>
            </div>

            <div className="socialmedia_container">
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

          {/* ======================================================== 
           ======================DISPLAY  SECTION===================== 
           ========================================================  */}
          {additem && <AddItem />}
          {ambiance && <DragandDrop />}
          {logout && <PartnerLogout />}
          {partnerProfile && <PartnerProfile />}

          {/* ======================================================== 
           ======================TRACK  SECTION===================== 
           ========================================================  */}

          <div className="track_section">
            <div className="track_card_order">
              <div className="order_card_container">
                <div>
                  <h4>Today's Order</h4>
                  <p className="amount">25</p>
                </div>
                <div className="progress-indicator">
                  <Circle
                    percent={60}
                    strokeColor="#30bf56"
                    strokeWidth={8}
                    trailColor="grey"
                    strokeLinecap="round"
                    trailWidth={5}
                    gapDegree={80}
                    gapPosition="bottom"
                  />
                  <div className="progress-value">
                    <p style={{ color: "#30bf56", fontWeight: "500" }}>60%</p>
                  </div>
                </div>
              </div>
              <p className="description">
                A summary of all selected menu items, including quantities,
                prices, and any special instructions.
              </p>
            </div>
            <div className="track_card_cancle">
              <div className="cancle_card_container">
                <div>
                  <h4>Cancled Order</h4>
                  <p className="amount">10</p>
                </div>
                <div className="progress-indicator">
                  <Circle
                    percent={25}
                    strokeColor="#30bf56"
                    strokeWidth={8}
                    trailColor="grey"
                    strokeLinecap="round"
                    trailWidth={5}
                    gapDegree={80}
                    gapPosition="bottom"
                  />
                  <div className="progress-value">
                    <p style={{ color: "#30bf56", fontWeight: "500" }}>25%</p>
                  </div>
                </div>
              </div>
              <p className="description">
                Allows the user to stop the processing of a placed order. it may
                be subject to time limits and restaurant policies
              </p>
            </div>

            <div className="track_card_ratting">
              <div className="ratting_card_container">
                <div>
                  <h4>Rattings</h4>
                  <p className="amount">2378</p>
                </div>
                <div className="progress-indicator">
                  <Circle
                    percent={85}
                    strokeColor="#30bf56"
                    strokeWidth={8}
                    trailColor="grey"
                    strokeLinecap="round"
                    trailWidth={5}
                    gapDegree={80}
                    gapPosition="bottom"
                  />
                  <div className="progress-value">
                    <p style={{ color: "#30bf56", fontWeight: "500" }}>85%</p>
                  </div>
                </div>
              </div>
              <p className="description">
                Review given by customers based on their dining experience, food
                quality, service, cleanliness and ambiance.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PartnerDashboard;
