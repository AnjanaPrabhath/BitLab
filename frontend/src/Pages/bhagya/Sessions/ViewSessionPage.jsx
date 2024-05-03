import React from 'react';
import ProfileNavbar from '../../../Components/ProfileNavbar';
import StudentDetails from '../../StudentDetails';

const ViewSessionPage = () => {
  // Extract session from props or use dummy data if props are not provided
  const session = {
    title: 'Dummy Title',
    description: 'Dummy Description'
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
    <div>
      <ProfileNavbar />
      <div className="mx-20 mt-8"> {/* Add horizontal margin to create space */}
        <div className="view-session-container">
          <div className="session-header">
            <div className="session-title">{session.title}</div>
            <div className="session-info">{date} - {questionNumber}</div>
          </div>
          <div className="session-body">
            <div className="question-container">
              <div className="question-header">Question:</div>
              <div className="question-content">{session.description}</div>
            </div>
            <div className="code-container">
              <div className="code-header">Code:</div>
              <div className="code-content">{code}</div>
            </div>
            <div className="results-container">
              <div className="results-header">Results:</div>
              <div className="results-content">{results}</div>
            </div>
          </div>
        </div>
        <StudentDetails />
      </div>
    </div>
  );
};

export default ViewSessionPage;
