import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LandingPage from "./Pages/LandingPage";
import AdminPage from './Pages/AdminPage';
import LoginPage from './Pages/LoginPage';


function App() {
  return (
    <div>
      <>
      
      <BrowserRouter>
        <Routes>
            <Route path='/' element={<LandingPage/>} />
            <Route path='/admin' element={<AdminPage/>} />
            <Route path='/login' element={<LoginPage/>} />
        </Routes>      
      </BrowserRouter>

      </>

      
    </div>
  );
}

export default App;
