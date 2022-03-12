import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { updateScoreAction, setQuestionIndex } from '../redux/actions';
import {
  CORRECT_ANSWER,
  CORRECT_ANSWER_POINTS,
  DIFFICULTY,
  WRONG_ANSWER,
} from '../constants';

class Multiple extends React.Component {
  shuffleAnswer = () => {
    const {
      correct_answer: correctAnswer,
      incorrect_answers: incorrectAnswers,
    } = this.props;
    const unshuffled = [...incorrectAnswers, correctAnswer];
    const shuffled = unshuffled
      .map((value) => ({ value, sort: Math.random() }))
      .sort((a, b) => a.sort - b.sort)
      .map(({ value }) => value);
    return shuffled;
  };

  isAnswerCorrect = (question, index) => {
    const { correct_answer: correctAnswer } = this.props;
    if (correctAnswer === question) {
      return CORRECT_ANSWER;
    }
    return `${WRONG_ANSWER}-${index}`;
  }

  handleClick = ({ target }) => {
    const { correct_answer: correctAnswer } = this.props;
    this.flagTheAnswers(target, correctAnswer);
    this.updateScore(target, correctAnswer);

    const answerButtons = target.parentNode.childNodes;
    answerButtons[4].classList.add('next-btn-visible');
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
    const { category, question, timerOver } = this.props;
    console.log(timerOver);
    return (
      <div className="card-container">
        <div>
          <h3 data-testid="question-category">{category}</h3>
          <p data-testid="question-text">{question}</p>
        </div>
        <div data-testid="answer-options" className="multiple-answer-content">
          {
            this.shuffleAnswer().map(
              (answer, index) => (
                <button
                  className="answer"
                  type="button"
                  key={ answer }
                  data-testid={ this.isAnswerCorrect(answer, index) }
                  value={ answer }
                  onClick={ this.handleClick }
                  disabled={ timerOver }
                >
                  {answer}
                </button>),
            )
          }
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

Multiple.propTypes = {
  correctAnswer: PropTypes.string,
  incorrectAnswers: PropTypes.string,
}.isRequired;

const mapStateToProps = (state) => (
  {
    currentIndex: state.setIndex,
    timerOver: state.timerOver,
  }
);

export default connect(mapStateToProps)(Multiple);
