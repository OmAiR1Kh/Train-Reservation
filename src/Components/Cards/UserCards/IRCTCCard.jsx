/* eslint-disable comma-dangle */
/* eslint-disable quotes */
/* eslint-disable no-unused-vars */
/* eslint-disable semi */
/* eslint-disable react/react-in-jsx-scope */

import { useState } from "react";

const IRCTCCard = () => {
  const [error, setError] = useState("");
  const [code, setCode] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    code === ""
      ? setError("Enter Code First")
      : setError("Verification Code Sent");
    setTimeout(() => {
      setError("");
    }, 2000);
  };
  return (
    <>
      <div className="user-data">
        <div className="title">
          <p>IRCTC Login</p>
          <span>Password is required later to complete booking</span>
        </div>
        <form onSubmit={handleSubmit}>
          <div style={{ gridColumn: "1 / span 2" }}>
            <input
              type="text"
              placeholder="Enter IRCTC User ID"
              onChange={(e) => setCode(e.target.value)}
            />
          </div>
          <button>Verify</button>
        </form>
        <p>{error}</p>
        <div className="links">
          <span>Create IRCTC ID</span>
          <span>Forgot User ID?</span>
        </div>
      </div>
    </>
  );
};

export default IRCTCCard;
