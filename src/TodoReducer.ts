import { Todo } from "./models";

interface Props {
  type: 'delete' | 'edit';
  payload: {
    id: string;
    editTodo?: string;
  };
};

export const TodoReducer = (state: Todo[], { type, payload }: Props) => {
  const todoActions = {
    'delete': () => {
      return state.filter(todo => todo.id !== payload.id);
    },
    'edit': () => {
      return state.map(todo => (
        todo.id === payload.id ?
          { ...todo, todo: payload.editTodo } : todo
      ));
    },
  };

  return todoActions[type]();
};

