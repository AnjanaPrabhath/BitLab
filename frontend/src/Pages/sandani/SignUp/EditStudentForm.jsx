import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom"; // Import useParams to get student ID from URL parameters
import { getDoc, updateDoc, doc } from "firebase/firestore";
import Logo from "../../../Assets/Logo.png";
import { auth, db } from "../../../Services/FirebaseServises/FirebaseConfig";

const EditStudentForm = () => {
  const { studentId } = useParams(); // Get student ID from URL parameters
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phoneNo, setPhoneNo] = useState("");

  useEffect(() => {
    // Fetch student details from Firebase using student ID
    const fetchStudentDetails = async () => {
      try {
        const docRef = doc(db, "users", studentId);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          const data = docSnap.data();
          setFirstName(data.firstName || "");
          setLastName(data.lastName || "");
          setEmail(data.email || "");
          // Exclude password field from being updated
          setPhoneNo(data.phoneNo || "");
        } else {
          console.log("No such document!");
        }
      } catch (error) {
        console.error("Error fetching student details:", error.message);
      }
    };

    fetchStudentDetails();
  }, [studentId]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Update student details in Firebase
      await updateDoc(doc(db, "users", studentId), {
        firstName,
        lastName,
        email,
        phoneNo,
      });
      console.log("Student details updated successfully!");
      // Redirect to another page after successful update
      // Replace "/homepage" with the desired URL
      window.location.href = "/homepage";
    } catch (error) {
      console.error("Error updating student details:", error.message);
    }
  };

  return (
    <div className="flex w-full h-screen">
      <div className="w-full flex items-center justify-center lg:w-1/2 bg-black">
        <h1 className="text-3xl font-medium text-center">
          Edit Student Details
        </h1>
        <form onSubmit={handleSubmit} className="max-w-md mx-auto mt-8">
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
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-[#1f1f1f] placeholder-slate-400 text-[#d0d0d0]  rounded-md px-2 py-2 my-2 border-blue-400 w-full"
              />
            </div>
            <div className="mb-4">
              <input
                type="text"
                placeholder="Phone No"
                value={phoneNo}
                onChange={(e) => setPhoneNo(e.target.value)}
                className="bg-[#1f1f1f] placeholder-slate-400 text-[#d0d0d0]  rounded-md px-2 py-2 my-2 border-blue-400 w-full"
              />
            </div>
            <button className="bg-blue-500 text-white py-2 px-4 w-full rounded-md">
              UPDATE
            </button>
          </div>
        </form>
      </div>
      <div className="hidden lg:flex h-full w-1/2 items-center justify-center bg-black">
        <img src={Logo} className="w-[500px] animate-pulse" alt="" />
      </div>
    </div>
  );
};

export default EditStudentForm;
