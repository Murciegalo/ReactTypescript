import React from 'react';
import logo from './logo.svg';
//import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>To Do's App in Typescript/React</h1>
      </header>
      <React.Fragment>
        <form action="Submit">
          <input type="text" required/>
          <button>Add</button>
        </form>
      </React.Fragment>
    </div>
  );
}

export default App;
