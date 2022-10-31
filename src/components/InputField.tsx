import { nanoid } from 'nanoid';
import { FormEvent, useRef } from 'react';
import { useInput, useReduce } from '../hooks/TodoContext';
import './styles.css';

const InputField = () => {

  const { input, setInput } = useInput();
  const { dispatch } = useReduce()

  const handleAdd = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    dispatch({
      type: 'add',
      payload: {
        id: nanoid(),
        todo: input,
        isDone: false,
        edit: false
      }
    });
  };

  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <div>
      <form className="input" onSubmit={(e) => {
        handleAdd(e);
        inputRef.current?.blur();
        setInput('');
      }}>
        <input
          ref={inputRef}
          type="input"
          placeholder="Enter a task"
          className="input-box"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button className="input-submit" type="submit">Go</button>
      </form>
    </div>
  )
};

export default InputField;
