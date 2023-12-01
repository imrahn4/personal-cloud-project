import React from 'react';
import './ItemFrame.css';

const ItemFrame = ({ title, date, image_source }) => {
  // Assuming your server is running on http://localhost:5000
  const serverBaseUrl = 'http://localhost:5000';
  const completeImageUrl = `${serverBaseUrl}${image_source}`;

  return (
    <div className="item-main-frame">
      <img className="item-image-preview-container" alt="Preview Image" src={completeImageUrl} />
      <div className='item-title'>{title}</div>
      <div className='item-date'>{date}</div>
    </div>
  );
};

export default ItemFrame;
