import React, { useState, useEffect } from "react";
import './App.css';
import Cards from './Components/Cards/Cards';
import { getData } from "./db/db";

const tele = window.Telegram.WebApp;

function App() {
  const [products, setProducts] = useState([]);


  useEffect(() => {
    // Fetch data and update state
    const data = getData();
    setProducts(data);
  }, []);

  useEffect(() =>{
    tele.ready();
  })

  return (
    <div>
      <h1 className='heading'>Deposit Money</h1>
      <div className='cards__container'>
        {products.map((product) => (
          <Cards key={product.amount} money={product} />
        ))}
      </div>
    </div>
  );
}

export default App;
