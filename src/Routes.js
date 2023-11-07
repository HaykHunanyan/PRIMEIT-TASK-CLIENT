import React, { useEffect, useState } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import roles from 'constants/roles';
import routes from 'constants/routes';
import asyncComponent from './asyncComponent';
import { isAuth, isNotAuth } from './configs/auth';
import getPageContainer, { getPageComponents } from './getPageContainer';
import { getUserRole } from './selectors/users';
import configureStore from './configs/configureStore';

const NotFoundPage = asyncComponent(() => import('./containers/NotFoundPage'));

const Routes = () => {
  const currentRole = getUserRole(configureStore.getState()) || roles.manager;
  // eslint-disable-next-line no-unused-vars
  const [role, setRole] = useState('guest');

  useEffect(() => {
    if (currentRole) {
      setRole(currentRole);
    }
  }, [currentRole]);
  const protectedRouts = getPageComponents(role);
  return (
    <Switch>
      {/* unprotected routes */}
      {Object.values(routes).map(route => (
        <Route
          exact
          path={route.pathname}
          key={route.pathname}
          component={isNotAuth(getPageContainer(route.component))}
        />
      ))}

      {/* protected routes */}
      {protectedRouts.map(route => {
        return (
          <Route
            exact
            key={route.pathname}
            path={route.absPathname || route.pathname}
            component={isAuth(getPageContainer(route.component))}
          />
        );
      })}

      {/* 404 */}
      <Route exact path={routes.notFound.pathname} component={NotFoundPage} />
      <Route component={NotFoundPage} />
    </Switch>
  );
};

export default withRouter(Routes);
