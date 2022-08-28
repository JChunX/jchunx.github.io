import React from 'react'

import PropTypes from 'prop-types'

import './portfolio-gallery.css'

const PortfolioGallery = (props) => {
  return (
    <div id="works" className="portfolio-gallery-gallery">
      <div className="portfolio-gallery-container">
        <div className="portfolio-gallery-container01">
          <h1 className="portfolio-gallery-text">{props.heading}</h1>
          <span className="portfolio-gallery-text01">Python, C++, ROS2</span>
        </div>
      </div>
      <div className="portfolio-gallery-container02">
        <div className="portfolio-gallery-container03">
          <h1 className="portfolio-gallery-text02">{props.heading1}</h1>
          <span className="portfolio-gallery-text03">C++, OpenGL</span>
        </div>
      </div>
      <div className="portfolio-gallery-container04">
        <div className="portfolio-gallery-container05">
          <h1 className="portfolio-gallery-text04">{props.heading2}</h1>
          <span className="portfolio-gallery-text05">C++, Swift/SwiftUI</span>
        </div>
      </div>
      <div className="portfolio-gallery-container06">
        <div className="portfolio-gallery-container07">
          <h1 className="portfolio-gallery-text06">{props.heading3}</h1>
          <span className="portfolio-gallery-text07">Python, Tensorflow</span>
        </div>
      </div>
      <div className="portfolio-gallery-container08">
        <div className="portfolio-gallery-container09">
          <h1 className="portfolio-gallery-text08">{props.heading4}</h1>
          <span className="portfolio-gallery-text09">C++</span>
        </div>
      </div>
    </div>
  )
}

PortfolioGallery.defaultProps = {
  heading3: 'Ground Slope Prediction',
  heading2: 'Wearable Sleep Tracker',
  heading1: 'Mini Minecraft',
  heading4: 'IMU Sensor Fusion',
  heading: 'Prosthetic Leg Team',
}

PortfolioGallery.propTypes = {
  heading3: PropTypes.string,
  heading2: PropTypes.string,
  heading1: PropTypes.string,
  heading4: PropTypes.string,
  heading: PropTypes.string,
}

export default PortfolioGallery
