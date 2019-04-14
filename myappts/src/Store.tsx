// react
import React, { ReactElement  ,  ReactComponentElement } from 'react'

interface IState {
  episodes : []  
  favourites: []
}
//STORE SECTION , REDUX / ALL DATA COMING HERE

//The initial state for Context-Obj for React.createContext
const initialState : IState = {
  episodes: [] ,
  favourites: []
}

//used by all components in my app { provider , }
export const Store = React.createContext<IState | any>( initialState )

//-----------------------------------------------

interface IAction {
  type: string
  payload: any
}

// REDUCER  >>  TO MODIFY STORE
function reducer( state: IState, action : IAction) : IState {
  switch  ( action.type ) {
    case  'FETCH_DATA' : //get data from API
      return { ...state, episodes :  action.payload }   //populate Store with it
    default :
      return state
  }
}

//provide all components with access to Store
export function StoreProvider( props : any ) : JSX.Element {
  const [ state , dispatch ] = React.useReducer( reducer , initialState);
  return <Store.Provider value={{state , dispatch }}>{props.children}</Store.Provider>
} 
