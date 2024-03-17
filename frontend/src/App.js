import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LandingPage from "./Pages/LandingPage";
import AdminPage from './Pages/AdminPage';
import LoginPage from './Pages/LoginPage';
import AcademicPeriod from './Pages/AcademicPeriod';


function App() {
  return (
    <div>
      <>
      
      <BrowserRouter>
        <Routes>
            <Route path='/' element={<LandingPage/>} />
            <Route path='/login' element={<LoginPage/>} />
            <Route path='/admin' element={<AdminPage/>} />
            <Route path='/admin/academic_period' element={<AcademicPeriod/>} />
        </Routes>      
      </BrowserRouter>

      </>

      
    </div>
  );
}

export default App;
