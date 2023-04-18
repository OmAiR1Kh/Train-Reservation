/* eslint-disable react/prop-types */
/* eslint-disable comma-dangle */
/* eslint-disable quotes */
/* eslint-disable no-unused-vars */
/* eslint-disable semi */
/* eslint-disable react/react-in-jsx-scope */

import "./boarding.css";
import { useEffect, useState } from "react";
import ReviewCard from "../Cards/reviewCards/ReviewCard";
import data from "../../TrainData.json";
import { useParams } from "react-router-dom";
import PaymentOption from "../PaymentOptions/PaymentOptions";
import { PayPalScriptProvider } from "@paypal/react-paypal-js";

const BoardingDetails = () => {
  const { id } = useParams();
  const [number, setNumber] = useState(0);
  const [flight, setFlight] = useState({});
  const [contact, setContact] = useState({});
  const getFlight = () => {
    setFlight(
      data.filter((train) => {
        return train.flight_id.toString() === id;
      })
    );
  };
  useEffect(() => {
    localStorage.getItem("price")
      ? setNumber(localStorage.getItem("price"))
      : setNumber(0);
    localStorage.getItem("contact")
      ? setContact(JSON.parse(localStorage.getItem("contact")))
      : setContact({});

    getFlight();
  }, []);
  return (
    <>
      <ReviewCard
        minHeight="300px"
        width="95%"
        details={true}
        requiredTime={8}
        destination={flight[0]?.destination}
        date_arrival={flight[0]?.date_time_arrival}
        origin={flight[0]?.origin}
        date_depart={flight[0]?.date_time_depart}
      />
      <PayPalScriptProvider
        options={{
          "client-id":
            "Aa2gYG1-LALc1ggSHaq8PaCJehBJvAMv5ZPbNO4824nJ70Uihc7luBUt_jH1-tgrIBf6uDWZ5EpUwkeq",
        }}
      >
        <PaymentOption email={contact.email} amount={number} />
      </PayPalScriptProvider>
    </>
  );
};

export default BoardingDetails;
