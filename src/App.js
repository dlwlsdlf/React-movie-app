import Button from "./Button";
import styles from "./App.module.css";
import { useState, useEffect } from "react";

function App() {
  const [keyword, setKeyword] = useState("");
  const [counter, setValue] = useState(0);
  const Onclick= ()=> { setValue((current) => current+1 )};
  const onChange = (event)=>{
    setKeyword(event.target.value);
  };
  
  useEffect(()=>{
    console.log("i run only once");
  },[]);

  useEffect(()=>{
    console.log("i run 'counter' changes ")
  },[counter]);


  useEffect(() => {
    console.log("i run when 'keyword' changes")
  },[keyword]);

  return (
    <div>
      <input value={keyword} onChange={onChange} type="text" placeholder="Search here..."/>
      <h1>{counter}</h1>
      <button onClick={Onclick}>Click me</button>
    </div>
  );
};

export default App;
