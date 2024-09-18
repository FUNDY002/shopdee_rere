import './App.css';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import Dashboard from './components/Dashboard';
import LoginAdmin from './components/LoginAdmin';
import AddEmployee from './components/AddEmployee';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path='/addEmployee' element={<AddEmployee/>} />
        <Route exact path='/loginAdmin' element={<LoginAdmin/>} />
        <Route exact path='/dashboard' element={<Dashboard/>} />
        <Route exact path='/signin' element={<SignIn/>} />
        <Route exact path='/signup' element={<SignUp/>}/>
      </Routes>
    </Router>
  );
}

export default App;
