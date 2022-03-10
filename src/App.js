import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Login from './pages/Login';
import Game from './pages/Game';

class App extends React.Component {
  render() {
    return (
      <Switch>
        <Route path="/game" component={ Game } />
        <Route exact path="/" component={ Login } />
      </Switch>
    );
  }
}

export default App;
