import React from 'react';

import classes from './Navigation.module.css';
import AuthContext from '../../../store/auth-context';

const Navigation = ({ onLogout }) => {
  return (
    // Consumer로 지정하면, 아까 Provider의 value 가 콜백함수의 매개변수로 들어감.
    <AuthContext.Consumer>
      {(context) => {
        return (
          <nav className={classes.nav}>
            <ul>
              {context.isLoggedIn && (
                <li>
                  <a href='/'>Users</a>
                </li>
              )}
              {context.isLoggedIn && (
                <li>
                  <a href='/'>Admin</a>
                </li>
              )}
              {context.isLoggedIn && (
                <li>
                  <button onClick={onLogout}>Logout</button>
                </li>
              )}
            </ul>
          </nav>
        );
      }}
    </AuthContext.Consumer>
  );
};

export default Navigation;
