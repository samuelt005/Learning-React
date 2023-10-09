import React from 'react';
import videos from '../../json/db.json';

import {
  Banner,
  Title,
  Card,
  Container,
} from '../../components';
import StyledSection from './Styles';

function Home() {
  return (
    <>
      <Banner image="home" />
      <Container>
        <Title>Um lugar para guardar seus vídeos e filmes!</Title>
        <StyledSection>
          {videos.map((video) => (
            <Card id={video.id} title={video.title} cover={video.cover} key={video.id} />
          ))}
        </StyledSection>
      </Container>
    </>
  );
}

export default Home;
