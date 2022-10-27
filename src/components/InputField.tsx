import { Dispatch, FormEvent, SetStateAction, useRef } from 'react';

import './styles.css';

interface Props {
  input: string;
  setInput: Dispatch<SetStateAction<string>>;
  handleAdd: (e: FormEvent<HTMLFormElement>) => void;
}


const InputField = ({ input, setInput, handleAdd }: Props) => {

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
