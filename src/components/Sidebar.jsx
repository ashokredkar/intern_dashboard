import React, { useState } from 'react';
import './Sidebar.scss';
import brand from '../assets/brandImg.png'
import { AiFillPieChart } from 'react-icons/ai';
import { TiGroup } from 'react-icons/ti';
import { RiFileEditFill } from 'react-icons/ri';
import { BsCalendar2Check, BsFillGearFill, BsArrowRightSquareFill, BsArrowLeftSquareFill } from 'react-icons/bs';
import { GoGraph } from 'react-icons/go';


const Sidebar = ({openSidebar}) => {

  const sideOptions = [{ title: 'Dashboard', icon: <AiFillPieChart className='myIcon' /> }, { title: 'Teams', icon: <TiGroup className='myIcon' /> }, { title: 'Schedule Generator', icon: <RiFileEditFill className='myIcon' /> }, { title: 'Weekly Training Plans', icon: <BsCalendar2Check className='myIcon' /> }, { title: 'Team Metrics', icon: <GoGraph className='myIcon' /> }, { title: 'Customizations', icon: <BsFillGearFill className='myIcon' /> }]

  const [toggleSide, setToggleSide] = useState(1);
  const activeSide = (idx) => {
    setToggleSide(idx)
  }
  return (
    <>
      {openSidebar && (
        <div className="sideContainer">

          <div className="sideBrand">
            <img src={brand} alt="brand_name" />
            <h4>Brand Name</h4>
          </div>

          <div className="side2">
            <div className="sideMenu">
              {sideOptions.map((sideItem, index) => (
                <div key={index} className={toggleSide === index ? "sideItem activeSide" : "sideItem"} onClick={() => activeSide(index)}>
                  {sideItem.icon}
                  <p>{sideItem.title}</p>
                </div>
              ))}
            </div>
            <div className="sideFooter">
              <p>Select Your Team</p>
              {/* <div className="dropUp">
            <p>Team Name</p>
            <MdArrowDropUp className='myIcon' />
          </div> */}
              <div className="btn-group dropup">
                <button type="button" className="dropUp dropdown-toggle" data-toggle="dropdown" aria-expanded="false">
                  Team Name
                </button>
                <div className="dropdown-menu">
                  <a className="dropdown-item" href="#">Team A</a>
                  <a className="dropdown-item" href="#">Team B</a>
                  <a className="dropdown-item" href="#">Team C</a>
                </div>
              </div>
            </div>
          </div>
        </div>)}
    </>
  )
}

export default Sidebar