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
  const [result, setResult] = useState();
  const contextValue = {
    isLoggedIn,
    toggleIsLoggedIn: () => setIsLoggedIn( value => !value )
  };

  const resultsContextValue = {
    result: ()=> setResult.push(result)
  }

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
