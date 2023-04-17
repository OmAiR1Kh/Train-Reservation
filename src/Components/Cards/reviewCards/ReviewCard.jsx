/* eslint-disable react/prop-types */
/* eslint-disable comma-dangle */
/* eslint-disable quotes */
/* eslint-disable no-unused-vars */
/* eslint-disable semi */
/* eslint-disable react/react-in-jsx-scope */

import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const ReviewCard = (props) => {
  const [requiredTime, setRequiredTime] = useState("8 hours");
  const [contact, setContact] = useState({});
  const nav = useNavigate();
  const { users } = useSelector((state) => ({ ...state }));
  const calculateTime = () => {
    console.log(props.time_depart - props.time_arrival);
    setRequiredTime(props.time_depart - props.time_arrival);
  };
  useEffect(() => {
    localStorage.getItem("contact")
      ? setContact(JSON.parse(localStorage.getItem("contact")))
      : setContact({});
  }, []);
  return (
    <>
      <div
        className="card"
        style={{
          background: "#0578FF1A",
          height: props.height ? props.height : "230px",
          gap: "1rem",
          width: props.width,
        }}
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
        {!props.details && (
          <button onClick={() => nav("/")} className="review-button">
            Change Boarding Station
          </button>
        )}
        {props.details && (
          <div className="traveler-details">
            <div className="details">
              <p>{users[0].name}</p>
              <span>{users[0].age} Yrs</span>
              <span>{users[0].gender}</span>
              <span>{users[0].berth}</span>
            </div>
            <div className="details">
              <p>E-Tickets will be sent to:</p>
              <span>
                {users[0].name}(primary) <br />{" "}
                {contact.email ? contact.email : contact.mobile}
              </span>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default ReviewCard;
