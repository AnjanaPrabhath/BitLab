import React, { useState } from "react";
import { db, auth } from "../../Services/FirebaseServises/FirebaseConfig"; // Import Firebase configuration
import { setDoc, doc, collection, serverTimestamp } from "firebase/firestore";
import ProfileNavbar from "../../Components/ProfileNavbar";
import { ToastContainer, toast } from "react-toastify"; // Import toast notifications
import "react-toastify/dist/ReactToastify.css"; // Import toast styles

const LearningPortal = () => {
  const [file, setFile] = useState(null);
  const [codeSnippet, setCodeSnippet] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  // Function to handle file upload
  const handleFileUpload = (event) => {
    const uploadedFile = event.target.files[0];
    setFile(uploadedFile);
  };

  // Function to clear the uploaded file
  const clearUploadedFile = () => {
    setFile(null);
  };

  // Function to save code snippet
  const saveCodeSnippet = async () => {
    try {
      const userId = auth.currentUser.uid; // Ensure you handle cases where there is no user logged in

      // Construct the path and data object
      const userSubmissionPath = doc(
        collection(db, "users", userId, "submission")
      ); // Adjust path as needed
      const data = {
        codeSnippet: codeSnippet,
        title: title,
        description: description,
        timeStamp: serverTimestamp(),
      };

      // Use setDoc to create or update the document
      await setDoc(userSubmissionPath, data, { merge: true }); // merge: true will update fields in the doc without overwriting existing fields

      // Success toast
      toast.success("Code snippet saved successfully!", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      // Reset the state values
      setFile(null);
      setCodeSnippet("");
      setTitle("");
      setDescription("");

      console.log("Code snippet saved successfully:", data);
    } catch (error) {
      console.error("Error saving code snippet:", error);

      // Error toast
      toast.error("Failed to save code snippet!", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };

  return (
    <div>
      <ProfileNavbar />
      <div className="flex flex-col items-center h-full">
        {/* Main Heading */}
        <h1 className="text-white text-3xl mb-8">Learning Portal</h1>

        {/* Two columns layout */}
        <div className="flex w-full justify-center">
          {/* Left side for file upload and display */}
          <div className="w-1/2 p-4">
            <div className="text-white mb-4">
              Upload Your File
              <input
                type="file"
                onChange={handleFileUpload}
                accept=".pdf"
                style={{ marginLeft: "10px" }}
              />
            </div>
            {/* Display uploaded PDF */}
            {file && file.type === "application/pdf" && (
              <div>
                <embed
                  src={URL.createObjectURL(file)}
                  type="application/pdf"
                  width="100%"
                  height="500px"
                />
                {/* Button to clear uploaded file */}
                <button
                  className="bg-[#06C6D5] text-black px-4 py-2 mt-4"
                  onClick={clearUploadedFile}
                >
                  Clear File
                </button>
              </div>
            )}
          </div>

          {/* Right side for big text box */}
          <div className="w-1/2 p-4">
            <div className="text-white mb-4">Title:</div>
            <input
              type="text"
              className="w-full h-12 bg-gray-800 text-white p-4 mb-4"
              placeholder="Enter title..."
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <div className="text-white mb-4">Description:</div>
            <textarea
              className="w-full h-36 bg-gray-800 text-white p-4 mb-4"
              placeholder="Enter description..."
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            ></textarea>
            <div className="text-white mb-4">Enter your code snippet</div>
            <textarea
              className="w-full h-96 bg-gray-800 text-white p-4"
              placeholder="Enter your code here..."
              value={codeSnippet}
              onChange={(e) => setCodeSnippet(e.target.value)}
            ></textarea>
            {/* Button to save code snippet */}
            <button
              className="bg-[#06C6D5] text-black px-4 py-2 mt-4"
              onClick={saveCodeSnippet}
            >
              Save & Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LearningPortal;
