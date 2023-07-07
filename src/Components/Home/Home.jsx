import React, {useEffect} from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'

const Home = () => {

  useEffect(() => {
    Aos.init({duration: 2000})
  })

  return (
    <div className='home flex container'>
      <div className="main-text">
        <h1 data-aos="fade-up" data-aos-duration="2500">Create Ever-lasting Memories With Us</h1>
      </div>
      <div data-aos="fade-down" data-aos-duration="2500" className="home-images flex">
        <div className='video-container'>
          <video src='/assets/mountain.mp4' autoPlay muted loop className='video'></video>
        </div>
        <img src='/assets/takeoff.png' className='plane'></img>
      </div>
    </div>
  )
}

export default Home