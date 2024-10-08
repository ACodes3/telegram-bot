import React from "react";
import "./Cards.css";
import Buttons from "../Buttons/Buttons";
import { toast } from "react-toastify";

function Cards({ money }) {
  const { title, Image, amount } = money;

  // Displaying a toast notification with the success or failure message
  const handlePaymentSuccess = (message) => {
    toast(message);
  };

  return (
    <div className="card">
      <div className="image__container">
        <img src={Image} alt={title} />
      </div>
      <h4 className="card__title">
        {title}
        <span className="card__amount">{amount}</span>
      </h4>
      <div className="btn-container">
        <Buttons
          title={"Deposit"}
          type={"deposit"}
          product={money}
          onPaymentSuccess={handlePaymentSuccess}
        />
      </div>
    </div>
  );
}

export default Cards;
