import React from "react";
import "./Success.css";
const Success = () => {
  return (
    <>
      <div className="success-section">
        <div className="success-container">
          <div className="success-icon">
            <i class="bx bx-check-circle"></i>
          </div>
          <div className="success-about">
            <p>Your Item is Registered Successfully</p>
            <button>Done</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Success;
