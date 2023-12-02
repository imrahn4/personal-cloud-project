import React, { useState, useEffect } from "react";
import './MyCloud.css';
import './SettingsPage.css';
import ItemFrame from "./ItemFrame";

const Settings = () => {
  const [curPage, setCurPage] = useState(1);
  const [images, setImages] = useState([]);

  useEffect(() => {
    // Fetch images from the server
    fetch('http://localhost:5000/api/pictures-list')
      .then(response => response.json())
      .then(data => {
        setImages(data);
        console.log(data); // Log the data to check the image URLs
      })
      .catch(error => console.error('Error fetching images:', error));
  }, []); // Empty dependency array to run the effect only once when the component mounts

  const onClick = (dir) => {
    if (dir === "next") {
      setCurPage(curPage + 1);
    } else if (dir === "prv" && curPage > 1) {
      setCurPage(curPage - 1);
    }
  };

  return (
    <div>
      <h1>Settings Page</h1>
      <p> Page: {curPage}</p>

      <button className="prv" onClick={() => onClick("prv")}>Previous page</button>
      <button className="next" onClick={() => onClick("next")}>Next page</button>

      <div className='img-container'>
        {images.map((image, index) => (
          <ItemFrame key={index} title={image.title} date={image.date} image_source={image.file_source} />
        ))}
      </div>
    </div>
  );
};

export default Settings;
