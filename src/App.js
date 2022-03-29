import * as React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Dashboard from './pages/containers/Dashboard';

import { Admin, Home, NotFound } from './pages/views';

export default function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' exact component={Home} />

        <Route path='/dashboard/:path?' exact>
          <Dashboard>
            <Switch>
              <Route path='/dashboard' exact component={Admin} />
            </Switch>
          </Dashboard>
        </Route>
      </Switch>

      <Route path='*' component={NotFound} />
    </BrowserRouter>
  );
}
