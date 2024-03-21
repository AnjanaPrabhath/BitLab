import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LandingPage from "./Pages/LandingPage";
import AdminPage from './Pages/AdminPage';
import LoginPage from './Pages/LoginPage';
import AcademicPeriod from './Pages/AcademicPeriod';
import LearningPortal from './Pages/sandani/LearningPortal';
import LabSheet from './Pages/sandani/LabSheet';

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
            <Route path='/admin/sandani/learning_portal' element={<LearningPortal/>} />
            <Route path='/admin/sandani/lab_sheet' element={<LabSheet/>} />
        </Routes>      
      </BrowserRouter>

      </>

      
    </div>
  );
}

export default App;
