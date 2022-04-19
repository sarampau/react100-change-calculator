import React, { Component } from 'react';

class Inputs extends Component {
  render() {
    return (
      <div id='inputs-card'>
        <div id='card-header'>
          <h5>Enter information</h5>
        </div>
        <div id='card-body'>
          <p>How much is due?</p>
          <input
            id='amount-due'
            name='amountDue'
            type='number'
            step='0.01'
            onChange={ this.props.handleAmountDue }
          />
          <p>How much was received?</p>
          <input
            id='amount-received'
            name='amountReceived'
            type='number'
            step='0.01'
            onChange={ this.props.handleAmountReceived }
          />
        </div>
        <div id='card-footer'>
          <button
            className='btn'
            id='calculate'
            onClick={ this.props.handleClick }
          >Calculate
          </button>
        </div>
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
