import React from 'react';
import PropTypes from 'prop-types';
import StyledLink from './Styles';

function HeaderLink({ url, children }) {
  return (
    <StyledLink to={url}>
      {children}
    </StyledLink>
  );
}

HeaderLink.propTypes = {
  url: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default HeaderLink;
