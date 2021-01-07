import React, {Fragment} from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from "react-router-dom";
import 'semantic-ui-css/semantic.min.css'
import './index.css';
import App from './app/layout/App';

ReactDOM.render(
  <Fragment>
      <Router>
          <App />
      </Router>
  </Fragment>,
  document.getElementById('root')
);

