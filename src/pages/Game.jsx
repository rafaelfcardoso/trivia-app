import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Boolean from '../components/Booleans';
import Header from '../components/Header';
import Multiple from '../components/Multiple';
import '../css/Game.css';
import { resetTimer, setQuestionIndex, updateScoreAction } from '../redux/actions';
import Timer from '../components/Timer';
import {
  CORRECT_ANSWER,
  CORRECT_ANSWER_POINTS,
  DIFFICULTY,
  LAST_QUESTION_INDEX,
  WRONG_ANSWER } from '../constants';

class Game extends React.Component {
  state = {
    seconds: 30,
  }

  handleSeconds = (seconds) => {
    this.setState({ seconds });
  }

  handleClick = ({ target }, correctAnswer) => {
    this.flagTheAnswers(target, correctAnswer);
    this.updateScore(target, correctAnswer);

    this.showNextBtn();
  }

  showNextBtn = () => {
    const nextBtn = document.querySelector('.next-btn');
    nextBtn.classList.add('next-btn-visible');
  }

  hiddenNextBtn = () => {
    const nextBtn = document.querySelector('.next-btn');
    nextBtn.classList.remove('next-btn-visible');
  }

  flagTheAnswers = (target, correctAnswer) => {
    const answerButtons = target.parentNode.childNodes;
    answerButtons.forEach((button) => {
      console.log(button.value);
      console.log(correctAnswer);
      if (correctAnswer === button.value) {
        button.classList.add(CORRECT_ANSWER);
      } else {
        button.classList.add(WRONG_ANSWER);
      }
    });
  }

  updateScore = ({ value }, correctAnswer) => {
    const { dispatch, questions, currentQuestionIndex } = this.props;
    const { seconds } = this.state;
    if (value === correctAnswer) {
      const points = CORRECT_ANSWER_POINTS
      + (seconds * DIFFICULTY[questions[currentQuestionIndex].difficulty]);
      dispatch(updateScoreAction(points));
    }
  }

  handleNextButton = () => {
    const { currentQuestionIndex, dispatch, history } = this.props;
    this.hiddenNextBtn();
    dispatch(setQuestionIndex(currentQuestionIndex + 1));
    dispatch(resetTimer());
    if (currentQuestionIndex === LAST_QUESTION_INDEX) {
      history.push('/feedback');
    }
  }

  render() {
    const { seconds } = this.state;
    const {
      questions,
      isFetching,
      currentQuestionIndex,
    } = this.props;
    const questionProps = {
      handleSeconds: this.handleSeconds,
      handleClick: this.handleClick,
    };
    return (
      <div>
        <header>
          <Header />
        </header>
        <div className="game-content">
          {
            isFetching
              ? <div>Loading...</div>
              : (
                <div>
                  {
                    questions[currentQuestionIndex].type === 'multiple'
                      ? (
                        <Multiple
                          { ...questionProps }
                          { ...questions[currentQuestionIndex] }
                        />
                      )
                      : (
                        <Boolean
                          { ...questionProps }
                          { ...questions[currentQuestionIndex] }
                        />
                      )
                  }
                  <Timer seconds={ seconds } handleSeconds={ this.handleSeconds } />
                </div>
              )
          }
        </div>
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
    );
  }
}

Game.propTypes = {
  questions: PropTypes.string,
}.isRequired;

const mapStateToProps = (state) => (
  {
    questions: state.questions,
    isFetching: state.isFetching,
    currentQuestionIndex: state.setIndex,
  }
);

export default connect(mapStateToProps)(Game);
