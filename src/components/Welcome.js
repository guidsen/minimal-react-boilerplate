import React, { PropTypes } from 'react';

const Welcome = ({ text }) => <h1>{text}</h1>;

Welcome.propTypes = {
  text: PropTypes.string.required,
};

export default Welcome;
