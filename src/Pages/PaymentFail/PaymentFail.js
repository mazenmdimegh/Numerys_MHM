import React from "react";
import "./PaymentFail.scss";
import Navbar from "../../Components/Navbar/Navbar";
import Logo from "../../assets/logoNoir.png";
import { useNavigate } from "react-router-dom";

const PaymentFail = () => {
  let navigate = useNavigate();
  return (
    <div>
      <Navbar logo={Logo} bgc="transparent" />
      <div className="response">
        <div className="wrapperofthis">
          <h1>Oups !</h1>
          <p>Votre Paiement a échoué</p>
          <button onClick={() => navigate("/atelier")}>Revenir</button>
        </div>
      </div>
    </div>
  );
};

export default PaymentFail;
