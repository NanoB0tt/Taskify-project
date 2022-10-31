import "./styles.css";
import { useReduce } from "../hooks/TodoContext";
import SingleTodo from "./SingleTodo";

const TodoList = () => {

  const { todos } = useReduce();

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
