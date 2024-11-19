// import React from 'react'

import AllTasks from "../others/AllTasks"
import CreateTask from "../others/CreateTask"
import Header from "../others/Header"

const AdminDashboard = (props) => {
  return (
    <div className="h-screen p-10 w-full">
        <Header changeUser={props.changeUser}/>
        <CreateTask/>
        <AllTasks/>
    </div>
  )
}

export default AdminDashboard