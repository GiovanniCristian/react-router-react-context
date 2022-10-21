import React from 'react'
import './App.css';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import Calculator from './components/calculator';
import Dashboard from './components/dashboard';


function App() {
  return (
<>
    {/* Login prima di visualizzare la nav e i componenti */}

    <Router>
        
        <ul>
            <li>
                <Link to="/calculator" className='calc-link'>Calculator</Link>
            </li>
            <li>
                <Link to="/dashboard" className='dash-link'>Dashboard</Link>
            </li>
        </ul>
        <Routes>
            <Route exact path="/calculator" element={<Calculator />} />
            <Route exact path="/dashboard" element={<Dashboard />} />
        </Routes>
        
    </Router>
</>
    )
}


export default App
