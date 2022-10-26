import React, {useState} from 'react'
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


const App = () => {

  const [isLoggedIn, setIsLoggedIn] = useState( false );

  const contextValue = {
    isLoggedIn,
    toggleIsLoggedIn: () => setIsLoggedIn( value => !value )
  };

	return (
  <UserContext.Provider value={contextValue}>
    <Router>
        <Routes>
            {/* <Route path='/' element={<Login />} /> */}

            {/* Anche nel caso del routing, occorre riutilizzare:
            in questo caso un unico componente genitore 'Layout'
            é usato come base per mostrare tutte le views (pagine)
            figlie. La magia sta nel componente 'Outlet' (vedi Layout.js) */}
            <Route exact path='/' element={<Layout />}>
              <Route path='/' element={<Dashboard />} />
              <Route path='calculator' element={<Calculator />} />
            </Route>
            <Route path='/login' element={<Login />} />
            <Route path="*" element={<div>Page Not Found</div>} />
        </Routes>
    </Router>
    </UserContext.Provider>
  );
};


export default App
