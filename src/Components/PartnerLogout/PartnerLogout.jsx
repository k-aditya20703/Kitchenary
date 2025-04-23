import React, { useState } from "react";
import "./PartnerLogout.css";
import { BiSolidLike } from "react-icons/bi";
import { RiLogoutBoxRFill } from "react-icons/ri";
import { NavLink } from "react-router-dom";

const PartnerLogout = () => {
  const [logout, setLogout] = useState(true);
  const [successLogout, setSuccessLogout] = useState(false);

  const handleLogout = () => {
    setLogout(false);
    setSuccessLogout(true);
  };
  return (
    <>
      <div className="partnerLogout_section">
        <div className="PartnerLogout_container">
          {logout && (
            <div>
              <div className="logout_icon">
                <RiLogoutBoxRFill />
              </div>
              <p>You're leaving. . . Are you sure ?</p>
              <div className="logout_action">
                <button onClick={handleLogout} className="logout_btn">
                  Yes, log Me Out
                </button>
                <button className="cancle_btn">Back to page</button>
              </div>
            </div>
          )}

          {successLogout && (
            <div>
              <div className="logout_icon">
                <BiSolidLike />
              </div>
              <p>You have successfully loggedout. </p>

              <NavLink to="/partnerlogin">
                <button className="logout_back_btn">Back to Login</button>
              </NavLink>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default PartnerLogout;
