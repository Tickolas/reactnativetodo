import {
  ADD_TODO,
  REMOVE_TODO,
  MARK_TODO_AS_DONE,
  MARK_TODO_AS_NEW
} from "../actions/actions";
import { DONE, NEW } from "../constants/todoStatus";

const initialState = {
  idCounter: 0,
  todos: []
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      let id = state.idCounter + 1;
      return {
        ...state,
        idCounter: id,
        todos: [...state.todos, { id, text: action.payload, status: NEW }]
      };
    case REMOVE_TODO:
      return {
        ...state,
        todos: state.todos.filter(todo => todo.id !== action.payload)
      };
    case MARK_TODO_AS_DONE: {
      return {
        ...state,
        todos: state.todos.map(todo =>
          todo.id === action.payload ? { ...todo, status: DONE } : todo
        )
      };
    }
    case MARK_TODO_AS_NEW: {
      return {
        ...state,
        todos: state.todos.map(todo =>
          todo.id === action.payload ? { ...todo, status: NEW } : todo
        )
      };
    }
    default:
      return state;
  }
};

export default rootReducer;
