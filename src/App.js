import Styles from "./Styles.css"
import { useState } from 'react'


function App() {

  const [result , setResult]=useState("")

  const updateCalc = (value) => {
    setResult(result + value)
  }

  const clearResult =()=>{
    setResult("")
  }

  const delResult = ()=>{
    setResult(result.slice(0,-1))
  }

  const finalResult =()=>{
    setResult(eval(result))
  }

  return (
    <div className="calculator">
    
        <div className="calculator__box">

          <div className="calculator__box__row output">
            {result}
          </div>

          <div className="calculator__box__row">
            <button onClick={clearResult} className=" double-col">AC</button>
            <button onClick={delResult}>DEL</button>
            <button onClick={()=>updateCalc("/")}>/</button>
          </div>
          
          <div className="calculator__box__row">
            <button onClick={()=>updateCalc("1")}>1</button>
            <button onClick={()=>updateCalc("2")}>2</button>
            <button onClick={()=>updateCalc("3")}>3</button>
            <button onClick={()=>updateCalc("*")}>*</button>
          </div>

          <div className="calculator__box__row">
            <button onClick={()=>updateCalc("4")}>4</button>
            <button onClick={()=>updateCalc("5")}>5</button>
            <button onClick={()=>updateCalc("6")}>6</button>
            <button onClick={()=>updateCalc("+")}>+</button>
          </div>

          <div className="calculator__box__row">
            <button onClick={()=>updateCalc("7")}>7</button>
            <button onClick={()=>updateCalc("8")}>8</button>
            <button onClick={()=>updateCalc("9")}>9</button>
            <button onClick={()=>updateCalc("-")}>-</button>
          </div>

          <div className="calculator__box__row">
            <button onClick={()=>updateCalc(".")}>.</button>
            <button onClick={()=>updateCalc("0")}>0</button>
            <button onClick={finalResult} className="double-col">=</button>
          </div>
          
          
        </div>
      
    </div>
  );
}

export default App;
