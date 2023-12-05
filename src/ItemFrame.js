// ItemFrame.jsx

import React from 'react';
import './ItemFrame.css';

const ItemFrame = ({ title, date, image_source, video_source }) => {
  const serverBaseUrl = process.env.REACT_APP_SERVER_BASE_URL || 'http://localhost:5000';

  // Check if it's an image or a video
  const isVideo = video_source != null;

  const completeMediaUrl = isVideo ? `${serverBaseUrl}/api/videos${video_source}` : `${serverBaseUrl}${image_source}`;


  return (
    <div className="item-main-frame">
      {isVideo ? (
        <video className="item-media-container" controls>
          <source src={completeMediaUrl} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      ) : (
        <img className="item-media-container" alt="Preview" src={completeMediaUrl} />
      )}
      <div className='item-title'>{title}</div>
      <div className='item-date'>{date}</div>
    </div>
  );
};

export default ItemFrame;
