import React from 'react';
import PropTypes from 'prop-types';
import StyledBanner from './Styles';

function Banner({ image }) {
  return (
    <StyledBanner
      image={image}
    />
  );
}

Banner.propTypes = {
  image: PropTypes.string.isRequired,
};

export default Banner;
