//import logo from './logo.svg';
import React from 'react';
import {Store} from './Store';
import { async } from 'q';

export default function App(): JSX.Element {
  // REducer Hook
  const [state, dispatch] = React.useContext(Store);

  //effect Hook
  React.useEffect( () => {
    state.episodes.length === 0 && fetchDataAction()
  })

  //Action
  const fetchDataAction = async () => {
    const url = 'https://api.tvmaze.com/singlesearch/shows?q=rick-&-morty&embed=episodes';
    const data = await fetch(url)
    const dataJson = await data.json();
    return dispatch({
      type: 'FETCH_DATA',
      payload: dataJson._embedded.episodes
    })
  }
  console.log(state);
  return (
    <React.Fragment>
        <h1>Rick & Morty episodes picker</h1>
        <p>Pick your favorite episode!</p>
    </React.Fragment>
  ); 
}

