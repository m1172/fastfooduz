import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import { sidebar } from '../utils/sidebar';
import { Body, Container } from './style';

export const Root = () => {
  return (
    <Router>
      <Container>
        <Sidebar />
        {sidebar.map(({ id, path, Component }) => (
          <Route path={path} component={Component} />
        ))}
      </Container>
    </Router>
  );
};
export default Root;
