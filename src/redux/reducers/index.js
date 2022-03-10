import { combineReducers } from 'redux';
import player from './player';
import token from './token';
import questions from './questions'; // Quando for export default o nome pode ser renomeado na importacao

const rootReducer = combineReducers({ player, token, questions });

export default rootReducer;
