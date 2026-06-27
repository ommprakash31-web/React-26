import React, { useState } from "react";
import Card from "./components/Card.jsx";
import "./App.jsx";
const App = () => {
  const [count, setCount] = useState(0);
  // let count = 0;
  function increaseCount(){
    // count++;
    // console.log(count);
    setCount(count+1);
  }
  

  return (
    <>
     <h1>React Components</h1>
    <div className="container">      
      <Card count={count} increaseCount = {increaseCount}/>
      <Card count={count} increaseCount = {increaseCount}/>
      <Card count={count} increaseCount = {increaseCount}/>
      <Card count={count} increaseCount = {increaseCount}/>
      <Card count={count} increaseCount = {increaseCount}/>
      <Card count={count} increaseCount = {increaseCount}/>     
      {/* compnents rendered here */}     
    </div>
     </>
  );
};

export default App;
