import React, {useEffect} from 'react'
import { HiOutlineLocationMarker } from 'react-icons/hi'
import { RiAccountPinCircleLine } from 'react-icons/ri'
import { RxCalendar } from 'react-icons/rx'
import Aos from 'aos'
import 'aos/dist/aos.css'

const Search = () => {

  useEffect(() => {
    Aos.init({duration: 2000})
  })

  return (
    <div className='search container section'>
      <div data-aos="fade-up" data-aos-duration="2500" className="section-container grid">
        <div className="btn-container flex">
          <div className="single-btn">
            <span>Economy</span>
          </div>
          <div className="single-btn">
            <span>Business Class</span>
          </div>
          <div className="single-btn">
            <span>First Class</span>
          </div>
        </div>
        <div data-aos="fade-up" data-aos-duration="2000" className="search-input-container flex">
          <div className="single-input flex">
            <div className="icon-container">
              <HiOutlineLocationMarker className='icon' />
            </div>
            <div className="text-container">
              <h4>Location</h4>
              <input type="text" placeholder='Where do you want?' />
            </div>
          </div>
          <div className="single-input flex">
            <div className="icon-container">
              <RiAccountPinCircleLine className='icon' />
            </div>
            <div className="text-container">
              <h4>Travelers</h4>
              <input type="text" placeholder='Add guests' />
            </div>
          </div>
          <div className="single-input flex">
            <div className="icon-container">
              <RxCalendar className='icon' />
            </div>
            <div className="text-container">
              <h4>Check In</h4>
              <input type="text" placeholder='Add date' />
            </div>
          </div>
          <div className="single-input flex">
            <div className="icon-container">
              <RxCalendar className='icon' />
            </div>
            <div className="text-container">
              <h4>Check Out</h4>
              <input type="text" placeholder='Add date' />
            </div>
          </div>
          <button className='btn btn-block flex'>Search Flight</button>
        </div>
      </div>
    </div>
  )
}

export default Search