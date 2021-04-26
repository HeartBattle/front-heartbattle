import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './index.css';
import Index from './Home';
import SignIn from './SignIn';
import SignUp from './SignUp';
import ForgotPassword from './ForgotPassword';
import Terms from './Terms';
import Privacy from './Privacy';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <Router>
    <Switch>
      <Route exact path="/" component={Index} />
      <Route exact path="/sign-in/" component={SignIn} />
      <Route exact path="/sign-up/" component={SignUp} />
      <Route exact path="/forgot-password/" component={ForgotPassword} />
      <Route exact path="/terms/" component={Terms} />
      <Route exact path="/privacy/" component={Privacy} />
    </Switch>
  </Router>,

  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
