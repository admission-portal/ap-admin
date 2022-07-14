import React from 'react';
import {
  BrowserRouter, Route, Switch, Redirect,
} from 'react-router-dom';
import ProtectedRoute from './routes/ProtectedRoute';
import Main from './main';
import SignUp from './pages/common/SignUp';
import Login from './pages/common/Login';
// import Intermediate from './intermediate';
import { Landing } from './pages/common';
import { UserContextProvider } from './contexts/user';
import './App.css';

function App() {
  return (
    <BrowserRouter basename="/ap-admin">
      <UserContextProvider>
        <Switch>
          <ProtectedRoute path="/adm/" component={Main} exact />
          <Route path="/" component={Landing} exact />
          <Route path="/login" component={Login} exact />
          <Route path="/signup" component={SignUp} exact />

          {/* <Route path="/ap-admin/interm" component={Intermediate} exact /> */}
          <Redirect to="/" />
        </Switch>
      </UserContextProvider>
    </BrowserRouter>
  );
}

export default App;
