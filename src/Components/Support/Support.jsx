import React, {useEffect} from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'

const Support = () => {

  useEffect(() => {
    Aos.init({duration: 2000})
  })

  return (
    <div className='support container section'>
      <div className="section-container">
          <div className="title-container">
            <small>travel support</small>
            <h2>Plan your travel with confidence</h2>
            <p>Find help with booking and travel plans, see what to expect along the journey!</p>
          </div>
          <div className="info-container grid">
            <div className="text-container grid">
              <div data-aos="fade-down" data-aos-duration="2500" className="single-info">
                <span className='number'>01</span>
                <h4>Travel requirements for Dubai</h4>
                <p>
                  Find help with booking and travel plans, see what to expect along the journey to your favourite destinations!
                </p>
              </div>
              <div data-aos="fade-down" data-aos-duration="3500" className="single-info">
                <span className='number color-one'>02</span>
                <h4>Chauffeur services at your arrival</h4>
                <p>
                  Find help with booking and travel plans, see what to expect along the journey to your favourite destinations!
                </p>
              </div>
              <div data-aos="fade-down" data-aos-duration="4500" className="single-info">
                <span className='number color-two'>03</span>
                <h4>Multi-risk travel insurance</h4>
                <p>
                  Find help with booking and travel plans, see what to expect along the journey to your favourite destinations!
                </p>
              </div>
            </div>
            <div data-aos="fade-up" data-aos-duration="2500" className="img-container">
              <img src="https://miro.medium.com/v2/resize:fit:1400/0*vFbDaNlm8xFHAYvx" className='window-plane'></img>
            </div>
          </div>
      </div>
    </div>
  )
}

export default Support