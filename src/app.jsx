import React, { Component } from 'react';
import Inputs from './components/inputs';
import Outputs from './components/outputs';

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
    const { change, twenties, tens, fives, ones, quarters, dimes, nickels, pennies } = this.state;
    return (
      <div className='container'>
        <h1>Change Calculator</h1>
        <hr className='border-white' />
        <div id='box'>
          <Inputs
            handleAmountDue={ this.handleAmountDue }
            handleAmountReceived={ this.handleAmountReceived }
            handleClick={ this.handleClick }
          />
          <Outputs
            change={ change }
            twenties={ twenties }
            tens={ tens }
            fives={ fives }
            ones={ ones }
            quarters={ quarters }
            dimes={ dimes }
            nickels={ nickels }
            pennies={ pennies }
          />
        </div>
      </div>
    );
  }
}

export default App;
