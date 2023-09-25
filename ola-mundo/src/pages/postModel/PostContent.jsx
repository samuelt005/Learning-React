import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const PostContainer = styled.article`
    color: var(--cor-fonte-post);
    position: relative;
`;

const PostCover = styled.div`
    background-image: url(${(props) => props.$cover});
    height: 204px;
    width: 100%;
    background-size: cover;
    background-repeat: no-repeat;
    opacity: 0.3;
    position: absolute;
    top: 0;
    z-index: -1;

    @media (max-width: 744px) {
        height: 104px;
    }
`;

const PostTitle = styled.h2`
    height: 204px;
    font-family: var(--fonte-secundaria);
    padding: 0 7.5rem;
    font-size: 4rem;
    display: flex;
    align-items: center;

    @media (max-width: 744px) {
        height: 104px;
        padding: 0 1rem;
        font-size: 2rem;
    }
`;

const PostContentContainer = styled.div`
    padding: 2.5rem 7.5rem 4.5rem;

    @media (max-width: 744px) {
        padding: 2rem 1rem 1.5rem;
    }
`;

function PostModel({ children, cover, title }) {
  return (
    <PostContainer>
      <PostCover $cover={cover} />
      <PostTitle>{title}</PostTitle>
      <PostContentContainer>
        {children}
      </PostContentContainer>
    </PostContainer>
  );
}

PostModel.propTypes = {
  cover: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  children: PropTypes.func.isRequired,
};

export default PostModel;
