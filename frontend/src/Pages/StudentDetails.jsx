import React from 'react';
import { db, auth } from "../Services/FirebaseServises/FirebaseConfig";
import { collection, query, where, getDocs, Timestamp } from 'firebase/firestore';
import { jsPDF } from "jspdf";
import autoTable from 'jspdf-autotable'

const StudentDetails = () => {
  const generatePdf = (data) => {
    const doc = new jsPDF();
    const tableColumn = ["No", "Error Type", "Output", "Time"];
    const tableRows = [];

    data.forEach((item, index) => {
      const reportData = [
        (index + 1).toString(), // No
        (item.status).toString(), // Error Type
        (item.output).toString(), // Output
        new Date(item.timeStamp.toDate()).toLocaleString() // Time
      ];
      tableRows.push(reportData);
    });

    doc.setFontSize(22);
    doc.text('Weekly Error Report', 105, 20, null, null, 'center');
    doc.setFontSize(12);
    doc.text(`Created: ${new Date().toLocaleString()}`, 105, 30, null, null, 'center');
    doc.text(`email: ${auth.currentUser.email || 'Unknown'}`, 20, 40);

    autoTable(doc, {
      head: [tableColumn],
      body: tableRows,
      startY: 50,
    });

    doc.save('weekly_error_report.pdf');
  };

  const generateReport = async () => {
    const userId = auth.currentUser.uid;
    try {
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      const dayOfWeek = today.getUTCDay();
      const first = today.getUTCDate() - dayOfWeek + (dayOfWeek === 0 ? -6 : 1);
      const last = first + 6;

      const firstDayOfWeek = new Date(Date.UTC(today.getUTCFullYear(), today.getUTCMonth(), first));
      const lastDayOfWeek = new Date(Date.UTC(today.getUTCFullYear(), today.getUTCMonth(), last, 23, 59, 59, 999));

      const q = query(collection(db, "users", userId, "coding_history"), 
              where("timeStamp", ">=", Timestamp.fromDate(firstDayOfWeek)),
              where("timeStamp", "<=", Timestamp.fromDate(lastDayOfWeek)));
      const querySnapshot = await getDocs(q);

      const errorDocuments = [];
      querySnapshot.forEach(doc => {
        const data = doc.data();
        errorDocuments.push(data);
      });
      
      generatePdf(errorDocuments);
      console.log('Error Docs:', errorDocuments);
    } catch (error) {
      console.error('Error generating report:', error);
    }
  };

  return (
    <div>
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
