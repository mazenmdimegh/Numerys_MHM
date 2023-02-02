import React, { useState } from "react";
import "./Step3.scss";
import { useForm } from "react-hook-form";

const Step3 = ({
  changeSteps,
  changeAdresse1,
  changeAdresse2,
  changePostal,
  changeCity,
  changeCountry,
  changeState,
  disabled,
  adresses,
  error,
}) => {
  const [dis, setDis] = useState(true);
  return (
    <div className="step3_wrapper">
      <div className="etape">
        <p className="n_etape">
          <span className="etapNb">Etape 3:</span> Récaputilatif de prestation
        </p>
      </div>
      <div className="paymentPara">Veuillez vérifier vos informations</div>
      <div className="adresse">
        <form>
          <p>Adresse 1 :</p>
          <input
            type="text"
            placeholder="Adresse 1 (obligatoire)"
            name="adress1"
            className={error ? "adrInput err" : "adrInput"}
            value={adresses.line1}
            onChange={changeAdresse1}
          />
          <p>Adresse 2 :</p>
          <input
            type="text"
            placeholder="Adresse 2 (facultatif)"
            value={adresses.line2}
            className="adrInput"
            onChange={changeAdresse2}
          />
          <p>Code Postal</p>
          <input
            type="number"
            placeholder="Code postal (obligatoire)"
            className={error ? "adrInput err" : "adrInput"}
            onChange={changePostal}
            value={adresses.postal_code}
          />
          <p>Cité : </p>
          <input
            type="text"
            placeholder="Cité"
            className="adrInput"
            onChange={changeCity}
            value={adresses.city}
          />
          <p>Pays</p>
          <input
            type="text"
            placeholder="Pays (obligatoire)"
            className={error ? "adrInput err" : "adrInput"}
            onChange={changeCountry}
            value={adresses.country}
          />
          <p>Governorat :</p>
          <input
            type="text"
            placeholder="Gov"
            className="adrInput"
            onChange={changeState}
            value={adresses.state}
          />
        </form>
      </div>
      {error ? (
        <p className="errorParaStep3">
          *Vous devez remplir tous les champs obligatoires.
        </p>
      ) : null}
      <button
        onClick={changeSteps}
        className="MultiBtn"
        disabled={!dis ? true : false}
      >
        suivant
      </button>
    </div>
  );
};

export default Step3;
