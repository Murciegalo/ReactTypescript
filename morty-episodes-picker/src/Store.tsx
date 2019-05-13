import React from 'react' ;

interface IState{
  episodes: [],
  favorites: []
}
const initialState: IState = {
  episodes: [],
  favorites: []
};

export const Store = React.createContext<IState | any>(initialState);

interface IAction{
  type: string,
  payload: any
}

function reducer(state: IState, action: IAction): IState{
  switch(action.type){
    case 'FETCH_DATA':
      return {...state , episodes: action.payload }
    default:
      return state 
  }
}

export function StoreProvider(props: any): JSX.Element{
  // useReducer Hook
  const [state , dispatch] = React.useReducer( reducer, initialState);
  return <Store.Provider value={{state, dispatch}}>{props.children}</Store.Provider>
}