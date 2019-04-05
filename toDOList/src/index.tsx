import React , {Fragment , useState} from 'react'
import ReactDOM from 'react-dom'

type formElm = React.FormEvent<HTMLFormElement>

export default function App() : JSX.Element {
  
  //State
  const [ value , setValue] = useState <string>(' ')
  //On Submit
    const handleSubmit = (e : formElm) : void => {
      e.preventDefault();
      setValue(' ')
    }
  return (
    <Fragment>
      <h1>To do list App</h1>
      <form>
        <input type="text"  value = {value}  onChange = {e => setValue(e.target.value)} required/>
        <button type="submit">Add to Do</button>
      </form>
    </Fragment>
  )
}

const root = document.getElementById('app-root');

ReactDOM.render(<App /> , root);