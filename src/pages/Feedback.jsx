import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { resetQuestionIndex, resetPlayer } from '../redux/actions';
import Header from '../components/Header';
import { THREE } from '../constants';
import '../css/Feedback.css';

class Feedback extends React.Component {
  handlePlayAgain = () => {
    const { history, dispatch } = this.props;
    dispatch(resetQuestionIndex());
    dispatch(resetPlayer());
    history.push('/');
  }

  handleBtnRanking = () => {
    const { history } = this.props;
    history.push('/ranking');
  }

  render() {
    const { assertions, score } = this.props;
    return (
      <>
        <header>
          <Header />
        </header>
        <div className="feedback-container">
          <div className="feedback-content">
            {
              assertions >= THREE ? (
                <p data-testid="feedback-text">Well Done!</p>
              ) : (
                <p data-testid="feedback-text"> Could be better...</p>
              )
            }
          </div>
          <p className="feedback-total-question">
            You got
            <span data-testid="feedback-total-question">
              {' '}
              {assertions}
              {' '}
            </span>
            questions right
          </p>
          <p className="feedback-total-score">
            A total of
            <span data-testid="feedback-total-score">
              {' '}
              {score}
              {' '}
            </span>
            points
          </p>
          <button
            className="btn-ranking"
            type="button"
            data-testid="btn-ranking"
            onClick={ this.handleBtnRanking }
          >
            Ranking
          </button>
          <button
            className="btn-play-again"
            type="button"
            data-testid="btn-play-again"
            onClick={ this.handlePlayAgain }
          >
            Jogar Novamente
          </button>
        </div>
      </>
    );
  }
}

Feedback.propTypes = {
  assertions: PropTypes.number,
  score: PropTypes.number,
}.isRequired;

const mapStateToProps = (state) => ({
  score: state.player.score,
  assertions: state.player.assertions,
});

export default connect(mapStateToProps)(Feedback);
