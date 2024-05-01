import React, { useState, useEffect } from "react";
import { getDoc, updateDoc, doc } from "firebase/firestore";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Logo from "../../../Assets/Logo.png";
import { auth, db } from "../../../Services/FirebaseServises/FirebaseConfig";
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';

const EditStudentForm = () => {
  const [userData, setUserData] = useState(null);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [studentId, setStudentId] = useState("");
  const [phoneNo, setPhoneNo] = useState("");
  const [phoneNoError, setPhoneNoError] = useState(""); // Define phoneNoError state

  const navigate = useNavigate();

  const userId = auth.currentUser?.uid; // Use optional chaining to safely access uid

  useEffect(() => {
    if (userId) {
      const getUserData = async () => {
        try {
          const docRef = doc(db, "users", userId);
          const docSnap = await getDoc(docRef);
          if (docSnap.exists()) {
            setUserData(docSnap.data());
            setFirstName(docSnap.data().firstName || "");
            setLastName(docSnap.data().lastName || "");
            setEmail(docSnap.data().email || "");
            setPassword(docSnap.data().password || "");
            setStudentId(docSnap.data().studentId || "");
            setPhoneNo(docSnap.data().phoneNo || "");
          } else {
            console.log('No such document!');
          }
        } catch (error) {
          console.error('Error getting document:', error);
        }
      };
  
      getUserData();
    }
  }, [userId]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate phone number
    if (phoneNo.length != 10) {
      setPhoneNoError("Phone number must 10 characters.");
      return;
    } else {
      setPhoneNoError("");
    }

    try {
      const userRef = doc(db, "users", userId);
      await updateDoc(userRef, {
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: password,
        studentId: studentId,
        phoneNo: phoneNo
      });
      toast.success("User details updated successfully!", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });

      navigate('/admin/student_details')
    } catch (error) {
      console.error("Error updating document: ", error);
    }
  };

  return (
    <div className="flex w-full h-screen">
      <div className="w-full flex items-center justify-center lg:w-1/2 bg-black">
        <h1 className="text-3xl font-medium text-center">
          Edit Student Details
        </h1>
        <form className="max-w-md mx-auto mt-8" onSubmit={handleSubmit}>
          <div>
            <div className="mb-4">
              <input
                type="text"
                placeholder="First Name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                className="bg-[#1f1f1f] placeholder-slate-400 text-[#d0d0d0]  rounded-md px-2 py-2 my-2 border-blue-400 w-full"
              />
            </div>
            <div className="mb-4">
              <input
                type="text"
                placeholder="Last Name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                className="bg-[#1f1f1f] placeholder-slate-400 text-[#d0d0d0]  rounded-md px-2 py-2 my-2 border-blue-400 w-full"
              />
            </div>
            <div className="mb-4">
              <input
                type="email"
                placeholder="Email"
                readOnly
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-[#1f1f1f] placeholder-slate-400 text-[#d0d0d0]  rounded-md px-2 py-2 my-2 border-blue-400 w-full"
              />
            </div>
            <div className="mb-4">
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="bg-[#1f1f1f] placeholder-slate-400 text-[#d0d0d0]  rounded-md px-2 py-2 my-2 border-blue-400 w-full"
              />
            </div>
            <div className="mb-4">
              <input
                type="text"
                placeholder="Student ID"
                readOnly
                value={studentId}
                onChange={(e) => setStudentId(e.target.value)}
                className="bg-[#1f1f1f] placeholder-slate-400 text-[#d0d0d0]  rounded-md px-2 py-2 my-2 border-blue-400 w-full"
              />
            </div>
            <div className="mb-4">
              <input
                type="number"
                placeholder="Phone Number"
                value={phoneNo}
                onChange={(e) => setPhoneNo(e.target.value)}
                className="bg-[#1f1f1f] placeholder-slate-400 text-[#d0d0d0]  rounded-md px-2 py-2 my-2 border-blue-400 w-full"
              />
              {phoneNoError && <p className="text-red-500">{phoneNoError}</p>}
            </div>
            <button type="submit" className="bg-[#06C6D5] text-white py-2 px-4 w-full rounded-md">
              UPDATE
            </button>
          </div>
        </form>
      </div>
      <div className="hidden lg:flex h-full w-1/2 items-center justify-center bg-black">
        <img src={Logo} className="w-[500px] animate-pulse" alt="" />
      </div>
      <ToastContainer />
    </div>
  );
};

export default EditStudentForm;
