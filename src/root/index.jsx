import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import { sidebar } from '../utils/sidebar';
import { Body, Container } from './style';

export const Root = () => {
  return (
    <Router>
      <Container>
        <Switch>
          <Sidebar />
          {sidebar.map(({ id, path, Component }) => (
            <Route path={path} component={Component} />
          ))}
          <Route path='/'>
            <Redirect to='/buyurtmalar' />
          </Route>
          <Route path='*'>
            <Redirect to='/buyurtmalar' />
          </Route>
        </Switch>
      </Container>
    </Router>
  );
};
export default Root;
