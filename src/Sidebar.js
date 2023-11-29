import React from "react";
import './App.css';
import { Link } from "react-router-dom";
import { IoSettingsOutline } from "react-icons/io5";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaRegHeart } from "react-icons/fa";
import { BsTags } from "react-icons/bs";
import { MdOutlineFileUpload } from "react-icons/md";

function Sidebar() {
  return (
    <div className="sidebar"> 
      <Link to='/my-cloud' className="sidebar-item">
        <BsFillPersonLinesFill className="sidebar-item-icon"/>
        <p className="sidebar-item-text"> My Cloud </p>
      </Link>
      <Link to='/favourites' className="sidebar-item">
        <FaRegHeart className="sidebar-item-icon"/>
        <p className="sidebar-item-text"> Favourites </p>
      </Link>
      <Link to='/tags' className="sidebar-item">
        <BsTags className="sidebar-item-icon"/>
        <p className="sidebar-item-text"> Tags </p>
      </Link>
      <Link to='/upload' className="sidebar-item">
        <MdOutlineFileUpload className="sidebar-item-icon"/>
        <p className="sidebar-item-text"> Upload </p>
      </Link>
      <Link to='/settings' className="sidebar-item-settings">
        <IoSettingsOutline className="sidebar-item-icon"/>
        <p className="sidebar-item-text"> Settings </p>
      </Link>
    </div>
  );
}

export default Sidebar;
