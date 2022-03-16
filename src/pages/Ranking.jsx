import React from 'react';
import { connect } from 'react-redux';
import md5 from 'crypto-js/md5';
import { getGames } from '../helpers/localStorage';
import { resetPlayer, resetQuestionIndex } from '../redux/actions';
import '../css/Ranking.css';
import { SORT_NEGATIVE_NUMBER } from '../constants';
// import PropTypes from 'prop-types';

class Ranking extends React.Component {
  state = {
    games: [],
  }

  componentDidMount() {
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
      <section className="ranking-page-content">
        <h1>Ranking</h1>
        <div className="ranking-form">
          <div className="ranking-container">
            <button
              type="button"
              data-testid="btn-go-home"
              onClick={ this.handleHomeBtn }
            >
              Início
            </button>
            {
              games.map(({ name, score, gravatarEmail }, index) => (
                <div key={ Math.random() } className="container">
                  <img src={ `https://www.gravatar.com/avatar/${md5(gravatarEmail.trim().toLowerCase()).toString()}` } alt="" />
                  <div className="container-text">
                    <p data-testid={ `player-name-${index}` }>{name}</p>
                    <p data-testid={ `player-score-${index}` }>
                      Pontuação:
                      { score }
                    </p>
                  </div>
                  <br />
                </div>
              ))
            }
          </div>
        </div>
      </section>
    );
  }
}

Ranking.propTypes = {
}.isRequired;

export default connect()(Ranking);
