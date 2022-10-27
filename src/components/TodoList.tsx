import { Dispatch, SetStateAction } from "react";
/* import SingleTodo from "./SingleTodo"; */

import { Todo } from "../models";

import "./styles.css";
import SingleTodoReducer from "./SingleTodoReducer";
import { Actions } from "../hooks/TodoReducer";

interface Props {
  todos: Todo[];
  dispatch: Dispatch<Actions>
}

const TodoList = ({ todos, dispatch }: Props) => {

  return (
    <div className="todos">
      {todos.map(todo => (
        <SingleTodoReducer
          todo={todo}
          key={todo.id}
          dispatch={dispatch}
        />
      ))}

    </div>
  );

};

export default TodoList;
