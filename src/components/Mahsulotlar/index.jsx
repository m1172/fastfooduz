import React from 'react';
import { useState } from 'react/cjs/react.development';
import { Container } from './style';

export const Mahsulotlar = () => {
  const [data, setData] = useState([]);

  fetch('robots.txt').then((res) => res.text());
  return (
    <Container>
      <h1>Rest Api</h1>
    </Container>
  );
};

export default Mahsulotlar;
