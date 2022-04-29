import { useState, useEffect } from "react";



function App() {

  const [loding, setLoding] = useState(true);
  const [coins, setCoins] = useState([]);

  const [amount, setAmount] = useState(1);
  const [selectCoin,setSelectCoin] = useState(1);


  const onSelect = (eve)=>{
    setSelectCoin(eve.target.value)
    console.log(eve.target.value)
  }
  const onChange =(event)=>{
    if(amount == ""){
      setAmount(1)
    }
    setAmount(event.target.value)
  }
  
  useEffect(()=>{
    fetch("https://api.coinpaprika.com/v1/tickers")
    .then((Response)=>Response.json())
    .then((json) => {
      setCoins(json)
      setLoding(false)
    });
  },[]);

  return (
    <div>
      <h1>The coins!! ({coins.length})</h1>
      {loding ? <strong>Loding...</strong>: 
      <select onChange={onSelect}>
        {coins.map((coin)=>
        <option value={coin.quotes.USD.price}>
          {coin.name} ({coin.symbol}):${(coin.quotes.USD.price)} USD
        </option>)}
      </select>}
      <div>
      <label>Dollor : </label>
      <input onChange={onChange} value={amount} type="number" placeholder="you haved $"/>
      </div>
      <div>
      <label>you can get </label>
      <input value={(amount/selectCoin)}/>
      </div>
      
    </div>
    );
};

export default App;
 