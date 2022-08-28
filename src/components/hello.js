import React from 'react'

import PropTypes from 'prop-types'

import './hello.css'

const Hello = (props) => {
  return (
    <div className={`hello-hero ${props.rootClassName} `}>
      <div className="hello-container">
        <span>{props.text}</span>
        <h1 className="hello-heading">{props.heading}</h1>
        <span className="hello-text1">
          <span>
            I am a Master&apos;s student in Robotics at the University of
            Pennsylvania, and I love building things that interact through space
            and time, simulated or otherwise.
          </span>
        </span>
        <div className="hello-btn-group">
          <button className="hello-button button">{props.button}</button>
        </div>
      </div>
    </div>
  )
}

Hello.defaultProps = {
  image_src:
    'https://images.unsplash.com/photo-1525498128493-380d1990a112?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDI0fHxtaW5pbWFsaXNtJTIwZ3JlZW58ZW58MHx8fHwxNjI1ODQxMDcw&ixlib=rb-1.2.1&h=1200',
  button: 'Find out more',
  heading: 'Jason Xie',
  text: 'Hello, My Name is',
  rootClassName: '',
}

Hello.propTypes = {
  image_src: PropTypes.string,
  button: PropTypes.string,
  heading: PropTypes.string,
  text: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default Hello
