import React from 'react';

import {
  Route
} from 'react-router-dom';

import App from './app';
import HomePage from './home-page'
/**
 * @return {JSX} JSX element
*/
export default function Main() {
  return (
    <App>
      <Route
        path="/"
        component={HomePage}
      />
    </App>
  );
}
