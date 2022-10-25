import { FormEvent, useState } from 'react';
import { nanoid } from 'nanoid';

import InputField from './components/InputField';
import TodoList from './components/TodoList';

import { Todo } from './models';
import './App.css';

const App = () => {

  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([]);

  const handleAdd = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (todo) {
      setTodos([
        ...todos, {
          id: nanoid(),
          todo,
          isDone: false
        }
      ]);
      setTodo('');
    }
  };

  return (
    <div className="App">
      <span className="heading">Taskify</span>
      <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
      <TodoList todos={todos} setTodos={setTodos} />
    </div>
  )
};

export default App
