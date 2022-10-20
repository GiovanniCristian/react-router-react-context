import React from 'react'
import './App.css';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import Calculator from './components/calculator';
import Home from './components/home';


function App() {
  return (
    <Router>
    <ul>
        <li>
            <Link to="/" className='home-link'>Home</Link>
        </li>
        <li>
            <Link to="/calculator" className='calc-link'>Calculator</Link>
        </li>
    </ul>
    <Routes>
        <Route path="/" element={<Home />} />
        <Route exact path="/calculator" element={<Calculator />} />
    </Routes>
    
    </Router>
    )
}


export default App
