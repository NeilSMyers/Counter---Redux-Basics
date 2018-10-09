import React, { Component } from 'react';
import { connect } from 'react-redux';
import { increment, decrement, upAndDown } from '../actions/index';

class App extends Component {
  render() {
    return (
      <div className='app'>
        <div className="counter">{this.props.counter.count}</div>
        <div className="buttons">
          <i onClick={() => this.props.upAndDown(-1)} className="fas fa-minus"></i>
          <i onClick={() => this.props.upAndDown(1)} className="fas fa-plus"></i>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { counter: state.counter }
}

App = connect(mapStateToProps, { increment, decrement, upAndDown })(App);

export default App;