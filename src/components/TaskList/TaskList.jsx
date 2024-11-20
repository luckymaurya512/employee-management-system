import React from 'react';
import AcceptTask from './AcceptTask';
import NewTask from './NewTask';
import CompleteTask from './CompleteTask';
import FailedTask from './FailedTask';

const TaskList = ({ data }) => {
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
          }

          .task-card:hover {
            animation: hoverGrow 0.3s ease-in-out forwards;
            box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
          }

          /* Responsiveness for Mobile Devices */
          @media (max-width: 768px) {
            #tasklist {
              flex-direction: column;
              gap: 15px;
            }
            .task-card {
              width: 100%;
            }
          }
        `}
      </style>

      {/* Task List Container */}
      <div
        id="tasklist"
        className="h-[50%] overflow-x-auto flex items-center justify-start gap-5 flex-nowrap w-full py-1 mt-16"
      >
        {data.tasks.map((elem, idx) => {
          // Dynamic rendering of task components based on their status
          let taskComponent = null;
          let bgColor = '';

          if (elem.active) {
            taskComponent = <AcceptTask data={elem} />;
            bgColor = 'bg-yellow-400';
          } else if (elem.newTask) {
            taskComponent = <NewTask data={elem} />;
            bgColor = 'bg-blue-400';
          } else if (elem.completed) {
            taskComponent = <CompleteTask data={elem} />;
            bgColor = 'bg-green-400';
          } else if (elem.failed) {
            taskComponent = <FailedTask data={elem} />;
            bgColor = 'bg-red-400';
          }

          return (
            taskComponent && (
              <div
                key={idx}
                className={`task-card ${bgColor} sm:w-full mb-6 mx-4 p-5 rounded-lg`}
              >
                {taskComponent}
              </div>
            )
          );
        })}
      </div>
    </>
  );
};

export default TaskList;
