import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { CognitoUserAttribute } from 'amazon-cognito-identity-js';
import UserPool from '../../../UserPool';

export default function SignUp() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const usenameattribute = {
    Name: 'name',
    Value: email,
  };
  const pnAttribute = {
    Name: 'phone_number',
    Value: '+919265706142',
  };
  const addressAttriibute = {
    Name: 'address',
    value: email,
  };
  const attributeList = [];
  attributeList.push(new CognitoUserAttribute(usenameattribute));
  attributeList.push(new CognitoUserAttribute(pnAttribute));
  attributeList.push(new CognitoUserAttribute(addressAttriibute));

  const history = useHistory();
  const onSubmit = (e) => {
    e.preventDefault();
    UserPool.signUp(email, password, attributeList, null, (err, result) => {
      console.log('signUp', err, result);
      if (!err) history.push('/login');
    });
  };
  return (
    <div>
      SignUp
      <form onSubmit={onSubmit}>
        <label htmlFor="email">
          Email
          <input id="email" type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
        </label>
        <label htmlFor="password">
          Password
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </label>
        <button type="submit">Sign Up</button>
      </form>
      <button onClick={() => history.push('/login')} type="button">Already, an user?</button>
    </div>
  );
}
