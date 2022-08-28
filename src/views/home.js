import React from 'react'

import { Helmet } from 'react-helmet'

import NavigationLinks from '../components/navigation-links'
import Face from '../components/face'
import SocialBar from '../components/social-bar'
import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>jchunx_portfolio</title>
        <meta property="og:title" content="jchunx_portfolio" />
      </Helmet>
      <header data-role="Header" className="home-header">
        <h1 className="home-heading">j</h1>
        <div className="home-nav">
          <nav className="home-nav1">
            <a href="#about" className="home-link">
              About
            </a>
            <a href="#works" className="home-link01">
              Works
            </a>
            <a href="#contact" className="home-link02">
              Contact
            </a>
          </nav>
        </div>
        <div data-type="BurgerMenu" className="home-burger-menu">
          <svg viewBox="0 0 1024 1024" className="home-icon">
            <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
          </svg>
        </div>
        <div data-type="MobileMenu" className="home-mobile-menu">
          <div className="home-nav2">
            <div className="home-container01">
              <img
                alt="image"
                src="https://presentation-website-assets.teleporthq.io/logos/logo.png"
                className="home-image"
              />
              <div
                data-type="CloseMobileMenu"
                className="home-close-mobile-menu"
              >
                <svg viewBox="0 0 1024 1024" className="home-icon02">
                  <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                </svg>
              </div>
            </div>
            <NavigationLinks rootClassName="navigation-links-root-class-name9"></NavigationLinks>
          </div>
          <div>
            <svg viewBox="0 0 950.8571428571428 1024" className="home-icon04">
              <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
            </svg>
            <svg viewBox="0 0 877.7142857142857 1024" className="home-icon06">
              <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
            </svg>
            <svg viewBox="0 0 602.2582857142856 1024" className="home-icon08">
              <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
            </svg>
          </div>
        </div>
      </header>
      <div className="home-hero">
        <div className="home-container02">
          <span>Hello, My Name is</span>
          <h1 className="home-heading1">Jason Xie</h1>
          <span className="home-text01">
            <span>
              I am a Master&apos;s student in Robotics at the University of
              Pennsylvania, and I love building things that interact through
              space and time, simulated or otherwise.
            </span>
          </span>
          <div className="home-btn-group">
            <a href="#about" className="home-link03 button">
              Find out more
            </a>
          </div>
        </div>
      </div>
      <div id="about" className="home-hero1">
        <Face rootClassName="face-root-class-name2"></Face>
        <div className="home-container03">
          <h1 className="home-text03">About Me</h1>
          <h2 className="home-text04"></h2>
          <div className="home-container04">
            <span className="home-text05">
              <span>
                Humans have an extraordinary ability to perceive, reason, and
                act about their environments. But robots are not quite up to our
                level yet. I am interested in developing robotics applications
                in vision and manipulation to advance this field and serve
                humanity.
              </span>
              <br></br>
              <span></span>
              <br></br>
              <span>
                Currently, I am a Master&apos;s Student in Robotics at the
                University of Pennsylvania, and I completed my undergraduate
                education in Computer Science and Biomedical Engineering at the
                University of North Carolina at Chapel Hill.
              </span>
              <br></br>
            </span>
          </div>
          <a href="#works" className="home-link04 button">
            Check out My Portfolio
          </a>
        </div>
      </div>
      <div id="works" className="home-gallery">
        <h1 className="home-text12">
          <span>Featured Works</span>
          <br></br>
        </h1>
        <a
          href="https://github.com/packbionics"
          target="_blank"
          rel="noreferrer noopener"
        >
          <div className="home-container05">
            <div className="home-container06">
              <h1 className="home-text15">Prosthetic Leg Team</h1>
              <span className="home-text16">Python, C++, ROS2</span>
            </div>
          </div>
        </a>
        <a
          href="https://github.com/JChunX/Mycraft"
          target="_blank"
          rel="noreferrer noopener"
        >
          <div className="home-container07">
            <div className="home-container08">
              <h1 className="home-text17">Mini Minecraft</h1>
              <span className="home-text18">C++, OpenGL</span>
            </div>
          </div>
        </a>
        <a
          href="https://github.com/peachbiotech"
          target="_blank"
          rel="noreferrer noopener"
        >
          <div className="home-container09">
            <div className="home-container10">
              <h1 className="home-text19">Wearable Sleep Tracker</h1>
              <span className="home-text20">C++, Swift/SwiftUI</span>
            </div>
          </div>
        </a>
        <a
          href="https://github.com/JChunX/slope-predict"
          target="_blank"
          rel="noreferrer noopener"
        >
          <div className="home-container11">
            <div className="home-container12">
              <h1 className="home-text21">Ground Slope Prediction</h1>
              <span className="home-text22">Python, Tensorflow</span>
            </div>
          </div>
        </a>
        <a
          href="https://github.com/JChunX/imu-kalman"
          target="_blank"
          rel="noreferrer noopener"
        >
          <div className="home-container13">
            <div className="home-container14">
              <h1 className="home-text23">IMU Sensor Fusion</h1>
              <span className="home-text24">C++</span>
            </div>
          </div>
        </a>
      </div>
      <div id="contact" className="home-hero2">
        <span className="home-text25">
          <span className="home-text26">ConTact</span>
        </span>
        <h1 className="home-text27">Let&apos;s get in touch!</h1>
        <SocialBar rootClassName="social-bar-root-class-name1"></SocialBar>
      </div>
    </div>
  )
}

export default Home
