
import "./styles.css";
import SingleTodoReducer from "./SingleTodoReducer";
import { useReduce } from "../hooks/TodoContext";

const TodoList = () => {

  const { todos, dispatch } = useReduce();

  return (
    <div className="todos">
      {todos.map(todo => (
        <SingleTodoReducer
          todo={todo}
          key={todo.id}
        />
      ))}

    </div>
  );

};

export default TodoList;
