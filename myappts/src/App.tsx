import React  from 'react' ;
//store
import { Store } from './Store' ;


export default function App() : JSX.Element {
  const { state,  dispatch}  = React.useContext(Store);

  //effect Hook
  React.useEffect( () => {
    state.epidodes.length === 0 &&  fetchData() 
  })
  //ACTION
  const fetchData = async () => {
    const url = 'https://api.tvmaze.com/singlesearch/shows?q=rick-&-morty&embed=episodes';
    const data = await fetch(url);
    const response =  await data.json();
    return dispatch({
      type: 'FETCH_DATA' ,
      payload: response._embedded.episodes
    })
  }
  console.log(state);

  return (
    <React.Fragment>
      <h1>Rick and Morty</h1>
      <p>Pick your favourite episode!!</p>
      <section>
        {state.episodes.map( (episode: any) => {
          return ( 
            <section key={episode.id}>
              <img src={episode.image.medium} alt={`Rick and Mort ${episode.name}`} />
              <div>{episode.name}</div>
              <section>
                Season: {episode.season} Number : {episode.number}
              </section>
            </section>
          )
        })}
      </section>
    </React.Fragment>
  )
}
