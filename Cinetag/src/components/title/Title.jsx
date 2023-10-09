import React from 'react';
import PropTypes from 'prop-types';
import StyledTitle from './Styles';

function Title({ children }) {
  return (
    <StyledTitle>
      {children}
    </StyledTitle>
  );
}

Title.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Title;
