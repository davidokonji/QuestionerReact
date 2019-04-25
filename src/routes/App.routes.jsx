import { BrowserRouter, Route, Switch } from 'react-router-dom';
import React from 'react';
import LandingPage from '../containers/LandingPage.component';
import AuthPage from '../containers/AuthPage.container';
import Footer from '../components/footer.component';

const Routes = () => (
  <BrowserRouter>
    <div>
      <Switch>
        <Route path="/" component={LandingPage} exact />
        <Route path="/auth" component={AuthPage} />
      </Switch>
      <Footer />
    </div>
  </BrowserRouter>
);
export default Routes;
