import React from 'react';
import styled from 'styled-components';
import myPicture from '../../assets/minha_foto.png';

const StyledBanner = styled.div`
    background-size: cover;
    padding: 3rem 7.5rem 6.25rem;
    background-color: var(--dark-blue);
    color: var(--white);
    display: flex;
    height: 600px;
    align-items: center;
`;

const StyledContainer = styled.div`
    display: flex;
    max-width: 1600px;
    margin-left: auto;
    margin-right: auto;
    justify-content: center;
`;

const StyledPresentation = styled.div`
    max-width: 50%;
`;

const StyledTitle = styled.h1`
    font-size: 4rem;
    margin-top: 4.875rem;
    margin-bottom: 2rem;
`;

const StyledParagraph = styled.p`
    font-size: 1.5rem;
    line-height: 2rem;
    margin-bottom: 2rem;
`;

const StyledImagesContainer = styled.div`
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;

    @media (max-width: 1024px) {
      display: none;
    }
`;

const StyledPicture = styled.img`
    width: 22vw;
    height: 22vw;
    max-width: 420px;
    max-height: 420px;
    border-radius: 50%;
`;

function Banner() {
  const presentationText = 'Boas vindas ao meu espaço pessoal! Eu sou Samuel Thomas, estudante de ADS e desenvolvedor Junior. Aqui compartilho com você alguns conhecimentos :)';

  return (
    <StyledBanner>
      <StyledContainer>
        <StyledPresentation>
          <StyledTitle>
            Olá, mundo!
          </StyledTitle>
          <StyledParagraph>
            {presentationText}
          </StyledParagraph>
        </StyledPresentation>
        <StyledImagesContainer>
          <StyledPicture src={myPicture} aria-hidden />
        </StyledImagesContainer>
      </StyledContainer>
    </StyledBanner>
  );
}

export default Banner;
