// ViewSessionPage.js

import React from 'react';

const ViewSessionPage = () => {
  // Extract session from props or use dummy data if props are not provided
  const { session } ={
    session: {
      title: 'Dummy Title',
      description: 'Dummy Description'
    }
  };

  // Dummy data for the code and results
  const code = `function add(a, b) {
    return a + b;
  }`;

  const results = 'Result: 5';

  // Dummy date and question number
  const date = 'May 1, 2024';
  const questionNumber = 'Question 1';

  return (
    <div className="p-4 text-white">
      <div className="text-lg font-semibold mb-4">{session.title}</div>
      <div className="text-sm text-xl text-gray-500 mb-2">{date} - {questionNumber}</div>
      <div className="mb-4">
        <div className="mb-2 text-3xl">Question:</div>
        <div className="bg-gray-800 p-4 rounded-md text-white">{session.description}</div>
      </div>
      <div className="flex mb-4">
        <div className="w-1/2 mr-2">
          <div className="mb-2 text-2xl">Code:</div>
          <div className="bg-gray-800 p-4 rounded-md text-white">{code}</div>
        </div>
        <div className="w-1/2 ml-2">
          <div className="mb-2 text-2xl">Results:</div>
          <div className="bg-gray-800 p-4 rounded-md text-white">{results}</div>
        </div>
        
      </div>
      
    </div>
    
    
  );
};

export default ViewSessionPage;
