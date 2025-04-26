import React from "react";
import "./PartnerLogin.css";
import { NavLink } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { BsFacebook } from "react-icons/bs";
import { useFormik } from "formik";
import { LoginSchema } from "../../Schemas";

const initialValues = {
  email: "",
  password: "",
};

const PartnerLogin = () => {
  const Formik = useFormik({
    initialValues: initialValues,
    validationSchema: LoginSchema,
    onSubmit: (values, action) => {
      console.log(values);
      action.resetForm();
    },
  });
  return (
    <>
      <div className="partner_login_section">
        <div className="partner_login_nav">
          <div className="foodnavbar-section">
            <NavLink to="/">
              <div className="logo-container">
                <img src="./Images/KitchenaryLogo.png"></img>
              </div>
            </NavLink>

            <NavLink to="/partnerwithus">
              <div className="back-btn">
                <i className="bx bx-left-arrow-alt"></i>
              </div>
            </NavLink>
          </div>
        </div>
        <div className="partner_login_container">
          <h3>Login</h3>
          <form onSubmit={Formik.handleSubmit}>
            <div className="login_input_container">
              <label>Email :</label>
              <input
                type="email"
                name="email"
                onChange={Formik.handleChange}
                onBlur={Formik.handleBlur}
                value={Formik.values.email}
                placeholder="Enter your email"
              ></input>
              {Formik.errors.email && Formik.touched.email ? (
                <p className="login_error">{Formik.errors.email}</p>
              ) : null}
            </div>
            <div className="login_input_container">
              <label>Password :</label>
              <input
                type="password"
                name="password"
                onChange={Formik.handleChange}
                onBlur={Formik.handleBlur}
                value={Formik.values.password}
                placeholder="Enter your password"
              ></input>
              {Formik.errors.password && Formik.touched.password ? (
                <p className="login_error">{Formik.errors.password}</p>
              ) : null}
            </div>
            <NavLink to="/partnerdashboard">
              <button type="submit">Submit</button>
            </NavLink>
          </form>

          <p className="loginoption">Or login with </p>

          <div className="login_icon_section">
            <div className="login_icon_container">
              <FcGoogle />
            </div>
            <div className="login_icon_container" style={{ color: "#1877F2" }}>
              <BsFacebook />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PartnerLogin;
