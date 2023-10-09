import React from 'react';
import {
  Banner,
  Card,
  Container,
  Title,
} from '../../components';
import StyledSection from './Styles';

function Favorites() {
  return (
    <>
      <Banner image="favoritos" />
      <Container>
        <Title>Meus Favoritos</Title>
        <StyledSection>
          <Card id={1} title="Gato bonifácio" cover="https://thecatapi.com/api/images/get?format=src&type=png" />
        </StyledSection>
      </Container>
    </>
  );
}

export default Favorites;
