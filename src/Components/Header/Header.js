import React from "react";
import "./Header.scss";
import { BsYoutube, BsFacebook, BsInstagram } from "react-icons/bs";

import { FaWaze } from "react-icons/fa";
import { FiMapPin } from "react-icons/fi";

const Header = ({ title, p, bgi }) => {
  return (
    <div className="HeaderWrapper" style={{ backgroundImage: `url(${bgi})` }}>
      <div className="DescWrapper">
        <h1 className="HeaderTitle">{title}</h1>
        <p className="HeaderDescription">{p}</p>
      </div>
      <div className="headerIcons">
        <a
          href="https://www.facebook.com/MHM-Motors-103060721805298"
          target="_blank"
          rel="noreferrer"
        >
          <BsFacebook className="iconHeader" />
        </a>
        <a
          href="https://www.instagram.com/mhm.motors/"
          target="_blank"
          rel="noreferrer"
        >
          <BsInstagram className="iconHeader" />
        </a>
        <a
          href="https://www.youtube.com/channel/UCNA7S_TBfd_sv76PMIb16LA"
          target="_blank"
          rel="noreferrer"
        >
          <BsYoutube className="iconHeader" />
        </a>
        <a
          href="https://www.google.com/maps?q=MHM+Motors,+Chem.+des+Essarts,+78310+Coigni%C3%A8res&ftid=0x47e69d76170fa7b7:0x36c5cb79356ff54c&hl=fr-FR&gl=fr&entry=gps&lucs=s2se&shorturl=1"
          target="_blank"
          rel="noreferrer"
        >
          <FiMapPin className="iconHeader" />
        </a>
        <a
          href="https://www.waze.com/live-map/directions?to=ll.48.736446%2C1.907823"
          target="_blank"
          rel="noreferrer"
        >
          <FaWaze className="iconHeader" />
        </a>
      </div>
    </div>
  );
};

export default Header;
