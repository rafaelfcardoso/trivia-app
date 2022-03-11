export const getApiToken = () => (
  fetch('https://opentdb.com/api_token.php?command=request')
    .then((response) => response.json())
    .then((data) => data.token)
    .catch((error) => new Error(error.message))
);

export const getApiQuestions = (token, quantity) => (
  fetch(`https://opentdb.com/api.php?amount=${quantity}&token=${token}`)
    .then((response) => response.json())
    .then((data) => data)
    .catch((error) => new Error(error.message))
);
