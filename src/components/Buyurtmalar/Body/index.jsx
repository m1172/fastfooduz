import React from 'react';
import MenuH from '../MenuH';
import MenuV from '../MenuV';

export const Body = ({ active }) => {
  return <div>{active ? <MenuV /> : <MenuH />}</div>;
};

export default Body;
