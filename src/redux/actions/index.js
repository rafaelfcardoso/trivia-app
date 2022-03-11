import { setToken } from '../../helpers/localStorage';
import { QUANTITY_DEFAULT } from '../../constants';
import { getApiToken, getApiQuestions } from '../../helpers/api';

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
  async (dispatch) => {
    let token = await getApiToken();
    dispatch(tokenAction(token));
    setToken(token);

    let data = await getApiQuestions(token, quantity);

    if (data.response_code === 0) {
      dispatch(requestQuestionsApi(data.results));
    } else {
      token = await getApiToken();
      data = await getApiQuestions(token, quantity);
      dispatch(tokenAction(token));
      setToken(token);
      dispatch(requestQuestionsApi(data.results));
    }
  }
);
