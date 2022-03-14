import {
  MILLISECOND_TO_MINUTES_DIVIDER,
  SIX_HOURS_IN_MINUTES,
} from '../constants';

export const getToken = () => (
  localStorage.getItem('token') || ''
);

export const getTokenDate = () => (
  localStorage.getItem('tokenDate') || 0
);

export const setToken = (token) => {
  localStorage.setItem('token', token);
  localStorage.setItem('tokenDate', Date.now());
};

export const isTokenExpired = () => {
  const savedTokenDate = +getTokenDate();
  const now = Date.now();
  const diffInMinutes = (now - savedTokenDate) / MILLISECOND_TO_MINUTES_DIVIDER;
  return diffInMinutes > SIX_HOURS_IN_MINUTES;
};

export const getGames = () => (
  JSON.parse(localStorage.getItem('games')) || []
);

export const setGame = (game) => {
  localStorage.setItem('games', JSON.stringify([...getGames() || [], game]));
};
