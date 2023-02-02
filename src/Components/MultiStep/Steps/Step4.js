import React, { useEffect, useState } from "react";
import "./Step4.css";
import bankImg from "../../../assets/stripe.png";
import axios from "axios";
import CheckOutPage from "../../Payment/CheckOutPage";
import Spinner from "../../Spinner/Spinner";
import { getUserInfo } from "../../../helpers/logged_in";

const Step4 = ({ customer, amount }) => {
  const [cardsInfo, setCardsInfo] = useState([]);
  const [showOldCard, setShowOldCard] = useState(false);
  const [showStripe, setShowStripe] = useState(false);
  const [scala, setScala] = useState(false);
  const [loading, setLoading] = useState(false);
  const [scalapayInfo, setScalapayInfo] = useState({});
  useEffect(() => {
    fetchUserInfo();
  }, []);
  const fetchUserInfo = async () => {
    const userId = getUserInfo("accessToken").username;
    let userInfo = await axios.get(
      `https://tr7b84phib.execute-api.eu-west-1.amazonaws.com/Dev/clients/${userId}`
    );
    let post = await userInfo.data.address[0].postal_code;
    let lineOne = await userInfo.data.address[0].address_Line_1;
    await setScalapayInfo({
      totalAmount: {
        currency: "EUR",
        amount: amount,
      },
      consumer: {
        givenNames: userInfo.data.first_name || "test",
        surname: userInfo.data.last_name || "test",
        email: userInfo.data.email,
        phoneNumber: "123456789",
      },
      shipping: {
        countryCode: "FR",
        name: userInfo.data.first_name || "test",
        postcode: post,
        line1: lineOne,
      },
      merchant: {
        redirectCancelUrl:
          // "https://portal.integration.scalapay.com/failure-url",
          "https://d10ggo29axg2zf.cloudfront.net/failedpay",
        redirectConfirmUrl:
          // "https://portal.integration.scalapay.com/success-url",
          "https://d10ggo29axg2zf.cloudfront.net/succespay",
      },
      shippingAmount: {
        // currency: "EUR",
        amount: 0,
      },
      taxAmount: {
        // currency: "EUR",
        amount: 5,
      },
      type: "online",
      product: "pay-in-4",
      // frequency: {
      //   number: 1,
      //   frequencyType: "monthly",
      // },
      // orderExpiryMilliseconds: 600000,
    });
  };
  const scalaPayCreate = async () => {
    setLoading(true);
    let result = await axios.post(
      `https://6x727s6zi0.execute-api.eu-west-1.amazonaws.com/Dev/orders/create`,
      JSON.stringify(scalapayInfo)
    );
    console.log(result);
    window.location.href = result.data.checkoutUrl;
  };
  //checking if the client have paid before
  const checkPayBefore = async () => {
    setScala(false);
    setLoading(true);
    console.log(customer);
    const res = await axios.get(
      `https://i848jb0mtj.execute-api.eu-west-1.amazonaws.com/Dev/paymentMethod/${customer}`
    );
    setCardsInfo(res.data);
    console.log(res.data);
    if (res.data.length === 0) {
      setShowStripe(true);
      setTimeout(() => {
        setLoading(false);
      }, 1500);
    } else {
      setShowOldCard(true);
      setShowStripe(true);
      setTimeout(() => {
        setLoading(false);
      }, 1500);
    }
  };
  //if the client choose an old card
  const PayDirectly = (customerId, paymentId) => {
    const data = JSON.stringify({
      customer_id: customerId,
      amount: amount,
      paymentMethod_id: paymentId,
    });
    axios
      .post(
        "https://i848jb0mtj.execute-api.eu-west-1.amazonaws.com/Dev/paymentIntent/create_with_pm",
        data
      )
      .then((data) => {
        window.location.href = `status?payment_intent_client_secret=${data.data.client_secret}`; //gonna change
      });
  };
  const closing = () => {
    setShowOldCard(false);
    setShowStripe(false);
    setScala(true);
  };
  //scalapay Infos
  return (
    <div className="wrapper_box">
      <div className="etape">
        <p className="n_etape">
          <span className="etapNb">Etape 4:</span> Paiement
        </p>
      </div>
      <div className="paymentPara">
        Choisissez votre mode de paiement en toute sécurité
      </div>
      <div>
        <div className="totalMoney">
          <div>Total:</div>
          <div id="price-container">{amount} €</div>
        </div>
      </div>
      <div className="payment_method" onClick={checkPayBefore}>
        <label className="radioContainer">
          Paiement par carte bancaire
          <input type="radio" name="stripeRadio" />
          <span className="radioCircle"></span>
          <img src={bankImg} alt="carte bancaire" />
        </label>
      </div>
      {loading && <Spinner />}
      {showOldCard &&
        cardsInfo.map((element, index) => (
          <div
            className="cardInfo"
            key={index}
            onClick={() => PayDirectly(customer, element.id)}
          >
            <div className="choiceBtn">
              <div className="insideCircle"></div>
            </div>
            <div className="cardName">{element.card.brand}</div>
            <div className="cardNumber cardInfoBox">
              <div className="titles">N° Carte</div>
              <div className="info">xxxx xxxx xxxx {element.card.last4}</div>
            </div>

            <div className="cardExpirationDate cardInfoBox">
              <div className="titles">Expiration</div>
              <div className="info">
                {element.card.exp_month / 10 >= 1
                  ? element.card.exp_month
                  : "0" + element.card.exp_month}
                /{element.card.exp_year}
              </div>
            </div>

            <div className="cvc cardInfoBox">
              <div className="titles">CVC</div>
              <div className="info">123</div>
            </div>
          </div>
        ))}
      {showOldCard && (
        <div className="line">
          <hr className="fourhr" />
          <p className="lineT">Ou</p> <hr className="fourhr" />
        </div>
      )}
      {showStripe && <CheckOutPage customer_id={customer} amount={amount} />}
      <div className="payment_method" onClick={closing}>
        <label className="radioContainer">
          <scalapay-widget
            frequency-number="30"
            number-of-installments="4"
            hide="false"
            hide-price="false"
            min="0"
            max="2000"
            amount-selectors='["#price-container"]'
            currency-position="after"
            currency-display="symbol"
            logo-size="100"
            theme="variant"
            locale="fr"
          ></scalapay-widget>
          <input type="radio" name="stripeRadio" />
          <span className="radioCircle"></span>
        </label>
        {scala && (
          <button onClick={scalaPayCreate} className="scalaBtn">
            ScalaPay
          </button>
        )}
      </div>
    </div>
  );
};

export default Step4;
