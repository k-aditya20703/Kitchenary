import React, { useState } from "react";
import "./Login.css";
import { NavLink } from "react-router-dom";
import { useFormik } from "formik";
import { LoginSchema } from "../../Schemas";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";

const initialValues = {
  email: "",
  password: "",
};

const Login = () => {
  const Formik = useFormik({
    initialValues: initialValues,
    validationSchema: LoginSchema,
    onSubmit: (values, action) => {
      console.log(values);
      action.resetForm();
    },
  });

  const [showPassword, setShowPassword] = useState(false);
  const [hidePassword, setHidePassword] = useState(true);

  const handleShow = () => {
    setShowPassword(false);
    setHidePassword(true);
  };

  const handleHide = () => {
    setHidePassword(false);
    setShowPassword(true);
  };
  return (
    <>
      <div className="signupnav-section">
        <img src="./Images/KitchenaryLogo.png"></img>
        <NavLink to="/">
          <div className="signupback-btn">
            <i className="bx bx-left-arrow-alt"></i>
          </div>
        </NavLink>
      </div>

      <div className="user-login-section">
        <div className="login-container">
          <form onSubmit={Formik.handleSubmit}>
            <h2>Login</h2>
            <div className="logininput-container">
              <label htmlFor="email">Email</label>
              <div className="email-feild">
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={Formik.values.email}
                  onChange={Formik.handleChange}
                  onBlur={Formik.handleBlur}
                ></input>
                <div className="email-icon">
                  <i className="bx bxs-envelope"></i>
                </div>
              </div>
            </div>
            {Formik.errors.email && Formik.touched.email ? (
              <p className="address-error">{Formik.errors.email}</p>
            ) : null}
            <div className="logininput-container">
              <label htmlFor="password">Password</label>
              <div className="password-feild">
                <input
                  type={hidePassword ? "password" : "text"}
                  name="password"
                  id="password"
                  value={Formik.values.password}
                  onChange={Formik.handleChange}
                  onBlur={Formik.handleBlur}
                ></input>
                {showPassword && (
                  <div onClick={handleShow} className="password-icon">
                    <i className="bx bxs-show"></i>
                  </div>
                )}
                {hidePassword && (
                  <div onClick={handleHide} className="password-icon">
                    <i className="bx bxs-hide"></i>
                  </div>
                )}
              </div>
            </div>
            {Formik.errors.password && Formik.touched.password ? (
              <p className="address-error">{Formik.errors.password}</p>
            ) : null}
            <div className="input-button">
              <button type="submit">Login</button>
            </div>
            <p>
              Don't have any account{" "}
              <NavLink to="/signup">
                <span>Signup</span>
              </NavLink>
            </p>
            <div className="signup-icon-section">
              <div className="icon-container">
                <FcGoogle />
              </div>
              <div className="icon-container">
                <FaFacebook style={{ color: "#1877F2" }} />
              </div>
            </div>
          </form>
        </div>

        <div className="login-cover-container">
          <img src="./Images/signup-cover.jpg"></img>
        </div>
      </div>
    </>
  );
};

export default Login;
