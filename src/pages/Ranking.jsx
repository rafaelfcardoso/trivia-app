import React from 'react';
import { connect } from 'react-redux';
// import PropTypes from 'prop-types';

class Ranking extends React.Component {
  render() {
    return (
      <div>
        <h1 data-testid="ranking-title">Ranking</h1>
      </div>
    );
  }
}

Ranking.propTypes = {
}.isRequired;

const mapStateToProps = () => ({
});

export default connect(mapStateToProps, null)(Ranking);
