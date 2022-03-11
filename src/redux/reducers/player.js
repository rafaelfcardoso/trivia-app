import { SET_PLAYER, UPDATE_SCORE } from '../actions';

const INITIAL_STATE = {
  name: '',
  assertions: '',
  score: 0,
  gravatarEmail: '',
};

const playerReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case SET_PLAYER:
    return { ...state, ...action.payload };
  case UPDATE_SCORE:
    return { ...state, score: (state.score + action.payload) };
  default:
    return state;
  }
};

export default playerReducer;
