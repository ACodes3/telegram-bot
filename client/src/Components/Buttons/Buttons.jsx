import React from "react";
import "./Buttons.css";
import StripeCheckout from "react-stripe-checkout";

function Buttons({ type, title, disable, onClick, product }) {
  const makePayment = (token) => {
    const body = {
      token,
      product,
    };
    const headers = {
      "Content-Type": "application/json",
    };

    return fetch(`https://telegram-bot-server-gamma.vercel.app/create-checkout-session`, {
      method: "POST",
      headers,
      body: JSON.stringify(body),
    })
      .then((response) => {
        console.log("RESPONSE", response);
        const { status } = response;
        console.log("STATUS", status);
      })
      .catch((error) => console.log(error));
  };

  return (
    <StripeCheckout
      stripeKey={process.env.REACT_APP_STRIPE_KEY}
      token={makePayment}
      name="Deposit"
      amount={product.amount * 100} // Convert to cents
      currency="EUR"
    >
      <button
        className={`btn ${type === "deposit" && "deposit"}`}
        disabled={disable}
        onClick={onClick}
      >
        {title}
      </button>
    </StripeCheckout>
  );
}

export default Buttons;
