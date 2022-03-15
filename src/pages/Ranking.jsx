import React from 'react';
import { connect } from 'react-redux';
import md5 from 'crypto-js/md5';
import { getGames } from '../helpers/localStorage';
import { resetPlayer, resetQuestionIndex } from '../redux/actions';
// import PropTypes from 'prop-types';

class Ranking extends React.Component {
  state = {
    games: [],
  }

  componentDidMount() {
    const SORT_NEGATIVE_NUMBER = -1;
    const games = getGames();
    games.sort((a, b) => {
      if (a.score > b.score) return SORT_NEGATIVE_NUMBER;
      if (a.score < b.score) return 1;
      return 0;
    });
    this.setState({ games });
  }

  handleHomeBtn = () => {
    const { history, dispatch } = this.props;
    dispatch(resetQuestionIndex());
    dispatch(resetPlayer());
    history.push('/');
  }

  render() {
    const { games } = this.state;
    return (
      <div>
        <h1 data-testid="ranking-title">Ranking</h1>
        <button
          type="button"
          data-testid="btn-go-home"
          onClick={ this.handleHomeBtn }
        >
          Início
        </button>
        {
          games.map(({ name, score, gravatarEmail }, index) => (
            <div key={ Math.random() }>
              <span data-testid={ `player-name-${index}` }>{name}</span>
              <img src={ `https://www.gravatar.com/avatar/${md5(gravatarEmail.trim().toLowerCase()).toString()}` } alt="" />
              <span data-testid={ `player-score-${index}` }>{score}</span>
            </div>
          ))
        }
      </div>
    );
  }
}

Ranking.propTypes = {
}.isRequired;

export default connect()(Ranking);
