import { SET_PLAYER } from '../actions';

const INITIAL_STATE = {
  name: '',
  assertions: '',
  score: '',
  gravatarEmail: '',
};

const playerReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case SET_PLAYER:
    return { ...action.payload };
  default:
    return state;
  }
};

export default playerReducer;
