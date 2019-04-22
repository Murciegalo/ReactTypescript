import React, { Fragment , useState } from 'react';
import { string } from 'prop-types';


export default function App() : JSX.Element {
  
  //1. on Submit
  //hook useState
  const [value, setValue] = useState<string>('');

  //1.1 Alias type FormElem = React.FormEvent<HTMLFormElement>;
  const handleSub = (e: React.FormEvent<HTMLFormElement>) : void => {
    e.preventDefault();
    addTodo(value)
    setValue('')
  }
  
  //2. ToDOs Adder
  //Todos
  interface ITodo {
    text: string
    complete: boolean
  }
  //hook useState
  const [todos, setTodos] = useState<ITodo[]>([])

  const addTodo = (text:string) :void => {
    const nueTodos: ITodo[] = [...todos , {text, complete: false}]
    setTodos(nueTodos); 
  }
  
  //3. Complete/uncomplete todos
  const completedTodos = (index : number) :void =>{
    //get todos
    const newTodos: ITodo[] = [...todos]; 
    //check
    newTodos[index].complete = !newTodos[index].complete ;
    setTodos(newTodos);
  }

  //4. Delete todos
  const deleteTodos = (index : number) :void => {
    //get todos
    const newTodos: ITodo[] = [... todos];
    //remove
    newTodos.splice(index, 1);
    setTodos(newTodos);
  }
  return (
    <Fragment>
      <h1>Todo List</h1>

      {/* FORM */}
      <form onSubmit={handleSub}>
        <input type='text' value={value} onChange={ e => setValue(e.target.value)} required/>
        <button type='submit'>Add Todos</button>
      </form>

      {/* TO DOS  */}
      <section> {/*ToDos Displayer */}
        {todos.map((todo: ITodo , index: number) => (
          <Fragment key={index}>
            <div className="todos">
              <span style={{ textDecoration: todo.complete ? 'line-through' : ''}}>
                {todo.text}
              </span>
              <button type='button' onClick={ () => completedTodos(index)}>
                {todo.complete ? 'Incomplete' : 'Complete'}
              </button>
              <button type='button' onClick={ () => deleteTodos(index)}>X</button>
            </div>
          </Fragment>
        ))}
      </section>
    </Fragment>
  )
}


