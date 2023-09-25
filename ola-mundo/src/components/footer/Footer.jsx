import React from 'react';
import styled from 'styled-components';

const StyledFooter = styled.footer`
    background-color: var(--dark-blue);
    color: var(--white);
    padding: 2rem 0;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 80px;
`;

function Footer() {
  return (
    <StyledFooter>
      <p>Desenvolvido por Samuel Thomas</p>
    </StyledFooter>
  );
}

export default Footer;
