import React from 'react';
import { connect } from 'react-redux';
import '../css/Header.css';
import PropTypes from 'prop-types';

class Header extends React.Component {
  constructor() {
    super();
    this.state = {
      score: 0,
    };
  }

  render() {
    const { name } = this.props;
    console.log(this.props);
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
});

Header.propTypes = {
  name: PropTypes.string.isRequired,
};

export default connect(mapStateToProps, null)(Header);
