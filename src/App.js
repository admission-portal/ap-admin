import React from 'react';
import {
  BrowserRouter, Route, Switch, Redirect,
} from 'react-router-dom';
import ProtectedRoute from './routes/ProtectedRoute';
import Main from './main';
import Intermediate from './intermediate';
import { Landing } from './pages/common';
import { UserContextProvider } from './contexts/user';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <UserContextProvider>
        <Switch>
          <ProtectedRoute path="/adm/" component={Main} exact />
          <Route path="/ap-admin" component={Landing} exact />
          <Route path="/ap-admin/interm" component={Intermediate} exact />
          <Redirect to="/ap-admin" />
        </Switch>
      </UserContextProvider>
    </BrowserRouter>
  );
}
export default App;
