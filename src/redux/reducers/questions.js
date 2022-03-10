import { REQUEST_QUESTIONS_API } from '../actions';

const INITIAL_STATE = [];

const questionsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case REQUEST_QUESTIONS_API:
    return (action.payload);
  default:
    return state;
  }
};

export default questionsReducer;
