import React from 'react';
import Header from '../components/Header';

class Feedback extends React.Component {
  render() {
    return (
      <>
        <header>
          <Header />
        </header>
        <div>
          <p data-testid="feedback-text"> Mensagem de Feedback </p>
        </div>
      </>
    );
  }
}

export default Feedback;
