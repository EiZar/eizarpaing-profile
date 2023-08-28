import Image from 'next/image'

export default function Home() {
  return (
    <>
    <div className='flexContainer'>
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
    <div className='flexContainer'>
      <div className='imgContainer'>
        <h3>Contact me</h3>
        <ul class="list-disc">
          <li>eizarpaing1@gmail.com</li>
          <li>+81 70 3326 0606</li>
        </ul>
      </div>
      <div className='inlineBlock textContainer'>
        <h3 className='bgColor'>Work Experience</h3>
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
    </div>
    </>
  )
}
