import React, {useEffect} from 'react'
import { BsBookmarkCheck, BsShieldCheck } from 'react-icons/bs'
import { RxCalendar } from 'react-icons/rx'
import Aos from 'aos'
import 'aos/dist/aos.css'

const Info = () => {

  useEffect(() => {
    Aos.init({duration: 2000})
  })

  return (
    <div className='info section'>
        <div className="info-container container">
          <div className="title-container flex">
            <h2 data-aos="fade-right" data-aos-duration="2500">Travel to make memories all around the world</h2>
            <button data-aos="fade-left" data-aos-duration="2500" className='btn'>View All</button>
          </div>
          <div className="cards-container grid">
            <div data-aos="fade-up" data-aos-duration="2500" className="single-card grid">
              <div className="icon-container flex">
                <RxCalendar className='icon'/>
              </div>
              <span className="card-title">Book and Relax</span>
              <p>You can also call airlines from your phone and book a flight ticket!</p>
            </div>
            <div data-aos="fade-up" data-aos-duration="3500" className="single-card grid">
              <div className="icon-container flex color-one">
                <BsShieldCheck className='icon'/>
              </div>
              <span className="card-title">Smart Checklist</span>
              <p>You can also call airlines from your phone and book a flight ticket!</p>
            </div>
            <div data-aos="fade-up" data-aos-duration="4500" className="single-card grid">
              <div className="icon-container flex color-two">
                <BsBookmarkCheck className='icon'/>
              </div>
              <span className="card-title">Save More</span>
              <p>You can also call airlines from your phone and book a flight ticket!</p>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Info