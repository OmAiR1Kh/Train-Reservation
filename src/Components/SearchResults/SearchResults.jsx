/* eslint-disable multiline-ternary */
/* eslint-disable comma-dangle */
/* eslint-disable quotes */
/* eslint-disable no-unused-vars */
/* eslint-disable semi */
/* eslint-disable react/react-in-jsx-scope */

import filter from "../../assets/filter.svg";
import { useEffect, useState } from "react";
import trains from "../../TrainData.json";
import { useSelector } from "react-redux";
import "./Search.css";
import Card from "../Cards/Cards";
import { useNavigate } from "react-router-dom";

const SearchResults = () => {
  const [filtered, setFiltered] = useState([]);
  const { searchState } = useSelector((state) => ({ ...state }));
  const nav = useNavigate();

  const filterData = () => {
    const trainDate = new Date(searchState?.date).toLocaleDateString("en-US", {
      month: "2-digit",
      day: "2-digit",
      year: "numeric",
    });
    console.log(trainDate);
    const filteredDate = trains.filter((train) =>
      new Date(train.date)
        .toLocaleDateString("en-US", {
          month: "2-digit",
          day: "2-digit",
          year: "numeric",
        })
        .includes(trainDate)
    );
    const filteredOrigin = filteredDate.filter((train) =>
      train.origin.includes(searchState.origin)
    );
    const filteredDestination = filteredOrigin.filter((train) =>
      train.destination.includes(searchState.destination)
    );
    console.log(filteredDestination);
    setFiltered(filteredDestination);
  };

  // const handleClick = (e) => {

  // };

  useEffect(() => {
    if (searchState !== null) filterData();
  }, [searchState]);

  return (
    <>
      <div className="results">
        <div className="results-header">
          <h2>Available Trains &nbsp;</h2>
          <span>{filtered.length} Trains Available</span>
          <img src={filter} alt="filter" />
        </div>
        <div className="results-content">
          {filtered.length > 0 ? (
            filtered.map((item) => (
              <Card
                onClick={() => {
                  nav(`/book/${item.flight_id}`);
                }}
                key={item.flight_id}
                destination={item.destination}
                date_depart={item.date_time_depart}
                origin={item.origin}
                date_arrival={item.date_time_arrival}
              />
            ))
          ) : (
            <p>No Results Found</p>
          )}
        </div>
      </div>
    </>
  );
};

export default SearchResults;
