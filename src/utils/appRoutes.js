import React from 'react';
import { Route, Switch } from 'react-router-dom';

export default function AppRoutes() {
  const Login = React.lazy(() => import("../pages/login"));
  const LandingPage = React.lazy(() => import("../pages/landingPage"));
  const Subject = React.lazy(() => import("../pages/subject"));

  return (
    <React.Suspense>
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/home" exact component={LandingPage} />
        <Route path="/subject/:id" exact component={Subject} />
        <Route path="*" component={Login} />
      </Switch>
    </React.Suspense>
  )
}
