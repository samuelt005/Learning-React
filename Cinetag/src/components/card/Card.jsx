import React from 'react';
import PropTypes from 'prop-types';
import iconeFavoritar from './favorite.png';
import { CardContainer, StyledCover, StyledFavorite } from './Styles';

function Card({ id, title, cover }) {
  return (
    <CardContainer id={id}>
      <StyledCover src={cover} alt={title} />
      <h2>{title}</h2>
      <StyledFavorite
        src={iconeFavoritar}
        alt="Favoritar filme"
      />
    </CardContainer>
  );
}

Card.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  cover: PropTypes.string.isRequired,
};

export default Card;
