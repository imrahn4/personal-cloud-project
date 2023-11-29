import React from "react";
import './App.css';
import { IoSettingsOutline } from "react-icons/io5";
import { RxDashboard } from "react-icons/rx";
import { FaRegHeart } from "react-icons/fa";
import { BsTags } from "react-icons/bs";
import { MdOutlineFileUpload } from "react-icons/md";

function App() {
  return (
    
    <div className="app-container">
      
      {/* Sidebar */}
      <div className="sidebar"> 
        <div className="sidebar-item">
          <RxDashboard className="sidebar-item-icon"/>
          <p className="sidebar-item-text"> All </p>
        </div>
        <div className="sidebar-item">
          <FaRegHeart className="sidebar-item-icon"/>
          <p className="sidebar-item-text"> Favourites </p>
        </div>
        <div className="sidebar-item">
          <BsTags className="sidebar-item-icon"/>
          <p className="sidebar-item-text"> Tags </p>
        </div>
        <div className="sidebar-item">
          <MdOutlineFileUpload className="sidebar-item-icon"/>
          <p className="sidebar-item-text"> Upload </p>
        </div>

        <div className="sidebar-item-upload">
          <IoSettingsOutline className="sidebar-item-icon"/>
          <p className="sidebar-item-text"> Settings </p>
        </div>
      </div>
      
      {/* Main Content */}
      <div className="main-content"> 
        <> Content </>
      </div>

    </div>

  );
}

export default App;
