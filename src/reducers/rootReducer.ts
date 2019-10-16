import { ADD_TODO, REMOVE_TODO } from "../actions/actions";

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
        todos: [...state.todos, { id: id, text: action.payload }]
      };
    case REMOVE_TODO:
      return {
        ...state,
        todos: state.todos.filter(todo => todo.id !== action.payload)
      };
    default:
      return state;
  }
};

export default rootReducer;
