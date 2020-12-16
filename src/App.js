import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';  
import { Home, Learn, Lesson, NotFound, Develop, UserInfo } from './pages';
import * as ROUTES from './constants/routes';
import Register from './pages/register';
import PrivateRoute from './hoc/PrivateRoute';

function App() {
  
   return (
    <Router>
      <Switch>
        <Route exact path={ROUTES.LOGIN} component={Home} />
        <PrivateRoute exact path={ROUTES.LEARN}>
          <Learn />
        </PrivateRoute>
        <PrivateRoute exact path={ROUTES.LESSON}>
          <Lesson />
        </PrivateRoute>
        <PrivateRoute exact path={ROUTES.USER}>
          <UserInfo />
        </PrivateRoute>
        <Route path={ROUTES.SIGN_UP} component={Register} />
        <Route path={ROUTES.FORUM} component={Develop} />
        <Route from="*" component={NotFound} />
      </Switch>
    </Router>
  );
}

export default App;