import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  let [counter, SetCounter] = useState(1);

  // let counter = 15
  const addValue = () => {
   if(counter < 21){
    SetCounter(counter + 1);
   }
  };

  const RemoveValue = () => {
    if(counter > 0){
      SetCounter(counter - 1);
     }
  };

  return (
    <>
      <h1>hallo react</h1>
      <h2>counter Value {counter}</h2>

      <button onClick={addValue}> Add Value {counter}</button>
      <br />
      <button onClick={RemoveValue}>Remove Value {counter}</button>
    </>
  );
}

export default App;
