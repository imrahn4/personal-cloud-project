import React from 'react';
import './RecentItem.css'

const RecentItem = ({ title, date, description }) => {
  return (
    <div className="recent-item">
        <div className="recent-item-item-container">
            <> {title} {date} "{description}" </>
        </div>
    </div>
  );
};

export default RecentItem;
