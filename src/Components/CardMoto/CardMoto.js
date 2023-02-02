import React, { useState } from "react";
import "./CardMoto.scss";
import ContactForm from "../ContactForm/ContactForm";

import mail from "../../assets/mail.png"
import { Link } from "react-router-dom";

// import '../popup/popup.css'



const CardMoto = (props) => {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  const lenMark = props.mark.length;
  const discount = props.dsc;
  console.log("type",props.type)
  const prix_discounted_euro = props.price - discount
  const prix_discounted_percentage =
    props.price - Math.round((props.price * discount) / 100);

  if (discount > 0 && lenMark > 3 && props.type ==="Euro") {
    return (
      <div className="motoCard">
        <div className="motoComponent">
          <Link to={`/product-detail/${props.id}`}>
            <div className="img-allproduct">
              <img src={props.image} alt="" />
            </div>
          </Link>
          <div className="motoStatus">
            <p id="status">{props.status}</p>
            {/* <Like/> */}
          </div>
        </div>
        <div className="motoDetails">
          <div className="motoDetails_bloc1">
            <div className="mark_model_block">
              <p id="mark_block">{props.mark}</p>
              <p id="model_block">{props.model}</p>
            </div>

            <button
              id="demande_contact"
              onClick={toggleModal}
              style={{ cursor: "pointer" }}
            >
              <img src={mail}></img>
              contacter moi
            </button>
            {modal && (
              <div className="modal">
                <div onClick={toggleModal} className="overlay"></div>
                <div className="modal-content">
                  <ContactForm />
                </div>
              </div>
            )}
          </div>
          <div className="motoDetails_bloc1">
            <p id="turbo">{props.cat}</p>

            <p id="prices_discounted">{`€${props.price}`}</p>

            <p id="prices2">€{prix_discounted_euro}</p>
          </div>
        </div>
      </div>
    );
  } 
  if (discount > 0 && lenMark > 3 && props.type === "percentege") {
    return (
      <div className="motoCard">
        <div className="motoComponent">
          <Link to={`/product-detail/${props.id}`}>
            <div className="img-allproduct">
              <img src={props.image} alt="" />
            </div>
          </Link>
          <div className="motoStatus">
            <p id="status">{props.status}</p>
            {/* <Like/> */}
          </div>
        </div>
        <div className="motoDetails">
          <div className="motoDetails_bloc1">
            <div className="mark_model_block">
              <p id="mark_block">{props.mark}</p>
              <p id="model_block">{props.model}</p>
            </div>

            <button
              id="demande_contact"
              onClick={toggleModal}
              style={{ cursor: "pointer" }}
            >
              <img src={mail}></img>
              contacter moi
            </button>
            {modal && (
              <div className="modal">
                <div onClick={toggleModal} className="overlay"></div>
                <div className="modal-content">
                  <ContactForm />
                </div>
              </div>
            )}
          </div>
          <div className="motoDetails_bloc1">
            <p id="turbo">{props.cat}</p>

            <p id="prices_discounted">{`€${props.price}`}</p>

            <p id="prices2">€{prix_discounted_percentage}</p>
          </div>
        </div>
      </div>
    );
  } else if (discount == 0 && lenMark > 3) {
    return (
      <div className="motoCard">
        <div className="motoComponent">
          <Link to={`/product-detail/${props.id}`}>
            <div className="img-allproduct">
              <img src={props.image} alt="" />
            </div>
          </Link>
          <div className="motoStatus">
            <p id="status">{props.status}</p>
            {/* <Like/> */}
          </div>
        </div>
        <div className="motoDetails">
          <div className="motoDetails_bloc1">
            <div className="mark_model_block">
              <p id="mark_block">{props.mark}</p>
              <p id="model_block">{props.model}</p>
            </div>
            <button
              id="demande_contact"
              onClick={toggleModal}
              style={{ cursor: "pointer" }}
            >
              <img src={mail}></img>
              contacter moi
            </button>
            {modal && (
              <div className="modal">
                <div onClick={toggleModal} className="overlay"></div>
                <div className="modal-content">
                  <ContactForm />
                </div>
              </div>
            )}
          </div>
          <div className="motoDetails_bloc1">
            <p id="turbo">{props.cat}</p>

            <p id="prices_not_discounted">€{props.price}</p>
          </div>
        </div>
      </div>
    );
  }

  if (discount > 0 && lenMark < 3 && props.type ==="Euro") {
    return (
      <div className="motoCard">
        <div className="motoComponent">
          <Link to={`/product-detail/${props.id}`}>
            <div className="img-allproduct">
              <img src={props.image} alt="" />
            </div>
          </Link>
          <div className="motoStatus">
            <p id="status">{props.status}</p>
            {/* <Like/> */}
          </div>
        </div>
        <div className="motoDetails">
          <div className="motoDetails_bloc1">
            <div className="mark_model_flex">
              <p id="mark_flex">
                {props.mark}
                {"/ "}
              </p>
              <p id="model_flex">{props.model}</p>
            </div>

            <button
              id="demande_contact"
              onClick={toggleModal}
              style={{ cursor: "pointer" }}
            >
              <img src={mail}></img>
              contacter moi
            </button>
            {modal && (
              <div className="modal">
                <div onClick={toggleModal} className="overlay"></div>
                <div className="modal-content">
                  <ContactForm />
                </div>
              </div>
            )}
          </div>
          <div className="motoDetails_bloc1">
            <p id="turbo">{props.cat}</p>

            <p id="prices_discounted">{`€${props.price}`}</p>

            <p id="prices2">€{prix_discounted_euro}</p>
          </div>
        </div>
      </div>
    );
  }
   if (discount > 0 && lenMark < 3 && props.type === "percentege") {
     return (
       <div className="motoCard">
         <div className="motoComponent">
           <Link to={`/product-detail/${props.id}`}>
             <div className="img-allproduct">
               <img src={props.image} alt="" />
             </div>
           </Link>
           <div className="motoStatus">
             <p id="status">{props.status}</p>
             {/* <Like/> */}
           </div>
         </div>
         <div className="motoDetails">
           <div className="motoDetails_bloc1">
             <div className="mark_model_flex">
               <p id="mark_flex">
                 {props.mark}
                 {"/ "}
               </p>
               <p id="model_flex">{props.model}</p>
             </div>

             <button
               id="demande_contact"
               onClick={toggleModal}
               style={{ cursor: "pointer" }}
             >
               <img src={mail}></img>
               contacter moi
             </button>
             {modal && (
               <div className="modal">
                 <div onClick={toggleModal} className="overlay"></div>
                 <div className="modal-content">
                   <ContactForm />
                 </div>
               </div>
             )}
           </div>
           <div className="motoDetails_bloc1">
             <p id="turbo">{props.cat}</p>

             <p id="prices_discounted">{`€${props.price}`}</p>

             <p id="prices2">€{prix_discounted_percentage}</p>
           </div>
         </div>
       </div>
     );
   } else if (discount == 0 && lenMark < 3) {
     return (
       <div className="motoCard">
         <div className="motoComponent">
           <Link to={`/product-detail/${props.id}`}>
             <div className="img-allproduct">
               <img src={props.image} alt="" />
             </div>
           </Link>
           <div className="motoStatus">
             <p id="status">{props.status}</p>
             {/* <Like/> */}
           </div>
         </div>
         <div className="motoDetails">
           <div className="motoDetails_bloc1">
             <div className="mark_model_flex">
               <p id="mark_flex">
                 {props.mark}
                 {"/ "}
               </p>
               <p id="model_flex">{props.model}</p>
             </div>
             <button
               id="demande_contact"
               onClick={toggleModal}
               style={{ cursor: "pointer" }}
             >
               <img src={mail}></img>
               contacter moi
             </button>
             {modal && (
               <div className="modal">
                 <div onClick={toggleModal} className="overlay"></div>
                 <div className="modal-content">
                   <ContactForm />
                 </div>
               </div>
             )}
           </div>
           <div className="motoDetails_bloc1">
             <p id="turbo">{props.cat}</p>

             <p id="prices_discounted">{`€${props.price}`}</p>
           </div>
         </div>
       </div>
     );
   } else {
     return (
       <div className="motoCard">
         <div className="motoComponent">
           <Link to={`/product-detail/${props.id}`}>
             <div className="img-allproduct">
               <img src={props.image} alt="" />
             </div>
           </Link>
           <div className="motoStatus">
             <p id="status">{props.status}</p>
             {/* <Like/> */}
           </div>
         </div>
         <div className="motoDetails">
           <div className="motoDetails_bloc1">
             <div className="mark_model_flex">
               <p id="mark_flex">
                 {props.mark}
                 {"/ "}
               </p>
               <p id="model_flex">{props.model}</p>
             </div>
             <button
               id="demande_contact"
               onClick={toggleModal}
               style={{ cursor: "pointer" }}
             >
               <img src={mail}></img>
               contacter moi
             </button>
             {modal && (
               <div className="modal">
                 <div onClick={toggleModal} className="overlay"></div>
                 <div className="modal-content">
                   <ContactForm />
                 </div>
               </div>
             )}
           </div>
           <div className="motoDetails_bloc1">
             <p id="turbo">{props.cat}</p>

             <p id="prices_discounted">{`€${props.price}`}</p>
             {props.type === "Euro" && (
               <p id="prices2">€{prix_discounted_euro}</p>
             )}
             {props.type === "percentege" && (
               <p id="prices2">€{prix_discounted_percentage}</p>
             )}
           </div>
         </div>
       </div>
     );
   }
};

export default CardMoto;
