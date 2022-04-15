import React, { Component } from 'react';

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
              name='amountDue'
              type='number'
              step='0.01'
              onChange={ this.props.handleAmountDue }
            />
          </form>
          <form>
            <p>How much was received?</p>
            <input
              id='amount-received'
              name='amountReceived'
              type='number'
              step='0.01'
              onChange={ this.props.handleAmountReceived }
            />
          </form>
        </main>
        <footer id='card-footer'>
          <button
            id='calculate'
            onClick={ this.props.handleClick }
          >Calculate
          </button>
        </footer>
      </div>
    );
  }
}

export default Inputs;
