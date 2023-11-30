import React, { useState } from "react";
import './MyCloud.css'
import './MyCloudPictures.css'

import RecentItem from "./RecentItem";

import { FiSearch } from 'react-icons/fi';
import { FaCamera, FaVideo } from "react-icons/fa";
import { HiDocumentText } from "react-icons/hi2";
import { BsSoundwave } from "react-icons/bs";
import { MdDashboard } from "react-icons/md";

const MyCloudPage = () => {
  const recentItems = [
    { title: 'Item 1', date: '2023-01-01', description: 'Description' },
    { title: 'Item 2', date: '2023-02-01', description: 'Description' },
    { title: 'Item 3', date: '2023-03-01', description: 'Description' },
    { title: 'Item 4', date: '2023-01-01', description: 'Description'  },
    { title: 'Item 5', date: '2023-02-01', description: 'Description'  },
    { title: 'Item 6', date: '2023-03-01', description: 'Description' },
    // Add more items as needed
  ];

  // Added state to track the selected category
  const [selectedCategory, setSelectedCategory] = useState("home");

  // Added function to handle category clicks
  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div>
      {/* Search bar */}
      <div className="search-container">
        <FiSearch className="search-icon" size={18}/>
        <input type="text" placeholder="Search..." className="search-input"/>
      </div>

      {/* Main content*/}
      <h1 style={{marginLeft: '2.5%'}} className="search-header" ></h1> {/* Underneath this will be search results */}
      <h1 style={{marginLeft: '2.5%'}} className="header">Categories</h1>

      <div style={{marginLeft: '2.5%'}} className="cloud-page-container">
        <div className="cloud-page-container-left"> 
          <div className="cloud-page-home">
            <div className="category-container">

              {/* Pictures */}
              <div className="category-item-container" style={{backgroundColor:'#6663FE'}} onClick={() => handleCategoryClick('pictures')}>
                <div className="category-item-circle">
                  <FaCamera className="category-item-icon" style={{color:'#6663FE'}}/>
                  <div className="category-item-text"> Pictures </div>
                </div>
              </div>

              <div className="category-item-container" style={{backgroundColor:'#00A0B6'}}>
                <div className="category-item-circle">
                  <FaVideo className="category-item-icon" style={{color:'#00A0B6'}}/>
                  <div className="category-item-text"> Videos </div>
                </div>
              </div>

              <div className="category-item-container" style={{backgroundColor:'#E06C9F'}}>
                <div className="category-item-circle">
                  <HiDocumentText className="category-item-icon" style={{color:'#E06C9F'}}/>
                  <div className="category-item-text"> Documents </div>
                </div>
              </div>

              <div className="category-item-container" style={{backgroundColor:'#266FD5'}}>
                <div className="category-item-circle">
                  <BsSoundwave className="category-item-icon" style={{color:'#266FD5'}}/>
                <div className="category-item-text"> Audio </div>
              </div>

              </div>

              <div className="category-item-container" style={{backgroundColor:'#D2B301'}}>
                <div className="category-item-circle">
                  <MdDashboard className="category-item-icon" style={{color:'#D2B301'}}/>
                  <div className="category-item-text"> All </div>
                 </div>
              </div>

            </div>

            <h1 className="header">Recents</h1>
            
            <div className="recents-container">
              {recentItems.map((item, index) => (
                <RecentItem key={index} {...item} />
              ))}
            </div>
          

          </div>

          <div className="cloud-page-pictures-container">
          </div>

          <div className="cloud-page-videos-container">
          </div>

          <div className="cloud-page-documents-container">
          </div>

          <div className="cloud-page-audio-container">
          </div>

          <div className="cloud-page-other-container">
          </div>
        </div>

        <div className="cloud-page-container-right"> 
        </div>

      </div>
    </div>
  );
};

export default MyCloudPage;
