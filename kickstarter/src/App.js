import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Registration from './components/Registration';
import Login from './components/Login';

function App() {
  return (
    <div className="App">
      <h1>Kickstarter App</h1>
      <Route path="/registration" component={Registration}></Route>
      <Route path="/login" component={Login}></Route>
      <Route component={Login} />

    </div>
  );
}

export default App;
