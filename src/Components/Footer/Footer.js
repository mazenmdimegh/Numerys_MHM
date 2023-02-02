import React from "react";
import Logo from "../../assets/Logo.png";
import "./Footer.scss";
import { Link, useNavigate } from "react-router-dom";
// import { FaWaze } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import {
  BsTelephone,
  BsYoutube,
  BsFacebook,
  BsInstagram,
} from "react-icons/bs";
import { FiMapPin } from "react-icons/fi";

const Footer = () => {
  const navigate = useNavigate();

  const logoHandler = () => {
    navigate("/");
  };
  return (
    <div className="FooterWrapper">
      <div className="bgWrapper">
        <div className="FooterTop">
          <div className="FooterTopIcons">
            <a
              href="https://www.facebook.com/MHM-Motors-103060721805298"
              target="_blank"
              rel="noreferrer"
              className="socialLinks"
            >
              <BsFacebook className="socialIcons" />
            </a>
            <a
              href="https://www.instagram.com/mhm.motors/"
              target="_blank"
              rel="noreferrer"
              className="socialLinks"
            >
              <BsInstagram className="socialIcons" />
            </a>
            <a
              href="https://www.youtube.com/channel/UCNA7S_TBfd_sv76PMIb16LA"
              target="_blank"
              rel="noreferrer"
              className="socialLinks"
            >
              <BsYoutube className="socialIcons" />
            </a>
          </div>
        </div>
        <div className="FooterMid">
          <div
            className="box"
            onClick={logoHandler}
            style={{ cursor: "pointer" }}
          >
            <img src={Logo} alt="logo" className="Footerlogo" />
          </div>
          <div className="box">
            <h3 className="header">CONTACT</h3>
            <div className="lineFooter">
              <FiMapPin className="footer-icons" id="iconFirst" />
              <a
                href="https://www.google.com/maps?q=MHM+Motors,+Chem.+des+Essarts,+78310+Coigni%C3%A8res&ftid=0x47e69d76170fa7b7:0x36c5cb79356ff54c&hl=fr-FR&gl=fr&entry=gps&lucs=s2se&shorturl=1"
                target="_blank"
                rel="noreferrer"
                className="paraFoot"
                id="parafoot"
              >
                Chemin des Essarts 78310 Coignières
              </a>
            </div>
            <div className="lineFooter">
              <BsTelephone className="footer-icons" />
              <a href="tel:+33173167602" className="paraFoot">
                01 73 16 76 02
              </a>
            </div>
            <div className="lineFooter">
              <AiOutlineMail className="footer-icons" />
              <a className="paraFoot" href="mailto:contact@mhmmotors.com">
                contact@mhmmotors.com
              </a>
            </div>
          </div>
          <div className="box">
            <h3 className="header">NAVIGATION</h3>
            <Link to="/motors" className="FooterLink">
              <p className="paraFoot">\\Motors</p>
            </Link>
            <Link to="/atelier" className="FooterLink">
              <p className="paraFoot">\\Atelier</p>
            </Link>
            <Link to="/rachat" className="FooterLink">
              <p className="paraFoot">\\Rachat</p>
            </Link>
          </div>
          <div className="box">
            <h3 className="header">INFORMATIONS LEGALES</h3>
            <Link to="/politique" className="FooterLink">
              <p className="paraFoot info">Politiques de confidentialité</p>
            </Link>
            <Link to="/terms" className="FooterLink">
              <p className="paraFoot info">Mentions légales</p>
            </Link>
            <Link to="/cookies" className="FooterLink">
              <p className="paraFoot info">Politique de cookies</p>
            </Link>
          </div>
        </div>
      </div>
      <div className="FooterBottom">
        <p className="copyrights">
          mhmmotors.com &copy; 2022 All rights reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
