import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import jwtDecode from 'jwt-decode';
import getToken from './getToken';
import axios from '../config/axiosConfig';

const Protected = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) => {
      const token = getToken();
      if (token) {
        const decodedToken = jwtDecode(token);
        const hasExpired = decodedToken.exp - (Date.now() / 1000) < 0;
        if (!hasExpired) {
          axios.defaults.headers.common['x-access-token'] = token;
          return (
            <Component {...props} />
          );
        }
        return (
          <Redirect
            to={{
              pathname: '/auth',
              from: props.location
            }
                }
          />
        );
      }
      return (
        <Redirect
          to={{
            pathname: '/auth',
            from: props.location
          }
            }
        />
      );
    }}
  />
);

export default Protected;
