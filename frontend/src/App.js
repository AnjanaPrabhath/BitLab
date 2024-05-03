import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from "./Pages/LandingPage";
import AdminPage from "./Pages/AdminPage";
import LoginPage from "./Pages/LoginPage";
import AcademicPeriod from "./Pages/AcademicPeriod";
import LearningPortal from "./Pages/sandani/LearningPortal";
import LabSheet from "./Pages/sandani/LabSheet";
import StudentDetails from "./Pages/StudentDetails";
import EditPersonalDetails from "./Pages/EditPersonalDetails";
import SessionPassword from "./Pages/SessionPassword";
import SignUpPage from "./Pages/bhagya/SignUp/SignUpPage";
import EditStudentForm from "./Pages/bhagya/SignUp/EditStudentForm";
import CompilerSPage from "./Pages/sandani/Compiler/CompilerSPage";
import TestSessionsPage from "./Pages/bhagya/Sessions/TestSessionsPage";
import ViewSessionPage from "./Pages/bhagya/Sessions/ViewSessionPage";

function App() {
  return (
    <div>
      <>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/admin" element={<AdminPage />} />
            <Route path="/admin/academic_period" element={<AcademicPeriod />} />
            <Route
              path="/admin/sandani/learning_portal"
              element={<LearningPortal />}
            />
            <Route
              path="/student/student_details"
              element={<StudentDetails />}
            />
            <Route
              path="/admin/edit_personal_details"
              element={<EditPersonalDetails />}
            />
            <Route
              path="/admin/session_password"
              element={<SessionPassword />}
            />
            <Route path="/admin/sandani/lab_sheet" element={<LabSheet />} />
            <Route path="/SignUp/sign_up_page" element={<SignUpPage />} />
            <Route
              path="/student/SignUp/edit_student_form"
              element={<EditStudentForm />}
            />
            <Route
              path="/student/viewOneSessions"
              element={<ViewSessionPage />}
            />

            <Route path="/student/sessions" element={<TestSessionsPage />} />
          </Routes>
        </BrowserRouter>
      </>
    </div>
  );
}

export default App;
