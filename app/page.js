import Image from "next/image";
import {
  FaPhoneAlt,
  FaRegEnvelope,
  FaHome,
  FaStar,
  FaRegStar,
  FaRegStarHalfStroke,
} from "react-icons/fa";

export default function Home() {
  return (
    <>
      <div className="profileContainer">
        <div className="imgContainer">
          <img src="/images/profile.png"></img>
        </div>
        <div className="inlineBlock textContainer">
          <h1>Ei Zar Paing</h1>
          <h2 className="fontColor">Software Engineer</h2>
          <p>
            Looking for a challenging role in a reputed company to utilize my
            over 9 years of software engineering skills that can contribute to
            the company’s growth as well as enhance my knowledge by exploring
            new technologies.
          </p>
        </div>
      </div>
      <div className="experienceContainter marginTop">
        <div className="imgContainer">
          <h3 className="bgColor">Contact me</h3>
          <div className="leftContainer">
            <div className="flex marginBottom">
              <FaPhoneAlt />
              <div className="iconText">+65 9373 1731</div>
            </div>
            <div className="flex marginBottom">
              <FaRegEnvelope />
              <div className="iconText">eizarpaing.sg@gmail.com</div>
            </div>
            <div className="flex marginBottom">
              <FaHome />
              <div className="iconText">Japan, Kawaguchi City</div>
            </div>
          </div>
          <h3 className="bgColor">Soft Skills</h3>
          <div className="leftContainer">
            <ul class="list-disc">
              <li>HTML, CSS</li>
              <li>JavaScript</li>
              <li>jQuery</li>
              <li>ReactJS</li>
              <li>Node.js</li>
              <li>Ruby on Rails</li>
              <li>Flutter</li>
            </ul>
          </div>
          <h3 className="bgColor">Key Skills</h3>
          <div className="leftContainer">
            <ul class="list-disc">
              <li>Self-learning</li>
              <li>Problem Solving</li>
              <li>Decision Making</li>
              <li>Tolerance and Respectfulness</li>
              <li>Discussion and Negotiation</li>
            </ul>
          </div>
          <h3 className="bgColor">Languages</h3>
          <div className="leftContainer">
            <ul class="list-disc">
              <li>
                <div className="lanContainter">
                  <div>Myanmar</div>
                  <div className="inlineBlock">
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                  </div>
                </div>
              </li>
              <li>
                <div className="lanContainter">
                  <div>English</div>
                  <div className="inlineBlock">
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaRegStar />
                    <FaRegStar />
                  </div>
                </div>
              </li>
              <li>
                <div className="lanContainter">
                  <div>Japanese</div>
                  <div className="inlineBlock">
                    <FaStar />
                    <FaStar />
                    <FaRegStar />
                    <FaRegStar />
                    <FaRegStar />
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className="inlineBlock textContainer">
          <h3 className="bgColor">Qualifications</h3>
          <div className="marginTop">
            <h3>University of Computer Studies, Yangon</h3>
            <div className="title">Master of Computer Science</div>
            <div className="title2">2011 ~ 2017</div>
            <div className="title">Bachelor of Computer Science (Honours)</div>
            <div className="title2">2010 ~ 2011</div>
            <div className="title">Bachelor of Computer Science</div>
            <div className="title2">2007 ~ 2010</div>
          </div>
          <h3 className="bgColor">Work Experience</h3>
          <div className="marginTop">
            <h3>
              Cloudsource <span className="title2">(Tokyo, Japan)</span>
            </h3>
            <div className="title2">Programmer (Feb 2020 to Jun 2023)</div>
            <ul class="list-disc">
              <li>
                Self-learning ReactJS. Developing Web Apps using React, CSS and
                Firestore database.
              </li>
              <li>
                Self-learning Flutter. Developing Hybrid Mobile Apps using
                Flutter and Firestore database by leading a team of 3 or more
                developers. And Developing iOS by Swift for some tasks that are
                not available in Hybrid language.
              </li>
              <li>Using effectively code version tools, such as Git.</li>
              <li>Using google cloud services to deploy apps.</li>
            </ul>
          </div>
          <div className="marginTop">
            <h3>
              Cloudsource <span className="title2">(Yangon, Myanmar)</span>
            </h3>
            <div className="title2">
              Ruby on Rails Developer (Oct 2016 to Jan 2020)
            </div>
            <ul class="list-disc">
              <li>
                Self-learning Ruby on Rails. Developing GraphQL APIs, Restful
                APIs and Web Apps by using Ruby on Rails. Conducting testing
                projects using RSpec.
              </li>
              <li>Developing Web Apps using HTML, CSS and JavaScript.</li>
              <li>Using Docker and AWS cloud services.</li>
              <li>
                Three-month training course in Japan focused on API development
                and web design using Ruby on Rails, collaborating closely with
                Japanese team members.
              </li>
            </ul>
          </div>
          <div className="marginTop">
            {/* <div className='title'>Cloudsource</div> */}
            <div className="title2">
              Android Developer (Jul 2016 to Sep 2016)
            </div>
            <ul class="list-disc">
              <li>
                Developing Android Mobile App by using Android and Firebase
                Realtime Database.
              </li>
            </ul>
          </div>
          <div className="marginTop">
            <h3>
              Fun and Learn Education Center{" "}
              <span className="title2">(Yangon, Myanmar)</span>
            </h3>
            <div className="title2">
              Programmer Analyst (Dec 2013 to Jun 2016)
            </div>
            <ul class="list-disc">
              <li>Developing Web Apps using HTML, CSS and JavaScript.</li>
              <li>
                Self-learning Android and Developing Mobile Apps by using
                Android.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
