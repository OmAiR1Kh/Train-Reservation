/* eslint-disable comma-dangle */
/* eslint-disable react/prop-types */
/* eslint-disable quotes */
/* eslint-disable no-unused-vars */
/* eslint-disable semi */
/* eslint-disable react/react-in-jsx-scope */
import data from "../../../TrainData.json";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import "./leftSection.css";
import { useEffect, useState } from "react";
const LeftSection = () => {
  const [search, setSearch] = useState({});
  const [origin, setOrigin] = useState([]);
  const [destination, setDestination] = useState([]);
  const [error, setError] = useState("");
  const nav = useNavigate();
  const dispatch = useDispatch();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setSearch({ ...search, [name]: value });
  };

  const handleData = () => {
    setOrigin(
      data.filter((obj, index, arr) => {
        return arr.map((mapObj) => mapObj.origin).indexOf(obj.origin) === index;
      })
    );
    setDestination(
      data.filter((obj, index, arr) => {
        return (
          arr.map((mapObj) => mapObj.destination).indexOf(obj.destination) ===
          index
        );
      })
    );
  };

  useEffect(() => {
    handleData();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (search.origin && search.destination && search.date) {
      localStorage.setItem("search-data", JSON.stringify(search));
      dispatch({ type: "SEARCH_DONE", payload: { searchState: search } });
      nav("/search-results");
      window.scroll({
        top: 0,
        left: 0,
        behavior: "smooth",
      });
    } else {
      setError("Please Fill All the required fields");
      setTimeout(() => {
        setError("");
      }, 2000);
    }
  };

  return (
    <div className="left-section">
      <p
        style={{ fontWeight: "700", color: "#0578ff", fontSize: "1.2rem" }}
        onClick={() => nav("/")}
      >
        Metro<span style={{ color: "#000" }}>Way</span>
      </p>
      <div className="home-content">
        <button disabled style={{ cursor: "default" }}>
          Hello Travelers
        </button>
        <h2 style={{ fontWeight: "bolder" }}>
          made your booking experience easy!
        </h2>
        <span>
          Train booking is a process of choosing and purchasing train seats
          online. It is an easy process but were are here to make it much better
          & simple.
        </span>
        <form>
          <div>
            <select
              name="origin"
              onChange={handleChange}
              defaultValue={search?.origin || 1}
            >
              <option value={1} disabled>
                Please Select Your origin Area
              </option>
              {origin.map((train) => {
                return (
                  <option key={train.flight_id} value={train.origin}>
                    {train.origin}
                  </option>
                );
              })}
            </select>
          </div>
          <div>
            <select
              name="destination"
              onChange={handleChange}
              defaultValue={search?.destination || 1}
            >
              <option value={1} disabled>
                Please Select Your Destination
              </option>
              {destination.map((train) => {
                return (
                  <option key={train.flight_id} value={train.destination}>
                    {train.destination}
                  </option>
                );
              })}
            </select>
          </div>
          <div>
            <input
              type="date"
              name="date"
              onChange={handleChange}
              style={{ width: "100%" }}
            />
          </div>
          <button
            style={{ gridColumn: "1 / span 2", width: "100%" }}
            onClick={handleSubmit}
          >
            Search For Trains
          </button>
          {error !== "" && <p className="error-message">{error}</p>}
        </form>
      </div>
    </div>
  );
};

export default LeftSection;
