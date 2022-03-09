import React from 'react';
import '../css/Header.css';

class Header extends React.Component {
  constructor() {
    super();
    this.state = {
      score: 0,
    };
  }

  render() {
    const { score } = this.state;
    return (
      <header className="header">
        <div>
          <img
            data-testid="header-profile-picture"
            src="(vem do gravatar)"
            alt="player"
          />
        </div>
        <label htmlFor="playerName">
          Name:
          <input
            data-testid="header-player-name"
            id="playerName"
            type="text"
            // value={ vemDaStorePorProps }
          />
        </label>
        <div className="score-container">
          <label htmlFor="score">
            <strong> Score: </strong>
            <div data-testid="header-score" id="score">
              { score }
            </div>
          </label>
        </div>
      </header>
    );
  }
}

export default Header;
