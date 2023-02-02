import React, { useState } from "react";
import { useForm } from "react-hook-form";
import "./ContactForm.scss";
import { isValidEmail } from "../../helpers/validation_regex";
import Spinner from "../../Components/Spinner/Spinner";

const wait = function (duration = 1888) {
  return new Promise((resolve) => {
    window.setTimeout(resolve, duration);
  });
};
const ContactForm = ({ moto }) => {
  const [Failure, setFailure] = useState(false);
  const [verifModal, setVerifModal] = useState(false);
  const { register, handleSubmit, formState: { errors }, setValue } = useForm();
  const [isPending, setIsPending] = useState();



  const handleEmailValidation = (email) => {
    const isValid = isValidEmail(email);
    return isValid;
  };

  const onSubmit = (data) => {
    wait(2000);
    console.log(JSON.stringify(data));
    setIsPending(true);
    fetch("https://tr7b84phib.execute-api.eu-west-1.amazonaws.com/Dev/motors/request/create", {
      method: "POST",
      body: JSON.stringify(data),
    }).then((res) => {
      setIsPending(false);
      if (res.status === 201) {
        setVerifModal(true)
        setValue("first_name", "")
        setValue("last_name", "")
        setValue("email", "")
        setValue("phone", "")
        setValue("description", "")
        setTimeout(() => {
          setVerifModal(false)
        }, 2000);
      } else {
        setFailure(true)
        setTimeout(() => {
          setFailure(false)
        }, 2000);
      }
    });
  };

  return (
    <div className="Contact">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="formAchat">
          {/* coordonnées client */}
          {/* <a href="#" className='modal-close' onClick={() => {
                  setFailure(false);
                  // console.log("setVerifModal")
                }}>&times;</a> */}
          <h1 className="Atelierlabel">Vos informations</h1>
          <div className="atelierForm ">
            {" "}
            <br /> <br />
            <div className="nom_prenom flex">
              <div className="input1">
                <input
                  type="text"
                  placeholder="Nom"
                  id="first_name"
                  {...register("first_name", { required: true })}
                  className={
                    errors.first_name ? "errorInput input-field" : "input-field"
                  }
                />
                {errors.first_name && <p className="error">"Nom est requis"</p>}
              </div>
              <div className="input2">
                <input
                  type="text"
                  placeholder="Prenom"
                  id="last_name"
                  {...register("last_name", { required: true })}
                  className={
                    errors.last_name ? "errorInput error-Input" : "input-field"
                  }
                />
                {errors.last_name && (
                  <p className="error">"Prénom est requis"</p>
                )}
              </div>
            </div>
            <div className="nom_prenom varflex">
              <div className="input1 ">
                <input
                  type="text"
                  placeholder="Email"
                  id="email"
                  {...register("email", {
                    required: true,
                    validate: handleEmailValidation,
                  })}
                  className={
                    errors.email ? "errorInput error-Input" : "input-field"
                  }
                />
                {errors.email?.type === "required" && (
                  <p className="error">*entrez un email.</p>
                )}
                {errors.email?.type === "validate" && (
                  <p className="error">*entrez un email valide.</p>
                )}
              </div>
              <div className="input2">
                <input
                  type="tel"
                  placeholder="Téléphone"
                  id="phone"
                  {...register("phone", {
                    required: true, maxLength: 12, minLength: 12, pattern: {
                      value: /^[?+][0-9]{9}/
                    }
                  })}
                  className={
                    errors.phone ? "errorInput error-Input" : "input-field"
                  }
                />
                {errors.phone && (
                  <p className="error">*N° de téléphone est requis. EX: +31 636 363 634</p>
                )}
              </div>
            </div>
            <div className="nom_prenom">
              <div className="input1 Long input-icons">
                <textarea
                  name="textarea"
                  placeholder="description"
                  {...register("description", { required: true })}
                  className={
                    errors.description ? "textArea error-Input" : "textArea"
                  }
                  rows="3"
                  cols="50"
                ></textarea>
                {errors.description && (
                  <p className="error margin">Le message est requis</p>
                )}
              </div>
            </div>
            <div className="achatButton">
              <button className="atlierFormButton" onClick={() => {
                setValue("brand", moto["mark"])
                setValue("price", moto["price"])
                setValue("reference", moto["id"])
                setValue("options", [{ "key": "", "value": "" }])
              }
              } type="submit">

                Envoyer
              </button>
              <br />
            </div>
          </div>
        </div>
      </form>
      {isPending && <Spinner />}
      {Failure && <div>
        <div className="modal-overlay" ></div>
        <div className="modal">
          <div className='modal-body'>


            <div className="resetWrapper">
              <div className="resetModal">
                <a href="#" className='modal-close' onClick={() => {
                  setFailure(false);
                  // console.log("setVerifModal")
                }}>&times;</a>
                <div className="title">
                  <h2 className="oup">Oup !</h2>
                  <p>Demande enchouée</p>

                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
      }
      {verifModal && <div>
        <div className="modal-overlay" ></div>
        <div className="modal">
          <div className='modal-body'>


            <div className="resetWrapper">
              <div className="resetModal">
                <a href="#" className='modal-close' onClick={() => {
                  setVerifModal(false);
                }}>&times;</a>
                <div className="title">
                  <h2>Merci !</h2>
                  <p>Demande envoyé avec succès</p>

                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
      }
    </div>
  );
};

export default ContactForm;
