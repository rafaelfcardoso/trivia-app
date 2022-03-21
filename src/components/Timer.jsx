import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { INITIAL_TIMER, THOUSAND } from '../constants';
import { resetButtonStatus, warnTimerOver } from '../redux/actions';
import '../css/Timer.css';

class Timer extends React.Component {
  constructor() {
    super();
    this.timer = 0;
    this.startTimer = this.startTimer.bind(this);
    this.countDown = this.countDown.bind(this);
  }

  componentDidMount() {
    this.startTimer();
  }

  shouldComponentUpdate({ dispatch, seconds }) {
    if (seconds === 0) {
      dispatch(warnTimerOver());
      this.stopTimer();
      const nextBtn = document.querySelector('.next-btn');
      nextBtn.classList.add('next-btn-visible');
    }
    if (seconds === INITIAL_TIMER) {
      dispatch(resetButtonStatus());
      if (this.timer === 0 && seconds > 0) {
        this.timer = setInterval(this.countDown, THOUSAND);
      }
    }
    return true;
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  startTimer() {
    const { seconds } = this.props;
    if (this.timer === 0 && seconds > 0) {
      this.timer = setInterval(this.countDown, THOUSAND);
    }
  }

  stopTimer() {
    clearInterval(this.timer);
    this.timer = 0;
  }

  countDown() {
    let { seconds } = this.props;
    const { handleSeconds } = this.props;
    // Remove one second, set state so a re-render happens.
    seconds -= 1;
    handleSeconds(seconds);
  }

  render() {
    const { seconds } = this.props;
    return (
      <div className="timer-container">
        <span className="timer">{seconds}</span>
      </div>
    );
  }
}

Timer.propTypes = {
  dispatch: PropTypes.func,
}.isRequired;

export default connect()(Timer);
