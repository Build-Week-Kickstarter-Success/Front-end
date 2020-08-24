import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Registration from './components/Registration';
import Login from './components/Login';
import CampaignsForm from './components/profile/CampaignForm';
import CampaignsList from './components/profile/CampaignsList';

function App() {
  return (
    <div className="App">
      <h1>Kickstarter App</h1>
      <Switch>
        <Route path='/campaigning' component={CampaignsList}/>
        <Route path='/campaigns' component={CampaignsForm} />
        <Route path="/registration" component={Registration}></Route>
        <Route path="/login" component={Login}></Route>
        <Route component={Login} />
      </Switch>
    </div>
  );
}

export default App;
