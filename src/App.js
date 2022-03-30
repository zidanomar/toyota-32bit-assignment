import React, { useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import AppBar from './components/Navigation/AppBar';
import Main from './pages/containers/Main';
import { Admin, Home, NotFound } from './pages/views';

export default function App() {
  const [drawerIsOpen, setdrawerIsOpen] = useState(false);

  const handleDrawerOpen = () => {
    setdrawerIsOpen(true);
  };

  const handleDrawerClose = () => {
    setdrawerIsOpen(false);
  };
  return (
    <BrowserRouter>
      <AppBar active={drawerIsOpen} handleDrawerOpen={handleDrawerOpen} />
      <Switch>
        <Route path='/' exact component={Home} />

        <Route path='/dashboard/:path?' exact>
          <Main active={drawerIsOpen} handleDrawerClose={handleDrawerClose}>
            <Switch>
              <Route path='/dashboard' exact component={Admin} />
              <Route path='*' component={NotFound} />
            </Switch>
          </Main>
        </Route>
        <Route path='*' component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
}
