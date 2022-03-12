import { setToken } from '../../helpers/localStorage';
import { QUANTITY_DEFAULT } from '../../constants';
import { getApiToken, getApiQuestions } from '../../helpers/api';

export const SET_TOKEN = 'SET_TOKEN';

export const SET_PLAYER = 'SET_PLAYER';

export const REQUEST_QUESTIONS_API = 'REQUEST_QUESTIONS_API';

export const IS_FETCHING = 'IS_FETCHING';

export const UPDATE_SCORE = 'UPDATE_SCORE';

export const SET_QUESTION_INDEX = 'SET_QUESTION_INDEX';

export const WARN_TIMER_OVER = 'WARN_TIMER_OVER';

export const RESET_TIMER = 'RESET_TIMER';

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

export const isFetchingAction = (payload) => ({
  type: IS_FETCHING,
  payload,
});

export const updateScoreAction = (payload) => ({
  type: UPDATE_SCORE,
  payload,
});

export const warnTimerOver = () => ({
  type: WARN_TIMER_OVER,
});

export const resetTimer = () => ({
  type: RESET_TIMER,
});

export const requestQuestionsApiThunk = (quantity = QUANTITY_DEFAULT) => (
  async (dispatch) => {
    dispatch(isFetchingAction(true));

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

    dispatch(isFetchingAction(false));
  }
);

export const setQuestionIndex = (payload) => ({
  type: SET_QUESTION_INDEX,
  payload,
});
