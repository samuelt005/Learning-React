import React from 'react';
import { useParams } from 'react-router-dom';
// eslint-disable-next-line import/no-cycle
import { NotFound } from '..';
import { Banner, Title } from '../../components';
import StyledSection from './Styles';
import videos from '../../json/db.json';

function Player() {
  const parameters = useParams();
  const video = videos.find((vid) => vid.id === Number(parameters.id));

  if (!video) {
    return <NotFound />;
  }

  return (
    <>
      <Banner image="player" />
      <Title>
        Player
      </Title>
      <StyledSection>
        <iframe
          width="56%"
          height="80%"
          src={video.link}
          title={video.title}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
      </StyledSection>
    </>
  );
}

export default Player;
