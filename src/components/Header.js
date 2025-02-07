import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const HeaderContainer = styled.header`
  background-color: #333;
  color: white;
  padding: 10px 0;
  text-align: center;
`;

const Nav = styled.nav`
  display: flex;
  justify-content: center;
  gap: 20px;
`;

const Header = () => {
  return (
    <HeaderContainer>
      <h1>Last Island of Survival</h1>
      <Nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/game">Game</Link>
      </Nav>
    </HeaderContainer>
  );
};

export default Header;
