import React, { Component } from 'react' ;
//store
import { Store } from './Store' ;


export default function App() : JSX.Element {
  const store = React.useContext(Store);
  return (
    <React.Fragment>
      {/* JSX */}
      {console.log(store)} 
      <h1>Rick and Morty</h1>
      <p>Pick your favourite episode!!</p>
    </React.Fragment>
  )
}
