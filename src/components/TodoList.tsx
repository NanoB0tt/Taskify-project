
import "./styles.css";
import { useReduce } from "../hooks/TodoContext";
import SingleTodo from "./SingleTodo";
import { Actions } from "../hooks/TodoReducer";

const TodoList = () => {

  const { todos, dispatch } = useReduce();

  return (
    <div className="todos">
      {todos.map(todo => (
        <SingleTodo
          todo={todo}
          key={todo.id}
        />
      ))}

    </div>
  );

};

export default TodoList;
