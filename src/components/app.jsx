import React from 'react';

import Navigation from './top-bar/Navigation';
import TopBar from './top-bar';
/**
 * @return {JSX} - JSX element
 */
export default function App(props) {
  return (
    <div className="main-content">
      <TopBar />
      {props.children}
      <Navigation />
    </div>
  );
}
