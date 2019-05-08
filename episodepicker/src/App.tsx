import React from 'react';
import {Store} from './Store';
//import logo from './logo.svg';
//<img src={logo} className="App-logo" alt="logo" />

export default function App() : JSX.Element {
  const store = React.useContext(Store);
  return (
    <React.Fragment>
      {console.log(store)}
      <h1>Rick and Morty</h1>
      <p>Pick your favorite episode</p>
    </React.Fragment>
  );
}