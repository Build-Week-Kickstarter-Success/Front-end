import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Registration from './components/Registration';
import Login from './components/Login';
import kickstartReducer from './reducers/reducers';

function App() {
  return (
    <div className="App">
      <h1>Kickstarter App</h1>
      <Route path="/registration" component={Registration}></Route>
      <Route path="/login" component={Login}></Route>

    </div>
  );
}

export default App;
