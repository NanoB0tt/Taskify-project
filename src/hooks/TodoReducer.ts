import { Todo } from "../models";

export type Actions =
  | { type: 'add'; payload: Todo; }
  | { type: 'delete'; payload: { id: string; }; }
  | { type: 'editTodo'; payload: { id: string; editTodo: string; edit: boolean }; }
  | { type: 'done'; payload: { id: string; }; }
  | { type: 'edit'; payload: { id: string; }; }


export const TodoReducer = (state: Todo[], { type, payload }: Actions) => {
  switch (type) {
    case 'add':
      return [
        ...state,
        payload
      ];
    case 'delete':
      return state.filter(todo => todo.id !== payload.id);
    case 'editTodo':
      return state.map(todo => (
        todo.id === payload.id ?
          { ...todo, todo: payload.editTodo, edit: payload.edit } : todo
      ));
    case 'done':
      return state.map(todo => todo.id === payload.id ?
        { ...todo, isDone: !todo.isDone } : todo
      );
    case 'edit':
      return state.map(todo => todo.id === payload.id ?
        { ...todo, edit: !todo.edit } : todo);

  }
};

