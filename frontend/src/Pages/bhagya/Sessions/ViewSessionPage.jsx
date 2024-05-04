import ProfileNavbar from '../../../Components/ProfileNavbar';
import StudentDetails from '../../StudentDetails';
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { db, auth} from '../../../Services/FirebaseServises/FirebaseConfig';
import { doc, getDoc } from 'firebase/firestore';

const ViewSessionPage = () => {
  const { sessionId } = useParams();
  const [session, setSession] = useState(null);

  useEffect(() => {
    const fetchSession = async () => {
      const sessionRef = doc(db, "users", auth.currentUser.uid, "submission", sessionId);
      const docSnap = await getDoc(sessionRef);

      if (docSnap.exists()) {
        setSession(docSnap.data());
      } else {
        console.log("No such document!");
      }
    };

    if (sessionId) {
      fetchSession();
    }
  }, [sessionId]);

  if (!session) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <ProfileNavbar />
      <div className="mx-20 mt-8">
        <div className="session-header">
          <div className="session-title">{session.title}</div>
          <div className="session-info">{session.date} - {session.questionNumber}</div>
        </div>
        <div className="session-body">
          <div className="question-container">
            <div className="question-header">Question:</div>
            <div className="question-content">{session.description}</div>
          </div>
          <div className="code-container">
            <div className="code-header">Code:</div>
            <div className="code-content">{session.codeSnippet}</div>
          </div>
          <div className="results-container">
            <div className="results-header">Results:</div>
            <div className="results-content">{session.results}</div>
          </div>
        </div>
        <StudentDetails />
      </div>
    </div>
  );
};

export default ViewSessionPage;


