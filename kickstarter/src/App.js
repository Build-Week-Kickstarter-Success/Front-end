import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Registration from './components/Registration';
import Login from './components/Login';
import PrivateRoute from "./components/utils/PrivateRoute";
import ProfilePage from './components/profile/ProfilePage';
import CampaignForm from './components/profile/CampaignForm';
import CampaignsList from './components/profile/CampaignsList';

function App() {
  return (
    <div className="App">
      <h1>Kickstarter App</h1>
      <Switch>
        <Route path='/campaigning' component={CampaignsList}/>
        <Route path='/campaign' component={CampaignForm} />
        <Route path="/registration" component={Registration}></Route>
        <Route path="/login" component={Login}></Route>
        
        <Route path="/profile" component={ProfilePage}></Route>
        <Route path="/form" component={CampaignForm}></Route>
      </Switch>
    </div>
  );
}

export default App;
