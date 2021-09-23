import React from 'react';
import { Container, Header, Wrapper } from './style';
import logo from '../../assets/imgs/logo.png';

export const Sidebar = () => {
  return (
    <Container>
      <Header>
        <Header.Logo src={logo} alt='alt' />
        <Wrapper>
          <Wrapper.Title>Fast Food</Wrapper.Title>
          <Wrapper.Desc>Online maxsulot sotuvi</Wrapper.Desc>
        </Wrapper>
      </Header>
    </Container>
  );
};
export default Sidebar;
