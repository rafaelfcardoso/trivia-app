import { SET_PLAYER, UPDATE_SCORE, SET_WINS } from '../actions';

const INITIAL_STATE = {
  name: '',
  assertions: '',
  score: 0,
  gravatarEmail: '',
  wins: 0,
};

const playerReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case SET_PLAYER:
    return { ...state, ...action.payload };
  case UPDATE_SCORE:
    return { ...state, score: (state.score + action.payload) };
  case SET_WINS:
    return { ...state, wins: (state.wins + action.payload) };
  default:
    return state;
  }
};

export default playerReducer;
