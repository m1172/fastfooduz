import React from 'react';
import { Container, Header, Link, Wrapper } from './style';
import logo from '../../assets/imgs/logo.png';
import { sidebar } from '../../utils/sidebar';

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
      <Wrapper>
        {sidebar.map(({ title, Icon, path }) => (
          <Link to={path}>{title}</Link>
        ))}
      </Wrapper>
    </Container>
  );
};
export default Sidebar;
