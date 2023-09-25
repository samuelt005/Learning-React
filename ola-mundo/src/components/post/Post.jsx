import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledPost = styled.div`
    text-align: center;
    width: 282px;
    box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.08);
    border-radius: 0px 0px 10px 10px;
    padding-bottom: 1.5rem;
    transition: transform 0.2s;
    height: 340px;

    @media (max-width: 1100px) {
        width: 336px;
    }
`;

const PostCover = styled.img`
    width: 100%;
`;

const PostTitle = styled.h2`
    font-family: var(--fonte-secundaria);
    font-size: 1.25rem;
    color: var(--azul-escuro);
    line-height: 1.75rem;
    margin: 1.5rem 0 1.75rem;

    @media (max-width: 1100px) {
        font-weight: 600;
    }
`;

const PostButton = styled.button`
    display: inline-block;
    border-radius: 24px;
    padding: 0.75rem 1.5rem;
    font-size: 1.125rem;
    line-height: 1.125rem;
    background-color: var(--medium-blue);
    color: var(--white);
    border: none;
    cursor: pointer;
    transition: 0.2s;

    &:hover {
        background-color: var(--dark-blue);
    }

    @media (max-width: 1100px) {
        padding: 0.6875rem 1.5rem;
        font-size: 1.375rem;
    }
`;

function Post({ id, title }) {
  return (
    <StyledPost>
      <PostCover
        src={`src/assets/posts/${id}/capa.png`}
        alt="Imagem de capa do post"
      />

      <PostTitle>{title}</PostTitle>
      <PostButton type="button">Ler</PostButton>
    </StyledPost>
  );
}

Post.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
};

export default Post;
