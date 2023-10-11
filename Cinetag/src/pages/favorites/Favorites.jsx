import React from 'react';
import { useFavoriteContext } from '../../context/Favorites';
import {
  Banner,
  Card,
  Container,
  Title,
} from '../../components';
import StyledSection from './Styles';

function Favorites() {
  const { favorites } = useFavoriteContext();

  return (
    <>
      <Banner image="favoritos" />
      <Container>
        <Title>Meus Favoritos</Title>
        <StyledSection>
          {favorites.map((fav) => (
            <Card id={fav.id} title={fav.title} cover={fav.cover} key={fav.id} />
          ))}
        </StyledSection>
      </Container>
    </>
  );
}

export default Favorites;
