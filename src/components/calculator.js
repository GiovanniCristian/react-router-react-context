import React from 'react';
import "./calculator.css";

function Calculator() {

    window.addEventListener("DOMContentLoaded", function(){

        var num1 = document.getElementById("num1");
        var num2 = document.getElementById("num2");
        var select = document.getElementById("operation");
        var result = document.getElementById("result");
        var btn = document.getElementById("button");
    
        btn.addEventListener("click", Count);
        select.addEventListener("change", Count);

    function Count(){
        var answer = null;
        var n1 = (num1.value);
        var n2 = (num2.value);

        switch (select.value){
            case "+":
              answer = n1 + n2;
              break;
            case "-":
              answer = n1 - n2;
              break;
            case "*":
              answer = n1 * n2;
              break;
            case "/":
              answer = n1 / n2;
              break;
        default:
        } result.value = answer;
    }
    });

  return (
<>
    <div className='calc-div'>
        <input type="number" id='num1'/>
        <select id='operation'>
            <option>+</option>
            <option>-</option>
            <option>*</option>
            <option>/</option>
        </select>
        <input type="number" id='num2'/>
    </div>
    <div className='btn-div'>
        <input id="button" type="button" value="=" />
    </div>
    <div className='btn-div'>
        <input id='result'/>
    </div>
</>
  )
}

export default Calculator