import React, { useState } from 'react';
import { Add, Container, Header, Tab, Wrapper } from './style';

export const Buyurtmalar = () => {
  const [isActive, setIsActive] = useState('Yangi');
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
            <Tab.Item
              active={'Yangi' === isActive}
              onClick={() => setIsActive('Yangi')}
            >
              Yangi
            </Tab.Item>
            <Tab.Item
              active={'Qabul' === isActive}
              onClick={() => setIsActive('Qabul')}
            >
              Qabul qilingan
            </Tab.Item>
            <Tab.Item
              active={'Jonatilgan' === isActive}
              onClick={() => setIsActive('Jonatilgan')}
            >
              Jo'natilgan
            </Tab.Item>
            <Tab.Item
              active={'Yopilgan' === isActive}
              onClick={() => setIsActive('Yopilgan')}
            >
              Yopilgan
            </Tab.Item>
          </Tab>
        </Wrapper>
        {/* 3 */}
        <Wrapper></Wrapper>
      </Header>
    </Container>
  );
};

export default Buyurtmalar;
