import { RESET_TIMER, WARN_TIMER_OVER } from '../actions';

const INITIAL_STATE = false;

const timerOverReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case WARN_TIMER_OVER:
    return true;
  case RESET_TIMER:
    return false;
  default:
    return state;
  }
};

export default timerOverReducer;
