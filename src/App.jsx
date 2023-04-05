/* eslint-disable comma-dangle */
/* eslint-disable quotes */
/* eslint-disable no-unused-vars */
/* eslint-disable semi */
/* eslint-disable react/react-in-jsx-scope */
import { Routes, Route, useLocation } from "react-router-dom";
// import picture from './assets/trying.svg'
import Footer from "./Components/Footer/Footer";
import Navbar from "./Components/Navbar/Navbar";
import Theme from "./Components/Theme/Theme";
import Home from "./Layouts/Home/Home";
import { useCallback, useEffect, useState } from "react";

const App = () => {
  const location = useLocation();
  const [isSearching, setIsSearching] = useState(false);
  const checkData = useCallback(() => {
    localStorage.getItem("search-data") && setIsSearching(true);
  }, [localStorage.getItem("search-data")]);
  useEffect(() => {
    checkData();
  }, [localStorage.getItem("search-data")]);
  return (
    <div className="App">
      {location.pathname !== "/" && <Navbar />}
      <Theme>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          {isSearching && (
            <Route
              path="/search-results"
              element={<p>Search Results Page</p>}
            />
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
    </div>
  );
};

export default App;
