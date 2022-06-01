import React, { useState } from 'react';
import './ScheduleItem.scss';
import { MdEdit, MdArrowDropDown, MdArrowDropUp } from 'react-icons/md';
import { IoMdTrash } from 'react-icons/io';
// import { Accordion } from "react-bootstrap";

const ScheduleItem = ({ title }) => {

    const [openInfo, setOpenInfo] = useState(false);
    const [toggleBtn, setToggleBtn] = useState(1);

    const toggleActive = (index) => {
        setToggleBtn(index)
    }

    const btnList = ['SUNDAY', 'MONDAY', 'TUESDAY', 'WEDNESDAY', 'THURSDAY', 'FRIDAY', 'SATURDAY'];

    return (
        <div className="sItem">
            <div className="sHead">
                <div className="sHeadLeft">
                    <h4>{title}</h4>
                    <p>4 Weeks | 12 Sessions</p>
                </div>
                <div className="sHeadRight">
                    {openInfo ? <MdEdit className='editIcon myIcon' /> : ""}
                    {openInfo ? <IoMdTrash className='deleteIcon myIcon' data-toggle="modal" data-target="#deleteModal" /> : ""}
                    {openInfo ? <MdArrowDropUp className='upDownIcon myIcon' onClick={() => setOpenInfo(false)} /> : <MdArrowDropDown className='upDownIcon myIcon' onClick={() => setOpenInfo(true)} />}
                </div>
                <div className="modal fade" id="deleteModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-body">
                                Do you really want to delete this schedule?
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="myBtn2" data-dismiss="modal">Close</button>
                                <button type="button" className="myBtn">Confirm Delete</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {openInfo && (<div className="sInfo slide-bottom">
                <div className="infoDates">
                    <div className="dates">
                        <div className="startDate">
                            <p>START DATE</p>
                            <h5>25 January 2020</h5>
                        </div>
                        <div className="endDate">
                            <p>END DATE</p>
                            <h5>19 February 2020</h5>
                        </div>
                    </div>
                    <button className="myBtn">Update</button>
                </div>
                <div className="infoDays">
                    {btnList.map((singleBtn, id) => (
                        <div key={id} className={toggleBtn === id ? "day activeDay" : "day"} onClick={() => toggleActive(id)}>
                            <div className="circle" />
                            <p>{singleBtn}</p>
                        </div>
                    ))}
                </div>
            </div>)}
        </div>
    )
}

export default ScheduleItem