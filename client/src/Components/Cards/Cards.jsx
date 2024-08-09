import React from "react";
import "./Cards.css";
import Buttons from "../Buttons/Buttons";

function Cards({ money }) { // Rename prop from money to product if preferred
  const { title, Image, amount } = money;

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
          product={money} // Pass the entire product object
        />
      </div>
    </div>
  );
}

export default Cards;
