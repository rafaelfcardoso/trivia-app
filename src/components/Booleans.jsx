import React from 'react';
import PropTypes from 'prop-types';

class Boolean extends React.Component {
  isAnswerCorrect = (answer) => {
    const { correct_answer: correctAnswer } = this.props;
    if (correctAnswer === answer) {
      return 'correct-answer';
    }
    return 'wrong-answer-0';
  }

  handleClick = ({ target }, answer) => {
    const { correct_answer: correctAnswer } = this.props;
    console.log(correctAnswer, answer);
    if (correctAnswer === answer) {
      target.classList.add('correct-answer');
    } else {
      target.classList.add('wrong-answer');
    }
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
            onClick={ (event) => this.handleClick(event, 'True') }
          >
            Verdadeiro
          </button>
          <button
            className="answer"
            data-testid={ this.isAnswerCorrect('False') }
            type="button"
            onClick={ (event) => this.handleClick(event, 'False') }
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
