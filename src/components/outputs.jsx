import React, { Component } from 'react';

class Outputs extends Component {
  render() {
    return (
      <div id='outputs'>
        <header id='outputs-header'>
          <h5 id='total-change'>The total change due is ${this.props.change}</h5>
        </header>
        <div className='card-body'>
          <div className='row'>
            <div className='denom-output'>
              <h5>Twenties</h5>
              <p className='change'>{this.props.twenties}</p>
            </div>
            <div className='denom-output'>
              <h5>Tens</h5>
              <p className='change'>{this.props.tens}</p>
            </div>
            <div className='denom-output'>
              <h5>Fives</h5>
              <p className='change'>{this.props.fives}</p>
            </div>
            <div className='denom-output'>
              <h5>Ones</h5>
              <p className='change'>{this.props.ones}</p>
            </div>
          </div>
          <div className='row'>
            <div className='denom-output'>
              <h5>Quarters</h5>
              <p className='change'>{this.props.quarters}</p>
            </div>
            <div className='denom-output'>
              <h5>Dimes</h5>
              <p className='change'>{this.props.dimes}</p>
            </div>
            <div className='denom-output'>
              <h5>Nickels</h5>
              <p className='change'>{this.props.nickels}</p>
            </div>
            <div className='denom-output'>
              <h5>Pennies</h5>
              <p className='change'>{this.props.pennies}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Outputs.propTypes = {
  change: React.PropTypes.number,
  twenties: React.PropTypes.number,
  tens: React.PropTypes.number,
  fives: React.PropTypes.number,
  ones: React.PropTypes.number,
  quarters: React.PropTypes.number,
  dimes: React.PropTypes.number,
  nickels: React.PropTypes.number,
  pennies: React.PropTypes.number
};

export default Outputs;
