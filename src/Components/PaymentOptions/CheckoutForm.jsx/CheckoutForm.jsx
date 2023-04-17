/* eslint-disable multiline-ternary */
/* eslint-disable react/prop-types */
/* eslint-disable comma-dangle */
/* eslint-disable quotes */
/* eslint-disable no-unused-vars */
/* eslint-disable semi */
/* eslint-disable react/react-in-jsx-scope */

import axios from "axios";
import { useNavigate } from "react-router-dom";
import StripeCheckout from "react-stripe-checkout";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const CheckoutForm = (props) => {
  const mySwal = withReactContent(Swal)
  const publishableKey =
    "pk_test_51MxXOGG0f4ZBB4gD9HCm09daLZXs0cBCWf1r95vY9vQbzlh1jSwRNY21dHnjkoVRgc2GPpuyiyMfG7wgp0gZ75k200SiisV9HB";
  const priceForStripe = props.price * 100;

  const nav = useNavigate();

  const payNow = async (token) => {
    try {
      const res = await axios({
        url: "https://stripe-backend-yvxy.onrender.com/create-checkout-session",
        method: "post",
        data: {
          amount: 1,
          token,
        },
      });
      if (res.status === 200) {
        console.log("payment was successful");
        mySwal.fire({
          title: "Success!",
          text: "Reservation Successful",
          icon: "success",
        });
        nav("/thank-you");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div style={{ width: "100%" }}>
        <StripeCheckout
          stripeKey={publishableKey}
          label="Checkout With Credit Card"
          name="Pay With Credit Card"
          amount={priceForStripe}
          description={`Your Total is ${props.price}`}
          token={payNow}
        />
      </div>
    </>
  );
};

export default CheckoutForm;
