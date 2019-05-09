//import logo from './logo.svg';
import React from 'react';
import {Store} from './Store';

function App(): JSX.Element {
  //COntext Hook
  //const store = React.useContext(Store);
  // REducer Hook
  const [state, dispatch] = React.useContext(Store);
  
  
  return (
    <React.Fragment>
      {console.log(store)}
        <h1>Rick & Morty episodes picker</h1>
        <p>Pick your favorite episode!</p>
    </React.Fragment>
  ); 
}

export default App;
