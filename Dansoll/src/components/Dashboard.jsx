import React from 'react'
import Sidebar from './Sidebar'
import './Dashboard.css'
import DashboardHome from './DashboardHome'

const Dashboard = () => {
  return (
    <div>
      <Sidebar />
      <DashboardHome />
    </div>
  )
}

export default Dashboard
