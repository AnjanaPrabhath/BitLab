import React, { useState, useEffect } from "react";
import { getDoc, doc } from "firebase/firestore";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Logo from "../Assets/Logo.png";
import { auth, db } from "../Services/FirebaseServises/FirebaseConfig";
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';

const EditStudentForm = () => {
  const [userData, setUserData] = useState(null);
  const [error, setError] = useState(null);

  const userId = auth.currentUser?.uid;

  const navigate = useNavigate();

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const docRef = doc(db, "users", userId);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          const userData = docSnap.data();
          setUserData(userData);
        } else {
          console.log("No such document!");
        }
        
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    if (userId) {
      fetchUserData();
    }
  }, [userId]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      navigate('/student/SignUp/edit_student_form')
    } catch (error) {
      console.error("Error updating document:", error);
      setError("Failed to update user details. Please try again.");
    }
  };

  return (
    <div className="flex w-full h-screen">
      <div className="w-full flex items-center justify-center lg:w-1/2 bg-black">
        <div className="max-w-md mx-auto mt-8">
          <h1 className="text-3xl font-medium text-center">
            Edit Student Details
          </h1>
          <div className="mt-8">
            {userData && (
              <div className="flex flex-col gap-4">
                <div>
                  <label className="text-gray-400 ">First Name:</label>
                  <p className="text-white">{userData.firstName}</p>
                </div>
                <div>
                  <label className="text-gray-400">Last Name:</label>
                  <p className="text-white">{userData.lastName}</p>
                </div>
                <div>
                  <label className="text-gray-400">Email:</label>
                  <p className="text-white">{userData.email}</p>
                </div>
                <div>
                  <label className="text-gray-400">Student ID:</label>
                  <p className="text-white">{userData.studentId}</p>
                </div>
                <div>
                  <label className="text-gray-400">Phone Number:</label>
                  <p className="text-white">{userData.phoneNo}</p>
                </div>
              </div>
            )}
            {error && <p className="text-red-500">{error}</p>}
            <Link to ="/admin">
            <button
              type="submit"
              className="bg-[#06C6D5] text-white py-2 px-4 w-full rounded-md mt-8"
              onClick={handleSubmit}
            >
              EditProfile
            </button>
            </Link>
            
          </div>
        </div>
      </div>
      <div className="hidden lg:flex h-full w-1/2 items-center justify-center bg-black">
        <img src={Logo} className="w-[500px] animate-pulse" alt="" />
      </div>
      <ToastContainer />
    </div>
  );
};

export default EditStudentForm;
