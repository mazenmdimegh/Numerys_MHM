import React, { useState, useEffect } from "react";
import { NavLink, useParams } from "react-router-dom";
import axios from 'axios';
import LogoNoir from "../../assets/logoNoir.png";
import Logo from "../../assets/Logo.png";
import motoIcon from '../../assets/motoIcon.png'
import chairIcon from '../../assets/chairIcon.png'
import gasIcon from '../../assets/gasIcon.png'
import holeIcon from '../../assets/holeIcon.png'
import { CgEditBlackPoint } from 'react-icons/cg'
import { GrTransaction } from 'react-icons/gr'
import { MdSettingsRemote } from 'react-icons/md'
import { IoMdFlashlight } from 'react-icons/io'
import { MdWifiTethering } from 'react-icons/md'
import './Moto.scss'
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import Swipe from "../../Components/Swiper/Swiper";
import Gallery from "../../Components/Gallery/Gallery";
import SimilaireMoto from "../../Components/SimilaireMoto/SimilaireMoto";
import Spinner from "../../Components/Spinner/Spinner";
import ContactForm from "../../Components/ContactForm-Moto/ContactForm";
import FloatingButton from "../../Components/FLoatingButton/FloatingButton";
import TextAnimation from "../../Components/TextAnimation/TextAnimation";
import img1 from "../../assets/IconsMotoDetails/IconeTransmission.png"
import img2 from "../../assets/IconsMotoDetails/IconeMoteur.png"
import img3 from "../../assets/IconsMotoDetails/IconeDimensions.png"
import img4 from "../../assets/IconsMotoDetails/IconePerformance.png"
import img5 from "../../assets/IconsMotoDetails/IconeOptions.png"
import img6 from "../../assets/IconsMotoDetails/IconePartieCycle.png"

// import AllProducts from "../capucin/Allproduct";
// import SimilaireMoto from "./SimilaireMoto";



