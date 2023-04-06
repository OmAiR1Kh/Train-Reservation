/* eslint-disable object-shorthand */
/* eslint-disable react/prop-types */
/* eslint-disable quotes */
/* eslint-disable no-unused-vars */
/* eslint-disable semi */
/* eslint-disable react/react-in-jsx-scope */
import React from "react";
import "./theme.css";

const Theme = ({ children, background }) => {
  return (
    <div className="theme" style={{ background: background }}>
      {children}
    </div>
  );
};
export default Theme;
