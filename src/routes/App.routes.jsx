import { BrowserRouter, Route, Switch } from 'react-router-dom';
import React from 'react';
import Protected from '../utils/authenticate';
import LandingPage from '../containers/LandingPage.container';
import AuthPage from '../containers/AuthPage.container';
import NotFound from '../components/404page';
import Dashboard from '../containers/Dashboard.container';
import { OneMeetup } from '../containers/SingleMeetup.container';
import { Admin } from '../containers/AdminDashboard.container';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route path='/' component={LandingPage} exact />
      <Route path='/auth' component={AuthPage} exact />
      <Protected path='/dashboard' component={Dashboard} />
      <Protected path='/meetup/:id' component={OneMeetup} exact />
      <Protected path='/admin' component={Admin} />
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
);
export default Routes;
