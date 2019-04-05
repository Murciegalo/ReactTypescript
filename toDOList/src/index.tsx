import React , {Fragment , useState} from 'react'
import ReactDOM from 'react-dom'


type formElm = React.FormEvent<HTMLFormElement>

//Interface for To Do's
interface ITodo{
  text: string
  complete: boolean
}

export default function App() : JSX.Element {  
  //State input To Do
  const [ value , setValue] = useState <string>(' ');
  //State for All To Do inputs
  const [todos, setTodos] = useState <ITodo[]>([]);

  //On Submit
    const handleSubmit = (e : formElm) : void => {
      e.preventDefault();
      adder(value)
      setValue(' ')
    };

  // Add to Do's
    const adder = (text: string) => {
      const nueTodos : ITodo[]  =  [... todos , {text , complete: false}]
      setTodos(nueTodos)
    };
    
  return (
    <Fragment>
      <h1>To do list App</h1>
      <form onSubmit = {handleSubmit}>
        <input type="text"  value = {value}  onChange = {e  =>  setValue(e.target.value) }  required/>
        <button type="submit">Add to Do</button>
      </form>
      <section>
        {todos.map(  (todo : ITodo , index : number) => {
          return <div key = {index}>{todo.text}</div>
        })}
      </section>
    </Fragment>
  )
}

const root = document.getElementById('app-root');

ReactDOM.render(<App /> , root);