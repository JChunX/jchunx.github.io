import React from 'react'

import PropTypes from 'prop-types'

import SocialBar from './social-bar'
import './intouch.css'

const Intouch = (props) => {
  return (
    <div id="contact" className={`intouch-hero ${props.rootClassName} `}>
      <span className="intouch-text">
        <span className="intouch-text1">ConTact</span>
      </span>
      <h1 className="intouch-text2">{props.heading}</h1>
      <SocialBar rootClassName="social-bar-root-class-name"></SocialBar>
    </div>
  )
}

Intouch.defaultProps = {
  rootClassName: '',
  heading: "Let's get in touch!",
}

Intouch.propTypes = {
  rootClassName: PropTypes.string,
  heading: PropTypes.string,
}

export default Intouch
