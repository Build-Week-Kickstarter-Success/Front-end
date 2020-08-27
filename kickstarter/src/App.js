import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Registration from './components/Registration';
import Login from './components/Login';
import PrivateRoute from "./components/utils/PrivateRoute";
import ProfilePage from './components/profile/ProfilePage';
import CampaignsForm from './components/profile/CampaignForm';
import CampaignsList from './components/profile/CampaignsList';
import CampaignEdit from './components/profile/CampaignEdit';

function App() {
  return (
    <div className="App">
      <h1>Kickstarter App</h1>
      <Switch>

        <Route path='/campaign/edit/:id' component={CampaignEdit} />
        <Route path='/profile' component={ProfilePage} />
        <Route path='/campaign-list' component={CampaignsList}/>
        <Route path='/campaign' component={CampaignsForm} />

        <Route path="/registration" component={Registration}></Route>
        <Route path="/login" component={Login}></Route>
        
        <Route path="/profile" component={ProfilePage}></Route>
        <Route path="/form" component={CampaignsForm}></Route>
      </Switch>
    </div>
  );
}

export default App;
