/* eslint-disable camelcase */
/**
 * Receives jwt token via URL
 * [feature :  redirect URL in AWS cognito], stores it in session storage and in the user context.
 */
import React, { useContext } from 'react';
import jwt from 'jwt-decode';
import { useHistory } from 'react-router-dom';
import { UserContext } from './contexts/user';

export default function Itermediate() {
  const history = useHistory();
  const [, setUser] = useContext(UserContext);
  // try {
  /*  NOTE: need to check the condition here
     *   try-catch is temp here
     */
  const temp = window.location.href.split('#')[1];
  const paramString = temp.split('&')[0];
  const queryString = new URLSearchParams(paramString);
  let id_token;
  // ! check
  // eslint-disable-next-line no-restricted-syntax
  for (const pair of queryString.entries()) {
    if (pair[0] === 'id_token') {
      // eslint-disable-next-line prefer-destructuring
      id_token = pair[1];
    }
  }
  if (id_token != null) {
    sessionStorage.setItem('id_token', id_token);
    sessionStorage.setItem('u_decoded', JSON.stringify(jwt(id_token)));
    setUser(JSON.stringify(jwt(id_token)));
    history.push('/adm');
  }
  // } catch (e) {
  //   console.log(e);
  // }
  return <div>Redirecting...</div>;
}
