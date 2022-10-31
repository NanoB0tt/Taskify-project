import { createContext, Dispatch, SetStateAction, useContext, useReducer, useState } from "react";
import { Todo } from "../models";
import { Actions, TodoReducer } from "./TodoReducer";

type InputContext = {
  input: string;
  setInput: Dispatch<SetStateAction<string>>;
}

type ReduceContext = {
  todos: Todo[];
  dispatch: Dispatch<Actions>;
}

const TodoInputContext = createContext({} as InputContext);

const TodoReduceContext = createContext({} as ReduceContext);

const TodoContext = ({ children }: { children: JSX.Element[] }) => {
  const [input, setInput] = useState<string>("");
  const [todos, dispatch] = useReducer(TodoReducer, [])

  return (
    <TodoInputContext.Provider value={{ input, setInput }}>
      <TodoReduceContext.Provider value={{ todos, dispatch }} >
        {children}
      </TodoReduceContext.Provider>
    </TodoInputContext.Provider>
  );
};

export const useInput = () => {
  return useContext(TodoInputContext);
}

export const useReduce = () => {
  return useContext(TodoReduceContext);
}

export default TodoContext;
