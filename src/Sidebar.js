import React from "react";
import './App.css';
import { Link, useLocation } from "react-router-dom";

import { IoSettingsOutline } from "react-icons/io5";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaRegHeart } from "react-icons/fa";
import { BsTags } from "react-icons/bs";
import { MdOutlineFileUpload } from "react-icons/md";

function Sidebar() {
  const location = useLocation();

  const isLinkActive = (pathname) => {
    return location.pathname === pathname;
  };
  return (
    <div className="sidebar"> 
      <Link to='/my-cloud' className={`sidebar-item ${isLinkActive('/my-cloud') && 'active'}`}>
        <BsFillPersonLinesFill className="sidebar-item-icon"/>
        <p className="sidebar-item-text"> My Cloud </p>
      </Link>
      <Link to='/favourites' className={`sidebar-item ${isLinkActive('/favourites') && 'active'}`}>
        <FaRegHeart className="sidebar-item-icon"/>
        <p className="sidebar-item-text"> Favourites </p>
      </Link>
      <Link to='/tags' className={`sidebar-item ${isLinkActive('/tags') && 'active'}`}>
        <BsTags className="sidebar-item-icon"/>
        <p className="sidebar-item-text"> Tags </p>
      </Link>
      <Link to='/upload' className={`sidebar-item ${isLinkActive('/upload') && 'active'}`}>
        <MdOutlineFileUpload className="sidebar-item-icon"/>
        <p className="sidebar-item-text"> Upload </p>
      </Link>
      <Link to='/settings' className={`sidebar-item-settings ${isLinkActive('/settings') && 'active'}`}>
        <IoSettingsOutline className="sidebar-item-icon"/>
        <p className="sidebar-item-text"> Settings </p>
      </Link>
    </div>
  );
}

export default Sidebar;
