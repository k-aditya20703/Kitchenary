import React, { useState } from "react";
import "./PartnerSignup.css";
import { NavLink } from "react-router-dom";
import { useFormik } from "formik";
import { PartnerSignupSchema } from "../../Schemas";
import AddItem from "../AddItem/AddItem";
import axios from "axios";
import PartnerDashboard from "../PartnerDashboard/PartnerDashboard";

const initialValues = {
  name: "",
  restaurantRegCode: "",
  email: "",
  number: "",
  password: "",
  confirm_password: "",
  region: "",
  state: "",
  district: "",
  city: "",
  pincode: "",
  colony: "",
  building: "",
  landmark: "",
  restaurant_image: "",
};
const PartnerSignup = () => {
  const [partnerLogin, setPartnerLogin] = useState(true);
  const [addItem, setAdditem] = useState(false);
  const [location, setLocation] = useState(null);
  const [partnerId, setPartnerId] = useState();
  const [error, setError] = useState(null);
  const [isChecked, setIsChecked] = useState(false);

  const handleChecked = (event) => {
    setIsChecked(event.target.checked);
  };

  const Formik = useFormik({
    initialValues: initialValues,
    validationSchema: PartnerSignupSchema,
    onSubmit: async (values, action) => {
      console.log(values);
      const API = `http://ec2-98-81-198-145.compute-1.amazonaws.com:9091/api/v1/kichenary/partners?restaurantName=${Formik.values.name}&restaurantRegCode=${Formik.values.restaurantRegCode}&email=${Formik.values.email}&mobileNumber=${Formik.values.number}&password=${Formik.values.password}&partnerAddress.country=${Formik.values.region}&partnerAddress.state=${Formik.values.state}&partnerAddress.district=${Formik.values.district}&partnerAddress.city=${Formik.values.city}&partnerAddress.pincode=${Formik.values.pincode}&partnerAddress.landmark=${Formik.values.landmark}&partnerAddress.buildingName=${Formik.values.building}&partnerAddress.colonyName=${Formik.values.colony}`;

      const formData = new FormData();
      formData.append("file", values.restaurant_image);

      if (isChecked === true) {
        try {
          const response = await axios.post(API, formData, {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          });

          console.log("uploaded successfully:", response.data);
          setPartnerId(response.data.id);
        } catch (error) {
          console.error("Error uploading file:", error);
        }

        action.resetForm();
        setAdditem(true);
        setPartnerLogin(false);
      }
    },
  });

  const handleGetLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLocation({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          });
          setError(null);
        },
        (err) => {
          setError(err.message);
        }
      );
    } else {
      setError("Geolocation is not supported by this browser.");
    }
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
            <i className="bx bx-left-arrow-alt"></i>
          </div>
        </NavLink>
      </div>

      {partnerLogin && (
        <div className="partner_signup_section">
          <form onSubmit={Formik.handleSubmit}>
            <div className="partner_signup_container">
              <div className="restaurant_details">
                <div className="input_feild">
                  <label>Restaurant name :</label>
                  <input
                    type="text"
                    name="name"
                    onChange={Formik.handleChange}
                    onBlur={Formik.handleBlur}
                    value={Formik.values.name}
                  ></input>
                </div>
                {Formik.errors.name && Formik.touched.name ? (
                  <p className="details-error">{Formik.errors.name}</p>
                ) : null}
                <div className="input_feild">
                  <label>Restaurant Reg Code :</label>
                  <input
                    type="text"
                    name="restaurantRegCode"
                    onChange={Formik.handleChange}
                    onBlur={Formik.handleBlur}
                    value={Formik.values.restaurantRegCode}
                  ></input>
                </div>
                {Formik.errors.restaurantRegCode &&
                Formik.touched.restaurantRegCode ? (
                  <p className="details-error">
                    {Formik.errors.restaurantRegCode}
                  </p>
                ) : null}
                <div className="input_feild">
                  <label>Restaurant image :</label>
                  <input
                    type="file"
                    name="restaurant_image"
                    onChange={(e) => {
                      Formik.setFieldValue(
                        "restaurant_image",
                        e.currentTarget.files[0]
                      );
                    }}
                  ></input>
                </div>
                <div className="input_feild">
                  <label>Business email :</label>
                  <input
                    type="email"
                    name="email"
                    onChange={Formik.handleChange}
                    onBlur={Formik.handleBlur}
                    value={Formik.values.email}
                  ></input>
                </div>
                {Formik.errors.email && Formik.touched.email ? (
                  <p className="details-error">{Formik.errors.email}</p>
                ) : null}
                <div className="input_feild">
                  <label>Business number :</label>
                  <input
                    type="number"
                    name="number"
                    onChange={Formik.handleChange}
                    onBlur={Formik.handleBlur}
                    value={Formik.values.number}
                  ></input>
                </div>
                {Formik.errors.number && Formik.touched.number ? (
                  <p className="details-error">{Formik.errors.number}</p>
                ) : null}
                <div className="input_feild">
                  <label>Password :</label>
                  <input
                    type="password"
                    name="password"
                    onChange={Formik.handleChange}
                    onBlur={Formik.handleBlur}
                    value={Formik.values.password}
                  ></input>
                </div>
                {Formik.errors.password && Formik.touched.password ? (
                  <p className="details-error">{Formik.errors.password}</p>
                ) : null}
                <div className="input_feild">
                  <label>Confirm password :</label>
                  <input
                    type="text"
                    name="confirm_password"
                    onChange={Formik.handleChange}
                    onBlur={Formik.handleBlur}
                    value={Formik.values.confirm_password}
                  ></input>
                </div>
                {Formik.errors.confirm_password &&
                Formik.touched.confirm_password ? (
                  <p className="details-error">
                    {Formik.errors.confirm_password}
                  </p>
                ) : null}
              </div>
              <div className="restaurant_address_details">
                {/* <label>Restaurant address :</label> */}
                <div className="address_container">
                  <div className="input_container">
                    <input
                      type="text"
                      name="region"
                      placeholder="County / Region"
                      onChange={Formik.handleChange}
                      onBlur={Formik.handleBlur}
                      value={Formik.values.region}
                    ></input>
                    {Formik.errors.region && Formik.touched.region ? (
                      <p className="address-error">{Formik.errors.region}</p>
                    ) : null}
                  </div>
                  <div className="input_container">
                    <input
                      type="text"
                      name="state"
                      placeholder="State"
                      onChange={Formik.handleChange}
                      onBlur={Formik.handleBlur}
                      value={Formik.values.state}
                    ></input>
                    {Formik.errors.state && Formik.touched.state ? (
                      <p className="address-error">{Formik.errors.state}</p>
                    ) : null}
                  </div>
                </div>

                <div className="address_container">
                  <div className="input_container">
                    <input
                      type="text"
                      name="district"
                      placeholder="District"
                      onChange={Formik.handleChange}
                      onBlur={Formik.handleBlur}
                      value={Formik.values.district}
                    ></input>
                    {Formik.errors.district && Formik.touched.district ? (
                      <p className="address-error">{Formik.errors.district}</p>
                    ) : null}
                  </div>
                  <div className="input_container">
                    <input
                      type="text"
                      name="city"
                      placeholder="City"
                      onChange={Formik.handleChange}
                      onBlur={Formik.handleBlur}
                      value={Formik.values.city}
                    ></input>
                    {Formik.errors.city && Formik.touched.city ? (
                      <p className="address-error">{Formik.errors.city}</p>
                    ) : null}
                  </div>
                </div>

                <div className="address_container">
                  <div className="input_container">
                    <input
                      type="text"
                      name="pincode"
                      placeholder="Pincode"
                      onChange={Formik.handleChange}
                      onBlur={Formik.handleBlur}
                      value={Formik.values.pincode}
                    ></input>
                    {Formik.errors.pincode && Formik.touched.pincode ? (
                      <p className="address-error">{Formik.errors.pincode}</p>
                    ) : null}
                  </div>
                  <div className="input_container">
                    <input
                      type="text"
                      name="landmark"
                      placeholder="Landmark"
                      onChange={Formik.handleChange}
                      onBlur={Formik.handleBlur}
                      value={Formik.values.landmark}
                    ></input>
                    {Formik.errors.landmark && Formik.touched.landmark ? (
                      <p className="address-error">{Formik.errors.landmark}</p>
                    ) : null}
                  </div>
                </div>

                <div style={{ display: "block" }} className="address_container">
                  <div className="input_container">
                    <input
                      type="text"
                      name="building"
                      placeholder="Building name, House no."
                      onChange={Formik.handleChange}
                      onBlur={Formik.handleBlur}
                      value={Formik.values.building}
                    ></input>
                    {Formik.errors.building && Formik.touched.building ? (
                      <p className="address-error">{Formik.errors.building}</p>
                    ) : null}
                  </div>

                  <div className="input_container">
                    <input
                      type="text"
                      name="colony"
                      placeholder="Rode name, area, colony"
                      onChange={Formik.handleChange}
                      onBlur={Formik.handleBlur}
                      value={Formik.values.colony}
                    ></input>
                    {Formik.errors.colony && Formik.touched.colony ? (
                      <p className="address-error">{Formik.errors.colony}</p>
                    ) : null}
                  </div>
                </div>
                {/* <div className="address_container">
                  <div className="location_btn_container">
                    <button
                      onClick={handleGetLocation}
                      className="location_btn"
                    >
                      <i class="bx bx-current-location"></i>Use current location
                    </button>
                  </div>
                </div> */}

                {/* <div>
                  {location && (
                    <div>
                      <p>Latitude: {location.latitude}</p>
                      <p>Longitude: {location.longitude}</p>
                    </div>
                  )}

                  {error && <p>{error}</p>}
                </div> */}

                <div className="term_condition">
                  <input
                    type="checkbox"
                    name="agree"
                    checked={isChecked}
                    onChange={handleChecked}
                  ></input>
                  <label>Agree with all terms & conditions</label>
                </div>

                <button type="submit" className="form_submit">
                  Submit
                </button>
                <NavLink to="/partnerlogin">
                  <p className="login_path">Already have an account, Login </p>
                </NavLink>
              </div>
            </div>
          </form>
        </div>
      )}

      {addItem && (
        <PartnerDashboard partnerId={partnerId} setPartnerId={setPartnerId} />
      )}
    </>
  );
};

export default PartnerSignup;
