import React , {Fragment , useState} from 'react'
import ReactDOM from 'react-dom'
//SASS
import './style/app.scss'

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

  // ADD  to Do's
    const adder = (text: string) : void  => {
      const nueTodos : ITodo[]  =  [ ... todos , { text ,  complete:  false  }];
      setTodos(nueTodos)
    };

    //TOGGLE  to  Do's
    const complete = (index : number) : void  => {
      //array for to Do's
      const nueTodos : ITodo[] = [ ... todos] ;
      //toogle for to Do's
      nueTodos[index].complete = !nueTodos[index].complete
      //set
      setTodos(nueTodos); 
    }

    // REMOVE  to Do's
    const remove = ( index: number) : void => {
      //get all to do's
      const nueTodos: ITodo[] = [...todos];
      //remove selected one
      nueTodos.splice(index , 1);
      // Set restantes to Do's
      setTodos(nueTodos);
    }
    
  return (
    <Fragment>
      <h1>To Do's list</h1>
      <form onSubmit = {handleSubmit}>
        <input type="text"  value = {value}  onChange = {e  =>  setValue(e.target.value) }  required/>
        <button type="submit">Add to Do</button>
      </form>
      <section>
        {todos.map(  (todo : ITodo , index : number)  =>
          //For every encapsulated component from our To Do's List , a different Index is assigned.
          <Fragment key={index}>

            <div style = {{ textDecoration: todo.complete ? 'line-through' : '' }}>{todo.text}</div>
            {/* completed or not */}
            <button type='button' onClick = { ()  =>  complete(index)}> 
            {todo.complete ?  'Incomplete'  :  'Complete' } 
            </button>
            {/* remove to Do */}
            <button type='button' onClick={() => remove(index)}>
              &times;
            </button>

          </Fragment>  
        )}
      </section>
    </Fragment>
  )
}

const root = document.getElementById('app-root');

ReactDOM.render(<App /> , root);