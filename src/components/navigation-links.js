import React from 'react'
import { Link } from 'react-router-dom'

import PropTypes from 'prop-types'

import './navigation-links.css'

const NavigationLinks = (props) => {
  return (
    <nav className={`navigation-links-nav ${props.rootClassName} `}>
      <Link to="/" className="navigation-links-link">
        {props.text}
      </Link>
      <span className="navigation-links-text">{props.text1}</span>
      <span className="navigation-links-text1">{props.text11}</span>
    </nav>
  )
}

NavigationLinks.defaultProps = {
  text11: 'Contact',
  rootClassName: '',
  text1: 'Works',
  text: 'About',
}

NavigationLinks.propTypes = {
  text11: PropTypes.string,
  rootClassName: PropTypes.string,
  text1: PropTypes.string,
  text: PropTypes.string,
}

export default NavigationLinks
