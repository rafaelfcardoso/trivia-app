import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  CORRECT_ANSWER,
  WRONG_ANSWER } from '../constants';

class Boolean extends React.Component {
  isAnswerCorrect = (answer) => {
    const { correct_answer: correctAnswer } = this.props;
    if (correctAnswer === answer) {
      return CORRECT_ANSWER;
    }
    return `${WRONG_ANSWER}-0`;
  }

  render() {
    const {
      category,
      question,
      timerOver,
      correct_answer: correctAnswer,
      handleClick,
    } = this.props;
    return (
      <div className="card-container">
        <div>
          <h3 data-testid="question-category">{category}</h3>
          <p data-testid="question-text">{question}</p>
        </div>
        <div data-testid="answer-options" className="boolean-answer-content">
          <button
            className="answer"
            data-testid={ this.isAnswerCorrect('True') }
            type="button"
            value="True"
            onClick={ (event) => handleClick(event, correctAnswer) }
            disabled={ timerOver }
          >
            Verdadeiro
          </button>
          <button
            className="answer"
            data-testid={ this.isAnswerCorrect('False') }
            type="button"
            value="False"
            onClick={ (event) => handleClick(event, correctAnswer) }
            disabled={ timerOver }
          >
            Falso
          </button>
        </div>
      </div>
    );
  }
}

Boolean.propTypes = {
  correctAnswer: PropTypes.string,
  incorrectAnswers: PropTypes.string,
}.isRequired;

const mapStateToProps = (state) => ({
  timerOver: state.timerOver,
});

export default connect(mapStateToProps)(Boolean);
