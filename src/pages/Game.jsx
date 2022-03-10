import React from 'react';
import { connect } from 'react-redux';
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

          <div>
            <h3>Categoria</h3>
            <p>Pergunta</p>
          </div>
          {
            questions.map((question) => {
              if (question.type === 'multiple') {
                return (<Multiple
                  correctAnswer={ question.correct_answer }
                  incorrectAnswers={ question.incorrect_answers }
                />);
              }
              return (<Boolean
                correctAnswer={ question.correct_answer }
                incorrectAnswers={ question.incorrect_answers }
                key={ Math.random() }
              />
              );
            })
          }

        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => (
  {
    questions: state.questions,
  }
);

export default connect(mapStateToProps, null)(Game);
