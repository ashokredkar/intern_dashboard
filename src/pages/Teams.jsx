import React from 'react';
import './Teams.scss';
import { BsSearch } from 'react-icons/bs';
import ScheduleItem from '../components/ScheduleItem';

const Teams = () => {

  return (
    <div className="teamContainer">
      <div className="teamHeader">
        <button className="myBtn" data-toggle="modal" data-target="#exampleModal">Add New Schedule</button>
        <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog modal-dialog-centered modal-lg">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title mx-auto" id="exampleModalLabel">Create New Schedule</h5>
              </div>
              <div className="modal-body d-flex flex-column">
                <div className="scheduleName">
                  <p>Schedule Name</p>
                  <input type="text" placeholder='Enter name' />
                </div>
                <div className="modalDates d-flex">
                  <div className="modalStartDate">
                    <p>Start Date</p>
                    <input type="date" placeholder='Select start date' />
                  </div>
                  <div className="modalEndDate">
                    <p>End Date</p>
                    <input type="date" placeholder='Select end date' />
                    </div>
                  <div className="modalWeekDays">
                    <p>Enter No. of Weeks</p>
                    <input type="number" placeholder='Enter no. of weeks' />
                  </div>
                </div>
              </div>
              <div className="modal-footer">
                <button type="button" className="myBtn2 " data-dismiss="modal">Close</button>
                <button type="button" className="myBtn">Create</button>
              </div>
            </div>
          </div>
        </div>
        <div className="teamSearch">
          <BsSearch className='myIcon' />
          <input type="text" placeholder='Search your schedule' />
        </div>
      </div>
      <div className="scheduleList">
        <ScheduleItem title="Winter Training Schedule" />
        <ScheduleItem title="Summer Holidays" />
        <ScheduleItem title="Internship Schedule" />
        <ScheduleItem title="Monsoon Breaks" />
        <ScheduleItem title="Winter Training Schedule" />
        <ScheduleItem title="Summer Holidays" />
        <ScheduleItem title="Internship Schedule" />
        <ScheduleItem title="Monsoon Breaks" />
      </div>
    </div>
  )
}

export default Teams