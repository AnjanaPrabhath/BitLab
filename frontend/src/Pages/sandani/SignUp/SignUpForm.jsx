import React, { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { auth, db } from "../../../Services/FirebaseServises/FirebaseConfig";

const SignUpForm = ({ toggleTurn }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [studentId, setStudentId] = useState("");
  const [phoneNo, setPhoneNo] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      const user = userCredential.user;

      await setDoc(doc(db, "users", user.uid), {
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: password,
        studentId: studentId,
        phoneNo: phoneNo,
      });

      setFirstName("");
      setLastName("");
      setEmail("");
      setPassword("");
      setStudentId("");
      setPhoneNo("");

    } catch (error) {
      console.error("Error signing up:", error.message);
    }
  };

  return (
    <div className="text-white">
      <h1 className="text-3xl font-medium text-center">Register to BitLab</h1>
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
              value={studentId}
              onChange={(e) => setStudentId(e.target.value)}
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
            REGISTER
          </button>
          <p
            className="mt-4 text-sm text-gray-600 text-center cursor-pointer"
            onClick={toggleTurn}
          >
            Already have an account? Sign in
          </p>
        </div>
      </form>
    </div>
  );
};

export default SignUpForm;