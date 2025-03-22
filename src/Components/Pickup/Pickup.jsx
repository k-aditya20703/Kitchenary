import React, { useState } from "react";
import "./Pickup.css";
import { NavLink } from "react-router-dom";
import { useFormik } from "formik";
import { PickupSchema } from "../../Schemas";

const initialValues = {
  name: "",
  number: "",
  pincode: "",
  address: "",
  landmark: "",
};
const Pickup = () => {
  const Formik = useFormik({
    initialValues: initialValues,
    validationSchema: PickupSchema,
    onSubmit: (values, action) => {
      console.log(values);
      action.resetForm();
    },
  });
  return (
    <>
      <div className="signupnav-section">
        <img src="./Images/KitchenaryLogo.png"></img>
        <NavLink to="/genie">
          <div className="signupback-btn">
            <i class="bx bx-left-arrow-alt"></i>
          </div>
        </NavLink>
      </div>

      <div className="pickup-section">
        <div className="pickup-form">
          <h3>Set Pick-up Location</h3>
          <form onSubmit={Formik.handleSubmit}>
            <input
              type="text"
              name="address"
              placeholder="Sender's Address"
              value={Formik.values.address}
              onChange={Formik.handleChange}
              onBlur={Formik.handleBlur}
            />
            {Formik.errors.address && Formik.touched.address ? (
              <p className="address-error">{Formik.errors.address}</p>
            ) : null}
            <div className="pin-section">
              <div style={{ width: "100%" }}>
                <input
                  type="text"
                  name="landmark"
                  placeholder="Landmark"
                  value={Formik.values.landmark}
                  onChange={Formik.handleChange}
                  onBlur={Formik.handleBlur}
                />
                {Formik.errors.landmark && Formik.touched.landmark ? (
                  <p className="address-error">{Formik.errors.landmark}</p>
                ) : null}
              </div>

              <div style={{ width: "100%" }}>
                <input
                  placeholder="Pincode"
                  type="nunber"
                  name="pincode"
                  value={Formik.values.pincode}
                  onChange={Formik.handleChange}
                  onBlur={Formik.handleBlur}
                />
                {Formik.errors.pincode && Formik.touched.pincode ? (
                  <p className="address-error">{Formik.errors.pincode}</p>
                ) : null}
              </div>
            </div>

            <input
              type="text"
              placeholder="Sender's Name"
              name="name"
              value={Formik.values.name}
              onChange={Formik.handleChange}
              onBlur={Formik.handleBlur}
            />
            {Formik.errors.name && Formik.touched.name ? (
              <p className="address-error">{Formik.errors.name}</p>
            ) : null}

            <input
              type="tel"
              placeholder="Sender's mobile number"
              name="number"
              value={Formik.values.number}
              onChange={Formik.handleChange}
              onBlur={Formik.handleBlur}
            />
            {Formik.errors.number && Formik.touched.number ? (
              <p className="address-error">{Formik.errors.number}</p>
            ) : null}
            <NavLink to="/genie">
              <button type="submit">Confirm</button>
            </NavLink>
          </form>
        </div>

        <div className="pickupimg-container">
          <img src="./Images/pickup.jpg"></img>
        </div>
      </div>
    </>
  );
};

export default Pickup;
