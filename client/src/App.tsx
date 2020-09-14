import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import { Signin } from './Signin';
import { Signup } from './Signup';
import { NotFound } from './NotFound';
import { User } from './User';


const App = () => (
  <Router>
    <div className="container">
      <Switch>
        <Route exact path={["/", "/signin"]} component={Signin} />
        <Route path="/signup" component={Signup} />
        <Route path="/user" component={User} />
        <Route path="*" component={NotFound} />
      </Switch>
    </div>
  </Router>
);

export default App;
