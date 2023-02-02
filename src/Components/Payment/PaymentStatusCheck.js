import { useState, useEffect } from "react";
import { useStripe } from "@stripe/react-stripe-js";
import Navbar from "../Navbar/Navbar";
import Logo from "../../assets/logoNoir.png";
import "./pay.scss";
import { useNavigate } from "react-router-dom";
import Spinner from "../Spinner/Spinner";
const PaymentStatusCheck = () => {
  const stripe = useStripe();
  const [message, setMessage] = useState(null);
  const [wait, setWait] = useState(false);
  let navigate = useNavigate();
  useEffect(() => {
    if (!stripe) {
      return;
    }

    // Retrieve the "payment_intent_client_secret" query parameter appended to
    // your return_url by Stripe.js
    const clientSecret = new URLSearchParams(window.location.search).get(
      "payment_intent_client_secret"
    );

    setTimeout(() => {
      setWait(true);
    }, 1500);

    // Retrieve the PaymentIntent
    stripe.retrievePaymentIntent(clientSecret).then(({ paymentIntent }) => {
      // Inspect the PaymentIntent `status` to indicate the status of the payment
      // to your customer.
      //
      // Some payment methods will [immediately succeed or fail][0] upon
      // confirmation, while others will first enter a `processing` state.
      //
      // [0]: https://stripe.com/docs/payments/payment-methods#payment-notification
      switch (paymentIntent.status) {
        case "succeeded":
          setMessage("Success! Payment received.");
          break;

        case "processing":
          setMessage(
            "Payment processing. We'll update you when payment is received."
          );
          break;

        case "requires_payment_method":
          // Redirect your user back to your payment page to attempt collecting
          // payment again
          setMessage("Payment failed. Please try another payment method.");
          break;

        default:
          setMessage("Something went wrong.");
          break;
      }
    });
  }, [stripe]);

  return (
    <div>
      <Navbar logo={Logo} bgc="transparent" />
      <div className="response">
        {!wait && <Spinner />}
        {wait && message === "Success! Payment received." ? (
          <div className="wrapperofthis">
            <h1>Merci !</h1>
            <p>Votre Paiement a été effectué avec succès.</p>
            <button onClick={() => navigate("/")}>Acceuil</button>
          </div>
        ) : wait &&
          message ===
            "Payment processing. We'll update you when payment is received." ? (
          <div className="wrapperofthis">
            <h1>En cours.</h1>
            <p>Nous vous tiendrons au courant lorsque le paiement sera reçu.</p>
            <button onClick={() => navigate("/")}>Acceuil</button>
          </div>
        ) : (
          wait && (
            <div className="wrapperofthis">
              <h1>Oups !</h1>
              <p>Votre Paiement a échoué</p>
              <button onClick={() => navigate("/atelier")}>Revenir</button>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default PaymentStatusCheck;
