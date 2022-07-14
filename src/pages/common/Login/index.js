import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { UserContext } from '../../../contexts/user';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();

  const { authenticate, user, setUser } = useContext(UserContext);
  const onSubmit = (e) => {
    e.preventDefault();
    authenticate(email, password)
      .then((data) => {
        setUser(data.idToken.jwtToken);
        console.log('Logged in!', typeof data.idToken.jwtToken, typeof user, user);
        history.push('/adm/');
      })
      .catch((err) => {
        console.error('Failed to login!', err);
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
        <button type="submit">Login</button>
      </form>
      <button onClick={() => history.push('/signup')} type="button">I am, new here.</button>
    </div>
  );
}
