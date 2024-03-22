// SignUpForm.js
import React, { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { auth, db } from "../../../Services/FirebaseServises/FirebaseConfig";

const SignUpForm = ({ toggleTurn }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setlastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [studentId, setStudentId] = useState("");
  const [phoneNo, setPhoneNo] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Create user with email and password
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      // Access the user object
      const user = userCredential.user;

      // Set user data in Firestore
      await setDoc(doc(db, "users", user.uid), {
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: password,
        studentId: studentId,
        phoneNo: phoneNo,
      });

      // Redirect to homepage after successful signup
      // You can use any method for navigation here, for example, React Router
      // navigate(`/Homepage`);

      // Clear form fields after successful signup
      setFirstName("");
      setlastName("");
      setEmail("");
      setPassword("");
      setStudentId("");
      setPhoneNo("");
    } catch (error) {
      console.error("Error signing up:", error.message);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-80">
      <input type="text" placeholder="First Name" value={firstName} onChange={(e) => setFirstName(e.target.value)} className="input-field" />
      <input type="text" placeholder="Last Name" value={lastName} onChange={(e) => setlastName(e.target.value)} className="input-field" />
      <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} className="input-field" />
      <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} className="input-field" />
      <input type="text" placeholder="Student ID" value={studentId} onChange={(e) => setStudentId(e.target.value)} className="input-field" />
      <input type="text" placeholder="Phone No" value={phoneNo} onChange={(e) => setPhoneNo(e.target.value)} className="input-field" />
      <button className="bg-blue-400 my-5 px-4 py-1 w-full" type="submit">
        REGISTER
      </button>
      <p
        className="mt-2 text-sm text-gray-400 cursor-pointer"
        onClick={toggleTurn}
      >
        Already have an account? Sign in
      </p>
    </form>
  );
};

export default SignUpForm;
