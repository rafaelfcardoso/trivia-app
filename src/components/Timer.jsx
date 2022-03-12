import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { THOUSAND } from '../constants';
import { warnTimerOver } from '../redux/actions';

class Timer extends React.Component {
  constructor() {
    super();
    this.state = { seconds: 30 };
    this.timer = 0;
    this.startTimer = this.startTimer.bind(this);
    this.countDown = this.countDown.bind(this);
  }

  componentDidMount() {
    this.startTimer();
  }

  shouldComponentUpdate({ dispatch }, { seconds }) {
    if (seconds === 0) {
      console.log('Entrou');
      dispatch(warnTimerOver());
    }
    return true;
  }

  startTimer() {
    const { seconds } = this.state;
    if (this.timer === 0 && seconds > 0) {
      this.timer = setInterval(this.countDown, THOUSAND);
    }
  }

  countDown() {
    // Remove one second, set state so a re-render happens.
    let { seconds } = this.state;
    seconds -= 1;
    this.setState({
      seconds,
    });

    // Check if we're at zero.
    if (seconds === 0) {
      clearInterval(this.timer);
    }
  }

  render() {
    const { seconds } = this.state;
    return (
      <div>
        <span>{seconds}</span>
      </div>
    );
  }
}

Timer.propTypes = {
  dispatch: PropTypes.func,
}.isRequired;

export default connect()(Timer);
