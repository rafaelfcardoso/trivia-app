import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { updateScoreAction, setQuestionIndex } from '../redux/actions';
import {
  CORRECT_ANSWER,
  CORRECT_ANSWER_POINTS,
  DIFFICULTY,
  WRONG_ANSWER } from '../constants';

class Boolean extends React.Component {
  isAnswerCorrect = (answer) => {
    const { correct_answer: correctAnswer } = this.props;
    if (correctAnswer === answer) {
      return CORRECT_ANSWER;
    }
    return `${WRONG_ANSWER}-0`;
  }

  handleClick = ({ target }) => {
    const { correct_answer: correctAnswer } = this.props;
    this.flagTheAnswers(target, correctAnswer);
    this.updateScore(target, correctAnswer);

    const answerButtons = target.parentNode.childNodes;
    answerButtons[2].classList.add('next-btn-visible');
  }

  flagTheAnswers = (target, correctAnswer) => {
    const answerButtons = target.parentNode.childNodes;
    answerButtons.forEach((button) => {
      if (correctAnswer === button.value) {
        button.classList.add(CORRECT_ANSWER);
      } else {
        button.classList.add(WRONG_ANSWER);
      }
    });
  }

  updateScore = ({ value }, correctAnswer) => {
    const { dispatch, difficulty } = this.props;
    if (value === correctAnswer) {
      const timer = 10;
      const points = CORRECT_ANSWER_POINTS + (timer * DIFFICULTY[difficulty]);
      dispatch(updateScoreAction(points));
    }
  }

  handleNextButton = () => {
    const { currentIndex, dispatch } = this.props;
    dispatch(setQuestionIndex(currentIndex + 1));
  }

  render() {
    const { category, question: questionText } = this.props;
    return (
      <div className="card-container">
        <div>
          <h3 data-testid="question-category">{category}</h3>
          <p data-testid="question-text">{questionText}</p>
        </div>
        <div data-testid="answer-options" className="boolean-answer-content">
          <button
            className="answer"
            data-testid={ this.isAnswerCorrect('True') }
            type="button"
            value="True"
            onClick={ this.handleClick }
          >
            Verdadeiro
          </button>
          <button
            className="answer"
            data-testid={ this.isAnswerCorrect('False') }
            type="button"
            value="False"
            onClick={ this.handleClick }
          >
            Falso
          </button>
          <button
            className="next-btn"
            data-testid="btn-next"
            type="button"
            name="nextBtn"
            onClick={ this.handleNextButton }
          >
            Next Question
          </button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  currentIndex: state.setIndex,
});

Boolean.propTypes = {
  correctAnswer: PropTypes.string,
  incorrectAnswers: PropTypes.string,
}.isRequired;

export default connect(mapStateToProps)(Boolean);
