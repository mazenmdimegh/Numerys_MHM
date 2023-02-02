import React from "react";
import "./AtelierCard.scss";

const AtelierCard = ({ icon, title, text, callback, cond, animate }) => {
  return (
    <div
      className="AtelierCardBox"
      style={animate ? { height: "fit-content" } : {}}
    >
      <img src={icon} alt="logo" />
      <h3 className="ACBtitle">{title}</h3>
      {!animate && <p className="ACBtext">{text}</p>}
      <button
        onClick={callback}
        className="Btn"
        style={cond ? { backgroundColor: "#c4c4c4" } : {}}
      >
        Continuer
      </button>
    </div>
  );
};

export default AtelierCard;
