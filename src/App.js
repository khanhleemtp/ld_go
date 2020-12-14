import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Home, Learn, Lesson } from './pages';
import * as ROUTES from './constants/routes';
// import { IsUserRedirect, ProtectedRoute } from './helpers/routes';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path={ROUTES.LOGIN} component={Home} />
        <Route path={ROUTES.LEARN} component={Learn} /> 
        <Route path={ROUTES.LESSON} component={Lesson}/>       
      </Switch>
    </Router>
  );
}

export default App;