import React, { useState } from 'react';
import {
  Add,
  Container,
  Header,
  IconWrapper,
  MenuH,
  MenuV,
  Tab,
  Toggle,
  Wrapper,
} from './style';

export const Buyurtmalar = () => {
  const [isActive, setIsActive] = useState('Yangi');
  const [on, setOn] = useState(true);
  return (
    <Container>
      <Header>
        {/* 1 */}
        <Wrapper order='1'>
          <Add.Plus />
          <Add.Title>Yangi buyurtma qo'shish</Add.Title>
        </Wrapper>
        {/* 2 */}
        <Wrapper center order='2'>
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
        <Wrapper order='3'>
          <Toggle toggle>
            <IconWrapper active={on} onClick={() => setOn(true)}>
              <MenuH />
            </IconWrapper>
            <IconWrapper active={!on} onClick={() => setOn(false)}>
              <MenuV />
            </IconWrapper>
          </Toggle>
        </Wrapper>
      </Header>
    </Container>
  );
};

export default Buyurtmalar;
