import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { THOUSAND } from '../constants';
import { warnTimerOver } from '../redux/actions';

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

      const nextBtn = document.querySelector('.next-btn');
      nextBtn.classList.add('next-btn-visible');
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

  countDown() {
    let { seconds } = this.props;
    const { handleSeconds } = this.props;
    // Remove one second, set state so a re-render happens.
    seconds -= 1;
    handleSeconds(seconds);

    // Check if we're at zero.
    if (seconds === 0) {
      clearInterval(this.timer);
    }
  }

  render() {
    const { seconds } = this.props;
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
