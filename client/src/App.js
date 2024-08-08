import { useEffect } from 'react';
import './App.css';
import Cards from './Components/Cards/Cards';
const { getData } = require("./db/db");

const tele = window.Telegram.WebApp;

const money = getData();

function App() {

  useEffect(()=>{
    tele.ready();
  })

  return (
    <div>
      <h1 className='heading'>Deposit Money</h1>
      <div className='cards__container'>
        {money.map((money) => (
          <Cards money={money} key={money.id} />
        ))}
      </div>

    </div>
  );
}

export default App;
