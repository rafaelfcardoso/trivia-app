const getAPIToken = () => (
  fetch('https://opentdb.com/api_token.php?command=request')
    .then((response) => response.json())
    .then((data) => data.token)
    .catch((error) => new Error(error.message))
);

export default getAPIToken;
