import { Dispatch, SetStateAction } from "react";
import SingleTodo from "./SingleTodo";

import { Todo } from "../models";

import "./styles.css";

interface Props {
  todos: Todo[];
  setTodos: Dispatch<SetStateAction<Todo[]>>
}

const TodoList = ({ todos, setTodos }: Props) => {
  return (
    <div className="todos">
      {todos.map(todo => (
        <SingleTodo
          todo={todo}
          key={todo.id}
          todos={todos}
          setTodos={setTodos}
        />
      ))}

    </div>
  );

};

export default TodoList;
