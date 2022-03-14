import React from 'react';
import { connect } from 'react-redux';
// import PropTypes from 'prop-types';

class Ranking extends React.Component {
  handleHomeBtn = () => {
    const { history } = this.props;
    history.push('/');
  }

  render() {
    return (
      <div>
        <h1 data-testid="ranking-title">Ranking</h1>
        <button
          type="button"
          data-testid="btn-go-home"
          onClick={ this.handleHomeBtn }
        >
          Início
        </button>
      </div>
    );
  }
}

Ranking.propTypes = {
}.isRequired;

const mapStateToProps = () => ({
});

export default connect(mapStateToProps, null)(Ranking);
