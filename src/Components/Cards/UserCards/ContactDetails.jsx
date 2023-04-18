/* eslint-disable react/prop-types */
/* eslint-disable comma-dangle */
/* eslint-disable quotes */
/* eslint-disable no-unused-vars */
/* eslint-disable semi */
/* eslint-disable react/react-in-jsx-scope */

const ContactDetails = ({ email, mobile, onSubmit, onChange, error }) => {
  return (
    <>
      <div className="user-data contact-details">
        <div className="title">
          <p>Contact Details</p>
          <span>Your ticket info will be sent here</span>
        </div>
        <form onSubmit={onSubmit} className="add-user-form">
          <div>
            <input
              type="text"
              placeholder="Email ID"
              name="email"
              defaultValue={email}
              onChange={onChange}
            />
          </div>
          <div>
            <input
              type="text"
              name="mobile"
              placeholder="Mobile Number"
              defaultValue={mobile}
              onChange={onChange}
            />
          </div>
        </form>
        <p>{error}</p>
      </div>
    </>
  );
};

export default ContactDetails;
