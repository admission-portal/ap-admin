/* eslint-disable */
import React from 'react';

export const UserContext = React.createContext();

export function UserContextProvider(props) {
  const [user, setUser] = React.useState();
  return (
    <UserContext.Provider value={[user, setUser]}>
      {props.children}
    </UserContext.Provider>
  );
}
