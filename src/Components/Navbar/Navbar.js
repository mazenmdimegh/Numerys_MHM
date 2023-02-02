import React, { useEffect, useState } from "react";

import { BiMenuAltRight } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";

import { BsYoutube, BsFacebook, BsInstagram } from "react-icons/bs";

import { FaWaze } from "react-icons/fa";
import { FiMapPin } from "react-icons/fi";

import classes from "./Navbar.module.scss";
import { Link, NavLink, useNavigate } from "react-router-dom";

import { isLoggedIn } from "../../helpers/logged_in";
import { signOut } from "../../helpers/auth";

import LogoWhite from "../../assets/LogoWhite.png";
import Spinner from "../Spinner/Spinner";

const Navbar = ({ bgc, logo, color }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [size, setSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });
  const navigate = useNavigate();

  const islogged = isLoggedIn();

  useEffect(() => {
    const handleResize = () => {
      setSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (size.width > 788 && menuOpen) {
      setMenuOpen(false);
    }
  }, [size.width, menuOpen]);

  const menuToggleHandler = () => {
    if (size.width <= 800) {
      setMenuOpen((p) => !p);
    }
  };

  const ctaClickHandler = () => {
    menuToggleHandler();
    navigate("/signin");
  };

  const logoHandler = () => {
    navigate("/");
  };

  const signOutHandler = async () => {
    setLoading(true);
    await signOut();
    menuToggleHandler();
    setLoading(false);
    // window.location.reload();
  };

  return (
    <header className={classes.header} style={{ background: bgc }}>
      <div className={classes.header__content} style={{ color: color }}>
        <div
          className={classes.header__content__logo}
          onClick={logoHandler}
          style={{ cursor: "pointer" }}
        >
          <img src={logo} alt="logo" />
        </div>
        <nav
          className={`${classes.header__content__nav} ${
            menuOpen && (size.width < 788 || size.width === undefined)
              ? classes.isMenu
              : ""
          }`}
        >
          <div className={classes.header__content__nav__navbarIcons}>
            <a
              href="https://www.facebook.com/MHM-Motors-103060721805298"
              target="_blank"
              rel="noreferrer"
            >
              <BsFacebook
                className={classes.header__content__nav__navbarIcons__icon}
              />
            </a>
            <a
              href="https://www.instagram.com/mhm.motors/"
              target="_blank"
              rel="noreferrer"
            >
              <BsInstagram
                className={classes.header__content__nav__navbarIcons__icon}
              />
            </a>
            <a
              href="https://www.youtube.com/channel/UCNA7S_TBfd_sv76PMIb16LA"
              target="_blank"
              rel="noreferrer"
            >
              <BsYoutube
                className={classes.header__content__nav__navbarIcons__icon}
              />
            </a>
            <a
              href="https://www.google.com/maps?q=MHM+Motors,+Chem.+des+Essarts,+78310+Coigni%C3%A8res&ftid=0x47e69d76170fa7b7:0x36c5cb79356ff54c&hl=fr-FR&gl=fr&entry=gps&lucs=s2se&shorturl=1"
              target="_blank"
              rel="noreferrer"
            >
              <FiMapPin
                className={classes.header__content__nav__navbarIcons__icon}
              />
            </a>
            <a
              href="https://www.waze.com/live-map/directions?to=ll.48.736446%2C1.907823"
              target="_blank"
              rel="noreferrer"
            >
              <FaWaze
                className={classes.header__content__nav__navbarIcons__icon}
              />
            </a>
          </div>
          <div className={classes.header__content__nav__navOpenLogo}>
            <img src={LogoWhite} alt="logo" />
          </div>
          <div className={classes.header__content__nav__MenuWord}>/Menu</div>
          <ul>
            <li>
              <NavLink to="/motors" onClick={menuToggleHandler}>
                Motors
              </NavLink>
            </li>
            <li>
              <NavLink to="/atelier" onClick={menuToggleHandler}>
                Atelier
              </NavLink>
            </li>
            <li>
              <NavLink to="/rachat" onClick={menuToggleHandler}>
                Rachat
              </NavLink>
            </li>
          </ul>
          {islogged ? (
            <button onClick={signOutHandler}>Se déconnecter</button>
          ) : (
            <button onClick={ctaClickHandler}>Se connecter</button>
          )}
        </nav>
        <div className={classes.header__content__toggle}>
          {!menuOpen ? (
            <BiMenuAltRight onClick={menuToggleHandler} />
          ) : (
            <AiOutlineClose onClick={menuToggleHandler} />
          )}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
