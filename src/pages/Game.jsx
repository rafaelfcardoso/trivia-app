import React from 'react';
import Boolean from '../components/Booleans';
import Header from '../components/Header';
import Multiple from '../components/Multiple';
import '../css/Game.css';

class Game extends React.Component {
  render() {
    return (
      <div>
        <header>
          <Header />
        </header>
        <div className="card-container">

          <div>
            <h3>Categoria</h3>
            <p>Pergunta</p>
          </div>
          <Multiple />
          <Boolean />
        </div>
      </div>
    );
  }
}

export default Game;
