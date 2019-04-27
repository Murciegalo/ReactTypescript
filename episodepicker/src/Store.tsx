import React from 'react' ;

//Interface for Store
interface IStore{
  episodes: [],
  favorites: []
}
//STORE
const initialState : IStore = {
  episodes: [],
  favorites: []
};

export const Store = React.createContext<IStore>(initialState) ;  //App

//Reducers
function reducer(){

}

export function StoreProvider(props:any): JSX.Element{
  return <Store.Provider value={initialState}>{props.children}</Store.Provider>
}