import React, { useState, useEffect } from "react";
import './MyCloud.css'
import './MyCloudPictures.css'

import ItemFrame from "./ItemFrame"


import { FiSearch } from 'react-icons/fi';
import { FaCamera, FaVideo } from "react-icons/fa";
import { HiDocumentText } from "react-icons/hi2";
import { BsSoundwave } from "react-icons/bs";
import { MdDashboard } from "react-icons/md";

const MyCloudPage = () => {
  const recentItems = [
    
    { title: 'Item 2', date: '2023-02-01', description: 'Description' },
    { title: 'Item 3', date: '2023-03-01', description: 'Description' },
    { title: 'Item 4', date: '2023-01-01', description: 'Description' },
    { title: 'Item 5', date: '2023-02-01', description: 'Description' },
    { title: 'Item 6', date: '2023-03-01', description: 'Description' },
    // Add more items as needed
  ];
  

  const [pictures, setPictures] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("home");

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  useEffect(() => {
    if (selectedCategory === 'pictures') {
      fetch('http://localhost:5000/api/pictures-list')
        .then(response => response.json())
        .then(data => {
          setPictures(data);
          console.log(data); // Log the data to check the image URLs
        })
        .catch(error => console.error('Error fetching images:', error));
    }
  }, [selectedCategory]);

  return (
    <div>
      {/* Search bar */}
      <div className="search-container">
        <FiSearch className="search-icon" size={18} />
        <input type="text" placeholder="Search..." className="search-input" />
      </div>

      {/* Main content*/}
      <h1 style={{ marginLeft: '2.5%' }} className="search-header" ></h1>
      <h1 style={{ marginLeft: '2.5%' }} className="header">Categories</h1>

      <div style={{ marginLeft: '2.5%' }} className="cloud-page-container">
        <div className="cloud-page-container-left">
          {selectedCategory === 'home' && (
            <div className="cloud-page-home">
              <div className="category-container">
                {/* Pictures */}
                <div className="category-item-container" style={{ backgroundColor: '#6663FE' }} onClick={() => handleCategoryClick('pictures')}>
                  <div className="category-item-circle">
                    <FaCamera className="category-item-icon" style={{ color: '#6663FE' }} />
                    <div className="category-item-text"> Pictures </div>
                  </div>
                </div>

                {/* Videos */}
                <div className="category-item-container" style={{ backgroundColor: '#00A0B6' }} onClick={() => handleCategoryClick('videos')}>
                  <div className="category-item-circle">
                    <FaVideo className="category-item-icon" style={{ color: '#00A0B6' }} />
                    <div className="category-item-text"> Videos </div>
                  </div>
                </div>

                {/* Documents */}
                <div className="category-item-container" style={{ backgroundColor: '#E06C9F' }} onClick={() => handleCategoryClick('documents')}>
                  <div className="category-item-circle">
                    <HiDocumentText className="category-item-icon" style={{ color: '#E06C9F' }} />
                    <div className="category-item-text"> Documents </div>
                  </div>
                </div>

                {/* Audio */}
                <div className="category-item-container" style={{ backgroundColor: '#266FD5' }} onClick={() => handleCategoryClick('audio')}>
                  <div className="category-item-circle">
                    <BsSoundwave className="category-item-icon" style={{ color: '#266FD5' }} />
                    <div className="category-item-text"> Audio </div>
                  </div>
                </div>

                {/* All */}
                <div className="category-item-container" style={{ backgroundColor: '#D2B301' }} onClick={() => handleCategoryClick('all')}>
                  <div className="category-item-circle">
                    <MdDashboard className="category-item-icon" style={{ color: '#D2B301' }} />
                    <div className="category-item-text"> All </div>
                  </div>
                </div>
              </div>

              <h1 className="header">Recents</h1>

              <div className="recents-container">
                {/* 
                {recentItems.map((item, index) => (
                  <RecentItem key={index} {...item} />
                ))}
                */}
              </div>
            </div>
          )}

          {selectedCategory === 'pictures' && (
            <div className="cloud-page-pictures-container">
              <div className="cloud-page-pictures-grid">
                {pictures.slice().reverse().map((item, index) => (
                  <ItemFrame key={index} title={item.title} date={item.date} image_source={item.file_source} />
                ))}
              </div>
            </div>
          )}

          {selectedCategory === 'videos' && (
            <div className="cloud-page-videos-container">
              {/* Content for the Videos category */}
              vids
            </div>
          )}

          {selectedCategory === 'documents' && (
            <div className="cloud-page-documents-container">
              {/* Content for the Documents category */}
              docs
            </div>
          )}

          {selectedCategory === 'audio' && (
            <div className="cloud-page-audio-container">
              {/* Content for the Audio category */}
              auds
            </div>
          )}

          {selectedCategory === 'all' && (
            <div className="cloud-page-all-container">
              {/* Content for the All category */}
              all
            </div>
          )}
        </div>

        <div className="cloud-page-container-right">
          {/* Right container content goes here */}
        </div>
      </div>
    </div>
  );
};

export default MyCloudPage;
