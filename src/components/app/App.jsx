import React from 'react';
import {
  BrowserRouter as Router, 
  Route, 
  Switch,
} from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import AnimalCrossingContainer from '../../containers/AnimalCrossingContainer';
import DetailsContainer from '../../containers/DetailsContainer';

export default function App() {
  return (
    <>
      <Nav defaultActiveKey="/">
        <Nav.Item>
          <Nav.Link href="/">Home</Nav.Link>
        </Nav.Item>
      </Nav>
      <Router>
        <Switch>
          <Route
            path="/"
            exact
            render={(routerProps) => <AnimalCrossingContainer {...routerProps} />}
          />
          <Route
            path="/animals/:id"
            exact
            render={(routerProps) => <DetailsContainer {...routerProps} />}
          />
        </Switch>
      </Router>
    </>
  );
}
