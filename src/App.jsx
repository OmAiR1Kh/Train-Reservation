/* eslint-disable comma-dangle */
/* eslint-disable quotes */
/* eslint-disable no-unused-vars */
/* eslint-disable semi */
/* eslint-disable react/react-in-jsx-scope */
import "./App.css";
import { Routes, Route, useLocation } from "react-router-dom";
// import picture from './assets/trying.svg'
import Footer from "./Components/Footer/Footer";
import Navbar from "./Components/Navbar/Navbar";
import Theme from "./Components/Theme/Theme";
import Home from "./Layouts/Home/Home";
import { useCallback, useEffect, useState } from "react";
import Results from "./Layouts/SearchResuts/Results";
import BookingReview from "./Layouts/BookingReview/BookingReview";
import ConfirmBooking from "./Layouts/ConfirmBooking/ConfirmBooking";
import ThankYou from "./Layouts/ThankYou/ThankYou";

const App = () => {
  const location = useLocation();
  const [isSearching, setIsSearching] = useState(false);
  const [payment, setPayment] = useState(false);
  const checkData = useCallback(() => {
    localStorage.getItem("search-data") && setIsSearching(true);
  }, [localStorage.getItem("search-data")]);
  useEffect(() => {
    localStorage.getItem("payment") && setPayment(true);
    checkData();
  }, [localStorage.getItem("search-data")]);
  return (
    <div className="App">
      {location.pathname !== "/" && <Navbar />}
      <Theme background={location.pathname === "/search-results" && "#f5f5f5"}>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          {isSearching && (
            <>
              <Route path="/search-results" element={<Results />} />
              <Route path="/book/:id" element={<BookingReview />} />
              <Route path="/cashout/:id" element={<ConfirmBooking />} />
              {payment && <Route path="/thank-you" element={<ThankYou />} />}
            </>
          )}
          <Route
            path="/*"
            element={
              <p
                style={{
                  textAlign: "center",
                  fontSize: "5rem",
                  color: "#0578ff",
                }}
              >
                404 Page Not Found
              </p>
            }
          />
        </Routes>
      </Theme>
      <Footer />
      {console.clear()}
    </div>
  );
};

export default App;
