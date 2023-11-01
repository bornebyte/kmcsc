import React from 'react'
import Modal from '../components/Modal'

const About = () => {
  return (
    <div className='min-h-screen bg-gray-900 text-gray-400'>
      <Modal />
      <div className="container w-[60vw] mx-auto py-8">
        <p>At KMSS, there are array of clubs available for students to join and widen their horizon and experience.

          The clubs are student-managed with myriad activities varying on the specific purpose of each respective club which allow you to pursue your current interests and passions and perhaps even find ones you didn&apos;t know you had. The clubs will help you gain invaluable leadership, social and personal skills as well as life skills connecting you with other students who have similar interests. The clubs give you the opportunity to apply classroom learning to the outside world. They also channelize diverse interests by providing them with an avenue to display their talents.
        </p>
        <div className="title text-4xl text-white text-center font-bold my-8">Clubs</div>
        <div className="club-details flex gap-6">
          <div className="left-card ">
            <div className="club">
              <div className="club-title my-4 text-center text-white font-bold text-2xl">The Robits Club</div>
              <div className="content">
                Robotics club is a student-run club founded by energetic and enthusiastic seniors solely out of passion for Robotics. The Club has been involved in a continuous process of learning and exploring the possibilities in the field of robotics.
              </div>
            </div>
          </div>
          <div className="right-card ">
            <div className="club">
              <div className="club-title my-4 text-center text-white font-bold text-2xl">Research and Presentation Club</div>
              <div className="content">
              Research and Presentation club aims to develop basic research skills in students so that they can go through different sources to get conclusions & develop a research environment at a young age.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About