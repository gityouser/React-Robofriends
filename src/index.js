// Imports
import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import App from "./containers/App";
// import "tachyons";

import registerServiceWorker from './registerServiceWorker';

// Actual render
ReactDOM.render(
  <App />
  , document.getElementById('root'));

registerServiceWorker();
