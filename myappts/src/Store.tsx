//https://api.tvmaze.com/singlesearch/shows?q=rick-&-morty&embed=episodes
// react
import React from 'react'
import { func } from 'prop-types';

interface IState {
  episodes : [] , 
  favourites: []
}
//STORE SECTION , REDUX
//ALL DATA COMING HERE

//The initial state for Context-Obj for React.createContext
const initialState : IState = {
  episodes: [] ,
  favourites: []
}

//used by all components in my app { provider , }
export const Store = React.createContext<IState>( initialState )

//-----------------------------------------------

interface IAction {
  type: string,
  payload: any
}

// REDUCER  >>  TO MODIFY STORE
function reducer( state: IState, action : IAction) : IState {
  switch (action.type) {
    case  'FETCH_DATA' : //get data from API
      return { ...state, episodes :  action.payload }   //populate Store with it
    default :
      return state
  }
}

//provide all components with access to Store
export function StoreProvider(props : any) : JSX.Element {
  return <Store.Provider value = { initialState }>{props.children}</Store.Provider>
}