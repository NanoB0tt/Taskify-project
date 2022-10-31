import { FormEvent, useEffect, useRef, useState } from "react";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import { MdDone } from "react-icons/md";
import { useReduce } from "../hooks/TodoContext";
import { Todo } from "../models";

import "./styles.css";

interface Props {
  todo: Todo;
}


const SingleTodoReducer = ({ todo }: Props) => {
  const [editTodo, setEditTodo] = useState<string>(todo.todo);
  const { dispatch } = useReduce();

  const setEdit = (id: string) => {
    dispatch({
      type: 'edit',
      payload: {
        id
      }
    })
  };

  const handleEditTodo = (e: FormEvent<HTMLFormElement>, id: string) => {
    e.preventDefault();

    dispatch({
      type: 'editTodo',
      payload: {
        id,
        editTodo,
        edit: false
      }
    });

  };

  const handleDelete = (id: string) => {
    dispatch({
      type: 'delete',
      payload: {
        id,
      },
    });
  };

  const handleDone = (id: string) => {
    dispatch({
      type: 'done',
      payload: {
        id
      }
    });
  };

  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, [todo.edit]);

  return (
    <form className="todos-single" onSubmit={(e) => handleEditTodo(e, todo.id)}>
      {
        todo.edit ? (
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
          if (!todo.edit && !todo.isDone) setEdit(todo.id);
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

export default SingleTodoReducer;
