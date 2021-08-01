import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { withAuthenticator } from 'aws-amplify-react'
import Amplify, { Auth } from 'aws-amplify';
import aws_exports from './aws-exports';
import { DataStore } from '@aws-amplify/datastore';
import { Tutor } from './models';
Amplify.configure(aws_exports);
await DataStore.save(
    new Tutor({
		"firstname": "Lorem ipsum dolor sit amet",
		"lastname": "Lorem ipsum dolor sit amet",
		"branch": "Lorem ipsum dolor sit amet"
	})
);
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default withAuthenticator(App, true);
