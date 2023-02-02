import React, { useEffect } from "react";
// import { Auth } from "aws-amplify";
import "./Rachat.scss";
import Header from "../../Components/Header/Header";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import Logo from "../../assets/Logo.png";
import BgImage from "../../assets/rachatHeader.png";
import { Link } from "react-router-dom";
import FloatingButton from "../../Components/FLoatingButton/FloatingButton";

const title = "achat cach & reprise";
const paragraph =
  "Vendez votre moto au prix qu’elle mérite en seulement 24h et sans obligation d’achat. ";

const Rachat = () => {
  return (
    <div>
      <FloatingButton />
      <Navbar logo={Logo} color="#fff" bgc="transparent" />
      <Header title={title} p={paragraph} bgi={BgImage} />
      <div className="rachatInfo">
        <div className="conditionsVente">
          <div className="box">
            <h1 className="rachatHeader">Conditions pour achats</h1>
            <p>
              Réglement cash immédiat de votre moto sans aucune reprise se munir
              des élements suivants :
            </p>
            <ul>
              <li>Carte grise</li>
              <li>Double des clés (si vous avez)</li>
              <li>
                Le livret + carnet de garantie constructeur (si vous avez)
              </li>
              <li>Facture d'entretient (si vous avez)</li>
              <li>
                Accessoires d'origine(pot,bulle,clignotants,...(si vous avez))
              </li>
            </ul>
          </div>
          <div className="box">
            <h1 className="rachatHeader">Conditions dépots vente</h1>
            <ul>
              <li>Dépot vente gratuit (pas de frais en dépot)</li>
              <li>Contrat minimum de 8 semaines</li>
              <li>
                Commision de 10% uniquement lors de la vente (renseigez vous
                auprès de nos vendeurs)
              </li>
              <li>Publicité nationale</li>
              <li>Frais de lavage si la moto arrive sale</li>
              <li>
                Se munir des éléments que pour l'achat cash ou la reprise(carte
                grise , double des clés,factures,...)
              </li>
            </ul>
          </div>
          <Link to="/achat">
            <button>Estimer un achat maintenant</button>
          </Link>
        </div>
        <div className="RachatBox">
          <h2 className="boxHeader">Conditions dépot vente</h2>
          <p className="boxPara">
            Nous reprenons votre moto d’occasion et vous repartez avec la
            nouvelle moto, bien sûr, vous réglez la différence. Possibilité de
            reprise d’une moto moins chère en magasin qie la votre. Dans ce cas,
            Rennes motos vous règle la différence . se munir des même pièces que
            pour l’achat cash ( carte grise, double des clés, factures...)
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Rachat;
