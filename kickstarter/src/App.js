import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Registration from './components/Registration';
import Login from './components/Login';
import kickstartReducer from './reducers/reducers';
import ProfilePage from './components/profile/ProfilePage';


function App() {
  return (
    <Router>
      <div className="App">
        <h1>Kickstarter App</h1>
        <Route path="/registration" component={Registration}></Route>
        <Route path="/login" component={Login}></Route>
        <Route path="/profile" component={ProfilePage}/>
      </div>
    </Router>
  );
}

export default App;
