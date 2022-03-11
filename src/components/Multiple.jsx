import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { setQuestionIndex } from '../redux/actions';

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
      return 'correct-answer';
    }
    return `wrong-answer-${index}`;
  }

  handleClick = ({ target }) => {
    const { correct_answer: correctAnswer } = this.props;
    const answerButtons = target.parentNode.childNodes;
    answerButtons[4].classList.add('next-btn-visible');

    answerButtons.forEach((button) => {
      if (correctAnswer === button.value) {
        button.classList.add('correct-answer');
      } else {
        button.classList.add('wrong-answer');
      }
    });
  }

  handleNextButton = () => {
    const { currentIndex, dispatch } = this.props;
    dispatch(setQuestionIndex(currentIndex + 1));
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

Multiple.propTypes = {
  correctAnswer: PropTypes.string,
  incorrectAnswers: PropTypes.string,
}.isRequired;

export default connect(mapStateToProps)(Multiple);
