import React, { useEffect, useState } from "react";
import "./Step2.scss";
import DateComp from "../../DateComp/DateComp";
import axios from "axios";
import "react-datepicker/dist/react-datepicker.css";

const Step2 = ({ changeSteps, duration, maintenanceId, clientId }) => {
  const [dis, setDis] = useState(true);
  const [objTosend, setObjTosend] = useState({});
  const handleClick = async () => {
    let result = await axios.post(
      "https://tr7b84phib.execute-api.eu-west-1.amazonaws.com/Dev/reservation/create",
      JSON.stringify(objTosend)
    );
    console.log(result);
    changeSteps();
  };
  return (
    <div className="step2_wrapper">
      <div className="etape">
        <p className="n_etape">
          <span className="etapNb">Etape 2:</span> Prise de Rendez-vous
        </p>
      </div>
      <div className="paymentPara">
        Veuillez choisir le créneau horaire qui vous convient
      </div>

      <div className="caln">
        <div className="cbox"></div>
        <DateComp
          dur={duration}
          mid={maintenanceId}
          cid={clientId}
          changeBtn={() => setDis(false)}
          getObj={(data) => setObjTosend(data)}
        />
        <div className="cbox"></div>
      </div>
      <button
        onClick={handleClick}
        className="MultiBtn"
        disabled={dis ? true : false}
        style={dis ? { backgroundColor: "#c4c4c4" } : {}}
      >
        suivant
      </button>
    </div>
  );
};

export default Step2;
