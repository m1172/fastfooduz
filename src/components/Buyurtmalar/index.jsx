import React from 'react';
import { Add, Container, Header, Wrapper } from './style';

export const Buyurtmalar = () => {
  return (
    <Container>
      <Header>
        <Wrapper>
          <Add.Plus />
          <Add.Title>Yangi buyurtma qo'shish</Add.Title>
        </Wrapper>
        <Wrapper center></Wrapper>
        <Wrapper></Wrapper>
      </Header>
    </Container>
  );
};

export default Buyurtmalar;
