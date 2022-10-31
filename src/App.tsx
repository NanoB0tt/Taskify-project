import { FormEvent, useReducer, useState } from 'react';

import InputField from './components/InputField';
import TodoList from './components/TodoList';

import './App.css';
import { TodoReducer } from './hooks/TodoReducer';
import { nanoid } from 'nanoid';

const App = () => {

  const [input, setInput] = useState<string>("");
  const [todos, dispatch] = useReducer(TodoReducer, [])

  const handleAdd = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    dispatch({
      type: 'add',
      payload: {
        id: nanoid(),
        todo: input,
        isDone: false,
        edit: false
      }
    });
  };


  return (
    <div className="App">
      <span className="heading">Taskify</span>
      <InputField input={input} setInput={setInput} handleAdd={handleAdd} />
      <TodoList todos={todos} dispatch={dispatch} />
    </div>
  )
};

export default App
