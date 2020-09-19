import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import AppHeader from "./AppHeader";
import App from './App';
import NavBody from './Nav'
import Stats_Header from './Stats_Header'
import StatsTable from './Stats_Table'
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <NavBody />
    <App />
    <StatsTable />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
