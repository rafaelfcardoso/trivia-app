import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import sanitizeHtml from 'sanitize-html';
import {
  CORRECT_ANSWER,
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

  render() {
    const {
      category,
      question,
      timerOver,
      correct_answer: correctAnswer,
      handleClick,
    } = this.props;
    const clean = sanitizeHtml(question);
    return (
      <div className="card-container">
        <div>
          <h3 data-testid="question-category">{category}</h3>
          <p data-testid="question-text" dangerouslySetInnerHTML={{__html: clean}}></p>
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
                  onClick={ (event) => handleClick(event, correctAnswer) }
                  disabled={ timerOver }
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

const mapStateToProps = (state) => ({
  timerOver: state.timerOver,
});

export default connect(mapStateToProps)(Multiple);
