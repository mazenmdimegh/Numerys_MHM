import React from "react";
import "./Politics.scss";
import Footer from "../../Components/Footer/Footer";
import Navbar from "../../Components/Navbar/Navbar";
import Image from "../../assets/logoNoir.png";
import FloatingButton from "../../Components/FLoatingButton/FloatingButton";

const Politics = () => {
  return (
    <div className="StaticWrapper">
      <FloatingButton />
      <Navbar bgc="#fff" color="#000" logo={Image} />
      <div className="infosWrapper">
        <h1 className="headerLegal">Politique de confidentialité</h1>
        <div className="infoBlock">
          <p className="infoTitle">1. Identité</p>
          <p className="infoPara">
            L’adresse de notre site Web est : https://mhmmotors.com
          </p>
        </div>
        <div className="infoBlock">
          <p className="infoTitle">2. Cookies</p>
          <p className="infoPara">
            Nos cookies améliorent l’accès à notre site et identifient les
            visiteurs réguliers. En outre, nos cookies améliorent l’expérience
            d’utilisateur grâce au suivi et au ciblage de ses intérêts.
            Cependant, cette utilisation des cookies n’est en aucune façon liée
            à des informations personnelles identifiables sur notre site
          </p>
        </div>
        <div className="infoBlock">
          <p className="infoTitle">3. Contenu embarqué depuis d’autres sites</p>
          <p className="infoPara">
            Les articles de ce site peuvent inclure des contenus intégrés (par
            exemple des vidéos, images, articles...). Le contenu intégré depuis
            d’autres sites se comporte de la même manière que si le visiteur se
            rendait sur cet autre site. Ces sites web pourraient collecter des
            données sur vous, utiliser des cookies, embarquer des outils de
            suivis tiers, suivre vos interactions avec ces contenus embarqués si
            vous disposez d’un compte connecté sur leur site web
          </p>
        </div>
        <div className="infoBlock">
          <p className="infoTitle">4. Utilisation des informations</p>
          <p className="infoPara">
            Toutes les informations que nous recueillons auprès de vous <br />{" "}
            peuvent être utilisées pour : <br />
            – Personnaliser votre expérience et répondre à vos besoins
            individuels <br />
            – Fournir un contenu publicitaire personnalisé <br />
            – Améliorer notre site <br />– Améliorer le service client et vos
            besoins de prise en charge <br />
            – Vous contacter par e-mail <br />– Administrer un concours, une
            promotion, ou une enquête
          </p>
        </div>
        <div className="infoBlock">
          <p className="infoTitle">5. Durée de stockage des données</p>
          <p className="infoPara">
            Pour les utilisateurs et utilisatrices qui s’enregistrent sur notre
            site (si cela est possible), nous stockons également les données
            personnelles indiquées dans leur profil. Tous les utilisateurs et
            utilisatrices peuvent voir, modifier ou supprimer leurs informations
            personnelles à tout moment (à l’exception de leur nom
            d’utilisateur·ice). Les gestionnaires du site peuvent aussi voir et
            modifier ces informations.
          </p>
        </div>
        <div className="infoBlock">
          <p className="infoTitle">
            6. Les droits que vous avez sur vos données
          </p>
          <p className="infoPara">
            Si vous avez un compte ou si vous avez laissé des commentaires sur
            le site, vous pouvez demander à recevoir un fichier contenant toutes
            les données personnelles que nous possédons à votre sujet, incluant
            celles que vous nous avez fournies. Vous pouvez également demander
            la suppression des données personnelles vous concernant. Cela ne
            prend pas en compte les données stockées à des fins administratives,
            légales ou pour des raisons de sécurité.
          </p>
        </div>
        <div className="infoBlock">
          <p className="infoTitle">
            7. Transmission de vos données personnelles
          </p>
          <p className="infoPara">
            Les commentaires des visiteurs peuvent être vérifiés à l’aide d’un
            service automatisé de détection des commentaires indésirables.
          </p>
        </div>
        <div className="infoBlock">
          <p className="infoTitle">8. Consentement</p>
          <p className="infoPara">
            En utilisant notre site, vous consentez à notre politique de
            confidentialité
          </p>
        </div>
        <div className="infoBlock">
          <p className="infoTitle">9. Informations de contact</p>
          <p className="infoPara">Direction@mhmmotors.com</p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Politics;
