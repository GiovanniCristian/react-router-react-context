import React from 'react'
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/login';
import Calculator from './components/calculator';
import Dashboard from './components/dashboard';
import Navbar from './components/navbar';


function App() {
  return (
<Router>
    
        <Login />

    <Routes>
        
        <Route path='/navbar' element={<Navbar />} />
        <Route exact path="/calculator" element={<Calculator />} />
        <Route exact path="/dashboard" element={<Dashboard />} />
    </Routes> 
</Router>
    )
}


export default App
