/* eslint-disable react/prop-types */
/* eslint-disable comma-dangle */
/* eslint-disable quotes */
/* eslint-disable no-unused-vars */
/* eslint-disable semi */
/* eslint-disable react/react-in-jsx-scope */

import { useState } from "react";
import { useNavigate } from "react-router-dom";

const ReviewCard = (props) => {
  const [requiredTime, setRequiredTime] = useState("8 hours");
  const nav = useNavigate();
  const calculateTime = () => {
    console.log(props.time_depart - props.time_arrival);
    setRequiredTime(props.time_depart - props.time_arrival);
  };
  return (
    <>
      <div
        className="card"
        style={{ background: "#0578FF1A", height: "230px", gap: "1rem" }}
      >
        <h4>Boarding Details</h4>
        <div className="runs-on">
          <section>{props.destination}</section>
          <span>Class 2A & TotKal Quota</span>
        </div>
        <div className="date-data">
          <div>
            <p>{props.date_depart}</p>
            <span>{props.origin}</span>
          </div>
          <section>
            <p>{requiredTime}</p>
          </section>
          <div>
            <p>{props.date_arrival}</p>
            <span>{props.destination}</span>
          </div>
        </div>
        <button onClick={() => nav("/")} className="review-button">
          Change Boarding Station
        </button>
      </div>
    </>
  );
};

export default ReviewCard;
