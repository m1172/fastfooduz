import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import { Body, Container } from './style';

export const Root = () => {
  return (
    <Container>
      <Sidebar />
      <Body>body</Body>
    </Container>
  );
};
export default Root;
