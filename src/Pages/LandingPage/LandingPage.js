import React, { useState, useEffect } from "react";
// import MHM_1080 from 'https://www.youtube.com/watch?v=ABzDOSQkhTM&ab_channel=LogosConservador'
import mhm_phone from "../../assets/mhm_phone.mp4";
import MHM_desktop from "../../assets/MHM_desktop.mp4";
import mhm_tablette from "../../assets/mhm_tablette.mp4";
import thumb from "../../assets/land.png";
import "./LandingPage.scss";
import { Link } from "react-router-dom";
import Spinner from "../../Components/Spinner/Spinner";

import Logo from "../../assets/Logo.png";
import LandingIcon from "../../Components/LandingIcon/LandingIcon";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import FloatingButton from "../../Components/FLoatingButton/FloatingButton";
var a = true; /* comment */
const getVideoSrc = (width) => {
  if (width < 360) return mhm_phone;
  if (360 <= width < 1000) return mhm_tablette;
  if (width > 1000) return MHM_desktop;
};
const LandingPage = () => {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const [loading, setLoading] = useState(true);

  const onLoadedData = () => {
    setIsVideoLoaded(true);
    setLoading(false);
  };

  const src = getVideoSrc(window.innerWidth);

  return (
    <div>
      {loading && <Spinner />}
      <div className="bloc-video">
        <Navbar logo={Logo} color="#fff" bgc="transparent" />
        <div className="landing-video">
          {/* <video loop autoPlay muted  onPlay={()=>{console.log("run")}} id="q_1080"> */}
          {/* <iframe width="560" height="315" src="https://www.youtube.com/embed/LRlxschQZQo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" ></iframe> */}
          {/* </video> */}
          {/* <img
            src={thumb}
            className="video-thumb tiny"
            alt="thumb"
            style={{ opacity: isVideoLoaded ? 0 : 1 }}
          /> */}

          <video
            playsinline
            loop
            autoPlay
            playsInline
            muted
            src={src}
            onLoadedData={onLoadedData}
            style={{ opacity: isVideoLoaded ? 1 : 0 }}
          />
        </div>
        <div className="landing-design">
          <div className="text-video">
            <h2>
              <span className="mhm">MHM </span>{" "}
              <span className="motors">MOTORS</span>{" "}
            </h2>
            <p>
              Amateurs de moto, vivez à fond votre passion ! Des services sur
              mesure couvrant tous vos besoins à des prix imbattables!
            </p>
            <br></br>

            <button type="button" class="button">
              <Link to="/motors">
                <div className="btn-text">Découvrir</div>
              </Link>
            </button>

            {/* <a
                      href='#features'
                      className='btn btn-custom btn-lg page-scroll'
                    >
                      <div className="textbtn">Découvrir</div>
                    </a>{' '}
                   */}
          </div>
        </div>

        <LandingIcon />
        {/* <div className="rectangle"></div> */}
      </div>
      <div className="foo">
        <Footer />
        <FloatingButton />
      </div>
    </div>
  );
};
export default LandingPage;
