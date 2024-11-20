import React from 'react';
import Header from '../others/Header';
import TaskListNumbers from '../others/TaskListNumbers';
import TaskList from '../TaskList/TaskList';

const EmployeeDashboard = (props) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-[#1c1c1c] to-gray-900 p-6 md:p-10 overflow-x-hidden">
      <div className="max-w-7xl mx-auto space-y-8 animate-fadeIn">
        <Header changeUser={props.changeUser} data={props.data} />
        <TaskListNumbers data={props.data} />
        <TaskList data={props.data} />
      </div>
    </div>
  );
};

export default EmployeeDashboard;