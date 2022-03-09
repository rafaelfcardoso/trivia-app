import React from 'react';

class Login extends React.Component {
  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  }

  render() {
    return (
      <section>
        <form>
          <label htmlFor="playerEmail">
            <input
              type="email"
              id="playerEmail"
              name="gravatarEmail"
              placeholder="Digite seu email:"
              data-testid="input-gravatar-email"
            />
          </label>
          <label htmlFor="playerName">
            <input
              type="text"
              id="playerName"
              name="name"
              placeholder="Digite seu nome:"
              data-testid="input-player-name"
            />
          </label>
          <button data-testid="btn-play" id="submitBtn" type="submit">Jogar!</button>
        </form>
      </section>
    );
  }
}

export default Login;
