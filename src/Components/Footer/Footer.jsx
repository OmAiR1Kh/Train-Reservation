/* eslint-disable comma-dangle */
/* eslint-disable padded-blocks */
/* eslint-disable quotes */
/* eslint-disable no-unused-vars */
/* eslint-disable semi */
/* eslint-disable react/react-in-jsx-scope */
import "./footer.css";
import { FaTelegramPlane } from "react-icons/fa";
import {
  TbBrandFacebook,
  TbBrandInstagram,
  TbBrandTwitter,
} from "react-icons/Tb";
import { Link, useNavigate } from "react-router-dom";

const Footer = () => {
  const nav = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    // After this there must be some code to send the email to the newsletterEmails table in the database.
  };

  return (
    <div className="footer-container">
      <section className="upper-section">
        <p style={{ fontWeight: "600" }}>
          Metro<span style={{ color: "#000" }}>Way</span>
        </p>
        <div className="subscribe-text">
          Planning your next trip?
          <span>
            Subscribe to our news letter. Get the latest travel trends & deals!
          </span>
        </div>
        <form className="newsletter-form">
          <input type="text" placeholder="Enter Email ID" />
          <FaTelegramPlane onClick={handleSubmit} />
        </form>
      </section>
      <section className="bottom-section">
        <ul>
          <li>
            <Link to="/">About us</Link>
          </li>
          <li>
            <Link to="/">Mobile</Link>
          </li>
          <li>
            <Link to="/">Privacy</Link>
          </li>
          <li>
            <Link to="/">Terms of use</Link>
          </li>
          <li>
            <Link to="/">Careers</Link>
          </li>
          <li>
            <Link to="/">Customer Service</Link>
          </li>
        </ul>
        <div>
          <TbBrandFacebook onClick={() => nav("/")} />
          <TbBrandInstagram onClick={() => nav("/")} />
          <TbBrandTwitter onClick={() => nav("/")} />
        </div>
      </section>
    </div>
  );
};

export default Footer;
