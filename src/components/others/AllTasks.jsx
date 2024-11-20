import React, { useContext } from 'react';
import { AuthContext } from '../../context/AuthProvider';

const AllTask = () => {
  const [userData, setUserData] = useContext(AuthContext);

  return (
    <>
      {/* Inline styles for custom animations */}
      <style>
        {`
          /* Custom Animation for Task Cards */
          @keyframes scaleUp {
            0% {
              opacity: 0;
              transform: scale(0.8);
            }
            100% {
              opacity: 1;
              transform: scale(1);
            }
          }

          @keyframes hoverGrow {
            0% {
              transform: scale(1);
            }
            100% {
              transform: scale(1.05);
            }
          }

          .task-card {
            animation: scaleUp 0.6s ease-out forwards;
            transition: transform 0.3s ease, box-shadow 0.3s ease;
            will-change: transform, box-shadow;
          }

          .task-card:hover {
            animation: hoverGrow 0.3s ease-in-out forwards;
            box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
          }
          
          /* Prevent overflow when hovering */
          .task-list-container {
            overflow: hidden;
          }
        `}
      </style>

      {/* Main Container */}
      <div className="bg-[#1c1c1c] p-5 rounded mt-5 task-list-container">
        {/* Table Header */}
        <div className="bg-red-400 mb-2 py-2 px-4 flex justify-between rounded">
          <h2 className="text-lg font-medium w-1/5">Employee Name</h2>
          <h3 className="text-lg font-medium w-1/5">New Task</h3>
          <h5 className="text-lg font-medium w-1/5">Active Task</h5>
          <h5 className="text-lg font-medium w-1/5">Completed</h5>
          <h5 className="text-lg font-medium w-1/5">Failed</h5>
        </div>

        {/* Employee Task List */}
        <div className="">
          {userData.map((elem, idx) => (
            <div key={idx} className="task-card border-2 border-emerald-500 mb-2 py-2 px-4 flex justify-between rounded">
              <h2 className="text-lg font-medium w-1/5">{elem.firstName}</h2>
              <h3 className="text-lg font-medium w-1/5 text-blue-400">{elem.taskCounts.newTask}</h3>
              <h5 className="text-lg font-medium w-1/5 text-yellow-400">{elem.taskCounts.active}</h5>
              <h5 className="text-lg font-medium w-1/5 text-white">{elem.taskCounts.completed}</h5>
              <h5 className="text-lg font-medium w-1/5 text-red-600">{elem.taskCounts.failed}</h5>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default AllTask;
