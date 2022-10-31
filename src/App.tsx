import InputField from './components/InputField';
import TodoList from './components/TodoList';

import './App.css';
import TodoContext from './hooks/TodoContext';

const App = () => {

  return (
    <div className="App">
      <TodoContext>
        <span className="heading">Taskify</span>
        <InputField />
        <TodoList />
      </TodoContext>
    </div>
  )
};

export default App
