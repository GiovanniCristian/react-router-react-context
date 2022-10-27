import React, { useState } from 'react';
import "./calculator.css";

function Calculator() {
  const [ firstNum, setFirstNum ] = useState( 0 );
  const [ secondNum, setSecondNum ] = useState( 0 );

  // Siccome 'result' deve essere disponibile anche al componente
  // 'Dashboard' occorre che 'result' sia una variabile di stato globale
  // all'applicazione, non una variabile di stato locale al componente Calculator.
  // Quindi è necessario usare il concetto React di Context:
  // https://reactjs.org/docs/context.html
  const [result, setResult ] = useState( 0 );

  // function add(){
  //   let operation = firstNum + secondNum;
  //   console.log(operation);
  //   let result = setResult(operation);
  //     return result;
  // }

  // function min(){
  //   let operation = firstNum - secondNum;
  //   console.log(operation);
  //   let result = setResult(operation);
  //     return result;
  // }

  // function mult(){
  //   let operation = firstNum * secondNum;
  //   console.log(operation);
  //   let result = setResult(operation);
  //     return result;
  // }

  // function divi(){
  //   let operation = firstNum / secondNum;
  //   console.log(operation);
  //   let result = setResult(operation);
  //     return result;
  // }

  // Quando noti che è presente ripetizione nel codice 
  // ( ogni funzione è praticamente identica all'altra, cambia solo l'operazione)
  // è il momento di passare al refactoring del codice:
  const computeResult = ( operator ) => {
    let newResult = 0;

    switch ( operator ) {
      case '+':
        newResult = firstNum + secondNum;
        break;

      case '-':
        newResult = firstNum - secondNum;
        break;

      case '*':
        newResult = firstNum * secondNum;
        break;

      case '/':
        newResult = firstNum / secondNum;
        break;

      default:
        break;
    }

    // Qui occorrerebbe aggiornare il Context dell'applicazione (vedi sopra).
    
    setResult( newResult );
    
  };

  return (
    <>
    {/* // La Navbar ora è presente in tutte le pagine. Vedi Layout.js
    <Navbar /> */}
    
        <div className='calc-div'>
            <input
              value={firstNum}
              type="number"
              id='num1'
              // Con la + intendi un type casting? Allora meglio esplicitarlo
              // passando la variabile al metodo statico Number().
              // onChange={( event ) => setFirstNum( +event.target.value ) }
              onChange={( event ) => setFirstNum( Number( event.target.value ) ) }
            />
           <div className='operators'>
            {/* In questo modo il codice è più facilmente mantenibile. */}
            {['+', '-', '*', '/'].map(( operation, idx ) => (
              <button
                key={idx}
                className='btn-operator'
                onClick={() => computeResult( operation )}
              >
                {operation}
              </button>
            ))}
           </div>
            <input
            value={secondNum}
            type="number"
            id='num2'
            // Come sopra.
            // onChange={( event ) => setSecondNum( +event.target.value ) }
            onChange={( event ) => setSecondNum( Number( event.target.value ) ) }
            />
        </div>
        <div className='btn-div'>
            <input type='text' id='result' value={result} readOnly/>
        </div>
    </>
  );
}

export default Calculator