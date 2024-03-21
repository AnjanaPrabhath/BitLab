import React, { useState } from 'react';
import ProfileNavbar from '../../Components/ProfileNavbar';

const LearningPortal = () => {
  const [file, setFile] = useState(null);
  const [codeSnippet, setCodeSnippet] = useState('');

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
  const saveCodeSnippet = () => {
    // Add your logic to save the code snippet
    console.log('Code snippet saved:', codeSnippet);
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
            <div className="text-white mb-4">Upload Your File
            <input type="file" onChange={handleFileUpload} accept=".pdf" style={{ marginLeft: '10px' }} /></div>
            {/* Display uploaded PDF */}
            {file && file.type === 'application/pdf' && (
              <div>
                <embed src={URL.createObjectURL(file)} type="application/pdf" width="100%" height="500px" />
                {/* Button to clear uploaded file */}
                <button className="bg-[#06C6D5] text-black px-4 py-2 mt-4" onClick={clearUploadedFile}>
                  Clear File
                </button>
              </div>
            )}
          </div>

          {/* Right side for big text box */}
          <div className="w-1/2 p-4">
            <div className="text-white mb-4">Enter your code snippet</div>
            <textarea
              className="w-full h-96 bg-gray-800 text-white p-4"
              placeholder="Enter your code here..."
              value={codeSnippet}
              onChange={(e) => setCodeSnippet(e.target.value)}
            ></textarea>
            {/* Button to save code snippet */}
            <button className="bg-[#06C6D5] text-black px-4 py-2 mt-4" onClick={saveCodeSnippet}>
              Save & Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LearningPortal;
