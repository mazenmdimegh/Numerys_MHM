import React from "react";
import "./Spinner.css";

const Spinner = () => {
  return (
    <div className="spinner">
      <svg
        width="600"
        height="50"
        viewBox="0 0 46 50"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0 21.5968L11.4449 5.78142L22.8012 5.64868L0.368714 37.2794L0 21.5968Z"
          fill="#E9020C"
        />
        <path
          d="M22.5107 43.8523L45.135 12.5903L45.3169 27.9042L33.7737 44.1768L22.5107 43.8523Z"
          fill="#3A3A3C"
        />
        <path
          d="M34.8463 15.6777L10.6194 49.1618L10.4424 33.8922L34.4776 0L34.8463 15.6777Z"
          fill="#3A3A3C"
        />
      </svg>
    </div>
  );
};

export default Spinner;
