import React from 'react'

import { Helmet } from 'react-helmet'

import GalleryCard1 from '../components/gallery-card1'
import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Sane Clear Badger</title>
        <meta property="og:title" content="Sane Clear Badger" />
      </Helmet>
      <div className="home-container1">
        <img
          alt="image"
          src="/playground_assets/dall%C2%B7e%202022-11-19%2015.27.28%20-%20handsome%20young%20asian%20man%20with%2060-40%20parted%20hair%20style-200h.png"
          className="home-image"
        />
        <div className="home-container2">
          <h1 className="home-text">
            <br></br>
            <span>Jason Xie</span>
          </h1>
          <span className="home-text03">
            <span>robotics @ Penn GRASP</span>
            <br></br>
          </span>
          <div className="home-container3">
            <a
              href="https://mailto:xiejiachun@gmail.com"
              target="_blank"
              rel="noreferrer noopener"
              className="home-link"
            >
              <span className="home-text06">Email</span>
              <br></br>
            </a>
            <a
              href="https://www.linkedin.com/in/jia-chun-xie"
              target="_blank"
              rel="noreferrer noopener"
              className="home-link1"
            >
              <span>Linkedin</span>
              <br></br>
            </a>
            <a
              href="https://www.github.com/JChunX"
              target="_blank"
              rel="noreferrer noopener"
              className="home-link2"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
      <div className="home-banner">
        <h1 className="home-text10">About</h1>
        <span className="home-text11">
          <span>
            - I like programming for things that interact in the real world
          </span>
          <br></br>
          <span>
            - I believe safe, autonomous agents are essential in a world with an
            increasingly aging population
          </span>
          <br></br>
          <span>- Feel free to browse through my projects!</span>
          <br></br>
        </span>
      </div>
      <h1 className="home-text18">Projects</h1>
      <div className="home-gallery">
        <a
          href="https://github.com/JChunX/gait-trans"
          target="_blank"
          rel="noreferrer noopener"
        >
          <GalleryCard1
            image_src="/playground_assets/screenshot%202023-01-11%20at%2016.59.49-1500h.png"
            rootClassName="rootClassName"
            className="home-component"
          ></GalleryCard1>
        </a>
        <a
          href="https://github.com/JChunX/imu-kalman"
          target="_blank"
          rel="noreferrer noopener"
        >
          <GalleryCard1
            title="IMU Kalman Filtering"
            subtitle="C++"
            image_src="/playground_assets/tempimagenvfvqk-1500h.gif"
            rootClassName="rootClassName1"
            className="home-component1"
          ></GalleryCard1>
        </a>
        <a
          href="https://github.com/JChunX/Mycraft"
          target="_blank"
          rel="noreferrer noopener"
        >
          <GalleryCard1
            title="Mini Minecraft"
            subtitle="C++, OpenGL"
            image_src="/playground_assets/screenshot%20from%202022-08-27%2019-30-16-1500h.png"
            rootClassName="rootClassName2"
            className="home-component2"
          ></GalleryCard1>
        </a>
        <a
          href="https://github.com/peachbiotech/sleep-tracker"
          target="_blank"
          rel="noreferrer noopener"
        >
          <GalleryCard1
            title="Wearable Sleep Tracker"
            subtitle="C++, Swift"
            image_src="/playground_assets/unnamed-1500w.jpg"
            rootClassName="rootClassName3"
            className="home-component3"
          ></GalleryCard1>
        </a>
        <a
          href="https://github.com/packbionics"
          target="_blank"
          rel="noreferrer noopener"
        >
          <GalleryCard1
            title="Prosthetic Leg Software"
            subtitle="C++, Python, ROS2, OpenCV, PyBullet"
            image_src="/playground_assets/screen%20shot%202022-08-27%20at%2019.30.57-1500w.png"
            rootClassName="rootClassName4"
            className="home-component4"
          ></GalleryCard1>
        </a>
        <a
          href="https://github.com/JChunX/slope-predict"
          target="_blank"
          rel="noreferrer noopener"
        >
          <GalleryCard1
            title="Ground Slope Prediction"
            subtitle="Python, Tensorflow"
            image_src="/playground_assets/screen%20shot%202022-08-27%20at%2019.59.17-1500w.png"
            rootClassName="rootClassName5"
            className="home-component5"
          ></GalleryCard1>
        </a>
      </div>
    </div>
  )
}

export default Home
