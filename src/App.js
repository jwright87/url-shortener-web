import React, { Component } from 'react';
import './UrlShort.js';
import logo from './logo.svg';
import './App.css';
import { UrlShort } from './UrlShort.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Link Shortener Service</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <UrlShort/>
      </div>
    );
  }
}

export default App;
