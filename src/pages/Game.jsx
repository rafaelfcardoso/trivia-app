import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Boolean from '../components/Booleans';
import Header from '../components/Header';
import Multiple from '../components/Multiple';
import '../css/Game.css';
import { setQuestionIndex } from '../redux/actions';
import Timer from '../components/Timer';

class Game extends React.Component {
  render() {
    const { questions, isFetching, currentQuestionIndex } = this.props;
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
                <>
                  <div>
                    {
                      questions[currentQuestionIndex].type === 'multiple'
                        ? <Multiple { ...questions[currentQuestionIndex] } />
                        : <Boolean { ...questions[currentQuestionIndex] } />
                    }
                  </div>
                  <Timer />
                </>
              )
          }
        </div>
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

const mapDispatchToProps = (dispatch) => ({
  dispatchCurrentQuestionIndex:
    (currentQuestionIndex) => dispatch(setQuestionIndex(currentQuestionIndex)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Game);
