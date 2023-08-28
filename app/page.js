import Image from 'next/image'
import Phone from './components/phone'
import { FaPhoneAlt, FaRegEnvelope, FaHome } from 'react-icons/fa';

export default function Home() {
  return (
    <>
    <div className='profileContainer'>
      <div className='imgContainer'>
      <img src='/images/profile.png'></img>
      </div>
      <div className='inlineBlock textContainer'>
        <h1>Ei Zar Paing</h1>
        <h2>Software Engineer</h2>
        <p>Looking for a challenging role in a reputed company to utilize 
          my over 9 years of software engineering skills that can contribute to 
          the company’s growth as well as enhance my knowledge by exploring new things.
        </p>
      </div>
    </div>
    <div className='experienceContainter marginTop'>
      <div className='imgContainer'>
        <h3 className='bgColor'>Contact me</h3>
        <div className='leftContainer'>
          <div className='flex marginBottom'>
            <FaPhoneAlt />
            <div className="iconText">+81 70 3326 0606</div>
          </div>
          <div className='flex marginBottom'>
            <FaRegEnvelope />
            <div className="iconText">eizarpaing1@gmail.com</div>
          </div>
          <div className='flex marginBottom'>
            <FaHome />
            <div className="iconText">Japan, Kawaguchi city</div>
          </div>
        </div>
        <h3 className='bgColor'>Soft Skills</h3>
        <div className='leftContainer'>
          <ul class="list-disc">
            <li>HTML, CSS</li>
            <li>JavaScript</li>
            <li>ReactJS</li>
            <li>Node.js</li>
            <li>Ruby on Rails</li>
            <li>Flutter</li>
          </ul>
        </div>
        <h3 className='bgColor'>Key Skills</h3>
        <div className='leftContainer'>
          <ul class="list-disc">
            <li>Self-learning</li>
            <li>Problem Solving</li>
            <li>Decision Making</li>
            <li>Tolerance and Respectfulness</li>
            <li>Discussion and Negotiation</li>
          </ul>
        </div>
        <h3 className='bgColor'>Languages</h3>
        <div className='leftContainer'>
          <ul class="list-disc">
            <li>English</li>
            <li>Japanese</li>
            <li>Myanmar</li>
          </ul>
        </div>
      </div>
      <div className='inlineBlock textContainer'>
        <h2 className='bgColor'>Qualifications</h2>
        <div className='marginTop'>
          <h3>University of Computer Studies, Yangon</h3>
          <div className='title'>Master of Computer Science</div>
          <div className='title2'>2012 ~ 2018</div>
          <div className='title'>Bachelor of Computer Science (Honours)</div>
          <div className='title2'>2011 ~ 2012</div>
          <div className='title'>Bachelor of Computer Science</div>
          <div className='title2'>2008 ~ 2011</div>
        </div>
        <h3 className='bgColor'>Work Experience</h3>
        <div className='marginTop'>
          <div className='title'>Cloudsource</div>
          <div className='title2'>Programmer (February 2020 to June 2023)</div>
          <ul class="list-disc">
            <li>Self-learning ReactJS. Developing Web Apps using React, 
              CSS and Firestore database.
            </li>
            <li>
              Self-learning Flutter. Developing Hybrid Mobile Apps using Flutter and Firestore database by leading a team of 3 or more developers. And Developing iOS by Swift for some tasks that are not available in Hybrid language.
            </li>
            <li>
              Using effectively code version tools, such as Git.
            </li>
            <li>
              Using google cloud services to deploy apps.
            </li>
          </ul>
        </div>
        <div className='marginTop'>
          <div className='title'>Cloudsource</div>
          <div className='title2'>Ruby on Rails Developer (October 2016 to January 2020)</div>
          <ul class="list-disc">
            <li>
              Self-learning Ruby on Rails. Developing Restful APIs and Web Apps by using Ruby on Rails.
            </li>
            <li>
              Developing Web Apps using HTML, CSS and JavaScript.
            </li>
            <li>
              Using Docker and AWS cloud services to develop GraphQL API.
            </li>
          </ul>
        </div>
        <div className='marginTop'>
          <div className='title'>Cloudsource</div>
          <div className='title2'>Android Developer (July 2016 to September 2016)</div>
          <ul class="list-disc">
            <li>
              Developing Android Mobile App by using Android and Firebase Realtime Database.
            </li>
          </ul>
        </div>
        <div className='marginTop'>
          <div className='title'>Fun and Learn Education Center</div>
          <div className='title2'>Programmer Analyst (December 2013 to June 2016)</div>
          <ul class="list-disc">
            <li>
              Developing Web Apps using HTML, CSS and JavaScript.
            </li>
            <li>
              Self-learning Android and Developing Mobile Apps by using Android.
            </li>
          </ul>
        </div>
      </div>
    </div>
    </>
  )
}
