import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Header from '../components/Header';
import { THREE } from '../constants';

class Feedback extends React.Component {
  render() {
    const { wins } = this.props;
    return (
      <>
        <header>
          <Header />
        </header>
        <div>
          {
            wins >= THREE ? (
              <p data-testid="feedback-text">Well Done!</p>
            ) : (
              <p data-testid="feedback-text"> Could be better...</p>
            )
          }
        </div>
      </>
    );
  }
}

Feedback.propTypes = {
  wins: PropTypes.number,
}.isRequired;

const mapStateToProps = (state) => ({
  wins: state.player.wins,
});

export default connect(mapStateToProps, null)(Feedback);
