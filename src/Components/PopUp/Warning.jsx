import React from "react";
import "./Warning.css";
const Warning = () => {
  return (
    <>
      <div className="warning_section">
        <div className="warning_container">
          <div className="warning_message">
            <div
              style={{ display: "flex", gap: ".5rem", alignItems: "center" }}
            >
              <div className="icon_container">
                <i class="bx bx-error"></i>
              </div>
              <h2>Warning</h2>
            </div>
            <p>
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised words which don't look even
              slightly believable
            </p>
          </div>
          <div className="warning_action">
            <button className="dismiss">Dismiss</button>
            <button className="retry">Retry</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Warning;
