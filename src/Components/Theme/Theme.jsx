/* eslint-disable react/prop-types */
/* eslint-disable quotes */
/* eslint-disable no-unused-vars */
/* eslint-disable semi */
/* eslint-disable react/react-in-jsx-scope */
import React from "react";
import "./theme.css";
import PropTypes from "prop-types";

const Theme = ({ children }) => {
  return <div className="theme">{children}</div>;
};
export default Theme;
