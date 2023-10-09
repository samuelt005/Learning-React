import React from 'react';
import PropTypes from 'prop-types';
import StyledContainer from './Styles';

function Container({ children }) {
  return (
    <StyledContainer>
      {children}
    </StyledContainer>
  );
}

Container.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Container;
