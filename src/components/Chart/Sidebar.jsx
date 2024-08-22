// import React from 'react';
import PropTypes from 'prop-types';
import {
   BsGrid1X2Fill, BsPeopleFill 
  , BsMenuButtonWideFill, BsFillGearFill
} from 'react-icons/bs';
import { PiStudentBold,PiStudentFill  } from "react-icons/pi";
import { IoSchoolSharp } from "react-icons/io5";


function Sidebar({ openSidebarToggle, OpenSidebar }) {
  return (
    <aside id="sidebar" className={openSidebarToggle ? "sidebar-responsive" : ""}>
      <div className='sidebar-title'>
        <div className='sidebar-brand'>
          <IoSchoolSharp className='icon_header' /> STUDENT DASHBOARD
        </div>
        <span className='icon close_icon' onClick={OpenSidebar}>X</span>
      </div>

      <ul className='sidebar-list'>
        <li className='sidebar-list-item'>
          <a href="">
            <BsGrid1X2Fill className='icon' /> Dashboard
          </a>
        </li>
        <li className='sidebar-list-item'>
          <a href="">
            <PiStudentBold className='icon' /> Total Students
          </a>
        </li>
        <li className='sidebar-list-item'>
          <a href="">
            <PiStudentFill className='icon' /> Alumni 
          </a>
        </li>
        <li className='sidebar-list-item'>
          <a href="">
            <BsPeopleFill className='icon' /> Customers
          </a>
        </li>
        <li className='sidebar-list-item'>
          <a href="">
            <BsPeopleFill className='icon' /> Staff Status
          </a>
        </li>
        <li className='sidebar-list-item'>
          <a href="">
            <BsMenuButtonWideFill className='icon' /> Reports
          </a>
        </li>
        <li className='sidebar-list-item'>
          <a href="">
            <BsFillGearFill className='icon' /> Setting
          </a>
        </li>
      </ul>
    </aside>
  );
}

Sidebar.propTypes = {
  openSidebarToggle: PropTypes.bool.isRequired,
  OpenSidebar: PropTypes.func.isRequired,
};

export default Sidebar;
