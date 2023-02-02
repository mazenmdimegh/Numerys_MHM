import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import Amplify, { Auth } from "aws-amplify";
import { useNavigate } from "react-router-dom";
import Spinner from "../../Components/Spinner/Spinner";
import ResetPass from "../../Components/ResetPass/ResetPass";

Amplify.configure({
  Auth: {
    // REQUIRED - Amazon Cognito Region
    region: "eu-west-1",
    // OPTIONAL - Amazon Cognito User Pool ID
    userPoolId: "eu-west-1_ueqwW4WNB",
    // OPTIONAL - Amazon Cognito Web Client ID (26-char alphanumeric string)
    userPoolWebClientId: "4f2im0aanal6ll19an1ga9n9kb",
  },
  oauth: {
    domain: "mhmdomain.auth.eu-west-1.amazoncognito.com",
    redirectSignIn: "https://d10ggo29axg2zf.cloudfront.net/",
    redirectSignOut: "https://d10ggo29axg2zf.cloudfront.net/", //pour prod a changer avant
    scope: ["email", "openid"],
    responseType: "token", // or 'token', note that REFRESH token will only be generated when the responseType is code
  },
});

const isValidEmail = (email) =>
  /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  );
const SignIn = () => {
  const [verifModal, setVerifModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [code, setCode] = useState("");

  let navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();
  const onFormSubmit = (data) => {
    console.log("data", data);
    const { email, mdp: password } = data;
    signIn({ email, password });
  };

  const handleEmailValidation = (email) => {
    const isValid = isValidEmail(email);
    return isValid;
  };

  const signIn = async ({ email, password }) => {
    setLoading(true);
    try {
      const user = await Auth.signIn(email, password);
      console.log("user logged in successfully");
      console.log(user);
      navigate("/");

      setLoading(false);
    } catch (error) {
      console.log("error signing in", error);
      if (error.message === "Incorrect username or password.") {
        setErrorMsg("Email ou Mot de passe incorrect");
      } else if (error.message === "User does not exist.") {
        setErrorMsg(
          "cet utilisateur n'existe pas , essayez de faire un compte."
        );
      }
      setLoading(false);
    }
  };

  const googleSingUp = async () => {
    try {
      await Auth.federatedSignIn({ provider: "Google" });
      const user = Auth.currentAuthenticatedUser({
        bypassCache: false,
      })
        .then((user) => localStorage.setItem("user", JSON.stringify(user)))
        .catch((err) => console.log(err));
    } catch (error) {
      console.error(error);
    }
  };
  const faceBookSingUp = async () => {
    try {
      await Auth.federatedSignIn({ provider: "Facebook" });
      await Auth.currentAuthenticatedUser({
        bypassCache: false,
      })
        .then((user) => localStorage.setItem("user", JSON.stringify(user)))
        .catch((err) => console.log(err));
    } catch (error) {
      console.error(error);
    }
  };

  const appleSignUp = async () => {
    try {
      await Auth.federatedSignIn({ provider: "SignInWithApple" });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="wrapper">
      {verifModal && <ResetPass click={() => setVerifModal(false)} />}
      {loading && <Spinner />}
      <div className="formWrapper">
        <div className="rightPart">
          <div className="right__topPart">
            <h1 className="topPart__heading">
              Une nouvelle méthode pour acheter et vendre des motos
            </h1>
          </div>
          <div className="right__bottomPart">
            <p className="bottomPart__para">Nouveau parmis nous ?</p>
            <Link to="/signup">
              <button className="bottomPart__btn">Sign Up</button>
            </Link>
          </div>
        </div>
        <div className="leftPart">
          <div className="formBox">
            <div className="left__topPart">
              <div className="logo">
                <svg
                  width="161"
                  height="50"
                  viewBox="0 0 161 50"
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
                  <path
                    d="M70.734 0H77.597L82.6705 17.4819L93.9482 0H100.772L95.7967 28.2189H89.1352L91.6327 14.0504L82.3902 28.2189H79.1603L74.957 14.0504L72.4595 28.2189H65.7588L70.734 0Z"
                    fill="#3A3A3C"
                  />
                  <path
                    d="M103.191 0H110.334L108.412 10.8992H119.473L121.396 0H128.539L123.564 28.2189H116.42L118.426 16.833H107.365L105.359 28.2189H98.2158L103.191 0Z"
                    fill="#3A3A3C"
                  />
                  <path
                    d="M130.967 0H137.83L142.904 17.4819L154.182 0H161.005L156.03 28.2189H149.369L151.866 14.0504L142.624 28.2189H139.394L135.19 14.0504L132.693 28.2189H125.992L130.967 0Z"
                    fill="#3A3A3C"
                  />
                  <path
                    d="M63.5566 40.6912L63.9794 38.2822H70.3262L69.9034 40.6912H63.5566Z"
                    fill="#3A3A3C"
                  />
                  <path
                    d="M75.0945 45.8237H71.8252L74.1948 32.3779H78.1966L79.1061 39.5605L82.5523 32.3779H86.5541L84.1845 45.8237H80.9398L82.4441 37.2794L79.7747 42.9133H77.2625L76.5939 37.3236L75.0945 45.8286V45.8237Z"
                    fill="#3A3A3C"
                  />
                  <path
                    d="M92.8178 32.3779H95.9199C97.9748 32.3779 98.845 33.2432 98.5402 34.9737L97.085 43.2279C96.7802 44.9584 95.6003 45.8237 93.5503 45.8237H90.4482C88.3932 45.8237 87.523 44.9584 87.8278 43.2279L89.283 34.9737C89.5878 33.2432 90.7677 32.3779 92.8178 32.3779ZM93.5011 42.7462L94.7842 35.4555C94.8383 35.1507 94.6908 34.9933 94.3418 34.9933H93.4618C93.1127 34.9933 92.9112 35.1457 92.8571 35.4555L91.574 42.7462C91.5199 43.0559 91.6674 43.2083 92.0164 43.2083H92.8964C93.2455 43.2083 93.447 43.0559 93.5011 42.7462Z"
                    fill="#3A3A3C"
                  />
                  <path
                    d="M110.285 32.3779L109.823 34.9983H107.227L105.319 45.8286H101.652L103.559 34.9983H100.983L101.446 32.3779H110.285Z"
                    fill="#3A3A3C"
                  />
                  <path
                    d="M115.816 32.3779H118.918C120.973 32.3779 121.843 33.2432 121.538 34.9737L120.083 43.2279C119.778 44.9584 118.598 45.8237 116.548 45.8237H113.446C111.391 45.8237 110.521 44.9584 110.826 43.2279L112.281 34.9737C112.586 33.2432 113.766 32.3779 115.816 32.3779ZM116.499 42.7462L117.782 35.4555C117.836 35.1507 117.689 34.9933 117.34 34.9933H116.46C116.111 34.9933 115.909 35.1457 115.855 35.4555L114.572 42.7462C114.518 43.0559 114.665 43.2083 115.014 43.2083H115.894C116.244 43.2083 116.445 43.0559 116.499 42.7462Z"
                    fill="#3A3A3C"
                  />
                  <path
                    d="M127.31 41.0501L126.469 45.8237H122.802L125.171 32.3779H131.39C133.445 32.3779 134.315 33.2432 134.011 34.9737L133.396 38.4494C133.16 39.7768 132.418 40.5929 131.164 40.8977L132.767 45.8188H128.829L127.536 41.0452H127.305L127.31 41.0501ZM129.822 34.9983H128.377L127.747 38.5576H129.193C129.542 38.5576 129.743 38.4052 129.797 38.0954L130.265 35.4555C130.319 35.1507 130.171 34.9933 129.822 34.9933V34.9983Z"
                    fill="#3A3A3C"
                  />
                  <path
                    d="M140.834 42.7461L141.169 40.8386C141.223 40.5338 141.075 40.3765 140.726 40.3765H138.715C137.683 40.3765 136.995 40.1504 136.646 39.6981C136.302 39.2458 136.203 38.5919 136.351 37.7414L136.837 34.9786C137.142 33.2481 138.312 32.3828 140.352 32.3828H143.224C145.264 32.3828 146.129 33.2481 145.824 34.9786L145.539 36.5911H141.872L142.073 35.4603C142.127 35.1555 141.98 34.9982 141.631 34.9982H141.021C140.672 34.9982 140.47 35.1506 140.416 35.4603L140.067 37.4514C140.013 37.7611 140.161 37.9135 140.51 37.9135H142.476C143.509 37.9135 144.207 38.1298 144.571 38.5625C144.934 38.9951 145.043 39.6293 144.895 40.4699L144.408 43.2328C144.104 44.9633 142.929 45.8286 140.893 45.8286H138.047C135.992 45.8286 135.122 44.9633 135.426 43.2328L135.712 41.6203H139.379L139.178 42.751C139.123 43.0608 139.271 43.2132 139.62 43.2132H140.23C140.579 43.2132 140.78 43.0608 140.834 42.751V42.7461Z"
                    fill="#3A3A3C"
                  />
                  <path
                    d="M147.48 40.6912L147.903 38.2822H154.25L153.827 40.6912H147.48Z"
                    fill="#3A3A3C"
                  />
                </svg>
              </div>
              <h3 className="left__topPart--heading">
                Connectez-vous à votre compte
              </h3>
              <p className="left__topPart--para">
                Entrez vos coordonnées pour continuer
              </p>
            </div>
            <div className="left__middlePart">
              <form className="myForm" onSubmit={handleSubmit(onFormSubmit)}>
                <div className="formLine">
                  <div className="input-icons">
                    <span className="material-symbols-outlined icon">mail</span>
                    <input
                      type="email"
                      name="email"
                      placeholder="Email"
                      className={
                        errors.email ? "errorInput input-field" : "input-field"
                      }
                      {...register("email", {
                        required: true,
                        validate: handleEmailValidation,
                      })}
                    />
                  </div>
                </div>
                {errors.email?.type === "validate" && (
                  <p className="paraErr">*entrez un email valide.</p>
                )}
                <div className="formLine">
                  <div className="input-icons">
                    <span className="material-symbols-outlined icon">lock</span>
                    <input
                      type="password"
                      name="mdp"
                      placeholder="Mot de passe"
                      className={
                        errors.mdp ? "errorInput input-field" : "input-field"
                      }
                      {...register("mdp", { required: true })}
                    />
                  </div>
                </div>
                {errorMsg && <p className="paraErr">*{errorMsg}</p>}
                <div className="formLine" id="dis">
                  <label className="container">
                    Se rappeler de moi
                    <input type="checkbox" />
                    <span className="checkmark"></span>
                  </label>
                  <div className="resP" onClick={() => setVerifModal(true)}>
                    Réinitialiser mot de passe
                  </div>
                </div>
                <div className="formLine">
                  <button type="submit" className="formBtn">
                    Continuer
                  </button>
                </div>
                <div className="new">
                  <p className="first">Nouveau parmis nous ?</p>
                  <Link to="/signup" style={{ textDecoration: "none" }}>
                    <p className="second">sign up</p>
                  </Link>
                </div>
              </form>
            </div>
            <div className="left__bottomPart">
              <div className="oupgg">
                <hr className="opHR" />
                <p className="lineOu">Ou</p>
                <hr className="opHR" />
              </div>
              <div className="socialBoxes">
                <div className="socialBox" onClick={googleSingUp}>
                  <svg
                    width="21"
                    height="20"
                    viewBox="0 0 21 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M20.6824 7.95008H19.8427V7.91127H10.4602V11.6513H16.3518C15.4923 13.8284 13.1826 15.3913 10.4602 15.3913C7.00583 15.3913 4.20516 12.8794 4.20516 9.78127C4.20516 6.68315 7.00583 4.17127 10.4602 4.17127C12.0547 4.17127 13.5053 4.71077 14.6098 5.59201L17.5585 2.94736C15.6966 1.39105 13.2061 0.431274 10.4602 0.431274C4.70295 0.431274 0.0351562 4.61774 0.0351562 9.78127C0.0351562 14.9448 4.70295 19.1313 10.4602 19.1313C16.2174 19.1313 20.8852 14.9448 20.8852 9.78127C20.8852 9.15436 20.8132 8.5424 20.6824 7.95008Z"
                      fill="#FFC107"
                    />
                    <path
                      d="M1.23633 5.42932L4.66146 7.6822C5.58824 5.62426 7.83275 4.17127 10.4593 4.17127C12.0538 4.17127 13.5045 4.71077 14.609 5.59201L17.5577 2.94736C15.6958 1.39105 13.2053 0.431274 10.4593 0.431274C6.45508 0.431274 2.98252 2.45882 1.23633 5.42932Z"
                      fill="#FF3D00"
                    />
                    <path
                      d="M10.4605 19.1313C13.1533 19.1313 15.6001 18.207 17.45 16.704L14.2234 14.2552C13.1416 14.9931 11.8197 15.3922 10.4605 15.3913C7.749 15.3913 5.44664 13.8406 4.57928 11.6765L1.17969 14.0257C2.90503 17.0537 6.40887 19.1313 10.4605 19.1313Z"
                      fill="#4CAF50"
                    />
                    <path
                      d="M20.6822 7.95006H19.8425V7.91125H10.46V11.6513H16.3517C15.9405 12.6874 15.1999 13.5929 14.2213 14.2557L14.2229 14.2548L17.4494 16.7035C17.2211 16.8896 20.885 14.4563 20.885 9.78125C20.885 9.15434 20.813 8.54238 20.6822 7.95006Z"
                      fill="#1976D2"
                    />
                  </svg>
                </div>
                <div className="socialBox" onClick={faceBookSingUp}>
                  <svg
                    width="9"
                    height="17"
                    viewBox="0 0 9 17"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M2.44628 16.5625V9.40623H0.0400391V6.56249H2.44628V4.31249C2.44628 3.12499 2.77962 2.20312 3.44628 1.54687C4.11295 0.890624 4.99836 0.5625 6.10252 0.5625C6.99836 0.5625 7.72752 0.604166 8.29002 0.6875V3.21874H6.79002C6.22752 3.21874 5.84211 3.34374 5.63378 3.59374C5.46711 3.80208 5.38378 4.13541 5.38378 4.59374V6.56249H8.04002L7.66502 9.40623H5.38378V16.5625H2.44628Z"
                      fill="#215FDB"
                    />
                  </svg>
                </div>
                <div className="socialBox" onClick={appleSignUp}>
                  <svg
                    width="20"
                    height="22"
                    viewBox="0 0 20 22"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M16.4776 11.3033C16.4664 9.59077 17.3315 8.30012 19.0785 7.34845C18.1014 6.09296 16.6231 5.40244 14.6746 5.26936C12.8296 5.13879 10.811 6.23358 10.0719 6.23358C9.29077 6.23358 7.50457 5.31456 6.09913 5.31456C3.19866 5.35473 0.116211 7.38863 0.116211 11.5267C0.116211 12.7496 0.365383 14.0126 0.863726 15.3133C1.53005 17.0258 3.93218 21.2217 6.43789 21.1539C7.74815 21.1262 8.67484 20.3202 10.3798 20.3202C12.0345 20.3202 12.8912 21.1539 14.3526 21.1539C16.8807 21.1212 19.0533 17.307 19.686 15.5895C16.2956 14.1557 16.4776 11.3911 16.4776 11.3033ZM13.5351 3.64475C14.9545 2.13314 14.8257 0.757115 14.7837 0.262451C13.5295 0.327737 12.0793 1.0283 11.2533 1.88957C10.3435 2.81361 9.80871 3.95611 9.9235 5.24425C11.2785 5.33715 12.516 4.71192 13.5351 3.64475Z"
                      fill="#0D0A19"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr className="signHR" />
      </div>
    </div>
  );
};

export default SignIn;
