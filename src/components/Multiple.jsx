import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  CORRECT_ANSWER,
  CORRECT_ANSWER_POINTS,
  DIFFICULTY,
  WRONG_ANSWER,
} from '../constants';
import { updateScoreAction } from '../redux/actions';

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

  render() {
    const { category, question } = this.props;
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
                >
                  {answer}
                </button>),
            )
          }
        </div>
      </div>

    );
  }
}

Multiple.propTypes = {
  correctAnswer: PropTypes.string,
  incorrectAnswers: PropTypes.string,
}.isRequired;

export default connect()(Multiple);
