/* eslint-disable react/prop-types */
/* eslint-disable comma-dangle */
/* eslint-disable quotes */
/* eslint-disable no-unused-vars */
/* eslint-disable semi */
/* eslint-disable react/react-in-jsx-scope */
import { useState } from "react";
import "./cards.css";

const Card = (props) => {
  const [requiredTime, setRequiredTime] = useState("8 hours");
  return (
    <>
      <section
        className="card"
        onClick={props.onClick}
        style={{ width: "90%" }}
      >
        <h4 style={{ lineHeight: "0rem", paddingTop: "-0.2rem" }}>
          {props.destination}
        </h4>
        <div className="runs-on">
          <section>
            Runs on
            <button>Every day</button>
          </section>
          <span>View Train table</span>
        </div>
        <div className="date-data">
          <div>
            <p>{props.date_depart}</p>
            <span>{props.time_depart}</span>
            <span>{props.origin}</span>
          </div>
          <section>
            <p>{requiredTime}</p>
          </section>
          <div>
            <p>{props.date_arrival}</p>
            <span>{props.time_arrival}</span>
            <span>{props.destination}</span>
          </div>
        </div>
        <div className="prices">
          <div>
            <span>
              <span>3A</span>
              <span>Avl - 046</span>
            </span>
            <span>
              <span>TotKal</span>
              <span>₹800</span>
            </span>
          </div>
          <div>
            <span>
              <span>3A</span>
              <span>Avl - 046</span>
            </span>
            <span>
              <span>TotKal</span>
              <span>₹800</span>
            </span>
          </div>
          <div>
            <span>
              <span>3A</span>
              <span>Avl - 046</span>
            </span>
            <span>
              <span>TotKal</span>
              <span>₹800</span>
            </span>
          </div>
        </div>
      </section>
    </>
  );
};

export default Card;
