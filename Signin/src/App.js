import './App.css';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import Dashboard from './components/Dashboard';
import LoginAdmin from './components/LoginAdmin';
import AddEmployee from './components/AddEmployee';
import EmpManagement from './components/EmpManagement';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>

        <Route exact path='/addEmployee' element={<AddEmployee/>} />
        <Route exact path='/loginAdmin' element={<LoginAdmin/>} />
        <Route exact path='/dashboard' element={<Dashboard/>} />
        <Route exact path='/singin' element={<SignIn/>} />
        <Route exact path='/singup' element={<SignUp/>}/>
        <Route exact path='/empManagement' element={<EmpManagement/>}/>
      </Routes>
    </Router>
  );
}

export default App;
