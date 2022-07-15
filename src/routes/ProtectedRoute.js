/* eslint-disable*/
/* eslint-disable react/jsx-props-no-spreading */
import { useContext, useEffect } from 'react';
import { Route, Redirect } from 'react-router-dom';
import React, { UserContext } from '../contexts/user';
import UserPool from '../UserPool';

function ProtectedRoute({ component: RouteComponent, ...rest }) {
  const { user, setUser } = useContext(UserContext);
  let localUser
  // console.log('ProtectedRoute', user.getIdToken().getJwtToken());
  
    console.log('UserContextProvider');
    // console.log('setUser',setUser)
    console.log('User',user)
    localUser = UserPool.getCurrentUser();
    if (localUser) {
      localUser.getSession((err, session) => {
        if (err) {
          console.error(err);
        } else if (session.isValid()) {
          console.log('UserContextProvider: session is valid');
          console.log(session);
          setUser(session);
          console.log(localUser);
        }
      });
    } else {
      console.log('No user logged in');
    }


  console.log('User',user)

  return (
    <Route
      {...rest}
      render={(routeProps) => {
        if (!user) {
          return (
            <Redirect
              to={{
                pathname: '/login',
                state: { from: routeProps.location },
              }}
            />
          );
        }
        return <RouteComponent {...routeProps} />;
      }}
    />
  );
}

export default ProtectedRoute;
