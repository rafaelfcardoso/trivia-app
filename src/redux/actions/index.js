import { getToken } from '../../helpers/localStorage';
import { QUANTITY_DEFAULT } from '../../constants';

export const SET_TOKEN = 'SET_TOKEN';

export const SET_PLAYER = 'SET_PLAYER';

export const REQUEST_QUESTIONS_API = 'REQUEST_QUESTIONS_API';

export const tokenAction = (payload) => ({
  type: SET_TOKEN,
  payload,
});

export const setPlayerAction = (payload) => ({
  type: SET_PLAYER,
  payload,
});

export const requestQuestionsApi = (payload) => ({
  type: REQUEST_QUESTIONS_API,
  payload,
});

export const requestQuestionsApiThunk = (quantity = QUANTITY_DEFAULT) => (
  (dispatch) => {
    fetch(`https://opentdb.com/api.php?amount=${quantity}&token=${getToken()}`)
      .then((response) => response.json())
      .then((data) => {
        dispatch(requestQuestionsApi(data.results));
      })
      .catch((error) => error);
  });
