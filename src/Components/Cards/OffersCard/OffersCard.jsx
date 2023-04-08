/* eslint-disable react/prop-types */
/* eslint-disable comma-dangle */
/* eslint-disable quotes */
/* eslint-disable no-unused-vars */
/* eslint-disable semi */
/* eslint-disable react/react-in-jsx-scope */
import percent from "../../../assets/percentage.svg";
import './offerscard.css'

const OffersCard = () => {
  return (
    <>
      <div className="offers-card">
        <h4>Offers</h4>
        <div className="offers">
          <span>
            <img src={percent} alt="" />
            <p>50% off up to ₹100 | Use code BOOKNOW</p>
          </span>
          <span>Apply</span>
        </div>
        <div className="offers">
          <span>
            <img src={percent} alt="" />
            <p>50% off up to ₹100 | Use code BOOKNOW</p>
          </span>
          <span>Apply</span>
        </div>
      </div>
    </>
  );
};

export default OffersCard;
