import React, { useRef, useState } from "react";
import Header from "../../Components/Header/Header";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import { useNavigate } from "react-router-dom";
import "./Atelier.scss";
import Logo from "../../assets/Logo.png";
import BgImage from "../../assets/atelierHeader.png";
import AtelierCard from "../../Components/AtelierCard/AtelierCard";
import Img from "../../assets/service1.png";
import Img2 from "../../assets/service2.png";
import MultiStep from "../../Components/MultiStep/MultiStep";
import { isLoggedIn } from "../../helpers/logged_in";
import FloatingButton from "../../Components/FLoatingButton/FloatingButton";
import AtelierForm from "../../Components/AtelierForm/AtelierForm";

const title = "DIAGNOSTIC, ENTRETIEN ET RÉPARATION DE TOUT TYPE DE MOTOS";
const paragraph =
  "Une équipe de professionnels à votre disposition pour vous faire profiter de ses conseils d’experts et vous orienter vers les meilleurs choix à faire.";
const maintenancePara =
  "Vous pouvez dès maintenant gagner du temps et de l’énergie en réservant votre rendez-vous en ligne. Toutes les informations nécessaires vous seront communiquées sans avoir à vous déplacer: diagnostic, solution, durée et prix de la réparation. Il suffit de remplir notre petit formulaire et notre équipe d’experts se chargera de traiter votre demande afin de vous orienter vers la meilleure offre possible. ";
const reparationPara =
  "Pour vous comme pour nous, une moto c’est comme un bébé, on aime en prendre soin et on cherche à lui assurer le meilleur des entretiens. Nos experts en mécanique sont consciencieux en ce qui concerne l’état de votre moto et sont prêts à consacrer toute leur expertise en vérifiant chaque pièce afin d’éviter toute sorte de dommage et assurer à votre moto une belle et longue vie! Si vous souhaitez vous entretenir avec l’un de nos experts, veuillez remplir ce formulaire. ";
const Atelier = () => {
  let navigate = useNavigate();
  const myRef = useRef(null);
  const [islogged, setIsLogged] = useState(isLoggedIn());
  const [openForm, setOpenForm] = useState(false);
  const [openPay, setOpenPay] = useState(false);
  const [animate, setAnimate] = useState(0);

  const executeScroll = (a) => {
    setAnimate(1);
    myRef.current.scrollIntoView();
    if (a === 0) {
      setOpenPay(false);
      setOpenForm(true);
    } else if (a === 1) {
      if (islogged) {
        setOpenForm(false);
        setOpenPay(true);
      } else navigate("/signin");
    }
  };
  return (
    <div>
      <FloatingButton />
      <Navbar logo={Logo} color="#fff" bgc="transparent" />
      <Header title={title} p={paragraph} bgi={BgImage} />
      <div className="AtelierFlexbox">
        <AtelierCard
          icon={Img2}
          title="Maintenance"
          text={maintenancePara}
          callback={() => executeScroll(1)}
          cond={openPay}
          animate={animate}
        />
        <AtelierCard
          icon={Img}
          title="Réparation"
          text={reparationPara}
          callback={() => executeScroll(0)}
          cond={openForm}
          animate={animate}
        />
      </div>
      <div ref={myRef} className="invisible"></div>
      <div className="hidd">
        {openForm && <AtelierForm />}
        {openPay && islogged === false ? (
          <div className="signredirect">
            <p>Vous devez se connecter pour continuer.</p>
            <button onClick={() => navigate("/signin")}>Sign in</button>
          </div>
        ) : (
          openPay && <MultiStep />
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Atelier;
