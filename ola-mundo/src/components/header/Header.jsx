import React from 'react';
import styled from 'styled-components';
import { Link, useLocation } from 'react-router-dom';

const StyledHeader = styled.header`
    background-color: --var(white);
`;

const StyledNav = styled.nav`
    height: 112px;
    display: flex;
    justify-content: center;
    align-items: center;
    column-gap: 3rem;

    @media (max-width: 744px) {
        height: 72px;
    }
`;

const StyledLink = styled(Link)`
    font-size: 26px;
    line-height: 1.5rem;
    color: var(--cor-fonte-principal);
    text-decoration: ${(props) => (
    props.location === props.to
      ? 'underline'
      : 'none')};
`;

function Header() {
  const location = useLocation().pathname;

  return (
    <StyledHeader>
      <StyledNav>
        <StyledLink location={location} to="/">
          Início
        </StyledLink>
        <StyledLink location={location} to="/aboutme">
          Sobre Mim
        </StyledLink>
      </StyledNav>
    </StyledHeader>
  );
}

export default Header;
