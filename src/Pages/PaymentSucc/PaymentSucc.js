import React from "react";
import "./PaymentSucc.scss";
import Navbar from "../../Components/Navbar/Navbar";
import Logo from "../../assets/logoNoir.png";
import { useNavigate } from "react-router-dom";

const PaymentSucc = () => {
  let navigate = useNavigate();
  return (
    <div>
      <Navbar logo={Logo} bgc="transparent" />
      <div className="response">
        <div className="wrapperofthis">
          <h1>Merci !</h1>
          <p>Votre Paiement a été effectué avec succès.</p>
          <button onClick={() => navigate("/")}>Acceuil</button>
        </div>
      </div>
    </div>
  );
};

export default PaymentSucc;
