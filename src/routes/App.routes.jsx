import { BrowserRouter, Route, Switch } from 'react-router-dom';
import React from 'react';
import LandingPage from '../containers/LandingPage.container';
import AuthPage from '../containers/AuthPage.container';
import Footer from '../components/footer.component';
import NotFound from '../components/404page';

const Routes = () => (
  <BrowserRouter>
    <div>
      <Switch>
        <Route path="/" component={LandingPage} exact />
        <Route path="/auth" component={AuthPage} />
        <Route component={NotFound} />
      </Switch>
      <Footer />
    </div>
  </BrowserRouter>
);
export default Routes;
