import React, { useEffect, useState } from "react";
import { db, auth } from "../../../Services/FirebaseServises/FirebaseConfig"; // Import auth from Firebase
import { doc, setDoc, collection, serverTimestamp } from "firebase/firestore";

const OutputWindow = ({ outputDetails }) => {
  const [output, setOutput] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      let statusId = outputDetails?.status?.id;
      let data = {};

      if (statusId === 6) {
        data = {
          status: "Compilation Error",
          output: atob(outputDetails?.compile_output),
        };
        try {
          // Get the current user ID
          const userId = auth.currentUser.uid;
          // Store data in Firestore under the current user's coding_history collection
          await setDoc(
            doc(collection(db, "users", userId, "coding_history")),
            data
          );

          console.log("Data stored in Firestore successfully!");
        } catch (error) {
          console.error("Error storing data in Firestore:", error);
        }
        // compilation error
        setOutput(
          <pre className="px-2 py-1 font-normal text-xs text-red-500">
            {atob(outputDetails?.compile_output)}
          </pre>
        );
      } else if (statusId === 3) {
        data = {
          status: "Successful Execution",
          output:
            atob(outputDetails.stdout) !== null
              ? atob(outputDetails.stdout)
              : "",
          timeStamp: serverTimestamp()
        };

        setOutput(
          <pre className="px-2 py-1 font-normal text-xs text-green-500">
            {atob(outputDetails.stdout) !== null
              ? `${atob(outputDetails.stdout)}`
              : null}
          </pre>
        );
      } else if (statusId === 5) {
        data = {
          status: "Time Limit Exceeded",
          output:
            atob(outputDetails.stdout) !== null
              ? atob(outputDetails.stdout)
              : "",
          timeStamp: serverTimestamp()
        };
        // Get the current user ID
        const userId = auth.currentUser.uid;
        // Store data in Firestore under the current user's coding_history collection
        await setDoc(
          doc(collection(db, "users", userId, "coding_history")),
          data
        );
        setOutput(
          <pre className="px-2 py-1 font-normal text-xs text-red-500">
            {`Time Limit Exceeded`}
          </pre>
        );
      } else if (statusId === 11) {
        data = {
          status: "Runtime Error (NZEC)",
          output:
            atob(outputDetails.stdout) !== null
              ? atob(outputDetails.stdout)
              : "",
          timeStamp: serverTimestamp()
        };
        try {
          // Get the current user ID
          const userId = auth.currentUser.uid;
          // Store data in Firestore under the current user's coding_history collection
          await setDoc(
            doc(collection(db, "users", userId, "coding_history")),
            data
          );
          console.log("Data stored in Firestore successfully!");
        } catch (error) {
          console.error("Error storing data in Firestore:", error);
        }
        setOutput(
          <pre className="px-2 py-1 font-normal text-xs text-red-500">
            {`Runtime Error (NZEC)`}
          </pre>
        );
      } else if (statusId === 7) {
        setOutput(
          <pre className="px-2 py-1 font-normal text-xs text-red-500">
            {`Runtime Error (SIGSEGV)`}
          </pre>
        );
      } else {
        setOutput(
          <pre className="px-2 py-1 font-normal text-xs text-red-500">
            {atob(outputDetails?.stderr)}
          </pre>
        );
      }
    };

    if (outputDetails) {
      fetchData();
    }
  }, [outputDetails]);

  return (
    <>
      <h1 className="font-bold text-xl bg-clip-text text-transparent bg-gradient-to-r from-slate-900 to-slate-700 mb-2">
        Output
      </h1>
      <div className="w-full h-56 bg-[#1e293b] rounded-md text-white font-normal text-sm overflow-y-auto">
        {output}
      </div>
    </>
  );
};

export default OutputWindow;
