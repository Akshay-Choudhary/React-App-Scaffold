import React from 'react';
import { Route, Switch } from 'react-router-dom';

import LandingPage from '../Pages/LandingPage';

export default class App extends React.Component {
  render() {
    return (
      <div>
        <Switch>
          <Route
            exact
            path="/"
            component={LandingPage}
          />
        </Switch>
      </div>
    );
  }
}
