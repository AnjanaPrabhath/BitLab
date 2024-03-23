import React, { useState, useEffect } from "react";
import { getDoc, updateDoc, doc } from "firebase/firestore";
import Logo from "../../../Assets/Logo.png";
import { auth, db } from "../../../Services/FirebaseServises/FirebaseConfig";

const EditStudentForm = () => {
  const [userData, setUserData] = useState(null);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNo, setPhoneNo] = useState("");
  
  const userId = "plvy78W2bQTBMCR3eREq3mvfJA93";


  useEffect(() => {
    const getUserData = async () => {
      try {
        const docRef = doc(db, "users", userId);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          setUserData(docSnap.data());
          // Initialize input fields with user data
          setFirstName(docSnap.data().firstName || "");
          setLastName(docSnap.data().lastName || "");
          setEmail(docSnap.data().email || "");
          setPhoneNo(docSnap.data().phoneNo || "");
        } else {
          console.log('No such document!');
        }
      } catch (error) {
        console.error('Error getting document:', error);
      }
    };

    getUserData();
  }, [userId]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const userRef = doc(db, "users", userId);
      await updateDoc(userRef, {
        firstName: firstName,
        lastName: lastName,
        email: email,
        phoneNo: phoneNo
      });
      console.log("Document successfully updated!");
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
            <button type="submit" className="bg-blue-500 text-white py-2 px-4 w-full rounded-md">
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
