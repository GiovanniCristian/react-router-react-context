import React, { useState } from 'react';
import "./calculator.css";
import Navbar from './navbar';

function Calculator() {
  const [ firstNum, setFirstNum ] = useState( 0 );
  const [secondNum, setSecondNum ] = useState( 0 );
  const [result, setResult ] = useState( 0 );

  function add(){
    let operation = firstNum + secondNum;
    console.log(operation);
    let result = setResult(operation);
      return result;
  }

  function min(){
    let operation = firstNum - secondNum;
    console.log(operation);
    let result = setResult(operation);
      return result;
  }

  function mult(){
    let operation = firstNum * secondNum;
    console.log(operation);
    let result = setResult(operation);
      return result;
  }

  function divi(){
    let operation = firstNum / secondNum;
    console.log(operation);
    let result = setResult(operation);
      return result;
  }

  return (
    <>
    <Navbar />
    
        <div className='calc-div'>
            <input
              value={firstNum}
              type="number"
              id='num1'
              onChange={( event ) => setFirstNum( +event.target.value ) }
            />
           <div className='operators'>
            <button className='btn-operator' onClick={add}>+</button>
            <button className='btn-operator' onClick={min}>-</button>
            <button className='btn-operator' onClick={mult}>*</button>
            <button className='btn-operator' onClick={divi}>/</button>
           </div>
            <input
            value={secondNum}
            type="number"
            id='num2'
            onChange={( event ) => setSecondNum( +event.target.value ) }
            />
        </div>
        <div className='btn-div'>
            <input type='text' id='result' value={result} readOnly/>
        </div>
    </>
  );
}

export default Calculator