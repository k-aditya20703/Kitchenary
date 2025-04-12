import React from "react";
import "./Error.css";
import { NavLink } from "react-router-dom";

const Error = (props) => {
  return (
    <>
      <div className="error_section">
        <div className="error_container">
          <div className="error_message">
            <div
              style={{ display: "flex", gap: ".5rem", alignItems: "center" }}
            >
              <div className="icon_container">
                <i class="bx bx-error"></i>
              </div>
              <h2>Error</h2>
            </div>
            <p>{props?.errorMsg}</p>
          </div>
          <div className="error_action">
            <NavLink to="/">
              <button className="dismiss">Dismiss</button>
            </NavLink>
            <button className="retry">Retry</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Error;
