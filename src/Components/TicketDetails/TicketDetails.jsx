/* eslint-disable react/prop-types */
/* eslint-disable comma-dangle */
/* eslint-disable quotes */
/* eslint-disable no-unused-vars */
/* eslint-disable semi */
/* eslint-disable react/react-in-jsx-scope */

import OffersCard from "../Cards/OffersCard/OffersCard";
import ReviewCard from "../Cards/reviewCards/ReviewCard";
import percent from "../../assets/percentage.svg";
import { useNavigate } from "react-router-dom";
import './ticketDetails.css'

const TicketDetails = (props) => {
  const nav = useNavigate();
  const Cancel = () => {
    localStorage.clear();
    nav("/");
  };
  return (
    <>
      <section className="user-section">
        <ReviewCard
          date_depart={props.date_depart}
          date_arrival={props.date_arrival}
          destination={props.destination}
          origin={props.origin}
        />
        <hr />
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
            <span>₹{props.ticket}.00</span>
          </span>
          <span>
            <span>Total Travelers</span>
            <span>{props.travelers}</span>
          </span>
          <span>
            <span>CGST & SGST</span>
            <span>₹500.00</span>
          </span>
          <h4>
            Total Charge <span>₹{props.ticket * props.travelers + 500}.00</span>
          </h4>
        </div>
        <span className="details">
          Discounts, Offers and price concessions will be applied later during
          payment
        </span>
        <button onClick={props.onClick} className="book-now">Book Now</button>

        <button onClick={Cancel} className="cancel">
          Cancel
        </button>
      </section>
    </>
  );
};

export default TicketDetails;