const Moto = () => {
  // const id = useLocation().pathname.split("/")[2];
  const { id } = useParams();
  const [isLoading, setisLoading] = useState();
  const [Failure, setFailure] = useState(false);
  const [verifModal, setVerifModal] = useState(false);
  const [isPending, setIsPending] = useState(true);
  const [posts, setPosts] = useState([])
  const url = `https://r8lq7yzqj5.execute-api.eu-west-1.amazonaws.com/Dev/motors/${id}`
  useEffect(() => {
    // setIsPending(true)
    axios.get(url)
      .then(res => {
        console.log(res)
        setPosts(res.data)
        setIsPending(false)
      })
      .catch(err => {
        console.log(err)
      })
  }
    , [id])
  return (

    <div className="details">
      <div className="Desktop">
        <Navbar className logo={LogoNoir} color="#000" bgc="transparent" />
      </div>
      <div className="Mobile">
        <Navbar logo={Logo} color="#fff" bgc="linear-gradient(rgba(72, 72, 72, 0.29), rgb(255 255 255 / 0%))" />
      </div>
      {isPending && <div className="EmptySpace"> <Spinner />
        <p> Chargement ...</p>
      </div>}
      {posts.map(post => (
        <div>
          <div className="Desktop">

            <TextAnimation />
            <p className="path">
              <NavLink to="/" > Acceuil </NavLink>  {'>'}
              <NavLink to="/motors" > Motos </NavLink>  {'> '}
              <span>{post.marque} {post.modele} </span> <span className="span">{(post.date_per_cerculations).split("-")[0]}</span></p>
          </div>
          {post.images.length !== 0 && <div className="Desktop">
            <Gallery imgs={post.images} />
          </div>
          }
          {post.images.length !== 0 && <div className="Swiper Mobile">
            <Swipe Photos={post.images} />
          </div>
          }
          {post.images.length === 0 && <div className="centre">
            <svg style={{ width: 200 }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128"> <path d="M15,109.8l48,17c0,0,0,0,0,0c0.1,0,0.2,0.1,0.3,0.1c0.1,0,0.1,0,0.2,0c0.1,0,0.2,0,0.4,0c0,0,0.1,0,0.1,0c0.2,0,0.3,0,0.5,0 c0,0,0.1,0,0.1,0c0.1,0,0.2-0.1,0.3-0.1c0,0,0,0,0,0l48-17c1.2-0.4,2-1.6,2-2.8V73.4l10-3.5c0.8-0.3,1.5-1,1.8-1.8s0.2-1.8-0.3-2.6 l-12-20c0,0,0,0,0-0.1c0-0.1-0.1-0.1-0.1-0.2c0,0,0,0,0-0.1c0,0,0,0,0,0c0-0.1-0.1-0.1-0.1-0.2c0,0-0.1-0.1-0.1-0.1c0,0,0,0-0.1-0.1 c0,0,0,0-0.1,0c-0.1,0-0.1-0.1-0.2-0.1c0,0-0.1-0.1-0.1-0.1c0,0,0,0-0.1,0c0,0-0.1,0-0.1,0c-0.1,0-0.1-0.1-0.2-0.1 c-0.1,0-0.1,0-0.2-0.1c0,0,0,0-0.1,0c0,0,0,0,0,0l-48-17c-0.2-0.1-0.4-0.1-0.6-0.1c0,0-0.1,0-0.1,0c-0.2,0-0.3,0-0.5,0 c-0.1,0-0.1,0-0.2,0c-0.2,0-0.4,0.1-0.6,0.1l-48,17c0,0,0,0,0,0c0,0-0.1,0-0.1,0.1c0,0,0,0,0,0c-0.1,0.1-0.3,0.1-0.4,0.2 c0,0,0,0,0,0c0,0,0,0,0,0c-0.2,0.1-0.4,0.3-0.6,0.5l0,0c0,0-0.1,0.1-0.1,0.1c0,0,0,0,0,0c-0.1,0.1-0.1,0.2-0.2,0.2c0,0,0,0,0,0 c0,0,0,0-0.1,0.1l-12,20C1,66.2,0.9,67.2,1.2,68s1,1.5,1.8,1.8l10,3.5V107C13,108.3,13.8,109.4,15,109.8z M109,104.9l-42,14.9V95.7 c0-1.7-1.3-3-3-3s-3,1.3-3,3v24.1l-42-14.9V75.5l32,11.3c0.3,0.1,0.7,0.2,1,0.2c1,0,2-0.5,2.6-1.5L64,69.8l9.4,15.7 C74,86.5,75,87,76,87c0.3,0,0.7-0.1,1-0.2l32-11.3V104.9z M67,34.2L103,47L67,59.8V34.2z M77.3,80.4l-8.9-14.8l42.2-15l8.9,14.8 L77.3,80.4z M17.3,50.6l42.2,15l-8.9,14.8l-42.2-15L17.3,50.6z" /></svg>            <p className="error">
              Cet article n'a pas d'images.
            </p>
          </div>
          }




          {/* <Model /> */}
          <div className="carous">
            {/* <Carousel breakPoints={breakPoints} >

              <img src={img_1} alt="" />
              <img src={img_2} alt="" />
              <img src={img_3} alt="" />

            </Carousel> */}
          </div>
          <div className="externalProp">
            <div className='prop1'>
              <div className='bloc1'>
                <p className='bloc1-typeNom'>{post.marque} {post.modele}</p>
                {post.discount.amount > 0 && post.discount.type_discount === "percentege" && <p className="bloc1-prix">
                  <span className="line-through">€{post.price}</span>
                  €{Math.round((post.price) - ((post.price) / 100) * (post.discount.amount))}
                </p>}
                {post.discount.amount > 0 && post.discount.type_discount === "Euro" && <p className="bloc1-prix">
                  <span className="line-through">€{post.price}</span>
                  €{Math.round((post.price) - (post.discount.amount))}
                </p>}
                {post.discount.amount == 0 && <p className="bloc1-prix r">
                  €{post.price}
                </p>}

              </div>
              <div className="bloc2">
                <div className='category a'>
                  <div className="catg ">
                    <div><img src={motoIcon} alt="" /></div>
                    <div className="labelCategory">  Category : <br /> <div className='info'>{post.category}</div>
                    </div>
                  </div>
                </div>
                <div className='category'>
                  <div className="catg ">
                    <div><img src={chairIcon} alt="" /></div>
                    <div className="labelCategory">  Marque : <br /> <div className='info'>{post.marque}</div>
                    </div>
                  </div>
                </div>
                <div className='category'>
                  <div className="catg ">
                    <div><img src={gasIcon} alt="" /></div>
                    <div className="labelCategory">  Modèle : <br /> <div className='info'>{post.modele}</div>
                    </div>
                  </div>
                </div>
                <div className='category b'>
                  <div className="catg ">
                    <div><img src={holeIcon} alt="" /></div>
                    <div className="labelCategory">  Coloris : <br /> <div className='info'>xxxxx</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>


          <div className="type_price">

            <div>
              <p id="type">{post.marque}/{post.modele}</p>
              {post.discount.amount > 0 && post.discount.type_discount === "percentege" && <div>
                <p id="price">
                  €{Math.round((post.price) - ((post.price) / 100) * (post.discount.amount))}
                </p>
                <p className="line-through">
                  €{post.price}
                </p>
              </div>}
              {post.discount.amount > 0 && post.discount.type_discount === "Euro" &&
                <div>
                  <p id="price">
                    €{Math.round((post.price) - (post.discount.amount))}
                  </p>
                  <p className="line-through">
                    €{post.price}
                  </p>
                </div>}
              {post.discount.amount == 0 && <p id="price">€{post.price}</p>}
            </div>
          </div>

          <div className="properties">
            <div className="property1">
              <div className="catg ">
                <div><img src={motoIcon} alt="" /></div>
                <div className="labelCategory">  Category: <br /> <div className='info'>{post.category}</div>
                </div>
              </div>
              <div className="catg ">
                <div><img src={chairIcon} alt="" /></div>
                <div className="labelCategory">  Marque : <br /> <div className='info'>{post.marque}</div>
                </div>
              </div>
            </div>
            <div className="property1">
              <div className="catg ">
                <div><img src={gasIcon} alt="" /></div>
                <div className="labelCategory">  Modèle : <br /> <div className='info'>{post.modele}</div>
                </div>
              </div>
              <div className="catg ">
                <div><img src={holeIcon} alt="" /></div>
                <div className="labelCategory">  Coloris : <br /> <div className='info'>{post.marque}</div>
                </div>
              </div>
            </div>
          </div>

          <div className="fiche-form">
            <div>
              <div className="fiche_tech">

                <p id="fiche_tech_ficheTech">Fiche technique</p>
                <p id="fiche_tech_moto">What Is the moto {post.reference} </p>
                <p id="fiche_tech_moto_description">{post.description}</p>
                <div className="productDeatil_blocs">
                  <div className="productDetail-blocs_bloc1">
                    <div className="Details"><div className="Detail"><img src={img1} style={{ width: "27px", marginBottom : "-8px" }} /> </div><p> 17-inch wheels</p></div>
                    <div className="Details"><div className="Detail"><img src={img2} style={{ width: "24px", marginBottom : "-8px" }} /> </div><p> Lane departure warning</p></div>
                    <div className="Details"><div className="Detail"><img src={img3} style={{ width: "22px", marginBottom : "-8px" }} /> </div><p>Push-button start</p></div>
                  </div>
                  <div className="productDetail-blocs_bloc2">
                    <div className="Details"><div className="Detail"><img src={img4} style={{ width: "26px", marginBottom : "-8px" }} /> </div><p> Forward collision warning</p></div>
                    <div className="Details"><div className="Detail"><img src={img5} style={{ width: "22px", marginBottom : "-8px" }} /> </div><p>LED headlights</p></div>
                    <div className="Details"><div className="Detail"><img src={img6} style={{ width: "26px", marginBottom : "-8px" }} /> </div><p>Front and rear parking sensors</p></div>

                  </div>
                </div>
              </div>

            </div>

            <div className="form-contact">

              <ContactForm moto={posts} />
            </div>
          </div>

          <div className="produitSimilaire">
            <p id="produitSimilaire">Moto Similaire</p>

            {post.images.length !== 0 && <SimilaireMoto />}
            {/* {post.images.length != 0 &&
              <div className="cadreMoto"><CardMoto id={post.reference} imageoverlay='image-overlay' overlay='container-overlay' classname='image-product' key={post.reference} image={post.images[0]['meduim']} cat={post.category} status={post.status} price={post.price} productName={post.modele} dsc={post.discount.amount} mark={post.marque}
                model={post.modele} />
                <CardMoto id={post.reference} imageoverlay='image-overlay' overlay='container-overlay' classname='image-product' key={post.reference} image={post.images[0]['meduim']} cat={post.category} status={post.status} price={post.price} productName={post.modele} dsc={post.discount.amount} mark={post.marque}
                  model={post.modele} />
                <CardMoto id={post.reference} imageoverlay='image-overlay' overlay='container-overlay' classname='image-product' key={post.reference} image={post.images[0]['meduim']} cat={post.category} status={post.status} price={post.price} productName={post.modele} dsc={post.discount.amount} mark={post.marque}
                  model={post.modele} />
              </div>
              } */}

            {/* <CardMoto id={post.reference} imageoverlay='image-overlay' overlay='container-overlay' classname='image-product' key={post.reference} image={post.images[0]['meduim']} cat={post.category} status={post.status} price={post.price} productName={post.modele} dsc={post.discount.amount} />
              <CardMoto id={post.reference} imageoverlay='image-overlay' overlay='container-overlay' classname='image-product' key={post.reference} image={post.images[0]['meduim']} cat={post.category} status={post.status} price={post.price} productName={post.modele} dsc={post.discount.amount} />
              <CardMoto id={post.reference} imageoverlay='image-overlay' overlay='container-overlay' classname='image-product' key={post.reference} image={post.images[0]['meduim']} cat={post.category} status={post.status} price={post.price} productName={post.modele} dsc={post.discount.amount} /> */}

          </div>


        </div>
      ))}
      <FloatingButton />
      <Footer />

    </div>
  )
}

export default Moto