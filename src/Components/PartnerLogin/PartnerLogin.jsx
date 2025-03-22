import React, { useEffect, useState } from "react";
import "./PartnerLogin.css";
import { NavLink } from "react-router-dom";
import { useFormik } from "formik";
import { PartnerSignupSchema } from "../../Schemas";

const initialValues = {
  name: "",
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
};

const PartnerLogin = () => {
  const Formik = useFormik({
    initialValues: initialValues,
    validationSchema: PartnerSignupSchema,
    onSubmit: (values, action) => {
      console.log(values);
      action.resetForm();
    },
  });

  return (
    <>
      <div className="partnerLogin-nav">
        <NavLink to="/">
          <img src="./images/KitchenaryLogo.png"></img>
        </NavLink>
        <NavLink to="/">
          <div>
            <i class="bx bx-left-arrow-alt"></i>
          </div>
        </NavLink>
      </div>
      <div className="partnerformsection-container">
        <div className="partnerform-section">
          <h2>Partner with us</h2>

          <form onSubmit={Formik.handleSubmit}>
            <div className="partner-form-division">
              <div className="login-section">
                <label htmlFor="rname">Restaurant name :</label>
                <input
                  value={Formik.values.name}
                  name="name"
                  id="rname"
                  onChange={Formik.handleChange}
                  onBlur={Formik.handleBlur}
                  type="text"
                  autoComplete="off"
                />
                {Formik.errors.name && Formik.touched.name ? (
                  <p className="address-error">{Formik.errors.name}</p>
                ) : null}
                <label htmlFor="email">E-mail :</label>
                <input
                  value={Formik.values.email}
                  name="email"
                  id="email"
                  onChange={Formik.handleChange}
                  onBlur={Formik.handleBlur}
                  type="email"
                  autoComplete="off"
                />
                {Formik.errors.email && Formik.touched.email ? (
                  <p className="address-error">{Formik.errors.email}</p>
                ) : null}
                <label htmlFor="number">Number :</label>
                <input
                  value={Formik.values.number}
                  name="number"
                  id="number"
                  onChange={Formik.handleChange}
                  onBlur={Formik.handleBlur}
                  type="number"
                  autoComplete="off"
                />
                {Formik.errors.number && Formik.touched.number ? (
                  <p className="address-error">{Formik.errors.number}</p>
                ) : null}
                <label htmlFor="password">Password :</label>
                <input
                  value={Formik.values.password}
                  name="password"
                  id="password"
                  onChange={Formik.handleChange}
                  onBlur={Formik.handleBlur}
                  type="password"
                  autoComplete="off"
                />
                {Formik.errors.password && Formik.touched.password ? (
                  <p className="address-error">{Formik.errors.password}</p>
                ) : null}
                <label htmlFor="confirm_password">Confirm Password :</label>
                <input
                  value={Formik.values.confirm_password}
                  name="confirm_password"
                  id="confirm_password"
                  onChange={Formik.handleChange}
                  onBlur={Formik.handleBlur}
                  type="text"
                  autoComplete="off"
                />
                {Formik.errors.confirm_password &&
                Formik.touched.confirm_password ? (
                  <p className="address-error">
                    {Formik.errors.confirm_password}
                  </p>
                ) : null}
              </div>

              <div className="address-section">
                <label htmlFor="address">Address :</label>
                <div className="address-form-section">
                  <div style={{ display: "flex", gap: "1rem" }}>
                    <div className="address-form-info">
                      <input
                        value={Formik.values.region}
                        onChange={Formik.handleChange}
                        onBlur={Formik.handleBlur}
                        placeholder="Country / Region"
                        type="text"
                        name="region"
                        autoComplete="off"
                      ></input>
                      {Formik.errors.region && Formik.touched.region ? (
                        <p className="address-error">{Formik.errors.region}</p>
                      ) : null}
                    </div>
                    <div className="address-form-info">
                      <input
                        value={Formik.values.state}
                        onChange={Formik.handleChange}
                        onBlur={Formik.handleBlur}
                        placeholder="State"
                        type="text"
                        name="state"
                        autoComplete="off"
                      ></input>
                      {Formik.errors.state && Formik.touched.state ? (
                        <p className="address-error">{Formik.errors.state}</p>
                      ) : null}
                    </div>
                  </div>
                  <div style={{ display: "flex", gap: "1rem" }}>
                    <div className="address-form-info">
                      <input
                        value={Formik.values.district}
                        onChange={Formik.handleChange}
                        onBlur={Formik.handleBlur}
                        placeholder="District"
                        type="text"
                        name="district"
                        autoComplete="off"
                      ></input>
                      {Formik.errors.district && Formik.touched.district ? (
                        <p className="address-error">
                          {Formik.errors.district}
                        </p>
                      ) : null}
                    </div>
                    <div className="address-form-info">
                      <input
                        value={Formik.values.city}
                        onChange={Formik.handleChange}
                        onBlur={Formik.handleBlur}
                        placeholder="City"
                        type="text"
                        name="city"
                        autoComplete="off"
                      ></input>
                      {Formik.errors.city && Formik.touched.city ? (
                        <p className="address-error">{Formik.errors.city}</p>
                      ) : null}
                    </div>
                  </div>
                  <div style={{ display: "flex", gap: "1rem" }}>
                    <div className="address-form-info">
                      <input
                        value={Formik.values.pincode}
                        onChange={Formik.handleChange}
                        onBlur={Formik.handleBlur}
                        placeholder="Pincode"
                        type="nunber"
                        name="pincode"
                        autoComplete="off"
                      ></input>
                      {Formik.errors.pincode && Formik.touched.pincode ? (
                        <p className="address-error">{Formik.errors.pincode}</p>
                      ) : null}
                    </div>
                    <div className="address-form-info">
                      <input
                        value={Formik.values.landmark}
                        onChange={Formik.handleChange}
                        onBlur={Formik.handleBlur}
                        placeholder="Landmark"
                        type="text"
                        name="landmark"
                        autoComplete="off"
                      ></input>
                      {Formik.errors.landmark && Formik.touched.landmark ? (
                        <p className="address-error">
                          {Formik.errors.landmark}
                        </p>
                      ) : null}
                    </div>
                  </div>
                  <div className="address-form-info">
                    <input
                      value={Formik.values.building}
                      onChange={Formik.handleChange}
                      onBlur={Formik.handleBlur}
                      placeholder="Building Name, House No."
                      type="text"
                      name="building"
                      autoComplete="off"
                    ></input>
                    {Formik.errors.building && Formik.touched.building ? (
                      <p className="address-error">{Formik.errors.building}</p>
                    ) : null}
                  </div>
                  <div className="address-form-info">
                    <input
                      value={Formik.values.colony}
                      onChange={Formik.handleChange}
                      onBlur={Formik.handleBlur}
                      placeholder="Road Name,Area,Colony"
                      type="text"
                      name="colony"
                      autoComplete="off"
                    ></input>
                    {Formik.errors.colony && Formik.touched.colony ? (
                      <p className="address-error">{Formik.errors.colony}</p>
                    ) : null}
                  </div>
                </div>
              </div>
            </div>
            <NavLink to="/additem">
              <button type="submit" className="proceed-btn">
                Submit
              </button>
            </NavLink>
          </form>
          <p className="partner-login-option">or continue with</p>

          <div className="icon-section">
            <div className="icon-container">
              <i class="bx bxl-google"></i>
            </div>
            <div className="icon-container">
              <i class="bx bxl-facebook"></i>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PartnerLogin;
