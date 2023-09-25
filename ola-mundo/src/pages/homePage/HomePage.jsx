import React from 'react';
import styled from 'styled-components';
import posts from '../../json/posts.json';
import { Post } from '../../components';

const StyledUl = styled.ul`
    padding: 0 6vw 3.625rem;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 1.5rem;
    margin-top: -2rem;
    max-width: 1600px;
    margin-left: auto;
    margin-right: auto;

    @media (max-width: 1100px) {
        margin-top: 0;
        padding: 2rem 1.5rem 3.625rem;
    }

    @media (max-width: 744px) {
        padding: 2rem 1rem 3rem;
    }
`;

function HomePage() {
  return (
    <StyledUl>
      {posts.map((post) => (
        <li key={post.id}>
          <Post
            id={post.id}
            title={post.title}
          />
        </li>
      ))}
    </StyledUl>
  );
}

export default HomePage;
