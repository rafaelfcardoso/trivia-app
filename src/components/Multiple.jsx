import React from 'react';
import PropTypes from 'prop-types';

class Multiple extends React.Component {
  shuffleQuestions = () => {
    const { correctAnswer, incorrectAnswers } = this.props;
    const unshuffled = [...incorrectAnswers, correctAnswer];
    const shuffled = unshuffled
      .map((value) => ({ value, sort: Math.random() }))
      .sort((a, b) => a.sort - b.sort)
      .map(({ value }) => value);
    return shuffled;
  };

  isAnswerCorrect = (question, index) => {
    const { correctAnswer } = this.props;
    if (correctAnswer === question) {
      return 'correct-answer';
    }
    return `wrong-answer-${index}`;
  }

  render() {
    return (
      <div data-testid="answer-options">
        {this.shuffleQuestions().map(
          (question, index) => (
            <button
              type="button"
              key={ question }
              data-testid={ this.isAnswerCorrect(question, index) }
            >
              {question}
            </button>),
        )}
      </div>
    );
  }
}

Multiple.propTypes = {
  correctAnswer: PropTypes.string,
  incorrectAnswers: PropTypes.string,
}.isRequired;

export default Multiple;
