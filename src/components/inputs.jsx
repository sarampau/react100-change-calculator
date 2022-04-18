import React, { Component } from 'react';
// import PropTypes from 'prop-types';

class Inputs extends Component {
  render() {
    return (
      <div id='inputs-card'>
        <header id='card-header'>
          <h5>Enter information</h5>
        </header>
        <main id='card-body'>
          <form>
            <p>How much is due?</p>
            <input
              id='amount-due'
              className='amountDue'
              type='number'
              step='0.01'
              onChange={ this.props.handleAmountDue }
            />
          </form>
          <form>
            <p>How much was received?</p>
            <input
              id='amount-received'
              className='amountReceived'
              type='number'
              step='0.01'
              onChange={ this.props.handleAmountReceived }
            />
          </form>
        </main>
        <footer id='card-footer'>
          <button
            className='btn.button'
            id='calculate'
            onClick={ this.props.handleClick }
          >Calculate
          </button>
        </footer>
      </div>
    );
  }
}

Inputs.propTypes = {
  handleAmountDue: React.PropTypes.func,
  handleAmountReceived: React.PropTypes.func,
  handleClick: React.PropTypes.func
};

export default Inputs;
