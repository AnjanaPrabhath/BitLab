import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LandingPage from "./Pages/LandingPage";
import AdminPage from './Pages/AdminPage';
import LoginPage from './Pages/LoginPage';
import AcademicPeriod from './Pages/AcademicPeriod';
import LearningPortal from './Pages/sandani/LearningPortal';
import LabSheet from './Pages/sandani/LabSheet';
import StudentDetails from './Pages/StudentDetails';
import LearningPortal from './Pages/LearningPortal';
import EditPersonalDetails from './Pages/EditPersonalDetails';
import SessionPassword from './Pages/SessionPassword'


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
            <Route path='/admin/student_details' element={<StudentDetails/>} />
            <Route path='/admin/learning_portal' element={<LearningPortal/>} />
            <Route path='/admin/edit_personal_details' element={<EditPersonalDetails/>} />
            <Route path='/admin/session_password' element={<SessionPassword/>} />
        </Routes>      
      </BrowserRouter>

      </>

      
    </div>
  );
}

export default App;
