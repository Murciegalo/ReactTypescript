//import logo from './logo.svg';
//import './App.css';
import React , {useState} from 'react';
import { string } from 'prop-types';

function App() : JSX.Element {
  //Submit
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    //stock input
    addToDo(value);
    // Clean UI
    setValue('');
  }
  //Interface for my to do Values
  interface ITodos{
    text: string,
    complete: boolean
  }
  
  //UseState HOOK for input values
  const [value, setValue] = useState<string>('');

  // HOOK for to do values + Interface to settle to Dos Format
  const [todos , setTodos] = useState<ITodos[]>([]);
  // ADD TODOS
  const addToDo = (text:string): void => {
    const nueTodos: ITodos[] = [...todos , {text , complete:false}];
    setTodos(nueTodos); //push
  }
  //COMPLETED TODOS
  const completeTodo = (index:number): void =>{
    //get me todos
    const nueTodos: ITodos[] = [...todos];
    nueTodos[index].complete = !nueTodos[index].complete; 
    setTodos(nueTodos); 
  }
  //REMOVE TODOS
  const removeTodo = (ind:number):void =>{
    //get all
    const allTodos: ITodos[] = [...todos];
    //remove selected one
    allTodos.splice(ind , 1);
    // stock back the rest
    setTodos(allTodos);
  }
  return (
    <div className="App">
      <header className="App-header">
        <h1>To Do's App in Typescript/React</h1>
      </header>
      <React.Fragment>
        {/* Get input value on Submit */}
        <form onSubmit={handleSubmit}>
          <input type="text" value ={value} onChange={ e => setValue(e.target.value)} required/>
          <button type="submit">+</button>
        </form>
        <section> {/*ToDos Display */}
          {todos.map((todo: ITodos, index: number) => (
            <React.Fragment key={index}>
              <div className="todos">
                {/* tachar if completed */}
                <span className="elem1" style={{ textDecoration: todo.complete ? 'line-through' : '' }}>
                  {todo.text}
                </span>
                {/* completed task */}
                <button className="elem2" type='button' onClick={() => completeTodo(index)}>
                  {todo.complete ? 
                    <i className="fa fa-undo" aria-hidden="true"></i> : 
                    <i className="fa fa-check" aria-hidden="true"></i>
                  }
                </button>
                {/* remove task */}
                <button className="elem3" type='button' onClick={() => removeTodo(index)}>
                  <i className="fa fa-ban" aria-hidden="true"></i>
                </button>
              </div>
            </React.Fragment>
          ))}
        </section>
      </React.Fragment>
    </div>
  );
}

export default App;
