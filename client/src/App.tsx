import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import './App.scss';
import LoadingIcon from './assets/components/LoadingIcon/LoadingIcon';
const DashBoard = lazy(() => import('./pages/DashBoard/DashBoard'));
const Auth = lazy(() => import('./pages/Auth/Auth'));
const Users = lazy(() => import('./pages/Users/Users'));
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Suspense fallback={<LoadingIcon />}>
            <Route path="/" exact component={DashBoard} />
            <Route path="/auth" exact component={Auth} />
            <Route path="/users" exact component={Users} />
          </Suspense>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
