import React from 'react' ;
import ReactDOM from 'react-dom' ;
import './style/app.scss' ;
//header component
import App from './App' ;
//redux component
import { StoreProvider } from './Store' ;



ReactDOM.render(
  <StoreProvider>
    <App />
  </StoreProvider>,
document.getElementById('root')
);

