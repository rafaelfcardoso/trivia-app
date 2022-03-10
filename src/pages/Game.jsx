import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Boolean from '../components/Booleans';
import Header from '../components/Header';
import Multiple from '../components/Multiple';
import '../css/Game.css';

class Game extends React.Component {
  render() {
    const { questions } = this.props;
    return (
      <div>
        <header>
          <Header />
        </header>
        <div className="card-container">

          {
            questions.map((question) => {
              if (question.type === 'multiple') {
                return (
                  <div>
                    <div>
                      <h3 data-testid="question-category">{question.category}</h3>
                      <p data-testid="question-text">{question.question}</p>
                    </div>
                    <div data-testid="answer-options">
                      <Multiple
                        correctAnswer={ question.correct_answer }
                        incorrectAnswers={ question.incorrect_answers }
                      />
                    </div>
                  </div>
                );
              }
              return (
                <div key={ Math.random() }>
                  <div>
                    <h3 data-testid="question-category">{question.category}</h3>
                    <p data-testid="question-text">{question.question}</p>
                  </div>
                  <div data-testid="answer-options">
                    <Boolean
                      correctAnswer={ question.correct_answer }
                      incorrectAnswers={ question.incorrect_answers }
                    />
                  </div>
                </div>
              );
            })
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
  }
);

export default connect(mapStateToProps, null)(Game);
