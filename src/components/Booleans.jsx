import React from 'react';
import PropTypes from 'prop-types';

class Boolean extends React.Component {
  isAnswerCorrect = (bool) => {
    const { correctAnswer } = this.props;
    if (correctAnswer === bool) {
      return 'correct-answer';
    }
    return 'wrong-answer-0';
  }

  render() {
    return (
      <div>
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
    );
  }
}

Boolean.propTypes = {
  correctAnswer: PropTypes.string,
  incorrectAnswers: PropTypes.string,
}.isRequired;

export default Boolean;
