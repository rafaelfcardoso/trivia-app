import React from 'react';
import { connect } from 'react-redux';
import '../css/Header.css';
import PropTypes from 'prop-types';
import md5 from 'crypto-js/md5';

class Header extends React.Component {
  constructor() {
    super();
    this.state = {
      score: 0,
    };
  }

  render() {
    const { name, gravatarEmail } = this.props;
    const { score } = this.state;
    return (
      <header className="header">
        <div>
          <img
            data-testid="header-profile-picture"
            src={ `https://www.gravatar.com/avatar/${md5(gravatarEmail.trim().toLowerCase())}` }
            alt="player"
          />
        </div>
        <label htmlFor="playerName" data-testid="header-player-name">
          Name:
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
            <div data-testid="header-score" id="score">
              { score }
            </div>
          </label>
        </div>
      </header>
    );
  }
}

const mapStateToProps = (state) => ({
  name: state.player.name,
  gravatarEmail: state.player.gravatarEmail,
});

Header.propTypes = {
  name: PropTypes.string.isRequired,
  gravatarEmail: PropTypes.string.isRequired,
};

export default connect(mapStateToProps, null)(Header);
