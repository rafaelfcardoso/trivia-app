import React from 'react';
import { connect } from 'react-redux';
import '../css/Header.css';
import PropTypes from 'prop-types';
import md5 from 'crypto-js/md5';

class Header extends React.Component {
  render() {
    const { name, gravatarEmail, score } = this.props;
    return (
      <header className="header">
        <h1 className="header-trivia-logo">TRIVIA</h1>
        <div className="header-contents">
          <div>
            <img
              data-testid="header-profile-picture"
              src={ `https://www.gravatar.com/avatar/${md5(gravatarEmail.trim().toLowerCase().toString())}` }
              alt="player"
            />
          </div>
          <label
            className="name-label"
            htmlFor="playerName"
            data-testid="header-player-name"
          >
            <strong>Name:</strong>
            <span
              data-testid="header-player-name"
              className="player-name"
              id="playerName"
            >
              { name }
            </span>
          </label>
          <div className="score-container">
            <label htmlFor="score">
              <strong> Score: </strong>
              <span data-testid="header-score" id="score">
                { score }
              </span>
            </label>
          </div>
        </div>
      </header>
    );
  }
}

const mapStateToProps = (state) => ({
  name: state.player.name,
  gravatarEmail: state.player.gravatarEmail,
  score: state.player.score,
});

Header.propTypes = {
  name: PropTypes.string.isRequired,
  gravatarEmail: PropTypes.string.isRequired,
  score: PropTypes.number.isRequired,
};

export default connect(mapStateToProps, null)(Header);
