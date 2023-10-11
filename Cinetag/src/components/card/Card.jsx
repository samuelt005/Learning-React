import React from 'react';
import PropTypes from 'prop-types';
import { useFavoriteContext } from '../../context/Favorites';
import iconeFavoritar from './favorite.png';
import iconeDesfavoritar from './favorite_outline.png';
import {
  CardContainer,
  StyledCover,
  StyledFavorite,
  StyledLink,
} from './Styles';

function Card({ id, title, cover }) {
  const { favorites, addFavorite } = useFavoriteContext();
  const isFavorite = favorites.some((fav) => fav.id === id);
  const icon = isFavorite ? iconeFavoritar : iconeDesfavoritar;

  return (
    <CardContainer id={id}>
      <StyledLink to={`/${id}`}>
        <StyledCover src={cover} alt={title} />
        <h2>{title}</h2>
      </StyledLink>
      <StyledFavorite
        src={icon}
        alt="Favoritar filme"
        onClick={() => {
          addFavorite({ id, title, cover });
        }}
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
