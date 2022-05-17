import React, { StrictMode, useState, useEffect } from "react";
import ReactDOM from "react-dom";
import './style.css';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom'
import Class from "./Class";
import RandomQuotes from "./randomUser/RandomQuotes";

const Calculator = () => {
  const [num, setNum] = useState('')
  const [num1, setNum1] = useState('')
  const [op, setOp] = useState('')
  const [currentInput, setCurrentInput] = useState(op)
  const [result, setResult] = useState('')

  const getBtnValue = (e) => {
    if (op === '') {
      setNum(prev =>prev + e.target.textContent)
    } else {
      setNum1((prev) => prev + e.target.textContent);
    }
    setCurrentInput(num + op + num1)
  }

  const deleteAll = ()=>{
    setCurrentInput('');
    setNum('');
    setNum1('')
    setOp('')
  }

  useEffect(()=>{
    setCurrentInput(num + op + num1);
  }, [num, op, num1])

  const getOp = (e) =>{
    setOp(e.target.textContent)
  }
  const getResult = () =>{
    switch (op) {
      case '/': setResult(parseInt(currentInput) / parseInt(num1))
        break;
      case '-': setResult(parseInt(currentInput) - parseInt(num1))
        break;
      case '+': setResult(parseInt(currentInput) + parseInt(num1))
        break;
      case 'X': setResult(parseInt(currentInput) * parseInt(num1))
        break;
    
      default: setResult('')
        break;
    }
  }
  //48-57 .=190or46
  //1=35, 0=45 2=40 3=34 4=37 5=12 6=39 7=36 38=8 33=9 ,=187
  function keyHandler(e) {

   /*  const arr = [ 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 190]

    if (arr.includes(e.keyCode) && op === "") {
      console.log("num");
      
      return setNum((prev) => prev + e.key);
    }else if(arr.includes(e.keyCode) && op !== ""){
      console.log('not num');
      setNum1((prev) => prev + e.key);
      return
    }else{
      console.log("not included");
    } */
    if (e.keyCode === 107) {
          setOp('+')
    } else if (e.keyCode === 109) {
          setOp('-');
    } else if (e.keyCode === 106) {
          setOp("*");
    } else if (e.keyCode === 111) {
          setOp("/");
    }else if(e.keyCode === 13){
      getResult();
    }
    console.log(e.keyCode);
  }
  document.addEventListener("keyup", keyHandler);
  const arr = Array.from(currentInput)
  console.log(arr);
  return (
    <div className="calc">
      <Link to='/class'>Go to Class Component Calculator</Link>
      <h2>Calculator</h2>
      <div className="cont">
        <div className="top">
          <div className="screen">
            <p className="res">{result}</p>
            <p className="inputs">{currentInput}</p>
          </div>
        </div>
        <div className="upbtns">
          <button onClick={deleteAll} className="btn">AC</button>
          <button onClick={deleteAll} className="btn">DEL</button>
        </div>
        <div className="mainbtns">
          <button onClick={getBtnValue} className="btn">7</button>
          <button onClick={getBtnValue} className="btn">8</button>
          <button onClick={getBtnValue} className="btn">9</button>
          <button onClick={getOp} className="btn">/</button>
          <button onClick={getBtnValue} className="btn">4</button>
          <button onClick={getBtnValue} className="btn">5</button>
          <button onClick={getBtnValue} className="btn">6</button>
          <button onClick={getOp} className="btn">X</button>
          <button onClick={getBtnValue} className="btn">1</button>
          <button onClick={getBtnValue} className="btn">2</button>
          <button onClick={getBtnValue} className="btn">3</button>
          <button onClick={getOp} className="btn">-</button>
          <button onClick={getBtnValue} className="btn">0</button>
          <button onClick={getBtnValue} className="btn">.</button>
          <button onClick={getResult} className="btn">=</button>
          <button onClick={getOp} className="btn">+</button>
        </div>
      </div>
    </div>
  );
};

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
         <Route path="/" element={<Calculator />}></Route>
         <Route path="/class" element={<Class />}></Route>
         <Route path="/randomuser" element={<RandomQuotes />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

ReactDOM.render(<StrictMode><App /></StrictMode> , document.getElementById("root"));
