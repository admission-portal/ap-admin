/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-props-no-spreading */
import { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import React, { UserContext } from '../contexts/user';

function ProtectedRoute({ component: RouteComponent, ...rest }) {
  const [user] = useContext(UserContext);

  return (
    <Route
      {...rest}
      render={(routeProps) => (user ? <RouteComponent {...routeProps} /> : <Redirect to="/ap-admin" />)}
    />
  );
}

export default ProtectedRoute;
