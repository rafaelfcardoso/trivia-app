export const SET_TOKEN = 'SET_TOKEN';

export const SET_PLAYER = 'SET_PLAYER';

export const tokenAction = (payload) => ({
  type: SET_TOKEN,
  payload,
});

export const setPlayerAction = (payload) => ({
  type: SET_PLAYER,
  payload,
});
