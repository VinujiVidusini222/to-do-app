import React from 'react';
import './ActivityFeed.css';

function ActivityFeed() {
  return (
    <div className="activity-feed">
      <h2>Activity Feed</h2>
      <ul>
        <li><b>Kushantha Charuka</b> created <span>Contract #00124 need John Beige’s signature</span> <small>Sep 16, 2022 at 11:30 AM</small></li>
        <li><b>Lorem ipsum dolor sit amet</b> <small>Sep 16, 2022 at 11:45 AM</small></li>
        <li><b>Lorem ipsum dolor sit amet</b> <small>Sep 16, 2022 at 11:45 AM</small></li>
      </ul>
    </div>
  );
}

export default ActivityFeed;
