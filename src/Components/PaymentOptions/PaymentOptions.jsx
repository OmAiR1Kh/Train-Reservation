/* eslint-disable multiline-ternary */
/* eslint-disable react/prop-types */
/* eslint-disable comma-dangle */
/* eslint-disable quotes */
/* eslint-disable no-unused-vars */
/* eslint-disable semi */
/* eslint-disable react/react-in-jsx-scope */

import { useState, useEffect } from "react";
import "./payment.css";
import * as PayPal from "@paypal/react-paypal-js";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "./CheckoutForm.jsx/CheckoutForm";

const PaymentOption = (props) => {
  const [formData, setFormData] = useState({});

  const paypalOptions = {
    clientId:
      "Aa2gYG1-LALc1ggSHaq8PaCJehBJvAMv5ZPbNO4824nJ70Uihc7luBUt_jH1-tgrIBf6uDWZ5EpUwkeq",
    currency: "USD",
    amount: props.amount * 100,
    application_context: {
      shipping_preference: "NO_SHIPPING",
    },
    style: {
      layout: "vertical",
      color: "blue",
    },
    onSuccess: (details, data) => {
      console.log("Transaction completed by " + details.payer.name.given_name);
      console.log(data);
    },
    onError: (err) => {
      console.error(err);
    },
  };

  return (
    <>
      {PayPal && <div className="payment-option">
        <PayPal.PayPalButtons {...paypalOptions} fundingSource="paypal" />
      </div>}
      <div className="payment-option">
        <CheckoutForm price={props.amount} />
      </div>
    </>
  );
};

export default PaymentOption;
