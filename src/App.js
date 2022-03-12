import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Configuration from './pages/Configuration';
import Login from './pages/Login';
import Game from './pages/Game';
import Feedback from './pages/Feedback';

class App extends React.Component {
  render() {
    return (
      <Switch>
        <Route path="/feedback" component={ Feedback } />
        <Route path="/configuration" component={ Configuration } />
        <Route path="/game" component={ Game } />
        <Route exact path="/" component={ Login } />
      </Switch>
    );
  }
}

export default App;
