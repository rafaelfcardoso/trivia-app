import { IS_FETCHING } from '../actions';

const INITIAL_STATE = false;

const isFetchingReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case IS_FETCHING:
    return action.payload;
  default:
    return state;
  }
};

export default isFetchingReducer;
