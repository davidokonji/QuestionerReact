import { BrowserRouter, Route, Switch } from 'react-router-dom';
import React from 'react';
import LandingPage from '../containers/LandingPage.container';
import AuthPage from '../containers/AuthPage.container';
import Footer from '../components/footer.component';
import NotFound from '../components/404page';
import Dashboard from '../containers/Dashboard.container';
import SingleMeetup from '../containers/SingleMeetup.container';

const Routes = () => (
  <BrowserRouter>
    <div>
      <Switch>
        <Route path='/' component={LandingPage} exact />
        <Route path='/auth' component={AuthPage} exact />
        <Route path='/dashboard' component={Dashboard} />
        <Route path='/meetup/:id' component={SingleMeetup} exact />
        <Route component={NotFound} />
      </Switch>
      <Footer />
    </div>
  </BrowserRouter>
);
export default Routes;
