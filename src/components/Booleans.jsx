import React from 'react';
import PropTypes from 'prop-types';

class Boolean extends React.Component {
  isAnswerCorrect = (bool) => {
    const { correct_answer: correctAnswer } = this.props;
    if (correctAnswer === bool) {
      return 'correct-answer';
    }
    return 'wrong-answer-0';
  }

  render() {
    const { category, question: questionText } = this.props;
    return (
      <div>
        <div>
          <h3 data-testid="question-category">{category}</h3>
          <p data-testid="question-text">{questionText}</p>
        </div>
        <div data-testid="answer-options">
          <button
            data-testid={ this.isAnswerCorrect(true) }
            type="button"
          >
            Verdadeiro
          </button>
          <button
            data-testid={ this.isAnswerCorrect(false) }
            type="button"
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

export default Boolean;
