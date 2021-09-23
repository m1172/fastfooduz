import React from 'react';
import { Container, Header } from './style';
import logo from '../../assets/imgs/logo.png';

export const Sidebar = () => {
  return (
    <Container>
      <Header>
        <Header.Logo src={logo} alt='alt' />
      </Header>
    </Container>
  );
};
export default Sidebar;
