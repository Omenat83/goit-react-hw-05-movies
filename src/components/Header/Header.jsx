import React from 'react';
import { GiFilmProjector } from 'react-icons/gi';
import { HeaderContainer, HeaderUl, HeaderLink } from './Header.styled';

const Header = () => {
  return (
    <HeaderContainer>
      <>
        <GiFilmProjector size="36px" />
        <HeaderUl>
          <li>
            <HeaderLink to="/">Home</HeaderLink>
          </li>
          <li>
            <HeaderLink to="/movies">Movies</HeaderLink>
          </li>
        </HeaderUl>
      </>
    </HeaderContainer>
  );
};

export default Header;
