/* eslint-disable react/prop-types */
/* eslint-disable comma-dangle */
/* eslint-disable quotes */
/* eslint-disable no-unused-vars */
/* eslint-disable semi */
/* eslint-disable react/react-in-jsx-scope */

import { useEffect, useState } from "react";
import OffersCard from "../../Components/Cards/OffersCard/OffersCard";
import BoardingDetails from "../../Components/boardingDetails/BoardingDetails";
import "./confirm.css";
import percent from "../../assets/percentage.svg";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const ConfirmBooking = () => {
  const [number, setNumber] = useState();
  const { users } = useSelector((state) => ({ ...state }));

  const nav = useNavigate();
  const Cancel = () => {
    localStorage.clear();
    nav("/");
  };

  useEffect(() => {
    localStorage.getItem("price")
      ? setNumber(localStorage.getItem("price"))
      : setNumber(0);
  }, []);
  return (
    <>
      <div className="confirm-container">
        <h4 style={{ color: "#0578ff", gridColumn: "1 / span 2" }}>
          Pay<span style={{ color: "#ff6060" }}> ₹{number}</span> to confirm
          booking
        </h4>
        <div className="boarding-details-div">
          <BoardingDetails />
        </div>
        <div className="boarding-details-div">
          <OffersCard />
          <div className="apply-code">
            <div className="title">
              <img src={percent} alt="" />
              Apply Code
            </div>
            <div className="code-input">
              <input type="text" placeholder="Enter Code" />
            </div>
          </div>
          <div className="bill-details">
            <h4>Bill Details</h4>
            <span>
              <span>Base Ticket Fare</span>
              <span>₹{1000}.00</span>
            </span>
            <span>
              <span>Total Travelers</span>
              <span>{users.length}</span>
            </span>
            <span>
              <span>CGST & SGST</span>
              <span>₹500.00</span>
            </span>
            <h4>
              Total Charge <span>₹{1000 * users.length + 500}.00</span>
            </h4>
          </div>
          <button onClick={Cancel} className="cancel">
            Cancel
          </button>
        </div>
      </div>
    </>
  );
};

export default ConfirmBooking;
