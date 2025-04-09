import React from "react";
import "./Info.css";
const Info = () => {
  return (
    <>
      <div className="info_section">
        <div className="info_container">
          <div className="info_message">
            <div
              style={{ display: "flex", gap: ".5rem", alignItems: "center" }}
            >
              <div className="icon_container">
                <i class="bx bx-info-circle"></i>
              </div>
              <h2>Info</h2>
            </div>
            <p>
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised words which don't look even
              slightly believable
            </p>
          </div>
          <div className="info_action">
            <button className="dismiss">Dismiss</button>
            <button className="retry">Retry</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Info;
