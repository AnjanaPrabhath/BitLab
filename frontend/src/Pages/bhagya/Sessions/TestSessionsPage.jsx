import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import ProfileNavbar from '../../../Components/ProfileNavbar';
import { db } from '../../../Services/FirebaseServises/FirebaseConfig';
import { collection, getDocs } from 'firebase/firestore';


const TestSessionsPage = () => {
  // State to hold the current user's information
  const [currentUser, setCurrentUser] = useState(null);
  const [sessions, setSessions] = useState([]);
  // UseEffect to listen for changes in authentication state
  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in
        setCurrentUser(user);
        fetchSessions();
      } else {
        // User is signed out
        setCurrentUser(null);
      }
    });
    // Function to fetch sessions from Firestore 
    const fetchSessions = async () => {
      const userId = auth.currentUser.uid;
      const querySnapshot = await getDocs(collection(db, "users", userId, "submission"));
      const sessionsData = querySnapshot.docs.map(doc => ({
        id: doc.id, // or other identifier from the document
        ...doc.data()
      }));
      setSessions(sessionsData);
    };

    return () => unsubscribe();
  }, []);

  return (
    <div>
      <ProfileNavbar />
      <div className="p-4 text-white">
        <div className="mb-8"> {/* Add margin bottom to create space */}
          <div className="flex justify-between items-center">
            <div className="text-lg font-semibold">{currentUser ? `Welcome, ${currentUser.displayName || currentUser.email}` : 'Loading...'}</div>
            {/* Add logout button or other user actions */}
          </div>
        </div>

        <h1 className="text-2xl font-semibold mb-4">MY SESSIONS</h1>

        <div className="table-container">
          <table className="sessions-table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Title</th>
                <th>Description</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {sessions.map((session, index) => (
                <tr key={session.id}>
                  <td>{index + 1}</td>
                  <td>{session.title}</td>
                  <td>{session.description}</td>
                  <td>
                    <div className="action-buttons">
                      <Link to={`/student/viewOneSessions/${session.id}`}>
                        <button className="view-button">View Session</button>
                      </Link>
                      <button className="report-button">Get Report</button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default TestSessionsPage;
