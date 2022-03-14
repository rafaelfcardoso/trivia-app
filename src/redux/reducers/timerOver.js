import { RESET_BUTTON_STATUS, WARN_TIMER_OVER } from '../actions';

const INITIAL_STATE = false;

const timerOverReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case WARN_TIMER_OVER:
    return true;
  case RESET_BUTTON_STATUS:
    return false;
  default:
    return state;
  }
};

export default timerOverReducer;
