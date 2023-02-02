import React from "react";
import Footer from "../../Components/Footer/Footer";
import Navbar from "../../Components/Navbar/Navbar";
import Image from "../../assets/logoNoir.png";
import "./Cookies.scss";
import FloatingButton from "../../Components/FLoatingButton/FloatingButton";

const Cookies = () => {
  return (
    <div className="StaticWrapper">
      <FloatingButton />
      <Navbar bgc="#fff" color="#000" logo={Image} />
      <div className="infosWrapper">
        <h1 className="headerLegal">Politique de cookies</h1>
        <div className="infoBlock">
          <p className="infoTitle">1. Introduction</p>
          <p className="infoPara">
            Notre site web, https://www.mhmmotors.com (ci-après : « le site web
            ») utilise des cookies et autres technologies liées (par
            simplification, toutes ces technologies sont désignées par le terme
            « cookies »). Des cookies sont également placés par des tierces
            parties que nous avons engagées. Dans le document ci-dessous, nous
            vous informons de l’utilisation des cookies sur notre site web.
          </p>
        </div>
        <div className="infoBlock">
          <p className="infoTitle">2. Que sont les cookies ?</p>
          <p className="infoPara">
            Un cookie est un petit fichier simple envoyé avec les pages de ce
            site web et stocké par votre navigateur sur le disque dur de votre
            ordinateur ou d’un autre appareil. Les informations qui y sont
            stockées peuvent être renvoyées à nos serveurs ou aux serveurs des
            tierces parties concernées lors d’une visite ultérieure.
          </p>
        </div>
        <div className="infoBlock">
          <p className="infoTitle">3. Que sont les scripts ?</p>
          <p className="infoPara">
            Un script est un élément de code utilisé pour que notre site web
            fonctionne correctement et de manière interactive. Ce code est
            exécuté sur notre serveur ou sur votre appareil.
          </p>
        </div>
        <div className="infoBlock">
          <p className="infoTitle">4. Qu’est-ce qu’une balise invisible ?</p>
          <p className="infoPara">
            Une balise invisible (ou balise web) est un petit morceau de texte
            ou d’image invisible sur un site web, utilisé pour suivre le trafic
            sur un site web. Pour ce faire, diverses données vous concernant
            sont stockées à l’aide de balises invisibles.
          </p>
        </div>
        <div className="infoBlock">
          <p className="infoTitle">5.1 Cookies techniques ou fonctionnels</p>
          <p className="infoPara">
            Certains cookies assurent le fonctionnement correct de certaines
            parties du site web et la prise en compte de vos préférences en tant
            qu’utilisateur. En plaçant des cookies fonctionnels, nous vous
            facilitons la visite de notre site web. Ainsi, vous n’avez pas
            besoin de saisir à plusieurs reprises les mêmes informations lors de
            la visite de notre site web et, par exemple, les éléments restent
            dans votre panier jusqu’à votre paiement. Nous pouvons placer ces
            cookies sans votre consentement
          </p>
        </div>
        <div className="infoBlock">
          <p className="infoTitle">5.2 Cookies de marketing/suivi</p>
          <p className="infoPara">
            Les cookies de marketing/suivi sont des cookies ou toute autre forme
            de stockage local, utilisés pour créer des profils d’utilisateurs
            afin d’afficher de la publicité ou de suivre l’utilisateur sur ce
            site web ou sur plusieurs sites web à des fins de marketing
            similaires.
          </p>
        </div>
        <div className="infoBlock">
          <p className="infoTitle">6. Cookies placés</p>
          <p className="infoPara">LISTE A FAIRE</p>
        </div>
        <div className="infoBlock">
          <p className="infoTitle">7. Consentement</p>
          <p className="infoPara">
            Lorsque vous visitez notre site web pour la première fois, nous vous
            montrerons une fenêtre contextuelle avec une explication sur les
            cookies. Dès que vous cliquez sur « Enregistrer les préférences »
            vous nous autorisez à utiliser les catégories de cookies et
            d’extensions que vous avez sélectionnés dans la fenêtre
            contextuelle, comme décrit dans la présente politique de cookies.
            Vous pouvez désactiver l’utilisation des cookies via votre
            navigateur, mais veuillez noter que notre site web pourrait ne plus
            fonctionner correctement.
          </p>
        </div>
        <div className="infoBlock">
          <p className="infoTitle">
            8. Vos droits concernant les données personnelles
          </p>
          <p className="infoPara">
            Vous avez les droits suivants concernant vos données personnelles :
            -Vous avez le droit de savoir pourquoi vos données personnelles sont
            nécessaires, ce qui leur arrivera et combien de temps elles seront
            conservées. -Droit d’accès : vous avez le droit d’accéder à vos
            données personnelles que nous connaissons. -Droit de rectification :
            vous avez le droit à tout moment de compléter, corriger, faire
            supprimer ou bloquer vos données personnelles. -Si vous nous donnez
            votre consentement pour le traitement de vos données, vous avez le
            droit de révoquer ce consentement et de faire supprimer vos données
            personnelles. -Droit de transférer vos données : vous avez le droit
            de demander toutes vos données personnelles au responsable du
            traitement et de les transférer dans leur intégralité à un autre
            responsable du traitement. -Droit d’opposition : vous pouvez vous
            opposer au traitement de vos données. Nous obtempérerons, à moins
            que certaines raisons ne justifient ce traitement. Pour exercer ces
            droits, veuillez nous contacter. Veuillez-vous référer aux
            coordonnées au bas de cette politique de cookies. Si vous avez une
            plainte concernant la façon dont nous traitons vos données, nous
            aimerions en être informés, mais vous avez également le droit de
            déposer une plainte auprès de l’autorité de contrôle (l’autorité
            chargée de la protection des données, comme le CEPD).
          </p>
        </div>
        <div className="infoBlock">
          <p className="infoTitle">
            9. Activer/désactiver et supprimer les cookies
          </p>
          <p className="infoPara">
            Vous pouvez utiliser votre navigateur internet pour supprimer
            automatiquement ou manuellement les cookies. Vous pouvez également
            spécifier que certains cookies ne peuvent pas être placés. Une autre
            option consiste à modifier les réglages de votre navigateur internet
            afin que vous receviez un message à chaque fois qu’un cookie est
            placé. Pour plus d’informations sur ces options, reportez-vous aux
            instructions de la section Aide de votre navigateur. Veuillez noter
            que notre site web peut ne pas marcher correctement si tous les
            cookies sont désactivés. Si vous supprimez les cookies dans votre
            navigateur, ils seront de nouveau placés après votre consentement
            lorsque vous revisiterez nos sites web.
          </p>
        </div>
        <div className="infoBlock">
          <p className="infoTitle">10. Coordonnées</p>
          <p className="infoPara">
            Pour des questions et/ou des commentaires sur notre politique en
            matière de cookies et cette déclaration, veuillez nous contacter en
            utilisant les coordonnées suivantes : <br /> MHM <br /> Chemin des
            Essarts, <br /> 78310, Coignières <br /> Tel : +33 6 14 82 20 44{" "}
            <br /> Direction@mhmmotors.com <br />
            https://www.mhmmotors.com <br /> SIRET 844 512 988 000 32
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Cookies;
