import React from 'react';
import './Tasks.css';

function Tasks() {
  const tasks = [
    { id: 1, name: 'Contract #00124 need John Beige’s signature', status: 'Done', date: 'Sep 16' },
    { id: 2, name: 'Franklin More’s professional review is pending', status: 'Done', date: 'Sep 12' },
    { id: 3, name: 'Internship Agreement template is not completed', status: 'Pending', date: 'Sep 10' },
    { id: 4, name: 'Contract #2564 need Charlie Puth’s signature', status: 'In-Progress', date: 'Sep 08' },
    { id: 5, name: 'David Gram’s professional review is pending', status: 'Pending', date: 'Sep 08' }
  ];

  return (
    <div className="tasks">
      <h2>Tasks</h2>
      <ul>
        {tasks.map(task => (
          <li key={task.id} className={`task-item ${task.status.toLowerCase()}`}>
            <span>{task.name}</span>
            <span className="task-status">{task.status}</span>
            <span className="task-date">{task.date}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Tasks;
