import { SET_QUESTION_INDEX } from '../actions';

const INITIAL_STATE = 0;

export const setIndexReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case SET_QUESTION_INDEX:
    return action.payload;
  default:
    return state;
  }
};

export default setIndexReducer;
