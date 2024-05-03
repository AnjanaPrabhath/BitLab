import React, { useState, useEffect } from "react";
import { getDoc, updateDoc, deleteDoc, doc } from "firebase/firestore";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Logo from "../../../Assets/Logo.png";
import { auth, db } from "../../../Services/FirebaseServises/FirebaseConfig";

const EditStudentForm = () => {
  const [userData, setUserData] = useState(null);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNo, setPhoneNo] = useState("");

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async (user) => {
      if (user) {
        const userId = user.uid;
        const docRef = doc(db, "users", userId);
        try {
          const docSnap = await getDoc(docRef);
          if (docSnap.exists()) {
            setUserData(docSnap.data());
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
      } else {
        // User is signed out.
        // You can handle this case if needed.
      }
    });

    return () => unsubscribe();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const userId = auth.currentUser.uid;
    try {
      const userRef = doc(db, "users", userId);
      await updateDoc(userRef, {
        firstName: firstName,
        lastName: lastName,
        email: email,
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
    } catch (error) {
      console.error("Error updating document: ", error);
    }
  };

  const handleDelete = async () => {
    const userId = auth.currentUser.uid;
    try {
      const userRef = doc(db, "users", userId);
      await deleteDoc(userRef);
      toast.success("User deleted successfully!", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } catch (error) {
      console.error("Error deleting document: ", error);
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
              <label htmlFor="firstName" className="text-white">First Name</label>
              <input
                type="text"
                id="firstName"
                placeholder="First Name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                className="bg-[#1f1f1f] placeholder-slate-400 text-[#d0d0d0] rounded-md px-2 py-2 my-2 border-blue-400 w-full"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="lastName" className="text-white">Last Name</label>
              <input
                type="text"
                id="lastName"
                placeholder="Last Name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                className="bg-[#1f1f1f] placeholder-slate-400 text-[#d0d0d0] rounded-md px-2 py-2 my-2 border-blue-400 w-full"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="text-white">Email</label>
              <input
                type="email"
                id="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-[#1f1f1f] placeholder-slate-400 text-[#d0d0d0] rounded-md px-2 py-2 my-2 border-blue-400 w-full"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="phoneNo" className="text-white">Phone No</label>
              <input
                type="text"
                id="phoneNo"
                placeholder="Phone No"
                value={phoneNo}
                onChange={(e) => setPhoneNo(e.target.value)}
                className="bg-[#1f1f1f] placeholder-slate-400 text-[#d0d0d0] rounded-md px-2 py-2 my-2 border-blue-400 w-full"
              />
            </div>
            <button type="submit" className="bg-[#06C6D5] text-black py-2 px-4 w-full rounded-md">
              UPDATE
            </button>
            <button type="button" onClick={handleDelete} className="bg-red-600 text-white py-2 px-4 mt-8 w-full rounded-md">
              DELETE ACCOUNT
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
