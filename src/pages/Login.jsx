import React from 'react';
import PropTypes from 'prop-types';
import '../CSS/Login.css';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      name: '',
      gravatarEmail: '',
      isBtnDisabled: true,
    };
  }

  handleChange = ({ target: { name, value } }) => {
    this.setState(
      { [name]: value },
      () => {
        const { name: nameForm, gravatarEmail } = this.state;
        this.setState({ isBtnDisabled: nameForm === '' || gravatarEmail === '' });
      },
    );
  }

  handleConfigButton = () => {
    const { history } = this.props;
    history.push('/configuration');
  }

  render() {
    const { isBtnDisabled } = this.state;
    return (
      <section className="Login">
        <button
          type="button"
          data-testid="btn-settings"
          onClick={ this.handleConfigButton }
        >
          Configurações
        </button>
        <form className="form">
          <label htmlFor="playerEmail">
            <input
              type="email"
              id="playerEmail"
              name="gravatarEmail"
              placeholder="Digite seu email:"
              data-testid="input-gravatar-email"
              onChange={ this.handleChange }
              required
            />
          </label>
          <label htmlFor="playerName">
            <input
              type="text"
              id="playerName"
              name="name"
              placeholder="Digite seu nome:"
              data-testid="input-player-name"
              onChange={ this.handleChange }
              required
            />
          </label>
          <button
            disabled={ isBtnDisabled }
            data-testid="btn-play"
            id="submitBtn"
            type="submit"
          >
            Jogar!
          </button>
        </form>
      </section>
    );
  }
}

Login.propTypes = {
  history: PropTypes.object,
}.isRequired;

export default Login;
