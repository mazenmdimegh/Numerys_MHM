import React, { useEffect, useState } from "react";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "./CheckoutForm";
import axios from "axios";
import "./CheckOutPage.css";

const stripePromise = loadStripe("pk_test_M8J3kALZtxiMXK4I8QrKKnjz");

const CheckOutPage = ({ customer_id, amount }) => {
  const [secretKey, setSecretKey] = useState("");
  var data = JSON.stringify({
    customer_id: customer_id,
    amount: amount * 100,
  });

  const config = {
    method: "post",
    url: "https://i848jb0mtj.execute-api.eu-west-1.amazonaws.com/Dev/paymentIntent/create",
    data: data,
  };
  useEffect(() => {
    axios(config)
      .then(function (response) {
        setSecretKey(response.data.client_secret);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);
  const options = {
    // passing the client secret obtained from the server
    clientSecret: secretKey,
    appearance: {
      theme: "flat",
    },
  };
  if (secretKey) {
    return (
      <Elements stripe={stripePromise} options={options}>
        <CheckoutForm />
      </Elements>
    );
  } else {
    return <div>loading....</div>;
  }
};

export default CheckOutPage;
