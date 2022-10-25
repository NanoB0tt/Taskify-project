import { Dispatch, FormEvent, SetStateAction, useEffect, useRef, useState } from "react";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import { MdDone } from "react-icons/md";
import { Todo } from "../models";

import "./styles.css";

interface Props {
  todo: Todo;
  todos: Todo[];
  setTodos: Dispatch<SetStateAction<Todo[]>>;
}

const SingleTodo = ({ todo, todos, setTodos }: Props) => {
  const [edit, setEdit] = useState<boolean>(false);
  const [editTodo, setEditTodo] = useState<string>(todo.todo);

  const handleEdit = (e: FormEvent<HTMLFormElement>, id: string) => {
    e.preventDefault();

    setTodos(todos.map(todo => (
      todo.id === id ?
        { ...todo, todo: editTodo } : todo
    )));
    setEdit(false);
  };

  const handleDelete = (id: string) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const handleDone = (id: string) => {
    setTodos(todos.map(todo => todo.id === id ?
      { ...todo, isDone: !todo.isDone } : todo
    ));
  };

  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, [edit]);

  return (
    <form className="todos-single" onSubmit={(e) => handleEdit(e, todo.id)}>
      {
        edit ? (
          <input value={editTodo} onChange={(e) => setEditTodo(e.target.value)} className="todos-single-text" ref={inputRef} />
        ) :
          todo.isDone ? (
            <s className="todos-single-text">{todo.todo}</s>

          ) : (
            <span className="todos-single-text">{todo.todo}</span>
          )
      }

      <div>
        <span className="icon" onClick={() => {
          if (!edit && !todo.isDone) setEdit(!edit);
        }}>
          <AiFillEdit />
        </span>
        <span className="icon" onClick={() => handleDelete(todo.id)}>
          <AiFillDelete />
        </span>
        <span className="icon" onClick={() => handleDone(todo.id)}>
          <MdDone />
        </span>
      </div>
    </form>
  );
};

export default SingleTodo;
