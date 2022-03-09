const INNITIAL_STATE = {
  name: '',
  assertions: '',
  score: 0,
  gravatarEmail: '',
};

const playerReducer = (state = INNITIAL_STATE, action) => {
  switch (action.type) {
  case '':
  default:
    return state;
  }
};

export default playerReducer;
