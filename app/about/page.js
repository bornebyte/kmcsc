import React from 'react'
import Ecaheadsir from '../components/Amitghartisir'

const Line = () => {
  return (
    <div className='flex justify-center items-center'>
      <div className='my-16 mx-12 h-1 w-full bg-indigo-500'></div>
    </div>
  )
}

const About = () => {
  return (
    <div className='min-h-screen bg-gray-900 text-gray-400'>
      <div className="w-full mx-auto py-2 px-4">
        <div className="title text-4xl text-white text-center font-bold my-8">Clubs</div>
        <p className='my-6'>At KMSS, there are array of clubs available for students to join and widen their horizon and experience.
          The clubs are student-managed with myriad activities varying on the specific purpose of each respective club which allow you to pursue your current interests and passions and perhaps even find ones you didn&apos;t know you had. The clubs will help you gain invaluable leadership, social and personal skills as well as life skills connecting you with other students who have similar interests. The clubs give you the opportunity to apply classroom learning to the outside world. They also channelize diverse interests by providing them with an avenue to display their talents.
        </p>
        <Line />
        <div className="club-details flex-col gap-6">
          <div className="left-card ">
            <div className="club">
              <div className="club-title my-4 text-center text-white font-bold text-2xl">The Robits Club</div>
              <div className="content">
                Robotics club is a student-run club founded by energetic and enthusiastic seniors solely out of passion for Robotics. The Club has been involved in a continuous process of learning and exploring the possibilities in the field of robotics.
              </div>
            </div>
            <Line />
            <div className="club">
              <div className="club-title my-4 text-center text-white font-bold text-2xl">Literature Club</div>
              <div className="content">
                Literature club is an asylum for the literary minds to pour out the literary skill that lives concealed within themselves.
              </div>
            </div>
            <Line />
            <div className="club">
              <div className="club-title my-4 text-center text-white font-bold text-2xl">Art and Cultural Club</div>
              <div className="content">
                Art and Culture Club is a club with the imagination, creativeness and a something of craziness flowing through the heart and mind of all the members. It is a club that shares the unique and different prospective toward art and culture.
              </div>
            </div>
            <Line />
            <div className="club">
              <div className="club-title my-4 text-center text-white font-bold text-2xl">Speech and Debate Club</div>
              <div className="content">
                Speech and Debate club aims to organize speech and debate competitions where in student’s gets priority in developing the speaking skills, capabilities through different programs.
              </div>
            </div>
            <Line />
            <div className="club">
              <div className="club-title my-4 text-center text-white font-bold text-2xl">Legal Club</div>
              <div className="content">
                Legal Club aims to make students aware of the Constitution of the KMC Students Committee, make necessary acts, amendments and bylaws. Legal club further conducts legal awareness programs, moot court and so on.
              </div>
            </div>
            <Line />
            <div className="club">
              <div className="club-title my-4 text-center text-white font-bold text-2xl">Social Service Club</div>
              <div className="content">
                Social Service Club is based on doing acts of service to the society. This club hosts numerous programs to make people aware of the events happening in the society and help out the one in need of it be it a person or an animal.
              </div>
            </div>
            <Line />
            <div className="club">
              <div className="club-title my-4 text-center text-white font-bold text-2xl">Editorial Team</div>
              <div className="content">
                With the very purpose of management of KMC Wall Magazine, the editorial team, hence formed, bestows shelter to the creative and innovative mind. There is the provision of Wall Magazine in KMC where the talents from different fields get a platform to perform.
              </div>
            </div>
            <Line />
            <div className="club">
              <div className="club-title my-4 text-center text-white font-bold text-2xl">SEDS-KMC</div>
              <div className="content">
                Student for Exploration and Development of Space (SEDS-KMC) is a platform that allows students to enter the realm of space exploration and engineering experiences. The club consists of group of like-minded people and space enthusiasts aspiring to explore the universe.
              </div>
            </div>
            <Line />
          </div>
          <div className="right-card ">
            <div className="club">
              <div className="club-title my-4 text-center text-white font-bold text-2xl">Research and Presentation Club</div>
              <div className="content">
                Research and Presentation club aims to develop basic research skills in students so that they can go through different sources to get conclusions & develop a research environment at a young age.
              </div>
            </div>
            <Line />
            <div className="club">
              <div className="club-title my-4 text-center text-white font-bold text-2xl">Dance Club</div>
              <div className="content">
                Dance Club stands as an independent club formed with the aim to explore the unexplored dance forms in the institution.
              </div>
            </div>
            <Line />
            <div className="club">
              <div className="club-title my-4 text-center text-white font-bold text-2xl">Music Club</div>
              <div className="content">
                Music Club is an independent club formed to promote music taste and talent amongst KMSS students by providing opportunity to showcase their musical talent at events throughout the year.
              </div>
            </div>
            <Line />
            <div className="club">
              <div className="club-title my-4 text-center text-white font-bold text-2xl">Event Management Club</div>
              <div className="content">
                Event Management Club is a club, which believes in the magic of co-ordination and teamwork, a club whose strength is its individual members and individual member’s strength is the club itself.
              </div>
            </div>
            <Line />
            <div className="club">
              <div className="club-title my-4 text-center text-white font-bold text-2xl">Media Club</div>
              <div className="content">
                Media Club is made up of a close-knitted group of learners who share a common interest in photography and live sound production. They work tirelessly around the institute to support all its visual and media needs throughout the year.
              </div>
            </div>
            <Line />
            <div className="club">
              <div className="club-title my-4 text-center text-white font-bold text-2xl">Computer Club</div>
              <div className="content">
                Computer science club is designed to use computer science, programming in such a way to motivate the high school students to learn and innovate better.
              </div>
            </div>
            <Line />
            <div className="club">
              <div className="club-title my-4 text-center text-white font-bold text-2xl">KMC Maths Circle</div>
              <div className="content">
                The main goal to establish KMSS Math Club is to make learning resources and opportunities accessible to students and provide a common platform for students to engage in mathematics through events that make students aware of the ideas embedded in Mathematics and why Mathematics is the most beautiful subject.
              </div>
            </div>
            <Line />
          </div>
        </div>
        <Ecaheadsir />
      </div>
    </div>
  )
}

export default About