/* eslint-disable react/prop-types */
/* eslint-disable quotes */
/* eslint-disable no-unused-vars */
/* eslint-disable semi */
/* eslint-disable react/react-in-jsx-scope */

import LeftSection from "../../Components/HomePage/LeftSection/LeftSection";
import train from "../../assets/train.svg";
import "./home.css";

const Home = () => {
  return (
    <div className="home-container">
      <LeftSection />
      <div className="train-image">
        <img src={train} alt="train" />
      </div>
    </div>
  );
};

export default Home;
