import React, { useState } from 'react';
import './Navbar.scss';
import { NavLink } from 'react-router-dom';
import profile from '../assets/profileImage.jpg';
import { IoIosArrowDown } from 'react-icons/io';
import { BsCalendar2Check, BsFillGearFill, BsArrowRightSquareFill, BsArrowLeftSquareFill } from 'react-icons/bs';

const Navbar = ({ openSidebar, setOpenSidebar }) => {

  const [profileMenu, setProfileMenu] = useState(false);

  const NavMenu = () => (
    <>
      {openSidebar ? <BsArrowLeftSquareFill className='sliderIcon mt-4 mr-4' onClick={() => setOpenSidebar(false)} /> : <BsArrowRightSquareFill className='sliderIcon mt-4 mr-4' onClick={() => setOpenSidebar(true)} /> }
      <NavLink to='/' className="nav-menu" activeclassname="active">Teams</NavLink>
      <NavLink to='/u23' className="nav-menu" activeclassname="active">U23</NavLink>
      <NavLink to='/u19' className="nav-menu" activeclassname="active">U19</NavLink>
    </>
  )
  return (
    <>
      <div className="navContainer">
        <div className="navList">
          <NavMenu />
        </div>
        <div className="navProfileContainer">
          <div className="navSeparator" />
          <div className="navProfile">
            <img src={profile} alt="profileImg" />
            <p>Marcus</p>
            <IoIosArrowDown className='myIcon' onClick={() => setProfileMenu(!profileMenu)} />
          </div>
          {profileMenu && (
            <div className="profileMenu">
              <p>My Profile</p>
              <p>Settings</p>
              <p>Logout</p>
            </div>
          )}
        </div>
      </div>
    </>
  )
}

export default Navbar