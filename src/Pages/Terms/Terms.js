import React from "react";
import Footer from "../../Components/Footer/Footer";
import Navbar from "../../Components/Navbar/Navbar";
import "./Terms.scss";
import Image from "../../assets/logoNoir.png";
import FloatingButton from "../../Components/FLoatingButton/FloatingButton";

const Terms = () => {
  return (
    <div className="StaticWrapper">
      <FloatingButton />
      <Navbar bgc="#fff" color="#000" logo={Image} />
      <div className="infosWrapper">
        <h1 className="headerLegal">Mentions légales</h1>
        <div className="infoParass">
          <p id="para">
            Ce site web (www.mhmmotors.com) est conçu, réalisé et hébergé par :{" "}
            <br /> NUMERYS <br />
            Chemin des Essarts,
            <br /> 78310, Coignières <br /> Tel : +33 6 14 82 20 44 <br />{" "}
            contact@numerys.io <br /> https://www.numerys.io <br /> SIRET 882
            041 395 000 30
          </p>
        </div>
        <div className="infoBlock">
          <p className="infoTitle">1. Loi applicable</p>
          <p className="infoPara">
            Le contenu de ce site est régi dans son intégralité et uniquement
            par le droit français
          </p>
        </div>
        <div className="infoBlock">
          <p className="infoTitle">
            2. Loi « Informatique et Libertés » et RGPD
          </p>
          <p className="infoPara">
            Conformément à la loi « Informatique et Libertés » du 6 janvier 1978
            modifiée en 2018, vous bénéficiez d’un droit d’accès, de
            modification et de suppression des données vous concernant. Les
            seules données personnelles pouvant être collectées sont relatives
            aux formulaires de dépôt de candidature et au formulaire de contact
            que vous pouvez également utiliser pour toute demande
            complémentaire. Les données collectées sont conservées le temps de
            la relation du recrutement et vous bénéficiez d’un droit d’accès, de
            rectification, de portabilité, d’effacement de celles-ci ou une
            limitation du traitement. Vous pouvez vous opposer au traitement des
            données vous concernant et vous disposez du droit de retirer votre
            consentement à tout moment en en faisant la demande et en produisant
            un justificatif d’identité valide à l’adresse email suivante :
            direction@mhmmotors.com Vous avez la possibilité d’introduire une
            réclamation auprès d’une autorité de contrôle.
          </p>
        </div>
        <div className="infoBlock">
          <p className="infoTitle">3. Avertissements</p>
          <p className="infoPara">
            Les informations contenues sur le site www.mhmmotors.com ont un
            caractère indicatif et non contractuel : MHM s’efforce de publier
            une information vérifiée et à jour. Cependant MHM décline toute
            responsabilité en cas d’erreur, d’inexactitude ou d’omission dans
            ces informations et se réserve le droit de corriger, à tout moment
            et sans préavis, le contenu dans le cadre de mises à jour notamment.
            Les informations du site www.mhmmotors.com peuvent contenir des
            inexactitudes techniques ou des erreurs typographiques.
          </p>
        </div>
        <div className="infoBlock">
          <p className="infoTitle">4. Droits de propriété</p>
          <p className="infoPara">
            Toute reproduction totale ou partielle ou de façon générale, toute
            exploitation de ce site (contenu rédactionnel, illustrations,
            informations, icônes, logos) par quelque procédé que ce soit et sur
            quelque support que ce soit, sans l’autorisation préalable et écrite
            de MHM est strictement interdite. 5. Liens hypertextes Les liens
            hypertextes présents sur le site peuvent orienter l’utilisateur vers
            des sites extérieurs dont le contenu ne peut en aucune manière
            engager la responsabilité de MHM. Toute création de lien hypertexte
            avec le site www.mhmmotors.com doit faire l’objet d’une demande
            d’autorisation préalable et de l’accord de MHM.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Terms;
