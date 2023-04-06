/* eslint-disable comma-dangle */
/* eslint-disable quotes */
/* eslint-disable no-unused-vars */
/* eslint-disable semi */
/* eslint-disable react/react-in-jsx-scope */
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import data from "../../TrainData.json";
import { BsChevronDoubleRight } from "react-icons/bs";
import "./Search.css";

const Search = () => {
  const { searchState } = useSelector((state) => ({ ...state }));
  const [search, setSearch] = useState(searchState);
  const dispatch = useDispatch();
  const [error, setError] = useState("");
  const handleChange = (e) => {
    const { name, value } = e.target;
    setSearch({ ...search, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (search.origin && search.destination && search.date) {
      localStorage.setItem("search-data", JSON.stringify(search));
      dispatch({ type: "SEARCH_DONE", payload: { searchState: search } });
    } else {
      setError("Please Fill All the Required Fields");
    }
  };
  return (
    <div className="res-container">
      <form className="min-w-full result-form">
        <h2
          style={{ color: "#0578ff", gridColumn: "1 / span 2" }}
          className="font-extrabold"
        >
          Your Search Results
        </h2>
        <div>
          <select
            name="origin"
            onChange={handleChange}
            defaultValue={search?.origin || 1}
          >
            <option value={1} disabled>
              Please Select Your origin Area
            </option>
            {data.map((train) => {
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
            {data.map((train) => {
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
            defaultValue={search?.date}
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
      <div className="palms h-20">
        <p>
          Planning your holidays <BsChevronDoubleRight />
        </p>
      </div>
      <div className="temple">
        <p>
          Train tourism packages <BsChevronDoubleRight />
        </p>
      </div>
      <div>
        <p style={{ color: "#808080", fontSize: "0.6rem" }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et olore magna aliqua. Lorem ipsum
          dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et olore magna aliqua
        </p>
      </div>
    </div>
  );
};

export default Search;
