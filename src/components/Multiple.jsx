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

  render() {
    return (
      <div>
        {this.shuffleQuestions().map(
          (question) => <button type="button" key={ question }>{question}</button>,
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
