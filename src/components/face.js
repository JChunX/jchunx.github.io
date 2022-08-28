import React from 'react'

import PropTypes from 'prop-types'

import './face.css'

const Face = (props) => {
  return (
    <div className={`face-container ${props.rootClassName} `}>
      <img
        alt={props.image_alt}
        src="/playground_assets/img_1352-300w.jpg"
        className="face-image"
      />
    </div>
  )
}

Face.defaultProps = {
  image_alt: 'image',
  rootClassName: '',
}

Face.propTypes = {
  image_alt: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default Face
