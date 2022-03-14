import React from 'react';
import { connect } from 'react-redux';
import Header from '../components/Header';

class Feedback extends React.Component {
  render() {
    return (
      <>
        <header>
          <Header />
        </header>
        <div>
          <p data-testid="feedback-total-score"> Total Score </p>
          <p data-testid="feedback-total-question"> Total Questions </p>
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  score: state.player.score,
  wins: state.player.score,
});

export default connect(mapStateToProps)(Feedback);
