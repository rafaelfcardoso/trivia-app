import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { setQuestionIndex } from '../redux/actions';

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
    if (correctAnswer === answer) {
      target.classList.add('correct-answer');
    } else {
      target.classList.add('wrong-answer');
    }
    const answerButtons = target.parentNode.childNodes;
    answerButtons[2].classList.add('next-btn-visible');
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
