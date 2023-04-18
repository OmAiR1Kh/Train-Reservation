/* eslint-disable multiline-ternary */
/* eslint-disable react/prop-types */
/* eslint-disable comma-dangle */
/* eslint-disable quotes */
/* eslint-disable no-unused-vars */
/* eslint-disable semi */
/* eslint-disable react/react-in-jsx-scope */

import "./thanks.css";
import success from "../../assets/correct.svg";
import { useNavigate } from "react-router-dom/dist";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import data from "../../TrainData.json";
import qrcode from "../../assets/frame.png";

const ThankYou = () => {
  const nav = useNavigate();
  const { users } = useSelector((state) => ({ ...state }));
  const [id, setID] = useState(0);
  const [contact, setContact] = useState({});
  const [price, setPrice] = useState("");
  const [train, setTrain] = useState({});
  useEffect(() => {
    localStorage.getItem("contact")
      ? setContact(JSON.parse(localStorage.getItem("contact")))
      : setContact({});
    localStorage.getItem("id") ? setID(localStorage.getItem("id")) : setID(0);
    localStorage.getItem("price")
      ? setPrice(localStorage.getItem("price"))
      : setPrice("");
    setTrain(
      data.filter((tr) => {
        return tr.flight_id === Number(id);
      })
    );
    console.log(train);
  }, [id]);
  return (
    <>
      <div className="container">
        <div className="thank-you">
          <img src={success} alt="" />
          <p>Congratulations! You have successfully booked tickets</p>
          <span>
            please carry ERS / VRM / SMS / Mail sent to your contact details,
            along with a relavant ID proof while travelling
          </span>
        </div>
        <div className="ticket-details">
          <div className="data-container">
            <div className="titles">
              <span>PNR No: 1234567890</span>
              <span>Transaction ID : 351511859256378</span>
            </div>
            <p
              style={{
                alignSelf: "flex-start",
                width: "90%",
                margin: "0 auto",
              }}
            >
              12430 - NDLS LKO AC SF
            </p>
            <div className="date-data">
              <div style={{ alignItems: "flex-start", width: "15%" }}>
                {/* <p>date depart</p> */}
                <span>{train[0]?.date_time_depart}</span>
                <span>{train[0]?.origin}</span>
              </div>
              <section style={{ width: "60%" }}>
                <p style={{ width: "100%" }}>8 Hours</p>
              </section>
              <div style={{ alignItems: "flex-end", width: "15%" }}>
                {/* <p>{train[0].time_arrival}</p> */}
                <span>{train[0]?.date_time_arrival}</span>
                <span>{train[0]?.destination}</span>
              </div>
            </div>
            <div className="date-data">
              <p>E-Tickets has been sent to:</p>
              <span>
                <p>{users[0].name}(Primary)</p>
                <p>{contact.email}</p>
              </span>
            </div>
            <div style={{ width: "90%", margin: "0 auto" }}>
              <h4 style={{ lineHeight: "0.5rem" }}>Traveler Details</h4>
              <div
                style={{
                  display: "flex",
                  width: "100%",
                  flexDirection: "column",
                }}
              >
                <p style={{ lineHeight: "0.5rem", fontSize: "0.9rem" }}>
                  {users[0].name}
                </p>
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    width: "100%",
                    fontSize: "0.8rem",
                    color: "#808080",
                  }}
                >
                  <p>Age: {users[0].age}</p>
                  <p style={{ placeSelf: "end" }}>
                    Booking Status: Confirmed (CNF)
                  </p>
                  <p>Gender: {users[0].gender}</p>
                  <p style={{ placeSelf: "end" }}>
                    Seat/Coach no. : 44(lower berth), A1
                  </p>
                </div>
              </div>
            </div>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                width: "90%",
              }}
            >
              <p>Total Fare:</p>
              <p style={{ placeSelf: "end" }}>₹ {price}</p>
            </div>
          </div>
          {/* QR CODE CONTAINER SECTION */}
          <div className="qr-container">
            <div className="qr-code">
              <img src={qrcode} alt="" />
            </div>
            <button className="top-button">Print Ticket(English)</button>
            <button className="top-button">Print Ticket(Hindi)</button>
            <button className="lower-button" onClick={() => nav("/")}>
              Book Another Ticket
            </button>
            <button className="lower-button">Download Ticket</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ThankYou;
