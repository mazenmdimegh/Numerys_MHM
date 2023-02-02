import React, { Component, useEffect } from "react";
import CardMoto from "../../Components/CardMoto/CardMoto";
import Navbar from "../../Components/Navbar/Navbar";
import Logo from "../../assets/logoNoir.png";
import "./Motors.scss";
import TextAnimation from "../../Components/TextAnimation/TextAnimation";
import AllProducts from "../../Components/AllProduct/AllProduct";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import FloatingButton from "../../Components/FLoatingButton/FloatingButton";

const Motors = () => {
  useEffect(() => {
  window.scrollTo(0, 0);
    
  }
    , [])
  return (
    <div>
      <Navbar logo={Logo} bgc="transparent" />
      <br />

      <TextAnimation />
      {/* <FiltreMoto/> */}

      {/* <p className="title">59 moto disponible dans nos locaux</p> */}

      <AllProducts />

      <FloatingButton />
      <Footer />
    </div>
  );
};
export default Motors;
