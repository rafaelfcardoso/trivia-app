import { combineReducers } from 'redux';
import player from './player';
import token from './token';
import questions from './questions'; // Quando for export default o nome pode ser renomeado na importacao
import isFetching from './isFetching';
import setIndex from './setIndex';
import timerOver from './timerOver';

const rootReducer = combineReducers({ player,
  token,
  questions,
  isFetching,
  setIndex,
  timerOver });

export default rootReducer;
