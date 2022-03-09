import { combineReducers } from "redux";
import playerReducer from './player';

const rootReducer = combinerReducers({ playerReducer });

export default rootReducer;
