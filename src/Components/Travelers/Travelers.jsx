import React, {useEffect} from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'

const Travelers = () => {
  const parisImg = "https://images.unsplash.com/photo-1564594736624-def7a10ab047?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGFyaXMlMjBmcmFuY2V8ZW58MHx8MHx8fDA%3D&w=1000&q=80";
  const londonImg = "https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/London_Big_Ben_Phone_box.jpg/1200px-London_Big_Ben_Phone_box.jpg";
  const newYorkImg = "https://cdn.britannica.com/73/114973-050-2DC46083/Midtown-Manhattan-Empire-State-Building-New-York.jpg";
  const warzawImg = "https://media.timeout.com/images/105741309/image.jpg";

  const firstTraveler = "https://img.freepik.com/premium-photo/natural-real-person-portrait-closeup-woman-girl-female-outside-nature-forest-artistic-edgy-cute-pretty-face-ai-generated_590464-133624.jpg";
  const secondTraveler = "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cGVvcGxlJTIwcG9ydHJhaXR8ZW58MHx8MHx8fDA%3D&w=1000&q=80";
  const thirdTraveler = "https://images.squarespace-cdn.com/content/v1/524c7a69e4b076c200185e4d/1648499357370-QGAU55C0TKI0W1P5ZRSK/Arthur.jpg";
  const fourthTraveler = "https://i0.wp.com/digital-photography-school.com/wp-content/uploads/2011/07/outdoor-portraits-1.jpg?fit=5184%2C3456&ssl=1";

  const travelers = [
    {
      id: 1,
      destinationImage: parisImg,
      travelerImage: firstTraveler,
      travelerName: 'Kate Brown'
    },
    {
      id: 2,
      destinationImage: londonImg,
      travelerImage: secondTraveler,
      travelerName: 'Henry James'
    },
    {
      id: 3,
      destinationImage: newYorkImg,
      travelerImage: thirdTraveler,
      travelerName: 'Michael Town'
    },
    {
      id: 4,
      destinationImage: warzawImg,
      travelerImage: fourthTraveler,
      travelerName: 'Elizabeth Johnson'
    }
  ]

  useEffect(() => {
    Aos.init({duration: 2000})
  })

  return (
    <div className='travelers container section'>
      <div className="section-container">
        <h2 data-aos="fade-down" data-aos-duration="2500">Top travelers of this month!</h2>
        <div className="travelers-container grid">
          {
            travelers.map(({id, destinationImage, travelerImage, travelerName}) => (
                <div data-aos="fade-up" data-aos-duration="2500" key={id} className="single-traveler">
                  <img src={destinationImage} className='destination-img' alt=''></img>
                  <div className="traveler-details">
                    <div className="traveler-picture">
                      <img src={travelerImage} className='traveler-img' alt='' />
                    </div>
                    <div className="traveler-name">
                      <span>{travelerName}</span>
                    </div>
                  </div>
                </div>
              )
            )
          }
        </div>
      </div>
    </div>
  )
}

export default Travelers