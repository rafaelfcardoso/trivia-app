import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Boolean from '../components/Booleans';
import Header from '../components/Header';
import Multiple from '../components/Multiple';
import '../css/Game.css';

class Game extends React.Component {
  state = {
    currentQuestionIndex: 0,
  }

  render() {
    const { questions, isFetching } = this.props;
    const { currentQuestionIndex } = this.state;
    console.log(questions);
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
                      ? <Multiple { ...questions[currentQuestionIndex] } />
                      : <Boolean { ...questions[currentQuestionIndex] } />
                  }
                </div>
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
  }
);

export default connect(mapStateToProps)(Game);
