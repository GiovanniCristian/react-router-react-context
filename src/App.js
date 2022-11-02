import React, { useState } from 'react'
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import Login from './components/login';
import Calculator from './components/calculator';
import Dashboard from './components/dashboard';
import Layout from './components/Layout';
import { UserContext } from './contexts/user';
import { ResultsContext } from './contexts/results';


const App = () => {
  const [ isLoggedIn, setIsLoggedIn ] = useState( false );

  // Ricordati di passare sempre un valore di default a useState()
  // La dashboard da come ho capito deve poter visualizzare un array
  // di risultati, quindi ho rinominato 'result' come 'results'
  // const [results, setResult] = useState();
  const [ results, setResults ] = useState( [] );

  const contextValue = {
    isLoggedIn,
    toggleIsLoggedIn: () => setIsLoggedIn( value => !value )
  };

  const resultsContextValue = {
    // setResults() è una funzione che non restituisce valore.
    // result: ()=> setResult.push(result)
    pushResult: ( result ) => setResults( results => {
      // Lo stato corrente, se è un oggetto o array,
      // non va modificato direttamente, ma deve essere prima
      // clonato, quello che segue è uno dei possibili modi.
      // Ma ricorda che questa tecnica (array expansion)
      // rende solo una shallow copy di un array/oggetto.
      let newResults = [ ...results ];

      newResults.push( result );

      return newResults;

      // Quanto sopra può essere riscritto anche così:
      // return [ ...results, result ];
    }),

    getLatestResult: () => results[results.length - 1],

    // Oltre alla funzione pushResult() che serve al Calculator,
    // la Dashboard deve poter accedere ai risultati, quindi
    // dobbiamo memorizzare nel context anche l'array 'results'
    results
  };

	return (
    <UserContext.Provider value={contextValue}>
      <ResultsContext.Provider value={resultsContextValue}>
    <Router>
        <Routes>
            {/* <Route path='/' element={<Login />} /> */}

            {/* Anche nel caso del routing, occorre riutilizzare:
            in questo caso un unico componente genitore 'Layout'
            é usato come base per mostrare tutte le views (pagine)
            figlie. La magia sta nel componente 'Outlet' (vedi Layout.js) */}
            <Route exact path='/' element={<Layout />}>
              <Route path='/' element={<Calculator />} />
              <Route path='dashboard' element={<Dashboard />} />
            </Route>
            <Route path='/login' element={<Login />} />
            <Route path="*" element={<div>Page Not Fount</div>} />
        </Routes>
    </Router>
      </ResultsContext.Provider>
    </UserContext.Provider>
  );
};


export default App
