import React from 'react'

import PropTypes from 'prop-types'

import Face from './face'
import './about.css'

const About = (props) => {
  return (
    <div id="about" className={`about-hero ${props.rootClassName} `}>
      <Face rootClassName="face-root-class-name"></Face>
      <div className="about-container">
        <h1 className="about-text">{props.heading}</h1>
        <h2 className="about-text1">{props.heading1}</h2>
        <div className="about-container1">
          <span className="about-text2">
            <span>
              Humans have an extraordinary ability to perceive, reason, and act
              about their environments. But robots are not quite up to our level
              yet. I am interested in developing robotics applications in vision
              and manipulation to advance this field and serve humanity.
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
        <button className="about-button button">{props.button}</button>
      </div>
    </div>
  )
}

About.defaultProps = {
  rootClassName: '',
  rootClassName1: '',
  heading: 'About Me',
  image_src:
    'https://images.unsplash.com/photo-1529859503572-5b9d1e68e952?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDN8fG1pbmltYWxpc20lMjBjb3VjaHxlbnwwfHx8fDE2MjYxODI1OTE&ixlib=rb-1.2.1&w=1200',
  heading1: '',
  button: 'Check out My Portfolio',
}

About.propTypes = {
  rootClassName: PropTypes.string,
  rootClassName1: PropTypes.string,
  heading: PropTypes.string,
  image_src: PropTypes.string,
  heading1: PropTypes.string,
  button: PropTypes.string,
}

export default About
