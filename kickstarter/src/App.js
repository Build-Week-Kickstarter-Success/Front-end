import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Registration from './components/Registration'

function App() {
  return (
    <div className="App">
      <h1>Kickstarter App</h1>
      <Route path="/registration" component={Registration}></Route>

    </div>
  );
}

export default App;
