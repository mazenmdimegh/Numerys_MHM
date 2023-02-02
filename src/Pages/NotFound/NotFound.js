import React from "react";
import "./NotFound.scss";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  let navigate = useNavigate();
  return (
    <div className="NotFound_Wrapper">
      <h1 className="fourOfour">404</h1>
      <h1 className="notF">Not Found !</h1>
      <button onClick={() => navigate("/")}>Accueil</button>
    </div>
  );
};

export default NotFound;
