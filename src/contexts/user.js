/* eslint-disable react/prop-types */
import React from 'react';
import { CognitoUser, AuthenticationDetails } from 'amazon-cognito-identity-js';
import Pool from '../UserPool';

export const UserContext = React.createContext();

const authenticate = async (Username, Password) => new Promise((resolve, reject) => {
  const user = new CognitoUser({ Username, Pool });
  const authDetails = new AuthenticationDetails({ Username, Password });

  user.authenticateUser(authDetails, {
    onSuccess: (data) => {
      console.log('onSuccess:', data);
      resolve(data);
    },

    onFailure: (err) => {
      console.error('onFailure:', err);
      reject(err);
    },

    newPasswordRequired: (data) => {
      console.log('newPasswordRequired:', data);
      resolve(data);
    },
  });
});
const logout = () => {
  const user = Pool.getCurrentUser();
  if (user) {
    user.signOut();
  }
};

export function UserContextProvider({ children }) {
  const [user, setUser] = React.useState();
  if (user === undefined) {
    const localUser = Pool.getCurrentUser();
    if (localUser) {
      localUser.getSession((err, session) => {
        if (err) {
          console.log('Error getting the session:', err);
        } else if (session.isValid()) {
          setUser(session);
        }
      });
    } else {
      console.log('No user logged in');
    }
  }
  return (
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <UserContext.Provider value={{
      user,
      setUser,
      authenticate,
      logout,
    }}
    >
      {children}
    </UserContext.Provider>
  );
}
