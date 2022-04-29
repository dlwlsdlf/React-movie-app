import Button from "./Button";
import styles from "./App.module.css";
import { useState, useEffect } from "react";

function App() {
  const [counter, setValue] = useState(0);
  const Onclick= ()=> {
    setValue((current) => current+1 )
  };
  console.log("i run all the time");
  const iRunOnlyOnce = ()=>{
    console.log("i run only once");
  }
  useEffect(()=>{
    console.log("call the api....");
  },[]);

  return (
    <div>
      <h1>{counter}</h1>
      <button onClick={Onclick}>Click me</button>
    </div>
  );
};

export default App;
