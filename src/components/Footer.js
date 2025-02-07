import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background-color: #333;
  color: white;
  padding: 10px 0;
  text-align: center;
  position: fixed;
  width: 100%;
  bottom: 0;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <p>© 2025 Last Island of Survival. All rights reserved.</p>
    </FooterContainer>
  );
};

export default Footer;
