/* eslint-disable react/prop-types */
/* eslint-disable comma-dangle */
/* eslint-disable quotes */
/* eslint-disable no-unused-vars */
/* eslint-disable semi */
/* eslint-disable react/react-in-jsx-scope */
import ContactDetails from "../Cards/UserCards/ContactDetails";
import IRCTCCard from "../Cards/UserCards/IRCTCCard";
import UserCard from "../Cards/UserCards/UserCard";
import "./userDetails.css";

const UserDetails = ({ onSubmit, onChange, email, mobile, error }) => {
  return (
    <>
      <section className="user-section">
        <UserCard />
        <IRCTCCard />
        <ContactDetails
          onSubmit={onSubmit}
          onChange={onChange}
          email={email}
          mobile={mobile}
          error={error}
        />
      </section>
    </>
  );
};

export default UserDetails;
