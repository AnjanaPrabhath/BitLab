import React from 'react';
import { db, auth } from "../Services/FirebaseServises/FirebaseConfig"; // Import auth from Firebase

const StudentDetails = () => {
  // Function to handle report generation
  const generateReport = async () => {
    try {
      // Fetch all coding_history documents for the current user
      const querySnapshot = await db.collection('users').doc('currentUser.uid').collection('coding_history').get();

      // Initialize an array to store error documents
      const errorDocuments = [];

      // Iterate through the fetched documents
      querySnapshot.forEach(doc => {
        const data = doc.data();
        // Check if the document contains an error (you may adjust this condition based on your data structure)
        if (data.status === 'error') {
          // If it's an error document, push it to the array
          errorDocuments.push(data);
        }
      });

      // Generate the report using the errorDocuments array
      console.log('Error report:', errorDocuments);
    } catch (error) {
      console.error('Error generating report:', error);
    }
  };

  return (
    <div>
      <div></div>
      
      {/* Report generation button */}
      <button
        className="fixed bottom-10 right-16 z-10 bg-[#06C6D5] text-black font-bold px-8 py-2 rounded-lg hover:bg-[#2df1ff]"
        onClick={generateReport}
      >
        Generate Weekly Report
      </button>
    </div>
  );
};

export default StudentDetails;
