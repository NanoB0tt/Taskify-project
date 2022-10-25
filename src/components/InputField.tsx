import { Dispatch, FormEvent, SetStateAction, useRef } from 'react';

import './styles.css';

interface Props {
  todo: string;
  setTodo: Dispatch<SetStateAction<string>>;
  handleAdd: (e: FormEvent<HTMLFormElement>) => void;
}


const InputField = ({ todo, setTodo, handleAdd }: Props) => {

  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <div>
      <form className="input" onSubmit={(e) => {
        handleAdd(e);
        inputRef.current?.blur();
      }}>
        <input
          ref={inputRef}
          type="input"
          placeholder="Enter a task"
          className="input-box"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
        />
        <button className="input-submit" type="submit">Go</button>
      </form>
    </div>
  )
};

export default InputField;
