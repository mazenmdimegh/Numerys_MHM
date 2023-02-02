import React, { useState } from "react";
import "./AtelierForm.scss";
import { useForm } from "react-hook-form";
import axios from "axios";
import Spinner from "../Spinner/Spinner";
import { AiOutlineClose } from "react-icons/ai";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

const AtelierForm = () => {
  const [loading, setLoading] = useState(false);
  const [phone, setPhone] = useState("");
  const [showMessage, setShowMessage] = useState(false);
  const [error, setError] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const handleBtnClick = async (data) => {
    setLoading(true);
    const dataSending = {
      contact_infos: {
        first_name: data.first_name,
        last_name: data.last_name,
        email: data.email,
        phone_number: phone,
      },
      source: "ATELIER",
      data: {
        message: data.message,
      },
    };
    try {
      let sending = await axios.post(
        "https://w06wop60p1.execute-api.eu-central-1.amazonaws.com/Prod/api/create",
        JSON.stringify(dataSending)
      );
      console.log(sending);
      setLoading(false);
      setShowMessage(true);
    } catch (err) {
      console.log(err);
      setError(true);
      setLoading(false);
    }
  };
  const changePhone = (e) => {
    setPhone("+" + e);
  };
  return (
    <div className="AtelierForm__Wrapper">
      {showMessage && (
        <div className="wrapperResponse">
          <div className="wrapperBody">
            <AiOutlineClose
              className="closeBtnModalsteps"
              onClick={() => setShowMessage(false)}
            />
            <h1>Merci !</h1>
            <h3>Demande envoyée avec succès.</h3>
          </div>
        </div>
      )}
      {error && (
        <div className="wrapperResponse">
          <div className="wrapperBody">
            <AiOutlineClose
              className="closeBtnModalsteps"
              onClick={() => setError(false)}
            />
            <h1>Oups !</h1>
            <h3>Demande enchouée</h3>
          </div>
        </div>
      )}
      {loading && <Spinner />}
      <h2>Demande de contact</h2>
      <form onSubmit={handleSubmit(handleBtnClick)}>
        <div className="atelierLine">
          <input
            className={errors.last_name ? "errorInput inputAt" : "inputAt"}
            type="text"
            name="last_name"
            placeholder="Nom"
            {...register("last_name", { required: true })}
          />
          <input
            className={errors.first_name ? "errorInput inputAt" : "inputAt"}
            type="text"
            name="first_name"
            placeholder="Prénom"
            {...register("first_name", { required: true })}
          />
        </div>
        <div className="atelierLine">
          <input
            className={errors.email ? "errorInput inputAt" : "inputAt"}
            type="email"
            name="email"
            placeholder="Email"
            {...register("email", { required: true })}
          />
        </div>
        <div className="atelierLine">
          {/* <input
            className={errors.phone_number ? "errorInput inputAt" : "inputAt"}
            type="text"
            name="phone_number"
            placeholder="Téléphone"
            {...register("phone_number", {
              required: true,
              maxLength: 12,
              minLength: 12,
              pattern: {
                value: /^[?+][0-9]{9}/,
              },
            })}
          /> */}
          <PhoneInput
            country="fr"
            regions="europe"
            inputClass="inputAt"
            onChange={(e) => changePhone(e)}
          />
        </div>
        <div className="atelierLine">
          <textarea
            className={errors.message ? "holo" : ""}
            name="message"
            placeholder="Message"
            {...register("message", { required: true })}
          />
        </div>
        <div className="atelierLine">
          <button type="submit">Nous Contactez</button>
        </div>
      </form>
    </div>
  );
};

export default AtelierForm;
