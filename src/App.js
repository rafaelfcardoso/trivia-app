import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Login from './pages/Login';
import Configuration from './pages/Configuration';

class App extends React.Component {
  render() {
    return (
      <Switch>
        <Route path="/configuration" component={ Configuration } />
        <Route exact path="/" component={ Login } />
      </Switch>
    );
  }
}

export default App;
