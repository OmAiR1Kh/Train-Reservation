/* eslint-disable comma-dangle */
/* eslint-disable quotes */
/* eslint-disable no-unused-vars */
/* eslint-disable semi */
/* eslint-disable react/react-in-jsx-scope */
import { useCallback, useEffect, useState } from "react";
import "./review.css";
import { useNavigate, useParams } from "react-router-dom";
import trains from "../../TrainData.json";
import UserDetails from "../../Components/userDetails/userDetails";
import TicketDetails from "../../Components/TicketDetails/TicketDetails";
import { useSelector } from "react-redux";

const BookingReview = () => {
  const nav = useNavigate();
  const { id } = useParams();
  const { users } = useSelector((state) => ({ ...state }));
  const [input, setInput] = useState({});
  const [error, setError] = useState("");
  const [data, setData] = useState({});
  const [shouldUpdate, setShouldUpdate] = useState(false);
  const [user, setUser] = useState([]);

  const handleChange = (e) => {
    const { value, name } = e.target;
    setInput({ ...input, [name]: value });
  };

  const getUser = useCallback(() => {
    const user = localStorage.getItem("user");
    if (user) {
      setUser(JSON.parse(user));
    } else {
      setUser([]);
    }
    setShouldUpdate(true);
  }, [setUser, setShouldUpdate]);

  const getData = () => {
    const train = trains.filter(
      (train) => String(train.flight_id) === String(id)
    );
    setData(train[0]);
  };

  useEffect(() => {
    getData();
    getUser();
    setShouldUpdate(false);
  }, [id, users, shouldUpdate]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setTimeout(() => {}, 500);
    if (!input.email || !input.mobile) {
      setError("Please Fill at Least One Contact Method");
      setTimeout(() => {
        setError("");
      }, 1500);
    } else {
      localStorage.setItem("contact", JSON.stringify(input));
      localStorage.setItem("price", 1000 * users.length + 500);
      nav(`/cashout/${id}`);
    }
  };

  return (
    <>
      <div className="review-container">
        <UserDetails
          email={input.email}
          mobile={input.mobile}
          onChange={handleChange}
          error={error}
        />
        <TicketDetails
          origin={data.origin}
          destination={data.destination}
          date_depart={data.date_time_depart}
          date_arrival={data.date_time_arrival}
          onClick={handleSubmit}
          ticket={1000}
          travelers={users.length}
        />
      </div>
    </>
  );
};

export default BookingReview;
