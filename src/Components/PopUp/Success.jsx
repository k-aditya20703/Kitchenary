import React from "react";
import "./Success.css";
const Success = () => {
  return (
    <>
      <div className="success_section">
        <div className="success_container">
          <div className="success_message">
            <div
              style={{ display: "flex", gap: ".5rem", alignItems: "center" }}
            >
              <div className="icon_container">
                <i class="bx bx-check-circle"></i>
              </div>
              <h2>Success</h2>
            </div>
            <p>There are many variations of passages of Lorem Ipsum</p>
          </div>
          <div className="success_action">
            <button className="dismiss">Dismiss</button>
            <button className="retry">Done</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Success;
