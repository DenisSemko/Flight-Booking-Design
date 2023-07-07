import React, {useEffect} from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'

const Lounge = () => {

  useEffect(() => {
    Aos.init({duration: 2000})
  })

  return (
    <div className='lounge container section'>
        <div className="section-container grid">
          <div data-aos="fade-down" data-aos-duration="2500" className="img-container">
            <img src='https://media.istockphoto.com/id/1368923887/photo/a-narrow-aisle-between-the-rows-of-passenger-seats-in-the-cabin-of-a-budget-airliner.jpg?s=612x612&w=0&k=20&c=FP6VKP7lgzciakUh9iCBu9ayDl1XAJQwPXim8AO18Ok=' className='hallway' />
          </div>
          <div className="text-container">
            <h2 data-aos="fade-down" data-aos-duration="2500">Unaccompanied Minor Lounge</h2>
            <div className="grid-container grid">
            <div data-aos="fade-down" data-aos-duration="2500" className="single-grid">
              <span className='grid-title'>Help through the airport</span>
              <p>You can also call airlines from your phone and book a flight ticket to one of your favourite destinations</p>
            </div>
            <div data-aos="fade-down" data-aos-duration="2500" className="single-grid">
              <span className='grid-title'>Priority Boarding</span>
              <p>You can also call airlines from your phone and book a flight ticket to one of your favourite destinations</p>
            </div>
            <div data-aos="fade-down" data-aos-duration="2500" className="single-grid">
              <span className='grid-title'>Care on the flight</span>
              <p>You can also call airlines from your phone and book a flight ticket to one of your favourite destinations</p>
            </div>
            <div data-aos="fade-down" data-aos-duration="2500" className="single-grid">
              <span className='grid-title'>Chauffeur-drive service</span>
              <p>You can also call airlines from your phone and book a flight ticket to one of your favourite destinations</p>
            </div>
          </div>
          </div>
        </div>
    </div>
  )
}

export default Lounge