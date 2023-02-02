import React, { useState } from "react";
import "./ResetPass.scss";
import Spinner from "../Spinner/Spinner";
import { AiOutlineClose } from "react-icons/ai";
import { Auth } from "aws-amplify";
import ReactCodeInput from "react-code-input";
import { useForm } from "react-hook-form";
import { isValidEmail } from "../../helpers/validation_regex";

const ResetPass = ({ click }) => {
  const [steps, setSteps] = useState(0);
  const [errVerif, setErrVerif] = useState("");
  const [data, setData] = useState({
    email: "",
    code: "",
    password: "",
    cpassword: "",
  });
  const ChildtoP = () => {
    setSteps((step) => step + 1);
  };
  return (
    <div className="resetWrapper">
      <div className="resetModal">
        <AiOutlineClose className="closeBtnModalsteps" onClick={click} />
        {steps === 0 ? (
          <FirstStep
            handleClick={ChildtoP}
            handleChange={(e) => setData({ ...data, email: e.target.value })}
            data={data}
          />
        ) : steps === 1 ? (
          <SecondStep
            handleChange={(e) => setData({ ...data, code: e })}
            handleClickPage={ChildtoP}
            erreur={errVerif}
          />
        ) : steps === 2 ? (
          <ThirdStep
            onMdpChange={(e) => setData({ ...data, password: e.target.value })}
            onMdpcChange={(e) =>
              setData({ ...data, cpassword: e.target.value })
            }
            data={data}
            changePage={() => setSteps((step) => step - 1)}
            changePages={ChildtoP}
            putErr={() =>
              setErrVerif(
                "Votre code de vérification est incorrect! vérifier votre adresse email une autre fois."
              )
            }
          />
        ) : steps === 3 ? (
          <FourStep clicked={click} />
        ) : null}
      </div>
    </div>
  );
};

export default ResetPass;

const FirstStep = ({ handleClick, handleChange, data }) => {
  const [loading, setLoading] = useState(false);
  const [errMsg, setErrMsg] = useState("");

  const forgotPassword = async () => {
    try {
      setLoading(true);
      await Auth.forgotPassword(data.email);
      handleClick();
    } catch (error) {
      console.error(error.message);
      if (error.message === "Username cannot be empty") {
        setErrMsg("Email devait etre rempli");
      } else {
        setErrMsg("Email ou client n'existe pas.");
      }
    }
    setLoading(false);
  };
  const handleEmailValidation = (email) => {
    const isValid = isValidEmail(email);
    return isValid;
  };
  return (
    <div className="firststep_modal">
      {loading && <Spinner />}
      <h2>Mot de passe oublié ?</h2>
      <p>Merci d'entrer votre adresse email</p>
      {errMsg && <p className="errmsg">{errMsg}</p>}
      <div className="st_input">
        <input
          type="email"
          placeholder="email"
          className="st_email"
          name="email"
          onChange={handleChange}
        />
        <button className="emailBtn" onClick={forgotPassword}>
          Réinitialiser
        </button>
      </div>
    </div>
  );
};

const SecondStep = ({ handleChange, handleClickPage, erreur }) => {
  const [loading, setLoading] = useState(false);
  return (
    <div className="firststep_modal">
      <h2>Merci de vérifier votre adresse email</h2>
      {loading && <Spinner />}
      <div className="nd_input">
        <ReactCodeInput
          inputMode="numeric"
          fields={6}
          type="text"
          onChange={handleChange}
        />
        {erreur && <p className="errPassP">{erreur}</p>}
        <button className="emailBtn" onClick={handleClickPage}>
          Continuer
        </button>
      </div>
    </div>
  );
};

const ThirdStep = ({
  onMdpChange,
  onMdpcChange,
  changePage,
  data,
  changePages,
  putErr,
}) => {
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState("");
  const CollectNewPass = async () => {
    try {
      setLoading(true);
      console.log(data.code);
      let result = await Auth.forgotPasswordSubmit(
        data.email,
        data.code,
        data.password
      );
      console.log(result);
      changePages();
    } catch (error) {
      if (
        error.message ===
        "Invalid verification code provided, please try again."
      ) {
        console.log("verif");
        putErr();
        changePage();
      } else {
        setErr(
          "Votre mot de passe doit avoir au minimum 8 caractéres contenant une lettre majiscule,une lettre miniscule , symbol et un chiffre."
        );
      }
    }
    setLoading(false);
  };
  return (
    <div className="firststep_modal">
      {loading && <Spinner />}
      <h2>Réinitialiser mot de passe</h2>
      <input
        className="mdpres"
        placeholder="mot de passe"
        type="password"
        onChange={onMdpChange}
        style={err ? { border: "solid 2px #E9020C" } : {}}
      />
      <input
        className="cmdpres"
        placeholder="confirme mot de passe"
        type="password"
        onChange={onMdpcChange}
        style={err ? { border: "solid 2px #E9020C" } : {}}
      />
      {err && <p className="errPassP">{err}</p>}
      <button onClick={CollectNewPass} className="resbtn">
        Réinitialiser
      </button>
    </div>
  );
};

const FourStep = ({ clicked }) => {
  return (
    <div className="firststep_modal">
      <h1>Merci !</h1>
      <h2 id="succh2">Mot de passe Réinitialisé avec success</h2>
      <button className="cbtn" onClick={clicked}>
        Continuer vers MHM
      </button>
    </div>
  );
};
