import React from 'react';
import { Link } from 'react-router-dom';
import logo from './logo.png';
import HeaderLink from './headerLink/HeaderLink';
import StyledHeader from './Styles';

function Header() {
  return (
    <StyledHeader>
      <Link to="./">
        <img src={logo} alt="Logo do Cinetag" />
      </Link>
      <nav>
        <HeaderLink url="./">
          Home
        </HeaderLink>
        <HeaderLink url="./favorites">
          Favoritos
        </HeaderLink>
      </nav>
    </StyledHeader>
  );
}

export default Header;
