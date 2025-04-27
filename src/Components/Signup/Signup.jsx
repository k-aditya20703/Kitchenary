import React, { useState } from "react";
import "./Signup.css";
import { NavLink } from "react-router-dom";
import { useFormik } from "formik";
import { SignupSchema } from "../../Schemas";

const initialValues = {
  name: "",
  email: "",
  mobile: "",
  password: "",
  confirm_password: "",
};

const Signup = () => {
  const Formik = useFormik({
    initialValues: initialValues,
    validationSchema: SignupSchema,
    onSubmit: (values, action) => {
      console.log(values);
      action.resetForm();
    },
  });

  const [showButton, setShowButton] = useState(false);
  const [hideButton, setHideButton] = useState(true);

  const handleHide = () => {
    setHideButton(false);
    setShowButton(true);
  };

  const handleShow = () => {
    setShowButton(false);
    setHideButton(true);
  };

  return (
    <>
      <div className="signupnav-section">
        <img src="./Images/KitchenaryLogo.png"></img>
        <NavLink to="/">
          <div className="signupback-btn">
            <i class="bx bx-left-arrow-alt"></i>
          </div>
        </NavLink>
      </div>

      <div className="signup-section">
        <div className="signup-container">
          <form onSubmit={Formik.handleSubmit}>
            <h2>Sign up</h2>
            <div>
              <div className="input-container">
                <label>Full Name</label>
                <div className="input-icon-section">
                  <input
                    name="name"
                    value={Formik.values.name}
                    onChange={Formik.handleChange}
                    onBlur={Formik.handleBlur}
                    type="text"
                  ></input>
                  <div className="inputicon-container">
                    <i class="bx bxs-user"></i>
                  </div>
                </div>
              </div>
              {Formik.errors.name && Formik.touched.name ? (
                <p className="address-error">{Formik.errors.name}</p>
              ) : null}
              <div className="input-container">
                <label>Profile Photo</label>
                <div className="input-icon-section">
                  <input
                    // name="name"
                    // value={Formik.values.name}
                    // onChange={Formik.handleChange}
                    // onBlur={Formik.handleBlur}
                    type="file"
                  ></input>
                  <div className="inputicon-container">
                    <i class="bx bxs-user"></i>
                  </div>
                </div>
              </div>
            </div>
            <div className="input-container">
              <label>E-mail</label>
              <div className="input-icon-section">
                <input
                  name="email"
                  value={Formik.values.email}
                  onChange={Formik.handleChange}
                  onBlur={Formik.handleBlur}
                  type="email"
                ></input>
                <div className="inputicon-container">
                  <i class="bx bxs-envelope"></i>
                </div>
              </div>
            </div>
            {Formik.errors.email && Formik.touched.email ? (
              <p className="address-error">{Formik.errors.email}</p>
            ) : null}
            <div className="input-container">
              <label>Mobile Number</label>
              <div className="input-icon-section">
                <input
                  name="mobile"
                  value={Formik.values.mobile}
                  onChange={Formik.handleChange}
                  onBlur={Formik.handleBlur}
                  type="tel"
                ></input>
                <div className="inputicon-container">
                  <i class="bx bxs-phone-call"></i>
                </div>
              </div>
            </div>
            {Formik.errors.mobile && Formik.touched.mobile ? (
              <p className="address-error">{Formik.errors.mobile}</p>
            ) : null}
            <div className="input-container">
              <label>Password</label>
              <div className="input-icon-section">
                <input
                  name="password"
                  value={Formik.values.password}
                  onChange={Formik.handleChange}
                  onBlur={Formik.handleBlur}
                  type={showButton ? "text" : "password"}
                ></input>
                {hideButton && (
                  <div onClick={handleHide} className="inputicon-container">
                    <i class="bx bxs-hide"></i>
                  </div>
                )}
                {showButton && (
                  <div onClick={handleShow} className="inputicon-container">
                    <i class="bx bxs-show"></i>
                  </div>
                )}
              </div>
            </div>
            {Formik.errors.password && Formik.touched.password ? (
              <p className="address-error">{Formik.errors.password}</p>
            ) : null}
            <div className="input-container">
              <label>Confirm password</label>
              <div className="input-icon-section">
                <input
                  name="confirm_password"
                  value={Formik.values.confirm_password}
                  onChange={Formik.handleChange}
                  onBlur={Formik.handleBlur}
                  type="text"
                ></input>
                <div className="inputicon-container">
                  <i class="bx bxs-show"></i>
                </div>
              </div>
            </div>
            {Formik.errors.confirm_password &&
            Formik.touched.confirm_password ? (
              <p className="address-error">{Formik.errors.confirm_password}</p>
            ) : null}
            <div
              style={{
                display: "flex",
                marginTop: ".5rem",
                marginLeft: ".5rem",
                color: "red",
              }}
              className="input-container"
            >
              <div className="input-icon-section">
                <input type="checkbox"></input>
              </div>
              <label>Agree with all terms & conditions</label>
            </div>
            <button type="submit">Submit</button>
            <p style={{ marginBottom: "1rem" }}>
              allready have an account{" "}
              <NavLink to="/login">
                <span>Login</span>
              </NavLink>
            </p>
          </form>
        </div>

        <div className="signupimg-container">
          <img src="./Images/signup-cover.jpg"></img>
        </div>
      </div>
    </>
  );
};

export default Signup;
