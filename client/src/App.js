import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";


import Home from './component/home/home';
import Call from '../src/component/chat/Call';
import Patient from './component/dashboard/patient/patient';
import PrivatePatient from './component/private/privatePatient'

import Doctor from './component/dashboard/doctor/doctor';
import PrivateDoctor from './component/private/privateDoctor';


function App() {
  return (
    <div className="app">
      <Router>
        <Switch>
          <PrivatePatient
            exact
            path="/patient"
            component={Patient}
          />
        </Switch>
        <Switch>
          <PrivateDoctor
            exact
            path="/doctor"
            component={Doctor}
          />
        </Switch>
        <Switch>
          <PrivateDoctor
            exact
            path="/call"
            component={Call}
          />
        </Switch>
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
