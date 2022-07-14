/*eslint-disable */
/* eslint-disable react/prop-types */
import React from 'react';
import { CognitoUser, AuthenticationDetails } from 'amazon-cognito-identity-js';
import Pool from '../UserPool';

export const UserContext = React.createContext();

const getSession = async () => await new Promise((resolve, reject) => {
  const user = Pool.getCurrentUser();
  if (user) {
    user.getSession((err, session) => {
      if (err) {
        reject();
      } else {
        resolve(session);
      }
    });
  } else {
    reject();
  }
});

const authenticate = async (Username, Password) => await new Promise((resolve, reject) => {
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

export function UserContextProvider(props) {
  const [user, setUser] = React.useState('');
  return (
    <UserContext.Provider value={{
      user,
      setUser,
      authenticate,
      getSession,
      logout
    }}>
      {props.children}
    </UserContext.Provider>
  );
}
