import React from 'react';
import './Dashboard.css';
import Tasks from './Tasks';
import ActivityFeed from './ActivityFeed';
import TaskPriorities from './TaskPriorities';

function Dashboard() {
  return (
    <div className="dashboard">
      <header className="dashboard-header">
        <h1>Welcome back, John Doe</h1>
        <p>The end of the year is coming. Are you planning your performance interviews? You can do this super efficiently with Acmy.</p>
        <a href="#more-info">Look here for more information</a>
      </header>
      <div className="dashboard-content">
        <Tasks />
        <div className="dashboard-side">
          <ActivityFeed />
          <TaskPriorities />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
