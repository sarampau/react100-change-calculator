import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      amountDue: '',
      amountReceived: '',
      change: '',
      twenties: '',
      tens: '',
      fives: '',
      ones: '',
      quarters: '',
      dimes: '',
      nickels: '',
      pennies: ''
    };
    this.handleAmountDue = this.handleAmountDue.bind(this);
    this.handleAmountReceived = this.handleAmountReceived.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleAmountDue(e) {
    this.setState({
      amountDue: e.target.value
    });
  }

  handleAmountReceived(e) {
    this.setState({
      amountReceived: e.target.value
    });
  }

  handleClick(e) {
    e.preventDefault();
    const { amountDue, amountReceived } = this.state;
    const change = amountReceived - amountDue;
    let diff = amountReceived - amountDue;

    let twenties = 0;
    let tens = 0;
    let fives = 0;
    let ones = 0;
    let quarters = 0;
    let dimes = 0;
    let nickels = 0;
    let pennies = 0;

    if (change > 0) {
      twenties = Math.floor(diff / 20);
      diff = (diff % 20).toFixed(2);
    }
    if (change > 0) {
      tens = Math.floor(diff / 10);
      diff = (diff % 10).toFixed(2);
    }
    if (change > 0) {
      fives = Math.floor(diff / 5);
      diff = (diff % 5).toFixed(2);
    }
    if (change > 0) {
      ones = Math.floor(diff / 1);
      diff = (diff % 1).toFixed(2);
    }
    if (change > 0) {
      quarters = Math.floor(diff / 0.25);
      diff = (diff % 0.25).toFixed(2);
    }
    if (change > 0) {
      dimes = Math.floor(diff / 0.10);
      diff = (diff % 0.10).toFixed(2);
    }
    if (change > 0) {
      nickels = Math.floor(diff / 0.05);
      diff = (diff % 0.05).toFixed(2);
    }
    if (change > 0) {
      pennies = Math.floor(diff / 0.01);
      diff = (diff % 0.01).toFixed(2);
    }
    this.setState({
      change,
      twenties,
      tens,
      fives,
      ones,
      quarters,
      dimes,
      nickels,
      pennies
    });
  }

  render() {
    return (
      <div className='container'>
        <h1>Change Calculator</h1>
        <hr className='border-white' />
        <div className='row'>
          <div className='col-md-4'>
            <div className='card' id='inputs-card'>
              <div className='card-header'>
                <h5>Enter information</h5>
              </div>
              <div className='card-body'>
                <form>
                  <div className='form-group'>
                    <label>
                      <p>How much is due?</p>
                      <input
                        id='amount-due'
                        name='amountDue'
                        type='number'
                        step='0.01'
                        onChange={ this.handleAmountDue }
                      />
                    </label>
                  </div>
                  <div className='form-group'>
                    <label>
                      <p>How much was received?</p>
                      <input
                        id='amount-received'
                        name='amountReceived'
                        type='number'
                        step='0.01'
                        onChange={ this.handleAmountReceived }
                      />
                    </label>
                  </div>
                </form>
              </div>
              <div className='card-footer'>
                <button
                  id='calculate'
                  className='btn btn-primary btn-block'
                  onClick={ this.handleClick }
                >Calculate
                </button>
              </div>
            </div>
          </div>
          <div id='output' className='col-md-8'>
            <div className='card'>
              <div className='card-header'>
                <h5
                  id='change'
                  className='alert alert-success text-center'
                >The total change due is ${this.state.change}
                </h5>
              </div>
              <div className='card-body'>
                <div className='row'>
                  <div className='col-md-3'>
                    <div className='card card-block shadow p-3 mb-3' id='twenties-output'>
                      <h5 className='card-title text-center'>Twenties</h5>
                      <p className='text-center'>{this.state.twenties}</p>
                    </div>
                  </div>
                  <div className='col-md-3'>
                    <div className='card card-block shadow p-3 mb-3' id='tens-output'>
                      <h5 className='card-title text-center'>Tens</h5>
                      <p className='text-center'>{this.state.tens}</p>
                    </div>
                  </div>
                  <div className='col-md-3'>
                    <div className='card card-block shadow p-3 mb-3' id='fives-output'>
                      <h5 className='card-title text-center'>Fives</h5>
                      <p className='text-center'>{this.state.fives}</p>
                    </div>
                  </div>
                  <div className='col-md-3'>
                    <div className='card card-block shadow p-3 mb-3' id='ones-output'>
                      <h5 className='card-title text-center'>Ones</h5>
                      <p className='text-center'>{this.state.ones}</p>
                    </div>
                  </div>
                </div>
                <div className='row'>
                  <div className='col-md-3'>
                    <div className='card card-block shadow p-3 mb-3' id='quarters-output'>
                      <h5 className='card-title text-center'>Quarters</h5>
                      <p className='text-center'>{this.state.quarters}</p>
                    </div>
                  </div>
                  <div className='col-md-3'>
                    <div className='card card-block shadow p-3 mb-3' id='dimes-output'>
                      <h5 className='card-title text-center'>Dimes</h5>
                      <p className='text-center'>{this.state.dimes}</p>
                    </div>
                  </div>
                  <div className='col-md-3'>
                    <div className='card card-block shadow p-3 mb-3' id='nickels-output'>
                      <h5 className='card-title text-center'>Nickels</h5>
                      <p className='text-center'>{this.state.nickels}</p>
                    </div>
                  </div>
                  <div className='col-md-3'>
                    <div className='card card-block shadow p-3 mb-3' id='pennies-output'>
                      <h5 className='card-title text-center'>Pennies</h5>
                      <p className='text-center'>{this.state.pennies}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
