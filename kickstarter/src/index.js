import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from "react-redux";
import {createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import kickstartReducer from "./reducers/reducers";

const store = createStore(kickstartReducer, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store = {store}>
    <App />
  </Provider>,
  document.getElementById('root')
);


