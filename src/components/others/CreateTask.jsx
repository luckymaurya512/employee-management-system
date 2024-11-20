import React, { useContext, useState } from 'react';
import { AuthContext } from '../../context/AuthProvider';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

const CreateTask = () => {
  // const notify = () => toast("Task Assigned");
  const [userData, setUserData] = useContext(AuthContext);
  const [taskTitle, setTaskTitle] = useState('');
  const [taskDescription, setTaskDescription] = useState('');
  const [taskDate, setTaskDate] = useState('');
  const [asignTo, setAsignTo] = useState('');
  const [category, setCategory] = useState('');
  const [newTask, setNewTask] = useState({});

  const submitHandler = (e) => {
    e.preventDefault();

    // Create the new task object
    const newTaskData = {
      taskTitle,
      taskDescription,
      taskDate,
      category,
      active: false,
      newTask: true,
      failed: false,
      completed: false,
    };

    // Update the userData
    const updatedUserData = [...userData]; // Create a shallow copy of userData
    updatedUserData.forEach((elem) => {
      if (asignTo === elem.firstName) {
        elem.tasks.push(newTaskData); // Add the new task
        elem.taskCounts.newTask += 1; // Update the task count
      }
    });

    // Update the context with the new userData
    setUserData(updatedUserData);

    // Reset form inputs
    setTaskTitle('');
    setTaskDescription('');
    setTaskDate('');
    setAsignTo('');
    setCategory('');
  };

  return (
    <div className='p-5 bg-[#1c1c1c] mt-5 rounded-lg'>
      <form onSubmit={submitHandler} className='flex flex-wrap w-full items-start justify-between'>
        {/* Left Side (Input fields) */}
        <div className='w-full md:w-1/2'>
          <div>
            <h3 className='text-sm text-gray-300 mb-0.5'>Task Title</h3>
            <input
              value={taskTitle}
              onChange={(e) => setTaskTitle(e.target.value)}
              className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4 transform transition-all duration-300 hover:scale-105 hover:shadow-md'
              type="text"
              placeholder='Make a UI design'
            />
          </div>
          <div>
            <h3 className='text-sm text-gray-300 mb-0.5'>Date</h3>
            <input
              value={taskDate}
              onChange={(e) => setTaskDate(e.target.value)}
              className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4 transform transition-all duration-300 hover:scale-105 hover:shadow-md'
              type="date"
            />
          </div>
          <div>
            <h3 className='text-sm text-gray-300 mb-0.5'>Assign to</h3>
            <input
              value={asignTo}
              onChange={(e) => setAsignTo(e.target.value)}
              className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4 transform transition-all duration-300 hover:scale-105 hover:shadow-md'
              type="text"
              placeholder='Employee name'
            />
          </div>
          <div>
            <h3 className='text-sm text-gray-300 mb-0.5'>Category</h3>
            <input
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4 transform transition-all duration-300 hover:scale-105 hover:shadow-md'
              type="text"
              placeholder='design, dev, etc'
            />
          </div>
        </div>

        {/* Right Side (Description and Button) */}
        <div className='w-full md:w-2/5 flex flex-col items-start'>
          <h3 className='text-sm text-gray-300 mb-0.5'>Description</h3>
          <textarea
            value={taskDescription}
            onChange={(e) => setTaskDescription(e.target.value)}
            className='w-full h-44 text-sm py-2 px-4 rounded outline-none bg-transparent border-[1px] border-gray-400 transform transition-all duration-300 hover:scale-105 hover:shadow-md'
          ></textarea>
          <button  className='bg-emerald-500 py-3 hover:bg-emerald-600 px-5 rounded text-sm mt-4 w-full transform transition-all duration-300 hover:scale-105 hover:shadow-lg'>
            Create Task
          </button>
          
        </div>
      </form>
    </div>
  );
};

export default CreateTask;
