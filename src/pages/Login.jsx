import React from 'react';

class Login extends React.Component {
  render() {
    return (
      <section>
        <label htmlFor="playerName">
          <input type="text" id="playerName" name="name" placeholder="Digite seu nome:" />
        </label>
      </section>
    );
  }
}

export default Login;
