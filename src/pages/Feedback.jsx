import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Header from '../components/Header';
import { THREE } from '../constants';

class Feedback extends React.Component {
  render() {
    const { assertions, score } = this.props;
    return (
      <>
        <header>
          <Header />
        </header>
        <div>
          <p>
            Você acertou
            <span data-testid="feedback-total-question">{assertions}</span>
            questões
          </p>
          <p>
            Um total de
            <span data-testid="feedback-total-score">{score}</span>
            pontos
          </p>
          {
            assertions >= THREE ? (
              <p data-testid="feedback-text">Well Done!</p>
            ) : (
              <p data-testid="feedback-text"> Could be better...</p>
            )
          }
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
