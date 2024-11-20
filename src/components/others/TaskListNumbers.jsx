import React from 'react';

const TaskListNumbers = ({ data }) => {
  return (
    <>
      {/* Inline style for custom animations */}
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

          @keyframes bounce {
            0% {
              transform: translateY(0);
            }
            50% {
              transform: translateY(-10px);
            }
            100% {
              transform: translateY(0);
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

          /* Apply scale-up animation for task cards */
          .task-card {
            @apply rounded-xl py-6 px-9 transition-all ease-in-out duration-300 shadow-md;
            animation: scaleUp 0.6s ease-out forwards;
          }

          /* Apply bounce effect to task counts text */
          .task-card h2 {
            animation: bounce 1s infinite ease-in-out;
          }

          /* Hover effect */
          .task-card:hover {
            animation: hoverGrow 0.3s ease-in-out forwards;
            box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
          }

          /* Responsiveness for Mobile Devices */
          @media (max-width: 768px) {
            .task-card {
              width: 100%;
            }
          }
        `}
      </style>

      {/* Task List */}
      <div className="flex flex-wrap mt-10 justify-between gap-5 sm:flex-col sm:gap-4">
        {/* New Task */}
        <div className="task-card bg-blue-400 sm:w-full mb-6 mx-4 p-5 rounded-lg">
          <h2 className="text-3xl font-bold">{data.taskCounts.newTask}</h2>
          <h3 className="text-xl mt-0.5 font-medium">New Task</h3>
        </div>

        {/* Completed Task */}
        <div className="task-card bg-green-400 sm:w-full mb-6 mx-4 p-5 rounded-lg">
          <h2 className="text-3xl font-bold">{data.taskCounts.completed}</h2>
          <h3 className="text-xl mt-0.5 font-medium">Completed Task</h3>
        </div>

        {/* Accepted Task */}
        <div className="task-card bg-yellow-400 sm:w-full mb-6 mx-4 p-5 rounded-lg">
          <h2 className="text-3xl text-black font-bold">{data.taskCounts.active}</h2>
          <h3 className="text-xl mt-0.5 text-black font-medium">Accepted Task</h3>
        </div>

        {/* Failed Task */}
        <div className="task-card bg-red-400 sm:w-full mb-6 mx-4 p-5 rounded-lg">
          <h2 className="text-3xl font-bold">{data.taskCounts.failed}</h2>
          <h3 className="text-xl mt-0.5 font-medium">Failed Task</h3>
        </div>
      </div>
    </>
  );
};

export default TaskListNumbers;
