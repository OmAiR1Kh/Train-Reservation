/* eslint-disable comma-dangle */
/* eslint-disable padded-blocks */
/* eslint-disable quotes */
/* eslint-disable no-unused-vars */
/* eslint-disable semi */
/* eslint-disable react/react-in-jsx-scope */
import "./navbar.css";
import { useNavigate } from "react-router-dom";
const Navbar = () => {
  const nav = useNavigate();
  return (
    <nav className="navbar">
      <p
        style={{ fontWeight: "600", color: "#0578ff" }}
        onClick={() => nav("/")}
      >
        Metro<span style={{ color: "#000" }}>Way</span>
      </p>
      <div>
        <p onClick={() => nav("/my-booking")}>My Booking</p>/
        <p style={{ color: "#0578ff" }} onClick={() => nav("/login")}>
          Login / Sign In
        </p>
      </div>
    </nav>
  );
};

export default Navbar;
