import React from 'react';
import { Link } from 'react-router-dom';

const TestSessionsPage = () => {
  // Sample user data
  const user = { name: 'John Doe' };

  // Sample test sessions data
  const sessions = [
    { id: 1, title: 'Session 1', description: 'Description for session 1' },
    { id: 2, title: 'Session 2', description: 'Description for session 2' },
    { id: 3, title: 'Session 3', description: 'Description for session 3' }
  ];

  return (
    <div className="p-4 text-white">
      <div className="flex justify-between items-center mb-4">
        <div className="text-lg font-semibold">{user ? `Welcome, ${user.name}` : 'Loading...'}</div>
        {/* Add logout button or other user actions */}
      </div>

      <h1 className="text-2xl font-semibold mb-4">MY SESSIONS</h1>

      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-800">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">ID</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">Title</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">Description</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">Actions</th>
          </tr>
        </thead>
        <tbody className="bg-gray-800 divide-y divide-gray-200 text-white">
          {sessions.map(session => (
            <tr key={session.id}>
              <td className="px-6 py-4 whitespace-nowrap">{session.id}</td>
              <td className="px-6 py-4 whitespace-nowrap">{session.title}</td>
              <td className="px-6 py-4 whitespace-nowrap">{session.description}</td>
              <td className="px-6 py-4 whitespace-nowrap">
                <Link to="/student/viewOneSessions">
                    <button className="bg-[#06C6D5] text-black px-4 py-2 rounded-md mr-2">
                    View Session
                    </button>
                </Link>
                
                <button className="bg-[#06C6D5] text-black px-4 py-2 rounded-md">
                  Get Report
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TestSessionsPage;
