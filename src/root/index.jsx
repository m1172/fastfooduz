import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import { Body, Container } from './style';

export const Root = () => {
  return (
    <Router>
      <Container>
        <Sidebar />
        <Body>body</Body>
      </Container>
    </Router>
  );
};
export default Root;
