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


  const [selectedCategory, setSelectedCategory] = useState("home");

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  const itemsPerPage = 15;
  const [curPage, setCurPage] = useState(1);
  const [images, setImages] = useState([]);
  const [maxPages, setMaxPages] = useState(1);
  const [selectedTags, setSelectedTags] = useState([]);
  const [tags, setTags] = useState([]);

  // Fetch tags from the server
  useEffect(() => {
    fetch('http://localhost:5000/api/tags')
      .then(response => response.json())
      .then(data => {
        if (Array.isArray(data)) {
          setTags(data);
        } else {
          console.error('Invalid data format for tags:', data);
        }
      })
      .catch(error => console.error('Error fetching tags:', error));
  }, []);

  // Fetch images from the server based on selected tags
  useEffect(() => {
    const tagsQueryParam = selectedTags.length > 0 ? `?tags=${JSON.stringify(selectedTags)}` : '';

    fetch(`http://localhost:5000/api/pictures-list${tagsQueryParam}`)
      .then((response) => response.json())
      .then((data) => {
        setImages(data);
        setMaxPages(Math.ceil(data.length / itemsPerPage));
      })
      .catch((error) => console.error('Error fetching images:', error));
  }, [selectedTags, curPage]);

  // Calculate the range of items to display based on the current page
  const startIndex = (curPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const displayedImages = Array.isArray(images) ? images.slice(startIndex, endIndex) : [];

  // ...

  const handlePageClick = (dir) => {
    if (dir === "back") {
      setSelectedCategory("home");
    } else if ((dir === "next" && curPage < maxPages) || (dir === "prv" && curPage > 1)) {
      setCurPage(prevPage => (dir === "next" ? prevPage + 1 : prevPage - 1));
    }
  };

  // ...


  const handleTagClick = (tag) => {
    setCurPage(1)
    setSelectedTags((prevTags) =>
      prevTags.includes(tag)
        ? prevTags.filter((t) => t !== tag)
        : [...prevTags, tag]
    );
  };

  return (
    <div>
      {/* Search bar */}
      {selectedCategory === 'pictures' && (
        <div className="search-container">
          <FiSearch className="search-icon" size={18} />
          <input type="text" placeholder="Search..." className="search-input" />
        </div>
      )}

      {/* Main content*/}
      <h1 style={{ marginLeft: '2.5%' }} className="search-header" ></h1>

      <div style={{ display: 'flex', alignItems: 'center' }}>
        {selectedCategory !== 'home' && (
          <>
            <button className="back" onClick={() => handlePageClick("back")}>Back to Home</button>

            <h1 style={{ marginLeft: '2.5%' }} className="header">
              {`Page: ${curPage} of ${maxPages}`}
            </h1>
            <button className="prv" onClick={() => handlePageClick("prv")}>Previous page</button>
            <button className="next" onClick={() => handlePageClick("next")} disabled={curPage === maxPages}>Next page</button>
          </>
        )}
        {selectedCategory === 'home' && (
          <h1 style={{ marginLeft: '2.5%' }} className="header">
            Categories
          </h1>
        )}
      </div>


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
                {displayedImages.map((image, index) => (
                  <ItemFrame key={index} title={image.title} date={image.date} image_source={image.file_source} />
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

        </div>

        {selectedCategory === 'pictures' && (
          <div className="cloud-page-container-right">
            <div className="tag-container">
              <h1>Tags</h1>
              {tags.map(tag => (
                <label key={tag}>
                  <input
                    type="checkbox"
                    value={tag}
                    checked={selectedTags.includes(tag)}
                    onChange={() => handleTagClick(tag)}
                  />
                  {tag}
                </label>
              ))}
            </div>
          </div>
        )}



      </div>
    </div>
  );
};

export default MyCloudPage;