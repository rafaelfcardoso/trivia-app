import React from 'react';
import '../css/Login.css';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { setPlayerAction, requestQuestionsApiThunk } from '../redux/actions';

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

  handleSubmit = (event) => {
    event.preventDefault();
    const { history, dispatch } = this.props;
    const { name, gravatarEmail } = this.state;
    dispatch(setPlayerAction({ name, gravatarEmail }));
    dispatch(requestQuestionsApiThunk());
    history.push('/game');
  }

  render() {
    const { isBtnDisabled } = this.state;
    return (
      <section className="login">
        <button
          type="button"
          data-testid="btn-settings"
          onClick={ this.handleConfigButton }
        >
          Configurações
        </button>
        <form onSubmit={ this.handleSubmit } className="form">
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
  history: PropTypes.shape({}),
}.isRequired;

export default connect()(Login);
