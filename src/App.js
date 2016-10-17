import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import logo from './logo.svg';
import * as actionCreators from './actions';

import './App.css';

class App extends Component {
  componentDidMount() {
    
  }
  render() {
    const { characters } = this.props;
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <div><h2>Characters: </h2>
          <pre>{JSON.stringify(characters, null, 4)}</pre>
        </div>
      </div>
    );
  }
}

export default connect(
  state => ({
    characters: state.characters,
  }),
  dispatch => ({
    actions: bindActionCreators(actionCreators, dispatch)
  }),
)(App);
