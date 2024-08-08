import React from "react";
import "./Buttons.css";

function Buttons({ type, title, disable, onClick }) {
  return (
    <button
      className={`btn ${type === "deposit" && "deposit"} `}
      disabled={disable}
      onClick={onClick}
    >
      {title}
    </button>
  );
}

export default Buttons;
