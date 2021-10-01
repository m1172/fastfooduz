import React from 'react';
import { Add, Container, Header, Tab, Wrapper } from './style';

export const Buyurtmalar = () => {
  return (
    <Container>
      <Header>
        {/* 1 */}
        <Wrapper>
          <Add.Plus />
          <Add.Title>Yangi buyurtma qo'shish</Add.Title>
        </Wrapper>
        {/* 2 */}
        <Wrapper center>
          <Tab>
            <Tab.Item>Yangi</Tab.Item>
            <Tab.Item>Qabul qilingan</Tab.Item>
            <Tab.Item>Jo'natilgan</Tab.Item>
            <Tab.Item>Yopilgan</Tab.Item>
          </Tab>
        </Wrapper>
        {/* 3 */}
        <Wrapper></Wrapper>
      </Header>
    </Container>
  );
};

export default Buyurtmalar;
