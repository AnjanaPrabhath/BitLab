import React, { useState } from "react";
import { db } from "../../../Services/FirebaseServises/FirebaseConfig";
import { collection, getDocs } from "firebase/firestore";

const ReportGenerator = () => {
  const [report, setReport] = useState(null);

  const generateReport = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "users", "1aeOP38ZS1fEqRXQ1RCB9vA16Nu2", "coding_history"));
      const reportData = [];
      querySnapshot.forEach((doc) => {
        const data = doc.data();
        // Extract required fields from data
        const { status, timeStamp } = data;
        // Add entry to reportData
        reportData.push({ status, timeStamp });
      });
      // Generate report
      const formattedReport = formatReport(reportData);
      setReport(formattedReport);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const formatReport = (data) => {
    // Format data into the desired report format
    // Example: [{ date: "2024-05-04", time: "12:30 PM", username: "John Doe", errorType: "Compilation Error" }, ...]
    const formattedData = data.map(({ status, timeStamp }) => ({
      date: new Date(timeStamp.toDate()).toLocaleDateString(),
      time: new Date(timeStamp.toDate()).toLocaleTimeString(),
      username: "John Doe", // Add logic to get username
      errorType: status,
    }));
    return formattedData;
  };

  return (
    <div>
      <button onClick={generateReport}>Generate Report</button>
      {report && (
        <div>
          <h2>Report</h2>
          <table>
            <thead>
              <tr>
                <th>Date</th>
                <th>Time</th>
                <th>Username</th>
                <th>Error Type</th>
              </tr>
            </thead>
            <tbody>
              {report.map((entry, index) => (
                <tr key={index}>
                  <td>{entry.date}</td>
                  <td>{entry.time}</td>
                  <td>{entry.username}</td>
                  <td>{entry.errorType}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default ReportGenerator;
